import express from 'express';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

// Validate required environment variables
if (!process.env.EMAIL_PASSWORD) {
  console.error('Missing required environment variable: EMAIL_PASSWORD');
  process.exit(1);
}

const app = express();
const PORT = process.env.PORT || 3002;

// Middleware
app.use(cors({
  origin: ['https://bumbuli.netlify.app', 'http://localhost:5173'],
  methods: ['GET', 'POST'],
  credentials: true
}));
app.use(bodyParser.json());

// Log all requests
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  if (req.body) console.log('Request body:', req.body);
  next();
});

// Simple rate limiting
const rateLimit = new Map();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 5; // 5 requests per minute

function rateLimiter(req, res, next) {
  const ip = req.ip;
  const now = Date.now();
  
  if (rateLimit.has(ip)) {
    const { count, timestamp } = rateLimit.get(ip);
    
    if (now - timestamp > RATE_LIMIT_WINDOW) {
      rateLimit.set(ip, { count: 1, timestamp: now });
    } else if (count >= MAX_REQUESTS) {
      return res.status(429).json({ error: 'Too many requests. Please try again later.' });
    } else {
      rateLimit.set(ip, { count: count + 1, timestamp });
    }
  } else {
    rateLimit.set(ip, { count: 1, timestamp: now });
  }
  
  next();
}

// Input validation middleware
function validateContactInput(req, res, next) {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required' });
  }

  if (typeof name !== 'string' || name.length < 2 || name.length > 100) {
    return res.status(400).json({ error: 'Name must be between 2 and 100 characters' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }

  if (typeof message !== 'string' || message.length < 10 || message.length > 1000) {
    return res.status(400).json({ error: 'Message must be between 10 and 1000 characters' });
  }

  next();
}

// Configure nodemailer with Gmail SMTP
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'issa.ngalawa01@gmail.com',
    pass: process.env.EMAIL_PASSWORD
  }
});

// Health check endpoint
app.get('/api/test', (req, res) => {
  res.json({ status: 'ok' });
});

// Root endpoint
app.get('/', (req, res) => {
  res.json({ 
    message: 'Bumbuli API is running',
    time: new Date().toISOString(),
    endpoints: {
      contact: '/api/contact',
      healthCheck: '/api/test'
    }
  });
});

// Contact form endpoint
app.post('/api/contact', rateLimiter, validateContactInput, async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const isNewsletter = name === 'Newsletter Subscriber';

    // Prepare admin notification email
    const adminMailOptions = {
      from: 'Bumbuli Website <issa.ngalawa01@gmail.com>',
      to: 'ngalawaissa@gmail.com>',
      subject: isNewsletter ? 'New Newsletter Subscription' : `New Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 5px;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            ${isNewsletter ? 'New Newsletter Subscription' : 'New Contact Form Submission'}
          </h2>
          <div style="margin: 20px 0;">
            <p style="margin: 10px 0; color: black;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 10px 0; color: black;"><strong>Email:</strong> ${email}</p>
            <div style="margin: 20px 0; padding: 15px; background-color: #fff; border-left: 4px solid #007bff; border-radius: 3px;"
            <p style="color: #3C3D37;">${message}</p>
            </div>
            <p style="margin: 10px 0;"><strong>Type:</strong> ${isNewsletter ? 'Newsletter Subscription' : 'Contact Form'}</p>
            <p style="margin: 10px 0;"><strong>Time:</strong> ${new Date().toISOString()}</p>
          </div>
        </div>
      `,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
        Type: ${isNewsletter ? 'Newsletter Subscription' : 'Contact Form'}
        Time: ${new Date().toISOString()}
      `
    };

    // Prepare auto-reply email
    const autoReplyMailOptions = {
      from: 'Bumbuli Website <issa.ngalawa01@gmail.com>',
      to: email,
      subject: isNewsletter ? 'Welcome to Our Newsletter!' : 'Thank You for Contacting Us',
      html: isNewsletter ? `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 5px;">
          <h2 style="color: #007bff; text-align: center; margin-bottom: 20px;">Welcome to Our Newsletter!</h2>
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px;">
            <p style="font-size: 16px; line-height: 1.6; color: #333;">Dear Subscriber,</p>
            <p style="font-size: 16px; line-height: 1.6; color: #333;">
              Thank you for subscribing to our newsletter! You'll now receive updates about our latest news, products, and special offers.
            </p>
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd;">
              <p style="color: #666;">Best regards,<br>The Team</p>
            </div>
          </div>
        </div>
      ` : `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 5px;">
          <h2 style="color: #007bff; text-align: center; margin-bottom: 20px;">Thank You for Contacting Us</h2>
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px;">
            <p style="font-size: 16px; line-height: 1.6; color: #333;">Dear ${name},</p>
            <p style="font-size: 16px; line-height: 1.6; color: #333;">
              Thank you for reaching out to us. We have received your message and will get back to you as soon as possible.
            </p>
            <div style="margin: 20px 0; padding: 15px; background-color: #fff; border-left: 4px solid #007bff; border-radius: 3px;">
              <h3 style="color: #555; margin-bottom: 10px;">Here is a copy of your message:</h3>
              <p style="color: #666; white-space: pre-line;">${message}</p>
            </div>
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd;">
              <p style="color: #666;">Best regards,<br>The Team</p>
            </div>
          </div>
        </div>
      `,
      text: isNewsletter ?
        `Dear Subscriber,\n\nThank you for subscribing to our newsletter! You'll now receive updates about our latest news, products, and special offers.\n\nBest regards,\nThe Team` :
        `Dear ${name},\n\nThank you for reaching out to us. We have received your message and will get back to you as soon as possible.\n\nHere is a copy of your message:\n${message}\n\nBest regards,\nThe Team`
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(autoReplyMailOptions)
    ]);

    // Send success response
    res.status(200).json({
      success: true,
      message: isNewsletter ? 'Newsletter subscription successful' : 'Message sent successfully'
    });

  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to send message'
    });
  }
});

// Start server with error handling
const server = app.listen(PORT, '0.0.0.0', (error) => {
  if (error) {
    console.error('Error starting server:', error);
    process.exit(1);
  }
  
  console.log(`Server running on port ${PORT}`);
  
  // Verify email configuration
  transporter.verify((error, success) => {
    if (error) {
      console.error('Email configuration error:', error);
    } else {
      console.log('Email server is ready to send messages');
    }
  });
});

// Handle server errors
server.on('error', (error) => {
  console.error('Server error:', error);
  if (error.code === 'EADDRINUSE') {
    console.error(`Port ${PORT} is already in use`);
    process.exit(1);
  }
});