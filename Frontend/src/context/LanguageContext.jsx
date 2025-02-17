import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const translations = {
  en: {
    // Navigation
    home: "Home",
    about: "About",
    gallery: "Gallery",
    news: "News",
    contact: "Contact",
    culture: "Culture",
    connectWithUs: "Connect With Us",

    //Footer
    aboutBumbuliCont: "Located in the Lushoto District of Tanzania, Bumbuli is a vibrant constituency known for its agricultural heritage, beautiful landscapes, and rich cultural traditions.",
    quickLinks: "Quick Links",
    contactInfo: "Contact Info",
    newsLetter: "Newsletter",
    subscribe: "Subscribe",
    subscribeSuccess: "Thank you for subscribing!",
    subscribeError: "Something went wrong. Please try again.",
    copyright: "2025 Bumbuli Constituency. All rights reserved",
    userName: "Subscriber",
    subMessage: "New newsletter subscription request from:",

    // Home Page
    welcome: "Our Bumbuli",
    welcomeDesc: "Discover the beauty of our constituency in the heart of the Usambara Mountains, where tradition meets progress in the Lushoto District of Tanzania.",
    exploreBumbuli: "Explore Bumbuli",
    
    // Features
    beautifulLandscapes: "Beautiful Landscapes",
    landscapesDesc: "Experience the breathtaking views of the Usambara Mountains and our pristine natural environment.",
    agriculturalHeritage: "Agricultural Heritage",
    agricultureDesc: "Known for our rich agricultural traditions, producing high-quality tea, vegetables, and fruits.",
    vibrantCommunity: "Vibrant Community",
    communityDesc: "Join our warm and welcoming community, rich in Wasambaa culture and traditions.",

    // About Section
    aboutBumbuli: "About Bumbuli",
    thrivingConstituency: "A Thriving Constituency in Lushoto District",
    aboutDesc: "Bumbuli is a dynamic constituency located in the Lushoto District of Tanzania's Tanga Region. Nestled in the Western Usambara Mountains, we are known for our agricultural excellence, rich cultural heritage, and commitment to sustainable development.",
    farmers: "Farmers",
    villages: "Villages",
    teaFactories: "Tea Factories",
    learnMore: "Learn More",

    // Development Initiatives
    developmentInitiatives: "Development Initiatives",
    supportingCommunity: "Supporting our community's growth and prosperity",
    agriculturalDev: "Agricultural Development",
    agriculturalDevDesc: "Supporting local farmers with modern agricultural practices and equipment to enhance tea and vegetable production.",
    educationInitiative: "Education Initiative",
    educationDesc: "Improving educational facilities and resources across schools in the Bumbuli constituency.",
    infrastructureDev: "Infrastructure Development",
    infrastructureDesc: "Enhancing road networks and public facilities to improve connectivity and living standards.",
    progress: "Progress",
    target: "Target",

    // CTA Section
    visitBumbuli: "Visit Bumbuli Today",
    visitDesc: "Experience the natural beauty, rich culture, and warm hospitality of our community in the Usambara Mountains.",
    viewGallery: "View Gallery",

    // Gallery Page
    ourGallery: "Our Gallery",
    communitySupport: "Community Support",
    communityDesc: "Volunteers helping local communities",
    educationInitiativeTitle: "Education Initiative",
    educationInitiativeDesc: "Providing education resources",
    cleanWaterProject: "Clean Water Project",
    cleanWaterDesc: "Ensuring access to clean water",

    // News Page
    latestNews: "Latest News",
    readMore: "Read More",
    newCommunityCenter: "New Community Center Opening",
    communityDesc: "We are excited to announce the opening of our new community center...",
    charityDrive: "Annual Charity Drive Results",
    charityDesc: "We are thrilled to announce the incredible success of our annual...",
    volunteerProgram: "Volunteer Recognition Program",
    volunteerDesc: "Today we launched our new Volunteer Recognition Program to celebrate...",
    announcements: "Announcements",
    events: "Events",
    community: "Community",
    announcementscont: "We are excited to announce the opening of our new community center in Bumbuli. This state-of-the-art facility will serve as a hub for community activities, educational programs, and social gatherings. The center features multiple meeting rooms, a computer lab, and a large multipurpose hall. This project has been made possible through the generous support of our community members and partners. We look forward to seeing this space bring our community closer together and provide valuable resources for all residents.We are excited to announce the opening of our new community center in Bumbuli. This state-of-the-art facility will serve as a hub for community activities, educational programs, and social gatherings. The center features multiple meeting rooms, a computer lab, and a large multipurpose hall. This project has been made possible through the generous support of our community members and partners. We look forward to seeing this space bring our community closer together and provide valuable resources for all residents.",
    eventscont: "We are thrilled to announce the incredible success of our annual charity drive. Through the overwhelming support of our community, we have raised over $100,000 for local initiatives. These funds will be distributed to various projects including educational scholarships, healthcare services, and infrastructure improvements. The success of this drive demonstrates the strong spirit of giving and unity in our community. We extend our heartfelt gratitude to all who contributed to this remarkable achievement.",
    communitycont: "Today we launched our new Volunteer Recognition Program to celebrate the outstanding contributions of our community volunteers. These dedicated individuals have given countless hours to various projects and initiatives that have significantly improved life in Bumbuli. The program includes monthly spotlight features, special appreciation events, and an annual awards ceremony. We believe it's crucial to acknowledge and celebrate those who selflessly give their time and energy to make our community a better place.",

    // Contact Page
    contactUs: "Contact Us",
    getInTouch: "Get in Touch",
    location: "Bumbuli Constituency Office, Lushoto District, Tanga Region, Tanzania",
    name: "Name",
    email: "Email",
    message: "Message",
    sendMessage: "Send Message",
    sending: "Sending...",
    placeholderEmail: "Type Your Email",
    placeholderName: "Type Your Name",
    placeholderMessage: "Type Your Message Here...",

    // Tradition Page
    ourTraditions: "Our Traditions",
    traditionsDesc: "Our traditions reflect our commitment to community service and social impact. These long-standing practices have helped shape our organization and its values.",
    annualGivingDay: "Annual Giving Day",
    givingDayDesc: "A day dedicated to community service and charitable giving.",
    youthLeadership: "Youth Leadership Program",
    youthDesc: "Empowering young leaders to make a difference in their communities.",
    communityFestivals: "Community Festivals",
    festivalsDesc: "Celebrating diversity and bringing communities together.",
    
    // reCAPTCHA messages
    recaptchaRequired: "Please complete the reCAPTCHA verification",
    messageSentSuccess: "Message sent successfully!",
    messageSentError: "Failed to send message. Please try again.",
  },
  sw: {
    // Navigation
    home: "Nyumbani",
    about: "Kuhusu",
    gallery: "Picha",
    news: "Habari",
    contact: "Wasiliana",
    culture: "Utamaduni",
    connectWithUs: "Wasiliana Nasi",

    //Footer
    aboutBumbuliCont: "Iko katika Wilaya ya Lushoto nchini Tanzania, Bumbuli ni jimbo lenye shughuli nyingi linalojulikana kwa urithi wake wa kilimo, mandhari nzuri, na mila tajiri za kitamaduni.",
    quickLinks: "Viungo vya Haraka",
    contactInfo: "Taarifa za Mawasiliano",
    newsLetter: "Jarida",
    subscribe: "Jiandikishe",
    placeholderEmail: "Weka barua pepe yako",
    subscribeSuccess: "Asante kwa kujisajili!",
    subscribeError: "Kuna hitilafu. Tafadhali jaribu tena.",
    copyright: "2025 Jimbo la Bumbuli. Haki zote zimehifadhiwa.",
    userName: "Msajili",
    subMessage: "Ombi jipya la usajili wa jarida kutoka:",

    // Home Page
    welcome: "Bumbuli Yetu",
    welcomeDesc: "Gundua uzuri wa jimbo letu katika moyo wa Milima ya Usambara, ambapo mapokeo yanakutana na maendeleo katika Wilaya ya Lushoto, Tanzania.",
    exploreBumbuli: "Chunguza Bumbuli",
    
    // Features
    beautifulLandscapes: "Mandhari Nzuri",
    landscapesDesc: "Pata uzoefu wa mandhari ya kupendeza ya Milima ya Usambara na mazingira yetu safi.",
    agriculturalHeritage: "Urithi wa Kilimo",
    agricultureDesc: "Tunajulikana kwa mapokeo yetu ya kilimo, kuzalisha chai, mboga na matunda bora.",
    vibrantCommunity: "Jamii Hai",
    communityDesc: "Jiunge na jamii yetu yenye ukarimu, tajiri kwa utamaduni wa Wasambaa.",

    // About Section
    aboutBumbuli: "Kuhusu Bumbuli",
    thrivingConstituency: "Jimbo Lenye Mafanikio katika Wilaya ya Lushoto",
    aboutDesc: "Bumbuli ni jimbo lenye nguvu lililopo katika Wilaya ya Lushoto, Mkoa wa Tanga, Tanzania. Likiwa katika Milima ya Usambara Magharibi, tunajulikana kwa ubora wetu wa kilimo, urithi wa kitamaduni, na kujitolea kwa maendeleo endelevu.",
    farmers: "Wakulima",
    villages: "Vijiji",
    teaFactories: "Viwanda vya Chai",
    learnMore: "Jifunze Zaidi",

    // Development Initiatives
    developmentInitiatives: "Mipango ya Maendeleo",
    supportingCommunity: "Kusaidia ukuaji na ustawi wa jamii yetu",
    agriculturalDev: "Maendeleo ya Kilimo",
    agriculturalDevDesc: "Kuwasaidia wakulima wa eneo hili kwa mbinu za kisasa za kilimo na vifaa vya kuboresha uzalishaji wa chai na mboga.",
    educationInitiative: "Mpango wa Elimu",
    educationDesc: "Kuboresha vifaa vya elimu na rasilimali katika shule za jimbo la Bumbuli.",
    infrastructureDev: "Maendeleo ya Miundombinu",
    infrastructureDesc: "Kuboresha mtandao wa barabara na huduma za umma ili kuboresha muunganiko na viwango vya maisha.",
    progress: "Maendeleo",
    target: "Lengo",

    // CTA Section
    visitBumbuli: "Tembelea Bumbuli Leo",
    visitDesc: "Pata uzoefu wa uzuri wa asili, utamaduni tajiri, na ukarimu wa jamii yetu katika Milima ya Usambara.",
    viewGallery: "Tazama Picha",

    // Gallery Page
    ourGallery: "Picha Zetu",
    communitySupport: "Msaada wa Jamii",
    communityDesc: "Kujitolea kusaidia jamii za karibu",
    educationInitiativeTitle: "Mpango wa Elimu",
    educationInitiativeDesc: "Kutoa rasilimali za elimu",
    cleanWaterProject: "Mradi wa Maji Safi",
    cleanWaterDesc: "Kuhakikisha upatikanaji wa maji safi",

    // News Page
    latestNews: "Habari za Hivi Karibuni",
    readMore: "Soma Zaidi",
    newCommunityCenter: "Ufunguzi wa Kituo Kipya cha Jamii",
    communityDesc: "Tunayo furaha kutangaza ufunguzi wa kituo chetu kipya cha jamii...",
    charityDrive: "Matokeo ya Kampeni ya Kila Mwaka ya Msaada",
    charityDesc: "Tunafurahi sana kutangaza mafanikio makubwa ya kampeni yetu ya kila mwaka...",
    volunteerProgram: "Programu ya Kutambua Watu wa Kujitolea",
    volunteerDesc: "Leo tumezindua Programu yetu mpya ya Kutambua Wanaojitolea ili kusherehekea...",
    announcements: "Matangazo",
    events: "Matukio",
    community: "Jamii",
    announcementscont: "Tunayo furaha kutangaza ufunguzi wa kituo chetu kipya cha jamii huko Bumbuli. Kituo hiki cha kisasa kitatumika kama kitovu cha shughuli za jamii, programu za elimu, na mikusanyiko ya kijamii. Kituo hiki kina vyumba vingi vya mikutano, maabara ya kompyuta, na ukumbi mkubwa wa kazi nyingi. Mradi huu umewezekana kupitia usaidizi wa ukarimu wa wanajamii na washirika wetu. Tunatazamia kuona nafasi hii ikileta jumuiya yetu karibu zaidi na kutoa rasilimali muhimu kwa wakazi wote. Tunayo furaha kutangaza kufunguliwa kwa kituo chetu kipya cha jumuiya huko Bumbuli. Kituo hiki cha kisasa kitatumika kama kitovu cha shughuli za jamii, programu za elimu, na mikusanyiko ya kijamii. Kituo hiki kina vyumba vingi vya mikutano, maabara ya kompyuta, na ukumbi mkubwa wa kazi nyingi. Mradi huu umewezekana kupitia usaidizi wa ukarimu wa wanajamii na washirika wetu. Tunatazamia kuona nafasi hii ikileta jumuiya yetu karibu zaidi na kutoa rasilimali muhimu kwa wakazi wote.",
    eventscont: "Tunafurahi sana kutangaza mafanikio makubwa ya kampeni yetu ya kila mwaka ya hisani. Kupitia usaidizi mkubwa wa jamii yetu, tumefanikiwa kukusanya zaidi ya $100,000 kwa ajili ya mipango ya hapa karibu. Fedha hizi zitatumika kwa miradi mbalimbali ikiwa ni pamoja na ufadhili wa masomo, huduma za afya, na uboreshaji wa miundombinu. Mafanikio ya kampeni hii yanaonyesha roho kubwa ya kutoa na umoja katika jamii yetu. Tunatoa shukrani zetu za dhati kwa wote waliochangia kufanikisha jambo hili la ajabu.",
    communitycont: "Leo tumezindua Programu yetu mpya ya Kutambua Wanaojitolea ili kusherehekea michango bora ya watoleaji wetu wa jamii. Watu hawa waliojitolea wametoa masaa mengi kwa miradi na mipango mbalimbali ambayo imeboresha maisha kwa kiasi kikubwa huko Bumbuli. Programu hii inajumuisha maonyesho ya kila mwezi, matukio maalum ya shukrani, na sherehe ya tuzo ya kila mwaka. Tunaamini kwamba ni muhimu kutambua na kusherehekea wale ambao kwa ukarimu hutoa muda wao na nguvu zao ili kuifanya jamii yetu kuwa mahali pazuiri.",

    // Contact Page
    contactUs: "Wasiliana Nasi",
    getInTouch: "Karibu Tuwasiliane",
    location: "Ofisi ya Jimbo la Bumbuli, Wilaya ya Lushoto, Mkoa wa Tanga, Tanzania",
    name: "Jina",
    email: "Barua pepe",
    message: "Ujumbe",
    sendMessage: "Tuma Ujumbe",
    sending: "Inatuma...",
    placeholderEmail: "Andika Barua Pepe",
    placeholderName: "Andika Jina Lako",
    placeholderMessage: "Andika Ujumbe Wako Hapa...",

    // Tradition Page
    ourTraditions: "Mila na Desturi Zetu",
    traditionsDesc: "Mila zetu zinaonyesha kujitolea kwetu kwa huduma za jamii na athari za kijamii. Desturi hizi za muda mrefu zimesaidia kuunda shirika letu na maadili yake.",
    annualGivingDay: "Siku ya Kila Mwaka ya Kutoa",
    givingDayDesc: "Siku iliyotengwa kwa ajili ya huduma za jamii na kutoa misaada.",
    youthLeadership: "Programu ya Uongozi wa Vijana",
    youthDesc: "Kuwezesha viongozi vijana kuleta mabadiliko katika jamii zao.",
    communityFestivals: "Sherehe za Jamii",
    festivalsDesc: "Kusherehekea utofauti na kuleta jamii pamoja.",
    
    // reCAPTCHA messages
    recaptchaRequired: "Tafadhali kamilisha uthibitisho wa reCAPTCHA",
    messageSentSuccess: "Ujumbe umetumwa kikamilifu!",
    messageSentError: "Imeshindwa kutuma ujumbe. Tafadhali jaribu tena.",
  }
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    // Get the saved language from localStorage or default to 'en'
    return localStorage.getItem('language') || 'en';
  });

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'sw' : 'en';
    setLanguage(newLanguage);
    // Save the language preference to localStorage
    localStorage.setItem('language', newLanguage);
  };

  // Update localStorage whenever language changes
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}