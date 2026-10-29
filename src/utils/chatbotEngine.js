/**
 * Intelligent Conversational Engine for Balaji Projects AI Assistant
 * Implements conversational reasoning, verified knowledge retrieval,
 * language adaptation (English & Tenglish/Telugu), and strict escalation policies.
 */

import {
  BALAJI_PROFILE,
  SERVICES,
  TECH_STACK,
  BUSINESS_POLICIES,
  TOP_PORTFOLIO_PROJECTS,
} from '../data/chatbotKnowledge.js';

const TELUGU_KEYWORDS = [
  'enti', 'yela', 'ela', 'cheptava', 'cheppu', 'cheyali', 'kavali', 'chesi',
  'unnava', 'unara', 'meeru', 'miru', 'namaskaram', 'babu', 'bro', 'chudu',
  'entha', 'kharchu', 'dhara', 'emina', 'chesthara', 'chesara', 'cheyagala'
];

function isTeluguOrTenglish(text) {
  if (!text) return false;
  const lower = text.toLowerCase();
  return TELUGU_KEYWORDS.some((kw) => lower.includes(kw));
}

export function generateChatResponse(userInput, history = []) {
  const query = (userInput || '').trim().toLowerCase();
  const teluguMode = isTeluguOrTenglish(query);

  // 1. Direct Contact / Talk to Balaji
  if (
    query.includes('talk to balaji') ||
    query.includes('contact balaji') ||
    query.includes('call balaji') ||
    query.includes('whatsapp') ||
    query.includes('phone') ||
    query.includes('reach balaji') ||
    query.includes('contact details')
  ) {
    return {
      text: teluguMode
        ? `మీరు నేరుగా బాలాజీతో ఫోన్ లేదా వాట్సాప్‌లో మాట్లాడవచ్చు! ఆయన వివరాలు ఇక్కడ ఉన్నాయి:`
        : `You can connect directly with Balaji Sarabu via Phone, WhatsApp, or Email:`,
      actionCard: {
        type: 'contact',
        name: BALAJI_PROFILE.founder,
        phone: BALAJI_PROFILE.phone,
        rawPhone: BALAJI_PROFILE.rawPhone,
        email: BALAJI_PROFILE.email,
        location: BALAJI_PROFILE.location,
        availability: BALAJI_PROFILE.availability,
      },
      followUpOptions: ['Build a new website', 'Build an e-commerce store', 'Build a SaaS application'],
    };
  }

  // 2. Strict Pricing / Cost Policy
  if (
    query.includes('price') ||
    query.includes('pricing') ||
    query.includes('cost') ||
    query.includes('rate') ||
    query.includes('budget') ||
    query.includes('charge') ||
    query.includes('fee') ||
    query.includes('entha') ||
    query.includes('kharchu') ||
    query.includes('dhara')
  ) {
    return {
      text: teluguMode
        ? `బాలాజీ ప్రాజెక్ట్స్‌లో ప్రతి ప్రాజెక్ట్ ధర దాని నిర్దిష్ట ఫీచర్లు, పేజీల సంఖ్య మరియు టెక్నాలజీ అవసరాలపై ఆధారపడి ఉంటుంది. మేము ముందుగానే ఫిక్స్‌డ్ ధర చెప్పము — మీ రిక్వైర్‌మెంట్స్ బట్టి కస్టమ్ కొటేషన్ అందిస్తాము.\n\nమీ ప్రాజెక్ట్ ఖచ్చితమైన అంచనా (custom quote) కోసం నేరుగా బాలాజీని సంప్రదించండి:`
        : `At Balaji Projects, all pricing is tailored specifically to your project's unique scope, custom features, and timeline requirements. We do not provide generic one-size-fits-all figures.\n\nFor a transparent, itemized quotation tailored to your business, please connect directly with Balaji:`,
      actionCard: {
        type: 'contact',
        name: BALAJI_PROFILE.founder,
        phone: BALAJI_PROFILE.phone,
        rawPhone: BALAJI_PROFILE.rawPhone,
        email: BALAJI_PROFILE.email,
        location: BALAJI_PROFILE.location,
        availability: 'Instant quote consultation available',
      },
      followUpOptions: ['Build a new website', 'Get a project estimate', 'Talk to Balaji'],
    };
  }

  // 3. Quick Action: "Build a new website"
  if (
    query.includes('build a new website') ||
    query.includes('new website') ||
    query.includes('business website') ||
    query.includes('company site')
  ) {
    return {
      text: teluguMode
        ? `బాలాజీ మోడ్రన్, హై-కన్వర్షన్ బిజినెస్ వెబ్‌సైట్‌లను డిజైన్ చేసి డెవలప్ చేస్తారు:\n\n• **స్పీడ్ & రెస్పాన్సివ్‌నెస్**: 1.2 సెకన్ల కంటే వేగంగా లోడ్ అవుతాయి (Google PageSpeed 95+).\n• **ఫీచర్స్**: కస్టమ్ UI, డార్క్/లైట్ మోడ్, మొబైల్ ఫ్రెండ్లీ, ఆన్-పేజ్ SEO, లీడ్ జనరేషన్ ఫారాలు.\n• **సాధారణ డెలివరీ సమయం**: 1 నుండి 2 వారాలు.\n\nమీ వ్యాపారం లేదా కంపెనీ గురించి క్లుప్తంగా చెప్పగలరా? మీకు సరిపోయే డిజైన్ ఆర్కిటెక్చర్ సలహా ఇస్తాను.`
        : `Balaji engineers high-performance, conversion-focused business websites tailored to your brand:\n\n• **Speed & Polish**: Ultra-responsive layout loading under 1.2s with dark/light theme support.\n• **Core Features**: On-page SEO, lead capture forms, WhatsApp quick pings, and analytics.\n• **Typical Timeline**: 1 to 2 weeks for standard business sites.\n\nWhat kind of business or service is this website for? Share a few details and I can suggest the ideal architecture!`,
      followUpOptions: ['Get a project estimate', 'Talk to Balaji', 'Build an e-commerce store'],
    };
  }

  // 4. Quick Action: "Get a project estimate"
  if (
    query.includes('get a project estimate') ||
    query.includes('estimate') ||
    query.includes('quotation') ||
    query.includes('how much time')
  ) {
    return {
      text: teluguMode
        ? `ప్రాజెక్ట్ ఎస్టిమేట్ పొందడానికి, బాలాజీ ఈ క్రింది 3 అంశాలను పరిగణనలోకి తీసుకుంటారు:\n\n1. **ప్రాజెక్ట్ రకం** (బిజినెస్ సైట్, ఈ-కామర్స్, లేదా SaaS వెబ్ యాప్)\n2. **కీలక ఫీచర్లు** (యూజర్ లాగిన్, పేమెంట్ గేట్‌వే, అడ్మిన్ డ్యాష్‌బోర్డ్, మొదలైనవి)\n3. **కావాల్సిన డెలివరీ సమయం** (అర్జెంట్ రష్ లేదా 2-4 వారాలు)\n\nమీరు మీ రిక్వైర్‌మెంట్స్ చెబితే లేదా బాలాజీతో నేరుగా మాట్లాడితే క్షణాల్లో స్పష్టమైన ఎస్టిమేషన్ అందుకోవచ్చు:`
        : `To formulate an accurate project estimate, Balaji evaluates:\n\n1. **Project Category** (Business site, E-commerce, or SaaS platform)\n2. **Core Capabilities** (Auth, payment gateways, admin portal, CRM, etc.)\n3. **Target Launch Date** (Rush <2 weeks, standard 2-4 weeks, or phased)\n\nYou can share your requirements here or reach out directly to Balaji for an instant discovery discussion:`,
      actionCard: {
        type: 'contact',
        name: BALAJI_PROFILE.founder,
        phone: BALAJI_PROFILE.phone,
        rawPhone: BALAJI_PROFILE.rawPhone,
        email: BALAJI_PROFILE.email,
        location: BALAJI_PROFILE.location,
        availability: 'Direct Scope Discussion',
      },
      followUpOptions: ['Build a new website', 'Build an e-commerce store', 'Talk to Balaji'],
    };
  }

  // 5. Quick Action: "Build an e-commerce store"
  if (
    query.includes('build an e-commerce store') ||
    query.includes('ecommerce') ||
    query.includes('online store') ||
    query.includes('shop') ||
    query.includes('shopping')
  ) {
    return {
      text: teluguMode
        ? `బాలాజీ పూర్తి స్థాయి D2C & రిటైల్ ఈ-కామర్స్ ప్లాట్‌ఫారమ్‌లను నిర్మిస్తారు:\n\n• **ప్రొడక్ట్ కేటలాగ్ & ఫిల్టర్లు**: వేగవంతమైన కేటగిరీ, బ్రాండ్ మరియు ప్రైస్ ఫిల్టరింగ్.\n• **షాపింగ్ కార్ట్ & పేమెంట్ గేట్‌వే**: Razorpay, Stripe, UPI & NetBanking మద్దతు.\n• **ఇన్‌స్టంట్ ఆర్డర్ అలర్ట్స్**: కొత్త ఆర్డర్ రాగానే అడ్మిన్ & కస్టమర్ కు WhatsApp/Email నోటిఫికేషన్లు.\n• **లైవ్ ఉదాహరణ**: **Nuzvid Agri Farms** (D2C ఆర్గానిక్ ఈ-కామర్స్ స్టోర్).\n\nమీ ఉత్పత్తులు (products) ఏమిటి? ఆన్‌లైన్ పేమెంట్స్ లేదా COD అవసరమా?`
        : `Balaji builds modern, scalable D2C and retail e-commerce storefronts:\n\n• **Catalog & Fast Filters**: Instant category, attribute, and price filtering.\n• **Cart & Secure Checkout**: Razorpay, Stripe, Credit Cards, UPI integration.\n• **Order Notifications**: Automated WhatsApp and Email order confirmations for buyers and admins.\n• **Live Benchmark**: **Nuzvid Agri Farms** (D2C organic farm-to-table storefront).\n\nWhat products are you selling, and what is your target launch timeline?`,
      projectRecommendation: TOP_PORTFOLIO_PROJECTS.find((p) => p.slug === 'nuzvid-agri-farms'),
      followUpOptions: ['Get a project estimate', 'Talk to Balaji', 'Build a SaaS application'],
    };
  }

  // 6. Quick Action: "Build a SaaS application"
  if (
    query.includes('build a saas application') ||
    query.includes('saas') ||
    query.includes('web application') ||
    query.includes('dashboard') ||
    query.includes('admin portal') ||
    query.includes('crm') ||
    query.includes('hrms')
  ) {
    return {
      text: teluguMode
        ? `బాలాజీ ఎండ్-టు-ఎండ్ ఫుల్-స్టాక్ SaaS అప్లికేషన్లు మరియు అడ్మిన్ డ్యాష్‌బోర్డ్‌లను ఇంజనీరింగ్ చేస్తారు:\n\n• **ఆర్కిటెక్చర్**: React / Vite ఫ్రంటెండ్ + Node.js / Express బ్యాకెండ్ + MongoDB / PostgreSQL.\n• **సెక్యూరిటీ & ఆథెంటికేషన్**: JWT / Role-Based Access Control (Admin, Staff, Customer).\n• **డ్యాష్‌బోర్డ్స్ & అనలిటిక్స్**: ఇంటరాక్టివ్ చార్ట్‌లు, రియల్-టైమ్ డేటా టేబుల్స్, CSV/PDF ఎక్స్‌పోర్ట్.\n• **లైవ్ పోర్ట్‌ఫోలియో ఉదాహరణలు**: **Dropyhub Enterprise Logistics Suite** మరియు **Enterprise HRMS Portal**.\n\nమీ SaaS ఐడియా గురించి మరింత చెప్పండి!`
        : `Balaji engineers end-to-end full-stack SaaS products and operations portals:\n\n• **Modern Architecture**: React/Vite frontend + Node.js/Express backend + MongoDB/PostgreSQL.\n• **Robust Authentication**: JWT, OAuth, and Role-Based Access Control (Admin, Team, Client).\n• **Interactive Dashboards**: Real-time KPI charts, multi-filter data tables, and export pipelines.\n• **Live Benchmarks**: **Dropyhub Logistics Suite** and **Enterprise HRMS Portal**.\n\nTell me about your SaaS concept, target user roles, and desired database structure!`,
      projectRecommendation: TOP_PORTFOLIO_PROJECTS.find((p) => p.slug === 'dropyhub-suite'),
      followUpOptions: ['Get a project estimate', 'Talk to Balaji', 'Redesign my website'],
    };
  }

  // 7. Quick Action: "Redesign my website"
  if (
    query.includes('redesign my website') ||
    query.includes('redesign') ||
    query.includes('slow') ||
    query.includes('speed') ||
    query.includes('audit')
  ) {
    return {
      text: teluguMode
        ? `మీ పాత లేదా నెమ్మదిగా ఉన్న వెబ్‌సైట్‌ను బాలాజీ అత్యాధునిక డిజైన్ తో పునర్నిర్మిస్తారు:\n\n• **డిజైన్ అప్‌గ్రేడ్**: ప్రీమియం డార్క్/లైట్ లుక్, స్మూత్ మైక్రో-ఇంటరాక్షన్లు.\n• **స్పీడ్ ఆప్టిమైజేషన్**: కోడ్ క్లీనప్ మరియు లైట్‌వెయిట్ అసెట్స్‌తో Google PageSpeed 95+ స్కోర్ సాధించడం.\n• **మొబైల్ రెస్పాన్సివ్‌నెస్**: అన్ని ఫోన్లు మరియు టాబ్లెట్లలో పర్ఫెక్ట్ లేఅవుట్.\n• **SEO ప్రొటెక్షన్**: పాత ర్యాంకింగ్స్ పోకుండా క్లీన్ రీడైరెక్ట్స్ మరియు స్కీమా సెటప్.\n\nమీ ప్రస్తుత వెబ్‌సైట్ URL లేదా పేరు షేర్ చేయండి, బాలాజీ చేత ఫ్రీ ఆడిట్ రివ్యూ చేయిద్దాం!`
        : `Balaji transforms outdated or sluggish websites into high-converting, lightning-fast digital assets:\n\n• **Visual Overhaul**: Sleek, modern interface tailored to your audience.\n• **Performance Engineering**: Google PageSpeed 95+ score with <1.2s load speeds.\n• **Mobile-First UX**: Flawless touch experience across smartphones and tablets.\n• **SEO Preservation**: Clean semantic structure preserving your existing indexation.\n\nShare your current website URL, and we can arrange a comprehensive speed & UX audit with Balaji!`,
      followUpOptions: ['Get a project estimate', 'Talk to Balaji', 'Build a new website'],
    };
  }

  // 8. Technologies / Tech Stack
  if (
    query.includes('tech stack') ||
    query.includes('technology') ||
    query.includes('react') ||
    query.includes('node') ||
    query.includes('database') ||
    query.includes('skills')
  ) {
    return {
      text: teluguMode
        ? `బాలాజీ ప్రాజెక్ట్స్‌లో ఉపయోగించే ప్రధాన టెక్నాలజీలు:\n\n• **Frontend**: React.js, Next.js, Vite, Tailwind CSS, JavaScript (ES6+), Three.js, HTML5.\n• **Backend**: Node.js, Express.js, RESTful APIs, Serverless Functions.\n• **Databases**: MongoDB, PostgreSQL, MySQL, Firebase.\n• **DevOps & Cloud**: Vercel, Git/GitHub, CI/CD, Cloudflare.\n• **Integrations**: Razorpay, Stripe, WhatsApp Business API, Nodemailer SMTP, Google Search Console.\n\nమీ ప్రాజెక్ట్ కి ఏదైనా నిర్దిష్ట టెక్ స్టాక్ అవసరమా?`
        : `Balaji specializes in a battle-tested modern web engineering stack:\n\n• **Frontend**: React.js, Next.js, Vite, Tailwind CSS, JavaScript (ES6+), Three.js, HTML5.\n• **Backend**: Node.js, Express.js, REST APIs, Serverless Functions.\n• **Databases**: MongoDB, PostgreSQL, MySQL, Firebase.\n• **Cloud & Deployment**: Vercel, Git/GitHub, CI/CD, Cloudflare.\n• **Integrations**: Razorpay, Stripe, WhatsApp Business API, Nodemailer SMTP, Google Search Console.\n\nDo you have a specific tech stack in mind for your upcoming build?`,
      followUpOptions: ['Build a new website', 'Build a SaaS application', 'Talk to Balaji'],
    };
  }

  // 9. Portfolio & Projects
  if (
    query.includes('portfolio') ||
    query.includes('projects') ||
    query.includes('work') ||
    query.includes('examples') ||
    query.includes('previous')
  ) {
    return {
      text: teluguMode
        ? `బాలాజీ ఇప్పటివరకు 28+ లైవ్ ప్రాజెక్ట్‌లను విజయవంతంగా డెలివరీ చేశారు. వీటిలో కొన్ని ప్రముఖ ప్రాజెక్ట్‌లు:\n\n1. **Nuzvid Agri Farms**: ఆర్గానిక్ D2C ఈ-కామర్స్ ప్లాట్‌ఫారమ్.\n2. **Dropyhub Enterprise**: డ్రాప్‌షిప్పింగ్ & ఇన్వెంటరీ లాజిస్టిక్స్ సూట్.\n3. **Enterprise HRMS Suite**: పేరోల్ & ఆటోమేటెడ్ అటెండెన్స్ పోర్టల్.\n4. **MediCare Portal**: క్లినికల్ షెడ్యూలింగ్ & పేషెంట్ రికార్డ్స్.\n5. **Fintech Crypto Hub**: రియల్-టైమ్ క్రిప్టో & అసెట్ అనలిటిక్స్.\n\nమీరు మా '/projects' పేజీలో పూర్తి ప్రాజెక్ట్ వివరాలు మరియు లైవ్ లింక్స్ చూడవచ్చు!`
        : `Balaji has successfully engineered and launched 28+ verified web projects across e-commerce, enterprise SaaS, and business websites:\n\n1. **Nuzvid Agri Farms**: D2C Farm-to-Table E-Commerce Platform.\n2. **Dropyhub Suite**: High-scale multi-vendor logistics & inventory portal.\n3. **Enterprise HRMS Suite**: Automated attendance, payroll & employee portal.\n4. **MediCare Portal**: Clinical appointment booking & patient records.\n5. **Fintech Crypto Hub**: Real-time portfolio tracking & analytics dashboard.\n\nYou can explore deep architectural dossiers for all 28+ projects on our '/projects' page!`,
      followUpOptions: ['Build a new website', 'Build an e-commerce store', 'Talk to Balaji'],
    };
  }

  // 10. General / Custom Query / Fallback (USER's Explicit Instruction: Answer if known; if uncertain or not found, connect with Balaji!)
  return {
    text: teluguMode
      ? `మీ ప్రశ్నకు సంబంధించి:\nబాలాజీ ప్రాజెక్ట్స్ ఆధునిక వెబ్ డెవలప్‌మెంట్, కస్టమ్ సాఫ్ట్‌వేర్ సొల్యూషన్స్ మరియు ఈ-కామర్స్ ప్లాట్‌ఫారమ్‌లలో నిపుణత కలిగి ఉంది.\n\nఈ నిర్దిష్ట అంశం లేదా కస్టమ్ అరేంజ్‌మెంట్ గురించి ఖచ్చితమైన సమాచారం కోసం, దయచేసి నేరుగా బాలాజీ సారబు గారిని సంప్రదించండి:`
      : `Regarding your query:\nBalaji Projects specializes in verified full-stack web engineering, custom software solutions, and high-performance digital products.\n\nFor this specific custom requirement or detailed technical consultation, please connect directly with Balaji Sarabu for exact confirmation:`,
    actionCard: {
      type: 'contact',
      name: BALAJI_PROFILE.founder,
      phone: BALAJI_PROFILE.phone,
      rawPhone: BALAJI_PROFILE.rawPhone,
      email: BALAJI_PROFILE.email,
      location: BALAJI_PROFILE.location,
      availability: BALAJI_PROFILE.availability,
    },
    followUpOptions: ['Build a new website', 'Get a project estimate', 'Talk to Balaji'],
  };
}
