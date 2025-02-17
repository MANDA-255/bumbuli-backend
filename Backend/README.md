# Bumbuli Backend Server

This is the backend server for the Bumbuli charity website. It handles contact form submissions and email notifications.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file:
Copy the `.env.example` file to `.env` and fill in your email credentials:
```bash
cp .env.example .env
```

3. Configure Gmail:
- Enable 2-factor authentication in your Gmail account
- Generate an App Password for the application
- Use the generated password in your `.env` file

## Running the Server

Development mode:
```bash
npm run dev
```

Production mode:
```bash
npm start
```

## API Endpoints

- `GET /api/health` - Health check endpoint
- `POST /api/contact` - Contact form submission endpoint

## Rate Limiting

The API implements rate limiting:
- 5 requests per minute per IP
- Requests exceeding this limit will receive a 429 status code

## Environment Variables

- `PORT` - Server port (default: 3001)
- `NODE_ENV` - Environment (development/production)
- `EMAIL_USER` - Gmail address
- `EMAIL_PASSWORD` - Gmail app-specific password
