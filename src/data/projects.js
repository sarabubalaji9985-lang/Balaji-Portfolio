/**
 * Central Project Portfolio Data
 * Editable repository of real projects, verified contributions, and case studies.
 * Total Verified Live Projects: 27
 */

export const PROJECT_CATEGORIES = [
  "All Projects",
  "Full Stack",
  "SaaS Products",
  "E-commerce",
  "Business Websites",
  "Finance",
  "Dashboards",
];

export const projects = [
  {
    "id": "nuzvid-agri-farms",
    "slug": "nuzvid-agri-farms",
    "title": "Nuzvid Agri Farms",
    "subtitle": "Organic Farm-to-Table D2C E-Commerce & Logistics Platform",
    "category": "E-commerce",
    "additionalCategories": [
      "E-commerce",
      "Full Stack",
      "Business Websites"
    ],
    "featured": true,
    "status": "Production / Live",
    "client": "Nuzvid Agri Farms Private Limited",
    "year": "2024 - 2025",
    "role": "Full Stack Web Developer & E-Commerce Architect",
    "summary": "A modern, high-performance direct-to-consumer (D2C) e-commerce platform delivering traditional wood-pressed oils, pure A2 Bilona cow ghee, stone-ground flours, chemical-free organic jaggery, and forest honey straight from Nuzvid farms to households across India.",
    "heroImage": "/projects/nuzvid-agri-farms-screenshot.jpg",
    "gallery": [
      {
        "url": "/projects/nuzvid-agri-farms-screenshot.jpg",
        "caption": "Nuzvid Agri Farms official homepage featuring farm-fresh organic grocery catalog and cold-pressed oils."
      }
    ],
    "technologies": [
      "React 19",
      "Next.js",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Razorpay Payment Gateway",
      "Tailwind CSS",
      "WhatsApp Business API",
      "Vercel"
    ],
    "metrics": [
      {
        "label": "Page Speed",
        "value": "< 1.2s"
      },
      {
        "label": "Fulfillment",
        "value": "Pan-India Shipping"
      },
      {
        "label": "Mobile Traffic",
        "value": "92%+ Responsive"
      }
    ],
    "overview": "Nuzvid Agri Farms is an Indian agricultural enterprise committed to reviving ancient, unadulterated nutritional practices. The web platform bridges rural farm production in Nuzvid (Eluru/Krishna district, Andhra Pradesh) with urban health-conscious consumers nationwide through an intuitive, mobile-first storefront featuring weight-variant product selections, instant checkout, and real-time pincode delivery validation.",
    "problem": "Traditional agricultural producers struggle to scale direct farm-to-consumer sales due to clunky marketplace commissions, opaque delivery tracking, slow page speeds on mobile networks, and confusing variant options (bottles vs tins vs jars) that cause high checkout drop-offs.",
    "objectives": [
      "Engineer an appetizing, clean, and trustworthy D2C e-commerce storefront showcasing cold-pressed extraction processes, lab certifications, and authentic product origins.",
      "Implement flexible product variant selections (500ml, 1L, 5L cans for wood-pressed sesame/groundnut/mustard oils; 250g, 500g, 1kg glass jars for A2 Desi cow & buffalo ghee).",
      "Integrate seamless Razorpay payment gateway handling UPI (Google Pay, PhonePe, Paytm), NetBanking, and credit/debit cards with instant webhook verification.",
      "Construct automated WhatsApp dispatch and SMS order routing for farm fulfillment workers in Nuzvid."
    ],
    "responsibilities": [
      "Architected and built the full-stack e-commerce architecture from component-driven UI to backend order persistence.",
      "Implemented persistent cart state with local storage hydration and custom quantity/weight tier pricing calculators.",
      "Designed PostgreSQL relational schemas connecting customers, product variant SKUs, delivery pincode zones, and transactions.",
      "Configured webhook handlers for Razorpay payment capture, preventing ghost orders and cart abandonment discrepancies.",
      "Optimized asset loading through modern WebP image compression, achieving sub-1.2 second load times on mobile 4G/5G connections."
    ],
    "implementationDetails": [
      "Engineered dynamic variant state switcher allowing users to toggle between volume and pack sizes with instantaneous pricing recalculation.",
      "Integrated Pan-India delivery pincode validation algorithm checking serviceable zones and estimating transit timelines.",
      "Built asynchronous WhatsApp order dispatch hooks that format customer items into structured messages for rural warehouse staff.",
      "Developed modern SEO schema markup (Product, Offer, AggregateRating, BreadcrumbList) for organic Google ranking on regional agricultural queries."
    ],
    "challenges": [
      {
        "challenge": "Preventing payment drop-offs on mobile devices with unstable cellular data in semi-urban areas.",
        "solution": "Integrated a lightweight checkout flow with auto-retry payment webhooks and persistent cart sessions so users never lose selected items."
      },
      {
        "challenge": "Presenting complex multi-variant volumes (e.g. 500ml, 1L, 5L wood-pressed oils) without cluttering the mobile product card.",
        "solution": "Designed custom segmented toggle chips that update SKU inventory, weight metadata, and unit pricing in under 16ms."
      }
    ],
    "outcome": "Successfully launched the official storefront at nuzvidagrifarms.com, enabling direct farm-to-consumer transactions, eliminating middleman commissions, and driving rapid customer repeat order rates across India.",
    "liveUrl": "https://www.nuzvidagrifarms.com/",
    "githubUrl": null
  },
  {
    "id": "resume-builder-one",
    "slug": "resume-builder-one",
    "title": "Resume Builder One",
    "subtitle": "AI ATS Resume Builder & Career Acceleration SaaS",
    "category": "SaaS Products",
    "additionalCategories": [
      "SaaS Products",
      "Full Stack"
    ],
    "featured": true,
    "status": "Production / Live",
    "client": "Soltkiz IT Services",
    "year": "2024 - 2025",
    "role": "Full Stack Architect & Lead Developer",
    "summary": "A full-featured AI career enhancement SaaS offering interactive resume creation, instant Applicant Tracking System (ATS) compatibility analysis, real-time bullet-point optimization, AI cover letter generation, and multi-format export (PDF, DOCX, TXT) with Razorpay subscription billing.",
    "heroImage": "/projects/resume-builder-one-screenshot.jpg",
    "gallery": [
      {
        "url": "/projects/resume-builder-one-screenshot.jpg",
        "caption": "Resume Builder One official AI homepage with interactive ATS builder."
      },
      {
        "url": "/projects/resumebuilderone-logo.png",
        "caption": "Official Resume Builder One logo and brand identity."
      }
    ],
    "technologies": [
      "React 19",
      "Next.js",
      "Node.js",
      "Express.js",
      "OpenAI API",
      "Supabase",
      "PostgreSQL",
      "Razorpay (PCI-DSS 256-bit)",
      "Tailwind CSS",
      "PDF Generation"
    ],
    "metrics": [
      {
        "label": "ATS Analysis Speed",
        "value": "< 2.4s"
      },
      {
        "label": "Export Formats",
        "value": "PDF • DOCX • TXT"
      },
      {
        "label": "Security",
        "value": "PCI-DSS 256-bit"
      }
    ],
    "overview": "Resume Builder One (resumebuilderone.com) is an enterprise-grade AI resume platform operated by Soltkiz IT Services. It empowers job seekers to construct clean, ATS-compliant resumes tailored to modern applicant tracking systems (Workday, Greenhouse, Lever, Taleo) through real-time keyword suggestions, AI-driven bullet point enhancements, and live PDF preview.",
    "problem": "Over 75% of job applications are filtered out by automated ATS scanners before a human recruiter ever sees them, due to unparseable two-column layouts, missing job-description keywords, or vague task descriptions lacking quantified metrics.",
    "objectives": [
      "Build a modular, zero-friction WYSIWYG resume editor with live drag-and-drop section reordering.",
      "Implement an ATS compatibility scoring engine comparing candidate profiles against target job descriptions in real time.",
      "Incorporate AI prompt workflows that rewrite passive bullet points into high-impact, metric-driven achievement statements.",
      "Integrate Razorpay payments with PCI-DSS 256-bit encryption for seamless recurring subscription plans and one-time downloads."
    ],
    "responsibilities": [
      "Led the end-to-end full-stack development, from front-end component state to backend API endpoints and AI prompts.",
      "Engineered prompt engineering pipelines using OpenAI's JSON mode to guarantee structured output without hallucinations.",
      "Designed PostgreSQL tables for user accounts, resumes, subscriptions, and event logs with Row-Level Security (RLS).",
      "Implemented client-side vector-based PDF compilation ensuring strict compliance with single-column ATS parser guidelines."
    ],
    "implementationDetails": [
      "Created an automated TF-IDF and semantic keyword extraction pipeline cross-referencing user skills with job descriptions.",
      "Engineered custom drag-and-drop section reordering for Work Experience, Education, Technical Skills, and Projects.",
      "Integrated Razorpay Webhooks for instantaneous license unlocking and automated billing receipt generation.",
      "Implemented autosave debouncing (400ms) with Supabase database sync to eliminate accidental data loss."
    ],
    "challenges": [
      {
        "challenge": "Preventing AI hallucinations and ensuring structured JSON output across diverse resume formats.",
        "solution": "Engineered strict system prompts with few-shot schema validation and runtime Zod parsing before rendering into UI blocks."
      },
      {
        "challenge": "Generating pixel-perfect, printer-ready PDFs that match browser previews without cut-off margins or pagination issues.",
        "solution": "Built a custom client-side PDF renderer calculating page heights dynamically to prevent mid-paragraph page breaks."
      }
    ],
    "outcome": "Successfully deployed at resumebuilderone.com, serving active job seekers with thousands of generated resumes, high ATS passing scores, and automated subscription monetization.",
    "liveUrl": "https://www.resumebuilderone.com/",
    "githubUrl": null
  },
  {
    "id": "shora-luxe",
    "slug": "shora-luxe",
    "title": "Shora Luxe",
    "subtitle": "Luxury Skincare & Clean Beauty D2C E-Commerce Brand",
    "category": "E-commerce",
    "additionalCategories": [
      "E-commerce",
      "Business Websites",
      "Full Stack"
    ],
    "featured": true,
    "status": "Production / Live",
    "client": "Shora Luxe (Hyderabad)",
    "year": "2024 - 2025",
    "role": "Full Stack E-Commerce Architect & Frontend Developer",
    "summary": "A high-end, luxury direct-to-consumer (D2C) skincare e-commerce platform engineered for an Indian clean beauty brand based in Hyderabad, featuring dermatologist-tested, cruelty-free, and vegan formulations with skin-type filtering, smart cart drawers, combo bundle discounts, and Pan-India checkout.",
    "heroImage": "/projects/shora-luxe-screenshot.jpg",
    "gallery": [
      {
        "url": "/projects/shora-luxe-screenshot.jpg",
        "caption": "Shora Luxe editorial homepage introducing dermatologist-formulated luxury skincare."
      }
    ],
    "technologies": [
      "React 19",
      "Next.js",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Tailwind CSS",
      "Razorpay / Cashfree",
      "Lucide React",
      "Vercel"
    ],
    "metrics": [
      {
        "label": "Page Speed",
        "value": "< 1.4s"
      },
      {
        "label": "Catalog",
        "value": "Dermatologist-Tested"
      },
      {
        "label": "Delivery",
        "value": "Pan-India Nationwide"
      }
    ],
    "overview": "Shora Luxe (shoraluxe.com) is a premium skincare brand based in Hyderabad blending cutting-edge dermatological science with clean, ethical beauty. The storefront features their complete line of SPF 50+++ broad-spectrum sunscreens, brightening face serums, nourishing day/night creams, gentle body washes, and targeted skincare combos sold directly and across marketplaces like Myntra and Flipkart.",
    "problem": "Luxury skincare requires an elevated digital aesthetic that conveys medical credibility and sensory refinement while maintaining lightning-fast shopping cart performance and painless checkout on mobile devices.",
    "objectives": [
      "Design an editorial, high-fashion storefront reflecting luxury aesthetic with refined typography and smooth interactive states.",
      "Implement intelligent multi-attribute filtering (filter by skin type: Normal, Dry, Oily, Sensitive, Combination; filter by routine goal: Sun Protection, Anti-Aging, Hydration).",
      "Construct an interactive slide-over cart drawer with real-time combo discount calculations (Buy 2 Get 10% Off, Bundle & Save).",
      "Integrate seamless, multi-method payment gateways supporting UPI, Credit Cards, NetBanking, and Cash on Delivery (COD)."
    ],
    "responsibilities": [
      "Engineered the responsive React user interface adhering to luxury brand guidelines and mobile ergonomics.",
      "Constructed the headless product catalog architecture with fast client-side state caching.",
      "Developed promotional coupon logic, automated combo discounts, and threshold-based free delivery progress meters.",
      "Implemented Google Tag Manager, Meta Pixel, and conversion tracking event pipelines for performance marketing analytics."
    ],
    "implementationDetails": [
      "Built smooth slide-in mini-cart drawer allowing customers to update quantities and add recommended add-on products without leaving the page.",
      "Engineered lazy-loaded, responsive WebP image pipelines with srcset generation for flawless retina display rendering.",
      "Integrated Pan-India courier tracking APIs for real-time order tracking notifications.",
      "Created clean schema markup (Product, AggregateOffer, Review) for rich snippet display on Google Search."
    ],
    "challenges": [
      {
        "challenge": "Maintaining butter-smooth 60fps scrolling and fast load times with high-resolution cosmetic product imagery.",
        "solution": "Implemented next-gen image compression, progressive image placeholders, and decoupled script execution for non-critical analytics."
      },
      {
        "challenge": "Handling complex multi-product skincare bundle discounts without checkout calculation mismatches.",
        "solution": "Engineered single-source-of-truth cart state validation on both client and server before payment order token creation."
      }
    ],
    "outcome": "Successfully launched the official brand platform at shoraluxe.com, establishing an authoritative direct-to-consumer sales channel with exceptional mobile conversion rates.",
    "liveUrl": "https://www.shoraluxe.com/",
    "githubUrl": null
  },
  {
    "id": "resume-lab-pro-ai",
    "slug": "resume-lab-pro-ai",
    "title": "Resume Lab Pro AI",
    "subtitle": "AI Career Intelligence, ATS Matching & Application Tracking Platform",
    "category": "SaaS Products",
    "additionalCategories": [
      "SaaS Products",
      "Full Stack",
      "Dashboards"
    ],
    "featured": true,
    "status": "Production / Live",
    "client": "Resume Lab Pro AI / Global SaaS",
    "year": "2024 - 2025",
    "role": "Full Stack Web Architect & AI Engineer",
    "summary": "An intelligent career acceleration platform featuring real-time ATS match scoring, semantic job description keyword extraction, automated bullet point rewriting, and an interactive Kanban board for tracking job applications across hiring pipelines.",
    "heroImage": "/projects/resume-lab-pro-ai-screenshot.jpg",
    "gallery": [
      {
        "url": "/projects/resume-lab-pro-ai-screenshot.jpg",
        "caption": "Resume Lab Pro AI official homepage with AI-powered ATS scoring hero and features."
      }
    ],
    "technologies": [
      "React 19",
      "Next.js",
      "OpenAI LLM Pipelines",
      "TypeScript",
      "Node.js",
      "Supabase",
      "PostgreSQL with RLS",
      "Tailwind CSS",
      "jsPDF"
    ],
    "metrics": [
      {
        "label": "Match Analysis",
        "value": "Real-Time ATS"
      },
      {
        "label": "Job Tracker",
        "value": "Kanban Pipeline"
      },
      {
        "label": "Architecture",
        "value": "Serverless + Edge"
      }
    ],
    "overview": "Resume Lab Pro AI (resumelabpro-ai.com) is an AI-powered career workstation designed to solve the modern job search bottleneck. It enables candidates to upload existing resumes, input target job requirements, and instantly visualize keyword discrepancies, qualification gaps, and automated rewrite suggestions while organizing all submissions in an integrated Kanban tracker.",
    "problem": "Job seekers apply to dozens of positions with static, untailored resumes that fail automated recruiter filters, while simultaneously losing track of application stages, interview dates, and recruiter correspondences.",
    "objectives": [
      "Deliver deep semantic analysis calculating a quantifiable ATS match percentage against any job description.",
      "Provide role-specific AI prompt assistance that optimizes action verbs, eliminates passive tense, and inserts missing industry competencies.",
      "Build an intuitive Kanban workflow allowing candidates to drag and drop applications through 'Applied', 'Screening', 'Technical Interview', and 'Offer' stages.",
      "Ensure enterprise-grade user data security with PostgreSQL Row-Level Security (RLS) and encrypted session management."
    ],
    "responsibilities": [
      "Engineered the complete application stack, connecting a reactive TypeScript/React frontend with serverless API routes.",
      "Developed custom AI prompts for resume tailoring, cover letter composition, and interview preparation question generation.",
      "Implemented interactive drag-and-drop Kanban state management with real-time database synchronization.",
      "Architected clean, ATS-parseable typography templates validated against enterprise screening software."
    ],
    "implementationDetails": [
      "Constructed TF-IDF and semantic similarity scoring algorithms comparing candidate experience bullets with target job listings.",
      "Implemented optimistic UI updates on the Kanban application tracker for instantaneous user feedback.",
      "Engineered automated resume health checks flagging overused clichés, weak action verbs, and formatting errors.",
      "Configured Supabase Row Level Security (RLS) guaranteeing strict multi-tenant isolation."
    ],
    "challenges": [
      {
        "challenge": "Maintaining responsive sub-second UI interactions during intensive AI text parsing and semantic scoring.",
        "solution": "Offloaded NLP analysis to asynchronous serverless streaming workers with progressive loading indicators."
      },
      {
        "challenge": "Ensuring exported resume PDFs remain 100% parseable by robotic ATS scanners while looking polished to human recruiters.",
        "solution": "Designed single-column semantic HTML-to-PDF templates with standard standard headings and zero unreadable vector layers."
      }
    ],
    "outcome": "Successfully launched at resumelabpro-ai.com, empowering job candidates to boost their interview callback rates and systematically manage their job search pipeline.",
    "liveUrl": "https://www.resumelabpro-ai.com/",
    "githubUrl": null
  },
  {
    "id": "paadukundamdhaa",
    "slug": "paadukundamdhaa",
    "title": "PaadukundamDhaa",
    "subtitle": "Premier Live Concert & Musical Event Ticketing Platform in Kakinada",
    "category": "Business Websites",
    "additionalCategories": [
      "Business Websites",
      "E-commerce",
      "Full Stack"
    ],
    "featured": false,
    "status": "Production / Live",
    "client": "PaadukundamDhaa Entertainment (Kakinada)",
    "year": "2024 - 2025",
    "role": "Full Stack Web Developer & Ticketing Architect",
    "summary": "A premier live music concert and event ticketing platform based in Kakinada, featuring interactive seat tier selection, secure online ticket booking, instant digital QR-code pass generation, and seamless gate admission scanning.",
    "heroImage": "/projects/paadukundamdhaa-logo.png",
    "gallery": [
      {
        "url": "/projects/paadukundamdhaa-logo.png",
        "caption": "PaadukundamDhaa official brand identity and concert ticketing portal."
      },
      {
        "url": "/projects/paadukundamdhaa-screenshot.png",
        "caption": "Live concert discovery and QR pass booking interface."
      }
    ],
    "technologies": [
      "React 19",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Razorpay Payment Gateway",
      "QR Code Engine",
      "Vercel"
    ],
    "metrics": [
      {
        "label": "Ticketing Speed",
        "value": "< 2s Instant Pass"
      },
      {
        "label": "Event Type",
        "value": "Live Concerts & Jams"
      },
      {
        "label": "Gate Verification",
        "value": "QR Digital Entry"
      }
    ],
    "overview": "PaadukundamDhaa (paadukundamdhaa.com) is an energetic live entertainment and music concert organization based out of Kakinada, Andhra Pradesh. The platform empowers music enthusiasts to discover upcoming open mics, celebrity concerts, and jamming sessions, select general or VIP seating tiers, complete online payments, and receive verifiable digital tickets.",
    "problem": "Local concert organizers suffered from chaotic paper ticket counterfeiting, manual gate verification queues, and high commission fees charged by national aggregator ticketing portals.",
    "objectives": [
      "Build a branded, high-conversion event portal presenting upcoming jamming sessions, artist lineups, and venue location guides.",
      "Implement an intuitive ticket tier checkout (Early Bird, General Admission, VIP Seating) with real-time inventory decrement.",
      "Generate encrypted dynamic QR code entry passes delivered via SMS and WhatsApp for zero-friction gate scanning.",
      "Integrate Razorpay payments for instant UPI and card checkouts with automated refund management."
    ],
    "responsibilities": [
      "Architected and engineered the event discovery and ticketing flow from UI to backend ticket generation.",
      "Implemented client-side cart and seat tier selection logic with live countdown reservation timers.",
      "Constructed automated QR-code generation pipelines that embed encrypted ticket validation tokens.",
      "Ensured high mobile responsiveness for young music fans accessing the site primarily through Instagram and social links."
    ],
    "implementationDetails": [
      "Engineered temporary inventory locking during checkout (10-minute hold) to eliminate double-booking during ticket sale drops.",
      "Built gatekeeper verification scanner interface allowing event volunteers to scan attendee QR codes on any mobile phone.",
      "Structured clean metadata and social OpenGraph cards for viral ticket sharing on WhatsApp and Instagram stories."
    ],
    "challenges": [
      {
        "challenge": "Preventing ticket scalping and fraudulent gate entries without requiring dedicated scanning hardware.",
        "solution": "Implemented time-stamped cryptographically signed QR codes that invalidate immediately upon first gatekeeper scan."
      },
      {
        "challenge": "Handling high concurrency traffic spikes during ticket release countdowns.",
        "solution": "Deployed static edge caching with optimistic UI state updates and serverless webhook processing."
      }
    ],
    "outcome": "Successfully launched paadukundamdhaa.com, powering sold-out live concert editions in Kakinada with 100% digital QR admissions and seamless attendee onboarding.",
    "liveUrl": "https://www.paadukundamdhaa.com/",
    "githubUrl": null
  },
  {
    "id": "weblearnai",
    "slug": "weblearnai",
    "title": "Weblearnai Trainings",
    "subtitle": "Transform your career with Weblearnai Trainings - Industry-leading IT training in Data Engineering, ...",
    "category": "SaaS Products",
    "additionalCategories": [
      "SaaS Products",
      "Full Stack"
    ],
    "featured": false,
    "status": "Production / Active",
    "client": "Weblearnai Trainings",
    "year": "2024 - 2025",
    "role": "Full Stack Web Developer",
    "summary": "Transform your career with Weblearnai Trainings - Industry-leading IT training in Data Engineering, Microsoft Fabric, Power BI, Cloud, Cybersecurity & Generative AI. Expert mentors, real-world projects, and 95% placement rate.",
    "heroImage": "/projects/weblearnai-screenshot.png",
    "gallery": [
      {
        "url": "/projects/weblearnai-screenshot.png",
        "caption": "Weblearnai Trainings official desktop homepage and primary web interface."
      }
    ],
    "technologies": [
      "React 19",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Tailwind CSS",
      "REST APIs"
    ],
    "metrics": [
      {
        "label": "Deployment",
        "value": "Production Live"
      },
      {
        "label": "Speed",
        "value": "< 1.4s"
      },
      {
        "label": "Design",
        "value": "100% Responsive"
      }
    ],
    "overview": "Weblearnai Trainings (www.weblearnai.com) represents a verified production web deployment. Built with modern web engineering standards, intuitive user journeys, and robust cross-browser responsiveness.",
    "problem": "The client required a contemporary digital web presence to establish authority, communicate core value propositions clearly, and provide seamless customer acquisition and inquiry handling on mobile and desktop devices.",
    "objectives": [
      "Design and deploy an authoritative, high-performance web experience tailored to industry standards.",
      "Ensure sub-1.5 second load times on mobile 4G/5G networks through optimized assets and modern bundling.",
      "Implement structured SEO metadata to boost Google organic search visibility for relevant business queries.",
      "Provide frictionless contact, quotation, and service booking workflows with immediate communication triggers."
    ],
    "responsibilities": [
      "Engineered the responsive frontend user interface and component architecture.",
      "Ensured comprehensive cross-browser compatibility across Safari, Chrome, Edge, and mobile browsers.",
      "Configured production DNS, SSL certificates, and hosting deployment pipelines.",
      "Optimized Core Web Vitals to achieve high Google Lighthouse scores."
    ],
    "implementationDetails": [
      "Implemented modular UI components adhering to consistent design tokens and responsive breakpoints.",
      "Integrated asynchronous form validation and notification triggers for customer inquiries.",
      "Structured clean JSON-LD schema markup for enhanced search engine indexing."
    ],
    "challenges": [
      {
        "challenge": "Delivering rapid load times and crisp visual aesthetics across varying network bandwidths.",
        "solution": "Applied next-gen image compression, responsive source sets, and tree-shaken script bundles."
      }
    ],
    "outcome": "Successfully deployed to production at https://www.weblearnai.com/, providing the client with an active, high-converting digital platform that powers daily business operations and client interactions.",
    "liveUrl": "https://www.weblearnai.com/",
    "githubUrl": null
  },
  {
    "id": "dsprojectss",
    "slug": "dsprojectss",
    "title": "DS Projects",
    "subtitle": "DS Projects - Authorized Facilitator for MSME ZED Certification in Andhra Pradesh. Expert support fo...",
    "category": "Business Websites",
    "additionalCategories": [
      "Business Websites",
      "Full Stack"
    ],
    "featured": false,
    "status": "Production / Active",
    "client": "DS Projects",
    "year": "2024 - 2025",
    "role": "Full Stack Web Developer",
    "summary": "DS Projects - Authorized Facilitator for MSME ZED Certification in Andhra Pradesh. Expert support for Zero Defect Zero Effect certification, Sarpanch Samvaad, and government projects.",
    "heroImage": "/projects/dsprojectss-screenshot.png",
    "gallery": [
      {
        "url": "/projects/dsprojectss-screenshot.png",
        "caption": "DS Projects official desktop homepage and primary web interface."
      }
    ],
    "technologies": [
      "React 19",
      "Vite",
      "Tailwind CSS",
      "SEO Schema",
      "Mobile Optimization",
      "Lucide Icons"
    ],
    "metrics": [
      {
        "label": "Deployment",
        "value": "Production Live"
      },
      {
        "label": "Speed",
        "value": "< 1.4s"
      },
      {
        "label": "Design",
        "value": "100% Responsive"
      }
    ],
    "overview": "DS Projects (www.dsprojectss.com) represents a verified production web deployment. Built with modern web engineering standards, intuitive user journeys, and robust cross-browser responsiveness.",
    "problem": "The client required a contemporary digital web presence to establish authority, communicate core value propositions clearly, and provide seamless customer acquisition and inquiry handling on mobile and desktop devices.",
    "objectives": [
      "Design and deploy an authoritative, high-performance web experience tailored to industry standards.",
      "Ensure sub-1.5 second load times on mobile 4G/5G networks through optimized assets and modern bundling.",
      "Implement structured SEO metadata to boost Google organic search visibility for relevant business queries.",
      "Provide frictionless contact, quotation, and service booking workflows with immediate communication triggers."
    ],
    "responsibilities": [
      "Engineered the responsive frontend user interface and component architecture.",
      "Ensured comprehensive cross-browser compatibility across Safari, Chrome, Edge, and mobile browsers.",
      "Configured production DNS, SSL certificates, and hosting deployment pipelines.",
      "Optimized Core Web Vitals to achieve high Google Lighthouse scores."
    ],
    "implementationDetails": [
      "Implemented modular UI components adhering to consistent design tokens and responsive breakpoints.",
      "Integrated asynchronous form validation and notification triggers for customer inquiries.",
      "Structured clean JSON-LD schema markup for enhanced search engine indexing."
    ],
    "challenges": [
      {
        "challenge": "Delivering rapid load times and crisp visual aesthetics across varying network bandwidths.",
        "solution": "Applied next-gen image compression, responsive source sets, and tree-shaken script bundles."
      }
    ],
    "outcome": "Successfully deployed to production at https://www.dsprojectss.com/, providing the client with an active, high-converting digital platform that powers daily business operations and client interactions.",
    "liveUrl": "https://www.dsprojectss.com/",
    "githubUrl": null
  },
  {
    "id": "shanmukhaprojects",
    "slug": "shanmukhaprojects",
    "title": "Shanmukha Projects",
    "subtitle": "Shanmukha State & Central Government Contract & Project Services - Authorized Facilitator for MSME Z...",
    "category": "Business Websites",
    "additionalCategories": [
      "Business Websites",
      "Full Stack"
    ],
    "featured": false,
    "status": "Production / Active",
    "client": "Shanmukha Projects",
    "year": "2024 - 2025",
    "role": "Full Stack Web Developer",
    "summary": "Shanmukha State & Central Government Contract & Project Services - Authorized Facilitator for MSME ZED Certification in Andhra Pradesh. Expert support for Zero Defect Zero Effect certification, Sarpanch Samvaad, and government projects.",
    "heroImage": "/projects/shanmukhaprojects-screenshot.png",
    "gallery": [
      {
        "url": "/projects/shanmukhaprojects-screenshot.png",
        "caption": "Shanmukha Projects official desktop homepage and primary web interface."
      }
    ],
    "technologies": [
      "React 19",
      "Vite",
      "Tailwind CSS",
      "SEO Schema",
      "Mobile Optimization",
      "Lucide Icons"
    ],
    "metrics": [
      {
        "label": "Deployment",
        "value": "Production Live"
      },
      {
        "label": "Speed",
        "value": "< 1.4s"
      },
      {
        "label": "Design",
        "value": "100% Responsive"
      }
    ],
    "overview": "Shanmukha Projects (shanmukhaprojects.com) represents a verified production web deployment. Built with modern web engineering standards, intuitive user journeys, and robust cross-browser responsiveness.",
    "problem": "The client required a contemporary digital web presence to establish authority, communicate core value propositions clearly, and provide seamless customer acquisition and inquiry handling on mobile and desktop devices.",
    "objectives": [
      "Design and deploy an authoritative, high-performance web experience tailored to industry standards.",
      "Ensure sub-1.5 second load times on mobile 4G/5G networks through optimized assets and modern bundling.",
      "Implement structured SEO metadata to boost Google organic search visibility for relevant business queries.",
      "Provide frictionless contact, quotation, and service booking workflows with immediate communication triggers."
    ],
    "responsibilities": [
      "Engineered the responsive frontend user interface and component architecture.",
      "Ensured comprehensive cross-browser compatibility across Safari, Chrome, Edge, and mobile browsers.",
      "Configured production DNS, SSL certificates, and hosting deployment pipelines.",
      "Optimized Core Web Vitals to achieve high Google Lighthouse scores."
    ],
    "implementationDetails": [
      "Implemented modular UI components adhering to consistent design tokens and responsive breakpoints.",
      "Integrated asynchronous form validation and notification triggers for customer inquiries.",
      "Structured clean JSON-LD schema markup for enhanced search engine indexing."
    ],
    "challenges": [
      {
        "challenge": "Delivering rapid load times and crisp visual aesthetics across varying network bandwidths.",
        "solution": "Applied next-gen image compression, responsive source sets, and tree-shaken script bundles."
      }
    ],
    "outcome": "Successfully deployed to production at http://shanmukhaprojects.com/, providing the client with an active, high-converting digital platform that powers daily business operations and client interactions.",
    "liveUrl": "http://shanmukhaprojects.com/",
    "githubUrl": null
  },
  {
    "id": "srivarahiagrofoods",
    "slug": "srivarahiagrofoods",
    "title": "Sri Varahi Agro Foods LLP",
    "subtitle": "Sri Varahi Agro Foods LLP is a leading Indian agro products exporter specializing in Basmati Rice, T...",
    "category": "E-commerce",
    "additionalCategories": [
      "E-commerce",
      "Full Stack"
    ],
    "featured": false,
    "status": "Production / Active",
    "client": "Sri Varahi Agro Foods LLP",
    "year": "2024 - 2025",
    "role": "Full Stack Web Developer",
    "summary": "Sri Varahi Agro Foods LLP is a leading Indian agro products exporter specializing in Basmati Rice, Turmeric, Chilli, Spices, Fresh Fruits & Vegetables. Direct farmer sourcing. Export to UAE, Singapore, Saudi Arabia & Europe.",
    "heroImage": "/projects/srivarahiagrofoods-screenshot.png",
    "gallery": [
      {
        "url": "/projects/srivarahiagrofoods-screenshot.png",
        "caption": "Sri Varahi Agro Foods LLP official desktop homepage and primary web interface."
      }
    ],
    "technologies": [
      "React 19",
      "Next.js",
      "PostgreSQL",
      "Razorpay",
      "Tailwind CSS",
      "Cart State"
    ],
    "metrics": [
      {
        "label": "Deployment",
        "value": "Production Live"
      },
      {
        "label": "Speed",
        "value": "< 1.4s"
      },
      {
        "label": "Design",
        "value": "100% Responsive"
      }
    ],
    "overview": "Sri Varahi Agro Foods LLP (www.srivarahiagrofoods.in) represents a verified production web deployment. Built with modern web engineering standards, intuitive user journeys, and robust cross-browser responsiveness.",
    "problem": "The client required a contemporary digital web presence to establish authority, communicate core value propositions clearly, and provide seamless customer acquisition and inquiry handling on mobile and desktop devices.",
    "objectives": [
      "Design and deploy an authoritative, high-performance web experience tailored to industry standards.",
      "Ensure sub-1.5 second load times on mobile 4G/5G networks through optimized assets and modern bundling.",
      "Implement structured SEO metadata to boost Google organic search visibility for relevant business queries.",
      "Provide frictionless contact, quotation, and service booking workflows with immediate communication triggers."
    ],
    "responsibilities": [
      "Engineered the responsive frontend user interface and component architecture.",
      "Ensured comprehensive cross-browser compatibility across Safari, Chrome, Edge, and mobile browsers.",
      "Configured production DNS, SSL certificates, and hosting deployment pipelines.",
      "Optimized Core Web Vitals to achieve high Google Lighthouse scores."
    ],
    "implementationDetails": [
      "Implemented modular UI components adhering to consistent design tokens and responsive breakpoints.",
      "Integrated asynchronous form validation and notification triggers for customer inquiries.",
      "Structured clean JSON-LD schema markup for enhanced search engine indexing."
    ],
    "challenges": [
      {
        "challenge": "Delivering rapid load times and crisp visual aesthetics across varying network bandwidths.",
        "solution": "Applied next-gen image compression, responsive source sets, and tree-shaken script bundles."
      }
    ],
    "outcome": "Successfully deployed to production at https://www.srivarahiagrofoods.in/, providing the client with an active, high-converting digital platform that powers daily business operations and client interactions.",
    "liveUrl": "https://www.srivarahiagrofoods.in/",
    "githubUrl": null
  },
  {
    "id": "sreekrishnabotanicals",
    "slug": "sreekrishnabotanicals",
    "title": "Sree Krishna Botanicals",
    "subtitle": "Sree Krishna Botanicals Official Enterprise Web Application",
    "category": "E-commerce",
    "additionalCategories": [
      "E-commerce",
      "Full Stack"
    ],
    "featured": false,
    "status": "Production / Active",
    "client": "Sree Krishna Botanicals",
    "year": "2024 - 2025",
    "role": "Full Stack Web Developer",
    "summary": "Sree Krishna Botanicals is a modern, responsive production web application engineered for optimal performance, clean typography, cross-device compatibility, and verified business outcomes.",
    "heroImage": "/projects/sreekrishnabotanicals-screenshot.png",
    "gallery": [
      {
        "url": "/projects/sreekrishnabotanicals-screenshot.png",
        "caption": "Sree Krishna Botanicals official desktop homepage and primary web interface."
      }
    ],
    "technologies": [
      "React 19",
      "Next.js",
      "PostgreSQL",
      "Razorpay",
      "Tailwind CSS",
      "Cart State"
    ],
    "metrics": [
      {
        "label": "Deployment",
        "value": "Production Live"
      },
      {
        "label": "Speed",
        "value": "< 1.4s"
      },
      {
        "label": "Design",
        "value": "100% Responsive"
      }
    ],
    "overview": "Sree Krishna Botanicals (www.sreekrishnabotanicals.com) represents a verified production web deployment. Built with modern web engineering standards, intuitive user journeys, and robust cross-browser responsiveness.",
    "problem": "The client required a contemporary digital web presence to establish authority, communicate core value propositions clearly, and provide seamless customer acquisition and inquiry handling on mobile and desktop devices.",
    "objectives": [
      "Design and deploy an authoritative, high-performance web experience tailored to industry standards.",
      "Ensure sub-1.5 second load times on mobile 4G/5G networks through optimized assets and modern bundling.",
      "Implement structured SEO metadata to boost Google organic search visibility for relevant business queries.",
      "Provide frictionless contact, quotation, and service booking workflows with immediate communication triggers."
    ],
    "responsibilities": [
      "Engineered the responsive frontend user interface and component architecture.",
      "Ensured comprehensive cross-browser compatibility across Safari, Chrome, Edge, and mobile browsers.",
      "Configured production DNS, SSL certificates, and hosting deployment pipelines.",
      "Optimized Core Web Vitals to achieve high Google Lighthouse scores."
    ],
    "implementationDetails": [
      "Implemented modular UI components adhering to consistent design tokens and responsive breakpoints.",
      "Integrated asynchronous form validation and notification triggers for customer inquiries.",
      "Structured clean JSON-LD schema markup for enhanced search engine indexing."
    ],
    "challenges": [
      {
        "challenge": "Delivering rapid load times and crisp visual aesthetics across varying network bandwidths.",
        "solution": "Applied next-gen image compression, responsive source sets, and tree-shaken script bundles."
      }
    ],
    "outcome": "Successfully deployed to production at https://www.sreekrishnabotanicals.com/, providing the client with an active, high-converting digital platform that powers daily business operations and client interactions.",
    "liveUrl": "https://www.sreekrishnabotanicals.com/",
    "githubUrl": null
  },
  {
    "id": "vlinfra",
    "slug": "vlinfra",
    "title": "VL Infra",
    "subtitle": "VL Infra is a premier fire safety and security systems contractor in Hyderabad & Nellore. We special...",
    "category": "Business Websites",
    "additionalCategories": [
      "Business Websites",
      "Full Stack"
    ],
    "featured": false,
    "status": "Production / Active",
    "client": "VL Infra",
    "year": "2024 - 2025",
    "role": "Full Stack Web Developer",
    "summary": "VL Infra is a premier fire safety and security systems contractor in Hyderabad & Nellore. We specialize in Fire Hydrants, Sprinklers, VESDA, Fire Alarms, and AMC services across South India.",
    "heroImage": "/projects/vlinfra-screenshot.png",
    "gallery": [
      {
        "url": "/projects/vlinfra-screenshot.png",
        "caption": "VL Infra official desktop homepage and primary web interface."
      }
    ],
    "technologies": [
      "React 19",
      "Vite",
      "Tailwind CSS",
      "SEO Schema",
      "Mobile Optimization",
      "Lucide Icons"
    ],
    "metrics": [
      {
        "label": "Deployment",
        "value": "Production Live"
      },
      {
        "label": "Speed",
        "value": "< 1.4s"
      },
      {
        "label": "Design",
        "value": "100% Responsive"
      }
    ],
    "overview": "VL Infra (www.vlinfra.in) represents a verified production web deployment. Built with modern web engineering standards, intuitive user journeys, and robust cross-browser responsiveness.",
    "problem": "The client required a contemporary digital web presence to establish authority, communicate core value propositions clearly, and provide seamless customer acquisition and inquiry handling on mobile and desktop devices.",
    "objectives": [
      "Design and deploy an authoritative, high-performance web experience tailored to industry standards.",
      "Ensure sub-1.5 second load times on mobile 4G/5G networks through optimized assets and modern bundling.",
      "Implement structured SEO metadata to boost Google organic search visibility for relevant business queries.",
      "Provide frictionless contact, quotation, and service booking workflows with immediate communication triggers."
    ],
    "responsibilities": [
      "Engineered the responsive frontend user interface and component architecture.",
      "Ensured comprehensive cross-browser compatibility across Safari, Chrome, Edge, and mobile browsers.",
      "Configured production DNS, SSL certificates, and hosting deployment pipelines.",
      "Optimized Core Web Vitals to achieve high Google Lighthouse scores."
    ],
    "implementationDetails": [
      "Implemented modular UI components adhering to consistent design tokens and responsive breakpoints.",
      "Integrated asynchronous form validation and notification triggers for customer inquiries.",
      "Structured clean JSON-LD schema markup for enhanced search engine indexing."
    ],
    "challenges": [
      {
        "challenge": "Delivering rapid load times and crisp visual aesthetics across varying network bandwidths.",
        "solution": "Applied next-gen image compression, responsive source sets, and tree-shaken script bundles."
      }
    ],
    "outcome": "Successfully deployed to production at https://www.vlinfra.in/, providing the client with an active, high-converting digital platform that powers daily business operations and client interactions.",
    "liveUrl": "https://www.vlinfra.in/",
    "githubUrl": null
  },
  {
    "id": "vericon",
    "slug": "vericon",
    "title": "VERICON",
    "subtitle": "Vericon Official Enterprise Web Application",
    "category": "Business Websites",
    "additionalCategories": [
      "Business Websites",
      "Full Stack"
    ],
    "featured": false,
    "status": "Production / Active",
    "client": "VERICON",
    "year": "2024 - 2025",
    "role": "Full Stack Web Developer",
    "summary": "VERICON is a modern, responsive production web application engineered for optimal performance, clean typography, cross-device compatibility, and verified business outcomes.",
    "heroImage": "/projects/vericon-screenshot.png",
    "gallery": [
      {
        "url": "/projects/vericon-screenshot.png",
        "caption": "VERICON official desktop homepage and primary web interface."
      }
    ],
    "technologies": [
      "React 19",
      "Vite",
      "Tailwind CSS",
      "SEO Schema",
      "Mobile Optimization",
      "Lucide Icons"
    ],
    "metrics": [
      {
        "label": "Deployment",
        "value": "Production Live"
      },
      {
        "label": "Speed",
        "value": "< 1.4s"
      },
      {
        "label": "Design",
        "value": "100% Responsive"
      }
    ],
    "overview": "VERICON (www.vericon.in) represents a verified production web deployment. Built with modern web engineering standards, intuitive user journeys, and robust cross-browser responsiveness.",
    "problem": "The client required a contemporary digital web presence to establish authority, communicate core value propositions clearly, and provide seamless customer acquisition and inquiry handling on mobile and desktop devices.",
    "objectives": [
      "Design and deploy an authoritative, high-performance web experience tailored to industry standards.",
      "Ensure sub-1.5 second load times on mobile 4G/5G networks through optimized assets and modern bundling.",
      "Implement structured SEO metadata to boost Google organic search visibility for relevant business queries.",
      "Provide frictionless contact, quotation, and service booking workflows with immediate communication triggers."
    ],
    "responsibilities": [
      "Engineered the responsive frontend user interface and component architecture.",
      "Ensured comprehensive cross-browser compatibility across Safari, Chrome, Edge, and mobile browsers.",
      "Configured production DNS, SSL certificates, and hosting deployment pipelines.",
      "Optimized Core Web Vitals to achieve high Google Lighthouse scores."
    ],
    "implementationDetails": [
      "Implemented modular UI components adhering to consistent design tokens and responsive breakpoints.",
      "Integrated asynchronous form validation and notification triggers for customer inquiries.",
      "Structured clean JSON-LD schema markup for enhanced search engine indexing."
    ],
    "challenges": [
      {
        "challenge": "Delivering rapid load times and crisp visual aesthetics across varying network bandwidths.",
        "solution": "Applied next-gen image compression, responsive source sets, and tree-shaken script bundles."
      }
    ],
    "outcome": "Successfully deployed to production at https://www.vericon.in/, providing the client with an active, high-converting digital platform that powers daily business operations and client interactions.",
    "liveUrl": "https://www.vericon.in/",
    "githubUrl": null
  },
  {
    "id": "bhujal",
    "slug": "bhujal",
    "title": "BHUJAL — Premium Packaged Drinking Water",
    "subtitle": "BHUJAL by CKP Enterprises — Premium RO + Active Alkaline packaged drinking water in Andhra Pradesh. ...",
    "category": "Business Websites",
    "additionalCategories": [
      "Business Websites",
      "Full Stack"
    ],
    "featured": false,
    "status": "Production / Active",
    "client": "BHUJAL — Premium Packaged Drinking Water",
    "year": "2024 - 2025",
    "role": "Full Stack Web Developer",
    "summary": "BHUJAL by CKP Enterprises — Premium RO + Active Alkaline packaged drinking water in Andhra Pradesh. Available in 100ml to 50L. Custom branding for events, hotels & corporates. Order now.",
    "heroImage": "/projects/bhujal-screenshot.png",
    "gallery": [
      {
        "url": "/projects/bhujal-screenshot.png",
        "caption": "BHUJAL — Premium Packaged Drinking Water official desktop homepage and primary web interface."
      }
    ],
    "technologies": [
      "React 19",
      "Vite",
      "Tailwind CSS",
      "SEO Schema",
      "Mobile Optimization",
      "Lucide Icons"
    ],
    "metrics": [
      {
        "label": "Deployment",
        "value": "Production Live"
      },
      {
        "label": "Speed",
        "value": "< 1.4s"
      },
      {
        "label": "Design",
        "value": "100% Responsive"
      }
    ],
    "overview": "BHUJAL — Premium Packaged Drinking Water (www.bhujal.co.in) represents a verified production web deployment. Built with modern web engineering standards, intuitive user journeys, and robust cross-browser responsiveness.",
    "problem": "The client required a contemporary digital web presence to establish authority, communicate core value propositions clearly, and provide seamless customer acquisition and inquiry handling on mobile and desktop devices.",
    "objectives": [
      "Design and deploy an authoritative, high-performance web experience tailored to industry standards.",
      "Ensure sub-1.5 second load times on mobile 4G/5G networks through optimized assets and modern bundling.",
      "Implement structured SEO metadata to boost Google organic search visibility for relevant business queries.",
      "Provide frictionless contact, quotation, and service booking workflows with immediate communication triggers."
    ],
    "responsibilities": [
      "Engineered the responsive frontend user interface and component architecture.",
      "Ensured comprehensive cross-browser compatibility across Safari, Chrome, Edge, and mobile browsers.",
      "Configured production DNS, SSL certificates, and hosting deployment pipelines.",
      "Optimized Core Web Vitals to achieve high Google Lighthouse scores."
    ],
    "implementationDetails": [
      "Implemented modular UI components adhering to consistent design tokens and responsive breakpoints.",
      "Integrated asynchronous form validation and notification triggers for customer inquiries.",
      "Structured clean JSON-LD schema markup for enhanced search engine indexing."
    ],
    "challenges": [
      {
        "challenge": "Delivering rapid load times and crisp visual aesthetics across varying network bandwidths.",
        "solution": "Applied next-gen image compression, responsive source sets, and tree-shaken script bundles."
      }
    ],
    "outcome": "Successfully deployed to production at https://www.bhujal.co.in/, providing the client with an active, high-converting digital platform that powers daily business operations and client interactions.",
    "liveUrl": "https://www.bhujal.co.in/",
    "githubUrl": null
  },
  {
    "id": "rsrexpress",
    "slug": "rsrexpress",
    "title": "rsr-express",
    "subtitle": "RSR Express Logistics Official Enterprise Web Application",
    "category": "Business Websites",
    "additionalCategories": [
      "Business Websites",
      "Full Stack"
    ],
    "featured": false,
    "status": "Production / Active",
    "client": "rsr-express",
    "year": "2024 - 2025",
    "role": "Full Stack Web Developer",
    "summary": "rsr-express is a modern, responsive production web application engineered for optimal performance, clean typography, cross-device compatibility, and verified business outcomes.",
    "heroImage": "/projects/rsrexpress-screenshot.png",
    "gallery": [
      {
        "url": "/projects/rsrexpress-screenshot.png",
        "caption": "rsr-express official desktop homepage and primary web interface."
      }
    ],
    "technologies": [
      "React 19",
      "Vite",
      "Tailwind CSS",
      "SEO Schema",
      "Mobile Optimization",
      "Lucide Icons"
    ],
    "metrics": [
      {
        "label": "Deployment",
        "value": "Production Live"
      },
      {
        "label": "Speed",
        "value": "< 1.4s"
      },
      {
        "label": "Design",
        "value": "100% Responsive"
      }
    ],
    "overview": "rsr-express (www.rsrexpress.com) represents a verified production web deployment. Built with modern web engineering standards, intuitive user journeys, and robust cross-browser responsiveness.",
    "problem": "The client required a contemporary digital web presence to establish authority, communicate core value propositions clearly, and provide seamless customer acquisition and inquiry handling on mobile and desktop devices.",
    "objectives": [
      "Design and deploy an authoritative, high-performance web experience tailored to industry standards.",
      "Ensure sub-1.5 second load times on mobile 4G/5G networks through optimized assets and modern bundling.",
      "Implement structured SEO metadata to boost Google organic search visibility for relevant business queries.",
      "Provide frictionless contact, quotation, and service booking workflows with immediate communication triggers."
    ],
    "responsibilities": [
      "Engineered the responsive frontend user interface and component architecture.",
      "Ensured comprehensive cross-browser compatibility across Safari, Chrome, Edge, and mobile browsers.",
      "Configured production DNS, SSL certificates, and hosting deployment pipelines.",
      "Optimized Core Web Vitals to achieve high Google Lighthouse scores."
    ],
    "implementationDetails": [
      "Implemented modular UI components adhering to consistent design tokens and responsive breakpoints.",
      "Integrated asynchronous form validation and notification triggers for customer inquiries.",
      "Structured clean JSON-LD schema markup for enhanced search engine indexing."
    ],
    "challenges": [
      {
        "challenge": "Delivering rapid load times and crisp visual aesthetics across varying network bandwidths.",
        "solution": "Applied next-gen image compression, responsive source sets, and tree-shaken script bundles."
      }
    ],
    "outcome": "Successfully deployed to production at https://www.rsrexpress.com/, providing the client with an active, high-converting digital platform that powers daily business operations and client interactions.",
    "liveUrl": "https://www.rsrexpress.com/",
    "githubUrl": null
  },
  {
    "id": "latexinfotech",
    "slug": "latexinfotech",
    "title": "Latex Infotech",
    "subtitle": "Leading AI, machine learning, data engineering, and software development company. Transform your bus...",
    "category": "Business Websites",
    "additionalCategories": [
      "Business Websites",
      "Full Stack"
    ],
    "featured": false,
    "status": "Production / Active",
    "client": "Latex Infotech",
    "year": "2024 - 2025",
    "role": "Full Stack Web Developer",
    "summary": "Leading AI, machine learning, data engineering, and software development company. Transform your business with cutting-edge intelligent solutions.",
    "heroImage": "/projects/latexinfotech-screenshot.png",
    "gallery": [
      {
        "url": "/projects/latexinfotech-screenshot.png",
        "caption": "Latex Infotech official desktop homepage and primary web interface."
      }
    ],
    "technologies": [
      "React 19",
      "Vite",
      "Tailwind CSS",
      "SEO Schema",
      "Mobile Optimization",
      "Lucide Icons"
    ],
    "metrics": [
      {
        "label": "Deployment",
        "value": "Production Live"
      },
      {
        "label": "Speed",
        "value": "< 1.4s"
      },
      {
        "label": "Design",
        "value": "100% Responsive"
      }
    ],
    "overview": "Latex Infotech (latexinfotech.com) represents a verified production web deployment. Built with modern web engineering standards, intuitive user journeys, and robust cross-browser responsiveness.",
    "problem": "The client required a contemporary digital web presence to establish authority, communicate core value propositions clearly, and provide seamless customer acquisition and inquiry handling on mobile and desktop devices.",
    "objectives": [
      "Design and deploy an authoritative, high-performance web experience tailored to industry standards.",
      "Ensure sub-1.5 second load times on mobile 4G/5G networks through optimized assets and modern bundling.",
      "Implement structured SEO metadata to boost Google organic search visibility for relevant business queries.",
      "Provide frictionless contact, quotation, and service booking workflows with immediate communication triggers."
    ],
    "responsibilities": [
      "Engineered the responsive frontend user interface and component architecture.",
      "Ensured comprehensive cross-browser compatibility across Safari, Chrome, Edge, and mobile browsers.",
      "Configured production DNS, SSL certificates, and hosting deployment pipelines.",
      "Optimized Core Web Vitals to achieve high Google Lighthouse scores."
    ],
    "implementationDetails": [
      "Implemented modular UI components adhering to consistent design tokens and responsive breakpoints.",
      "Integrated asynchronous form validation and notification triggers for customer inquiries.",
      "Structured clean JSON-LD schema markup for enhanced search engine indexing."
    ],
    "challenges": [
      {
        "challenge": "Delivering rapid load times and crisp visual aesthetics across varying network bandwidths.",
        "solution": "Applied next-gen image compression, responsive source sets, and tree-shaken script bundles."
      }
    ],
    "outcome": "Successfully deployed to production at https://latexinfotech.com/, providing the client with an active, high-converting digital platform that powers daily business operations and client interactions.",
    "liveUrl": "https://latexinfotech.com/",
    "githubUrl": null
  },
  {
    "id": "gyuso",
    "slug": "gyuso",
    "title": "GYUSO Technologies",
    "subtitle": "GYUSO Technologies – Premier VLSI, Semiconductor & IT Infrastructure Technology Services. Enterprise...",
    "category": "E-commerce",
    "additionalCategories": [
      "E-commerce",
      "Full Stack"
    ],
    "featured": false,
    "status": "Production / Active",
    "client": "GYUSO Technologies",
    "year": "2024 - 2025",
    "role": "Full Stack Web Developer",
    "summary": "GYUSO Technologies – Premier VLSI, Semiconductor & IT Infrastructure Technology Services. Enterprise-grade solutions for the digital future.",
    "heroImage": "/projects/gyuso-screenshot.png",
    "gallery": [
      {
        "url": "/projects/gyuso-screenshot.png",
        "caption": "GYUSO Technologies official desktop homepage and primary web interface."
      }
    ],
    "technologies": [
      "React 19",
      "Next.js",
      "PostgreSQL",
      "Razorpay",
      "Tailwind CSS",
      "Cart State"
    ],
    "metrics": [
      {
        "label": "Deployment",
        "value": "Production Live"
      },
      {
        "label": "Speed",
        "value": "< 1.4s"
      },
      {
        "label": "Design",
        "value": "100% Responsive"
      }
    ],
    "overview": "GYUSO Technologies (www.gyuso.com) represents a verified production web deployment. Built with modern web engineering standards, intuitive user journeys, and robust cross-browser responsiveness.",
    "problem": "The client required a contemporary digital web presence to establish authority, communicate core value propositions clearly, and provide seamless customer acquisition and inquiry handling on mobile and desktop devices.",
    "objectives": [
      "Design and deploy an authoritative, high-performance web experience tailored to industry standards.",
      "Ensure sub-1.5 second load times on mobile 4G/5G networks through optimized assets and modern bundling.",
      "Implement structured SEO metadata to boost Google organic search visibility for relevant business queries.",
      "Provide frictionless contact, quotation, and service booking workflows with immediate communication triggers."
    ],
    "responsibilities": [
      "Engineered the responsive frontend user interface and component architecture.",
      "Ensured comprehensive cross-browser compatibility across Safari, Chrome, Edge, and mobile browsers.",
      "Configured production DNS, SSL certificates, and hosting deployment pipelines.",
      "Optimized Core Web Vitals to achieve high Google Lighthouse scores."
    ],
    "implementationDetails": [
      "Implemented modular UI components adhering to consistent design tokens and responsive breakpoints.",
      "Integrated asynchronous form validation and notification triggers for customer inquiries.",
      "Structured clean JSON-LD schema markup for enhanced search engine indexing."
    ],
    "challenges": [
      {
        "challenge": "Delivering rapid load times and crisp visual aesthetics across varying network bandwidths.",
        "solution": "Applied next-gen image compression, responsive source sets, and tree-shaken script bundles."
      }
    ],
    "outcome": "Successfully deployed to production at https://www.gyuso.com/, providing the client with an active, high-converting digital platform that powers daily business operations and client interactions.",
    "liveUrl": "https://www.gyuso.com/",
    "githubUrl": null
  },
  {
    "id": "sacaterers",
    "slug": "sacaterers",
    "title": "SA Caterers",
    "subtitle": "SA Caterers provides premium catering services for weddings, corporate events, birthday bashes, and ...",
    "category": "Business Websites",
    "additionalCategories": [
      "Business Websites",
      "Full Stack"
    ],
    "featured": false,
    "status": "Production / Active",
    "client": "SA Caterers",
    "year": "2024 - 2025",
    "role": "Full Stack Web Developer",
    "summary": "SA Caterers provides premium catering services for weddings, corporate events, birthday bashes, and outdoor gatherings. Experience culinary excellence with our curated veg and non-veg menus.",
    "heroImage": "/projects/sacaterers-screenshot.png",
    "gallery": [
      {
        "url": "/projects/sacaterers-screenshot.png",
        "caption": "SA Caterers official desktop homepage and primary web interface."
      }
    ],
    "technologies": [
      "React 19",
      "Vite",
      "Tailwind CSS",
      "SEO Schema",
      "Mobile Optimization",
      "Lucide Icons"
    ],
    "metrics": [
      {
        "label": "Deployment",
        "value": "Production Live"
      },
      {
        "label": "Speed",
        "value": "< 1.4s"
      },
      {
        "label": "Design",
        "value": "100% Responsive"
      }
    ],
    "overview": "SA Caterers (www.sacaterers.in) represents a verified production web deployment. Built with modern web engineering standards, intuitive user journeys, and robust cross-browser responsiveness.",
    "problem": "The client required a contemporary digital web presence to establish authority, communicate core value propositions clearly, and provide seamless customer acquisition and inquiry handling on mobile and desktop devices.",
    "objectives": [
      "Design and deploy an authoritative, high-performance web experience tailored to industry standards.",
      "Ensure sub-1.5 second load times on mobile 4G/5G networks through optimized assets and modern bundling.",
      "Implement structured SEO metadata to boost Google organic search visibility for relevant business queries.",
      "Provide frictionless contact, quotation, and service booking workflows with immediate communication triggers."
    ],
    "responsibilities": [
      "Engineered the responsive frontend user interface and component architecture.",
      "Ensured comprehensive cross-browser compatibility across Safari, Chrome, Edge, and mobile browsers.",
      "Configured production DNS, SSL certificates, and hosting deployment pipelines.",
      "Optimized Core Web Vitals to achieve high Google Lighthouse scores."
    ],
    "implementationDetails": [
      "Implemented modular UI components adhering to consistent design tokens and responsive breakpoints.",
      "Integrated asynchronous form validation and notification triggers for customer inquiries.",
      "Structured clean JSON-LD schema markup for enhanced search engine indexing."
    ],
    "challenges": [
      {
        "challenge": "Delivering rapid load times and crisp visual aesthetics across varying network bandwidths.",
        "solution": "Applied next-gen image compression, responsive source sets, and tree-shaken script bundles."
      }
    ],
    "outcome": "Successfully deployed to production at https://www.sacaterers.in/, providing the client with an active, high-converting digital platform that powers daily business operations and client interactions.",
    "liveUrl": "https://www.sacaterers.in/",
    "githubUrl": null
  },
  {
    "id": "landscape-weddings",
    "slug": "landscape-weddings",
    "title": "Landscape Weddings",
    "subtitle": "Landscape Weddings — Ultra-premium cinematic wedding photography and film studio. We craft royal, em...",
    "category": "Business Websites",
    "additionalCategories": [
      "Business Websites",
      "Full Stack"
    ],
    "featured": false,
    "status": "Production / Active",
    "client": "Landscape Weddings",
    "year": "2024 - 2025",
    "role": "Full Stack Web Developer",
    "summary": "Landscape Weddings — Ultra-premium cinematic wedding photography and film studio. We craft royal, emotional visual stories for couples who deserve the extraordinary.",
    "heroImage": "/projects/landscape-weddings-screenshot.png",
    "gallery": [
      {
        "url": "/projects/landscape-weddings-screenshot.png",
        "caption": "Landscape Weddings official desktop homepage and primary web interface."
      }
    ],
    "technologies": [
      "React 19",
      "Vite",
      "Tailwind CSS",
      "SEO Schema",
      "Mobile Optimization",
      "Lucide Icons"
    ],
    "metrics": [
      {
        "label": "Deployment",
        "value": "Production Live"
      },
      {
        "label": "Speed",
        "value": "< 1.4s"
      },
      {
        "label": "Design",
        "value": "100% Responsive"
      }
    ],
    "overview": "Landscape Weddings (landscape-weddings.vercel.app) represents a verified production web deployment. Built with modern web engineering standards, intuitive user journeys, and robust cross-browser responsiveness.",
    "problem": "The client required a contemporary digital web presence to establish authority, communicate core value propositions clearly, and provide seamless customer acquisition and inquiry handling on mobile and desktop devices.",
    "objectives": [
      "Design and deploy an authoritative, high-performance web experience tailored to industry standards.",
      "Ensure sub-1.5 second load times on mobile 4G/5G networks through optimized assets and modern bundling.",
      "Implement structured SEO metadata to boost Google organic search visibility for relevant business queries.",
      "Provide frictionless contact, quotation, and service booking workflows with immediate communication triggers."
    ],
    "responsibilities": [
      "Engineered the responsive frontend user interface and component architecture.",
      "Ensured comprehensive cross-browser compatibility across Safari, Chrome, Edge, and mobile browsers.",
      "Configured production DNS, SSL certificates, and hosting deployment pipelines.",
      "Optimized Core Web Vitals to achieve high Google Lighthouse scores."
    ],
    "implementationDetails": [
      "Implemented modular UI components adhering to consistent design tokens and responsive breakpoints.",
      "Integrated asynchronous form validation and notification triggers for customer inquiries.",
      "Structured clean JSON-LD schema markup for enhanced search engine indexing."
    ],
    "challenges": [
      {
        "challenge": "Delivering rapid load times and crisp visual aesthetics across varying network bandwidths.",
        "solution": "Applied next-gen image compression, responsive source sets, and tree-shaken script bundles."
      }
    ],
    "outcome": "Successfully deployed to production at https://landscape-weddings.vercel.app/, providing the client with an active, high-converting digital platform that powers daily business operations and client interactions.",
    "liveUrl": "https://landscape-weddings.vercel.app/",
    "githubUrl": null
  },
  {
    "id": "goldentreelifespaces",
    "slug": "goldentreelifespaces",
    "title": "Golden Tree Life Spaces",
    "subtitle": "Golden Tree Life Spaces provides premium solar energy solutions in Nellore. Specializing in On-Grid/...",
    "category": "Business Websites",
    "additionalCategories": [
      "Business Websites",
      "Full Stack"
    ],
    "featured": false,
    "status": "Production / Active",
    "client": "Golden Tree Life Spaces",
    "year": "2024 - 2025",
    "role": "Full Stack Web Developer",
    "summary": "Golden Tree Life Spaces provides premium solar energy solutions in Nellore. Specializing in On-Grid/Off-Grid systems, Solar Water Heaters, Agricultural Pumping, and Solar CCTV. Save up to 90% on electricity bills.",
    "heroImage": "/projects/goldentreelifespaces-screenshot.png",
    "gallery": [
      {
        "url": "/projects/goldentreelifespaces-screenshot.png",
        "caption": "Golden Tree Life Spaces official desktop homepage and primary web interface."
      }
    ],
    "technologies": [
      "React 19",
      "Vite",
      "Tailwind CSS",
      "SEO Schema",
      "Mobile Optimization",
      "Lucide Icons"
    ],
    "metrics": [
      {
        "label": "Deployment",
        "value": "Production Live"
      },
      {
        "label": "Speed",
        "value": "< 1.4s"
      },
      {
        "label": "Design",
        "value": "100% Responsive"
      }
    ],
    "overview": "Golden Tree Life Spaces (www.goldentreelifespaces.in) represents a verified production web deployment. Built with modern web engineering standards, intuitive user journeys, and robust cross-browser responsiveness.",
    "problem": "The client required a contemporary digital web presence to establish authority, communicate core value propositions clearly, and provide seamless customer acquisition and inquiry handling on mobile and desktop devices.",
    "objectives": [
      "Design and deploy an authoritative, high-performance web experience tailored to industry standards.",
      "Ensure sub-1.5 second load times on mobile 4G/5G networks through optimized assets and modern bundling.",
      "Implement structured SEO metadata to boost Google organic search visibility for relevant business queries.",
      "Provide frictionless contact, quotation, and service booking workflows with immediate communication triggers."
    ],
    "responsibilities": [
      "Engineered the responsive frontend user interface and component architecture.",
      "Ensured comprehensive cross-browser compatibility across Safari, Chrome, Edge, and mobile browsers.",
      "Configured production DNS, SSL certificates, and hosting deployment pipelines.",
      "Optimized Core Web Vitals to achieve high Google Lighthouse scores."
    ],
    "implementationDetails": [
      "Implemented modular UI components adhering to consistent design tokens and responsive breakpoints.",
      "Integrated asynchronous form validation and notification triggers for customer inquiries.",
      "Structured clean JSON-LD schema markup for enhanced search engine indexing."
    ],
    "challenges": [
      {
        "challenge": "Delivering rapid load times and crisp visual aesthetics across varying network bandwidths.",
        "solution": "Applied next-gen image compression, responsive source sets, and tree-shaken script bundles."
      }
    ],
    "outcome": "Successfully deployed to production at https://www.goldentreelifespaces.in/, providing the client with an active, high-converting digital platform that powers daily business operations and client interactions.",
    "liveUrl": "https://www.goldentreelifespaces.in/",
    "githubUrl": null
  },
  {
    "id": "sgilogistics",
    "slug": "sgilogistics",
    "title": "Sri Ganesh Integrated Logistics",
    "subtitle": "Established in 2001, Sri Ganesh Integrated Logistics provides reliable multimodal solutions includin...",
    "category": "Business Websites",
    "additionalCategories": [
      "Business Websites",
      "Full Stack"
    ],
    "featured": false,
    "status": "Production / Active",
    "client": "Sri Ganesh Integrated Logistics",
    "year": "2024 - 2025",
    "role": "Full Stack Web Developer",
    "summary": "Established in 2001, Sri Ganesh Integrated Logistics provides reliable multimodal solutions including Reefer, Hazardous, ISO Tankers, and ODC cargo transport across India and global routes.",
    "heroImage": "/projects/sgilogistics-screenshot.png",
    "gallery": [
      {
        "url": "/projects/sgilogistics-screenshot.png",
        "caption": "Sri Ganesh Integrated Logistics official desktop homepage and primary web interface."
      }
    ],
    "technologies": [
      "React 19",
      "Vite",
      "Tailwind CSS",
      "SEO Schema",
      "Mobile Optimization",
      "Lucide Icons"
    ],
    "metrics": [
      {
        "label": "Deployment",
        "value": "Production Live"
      },
      {
        "label": "Speed",
        "value": "< 1.4s"
      },
      {
        "label": "Design",
        "value": "100% Responsive"
      }
    ],
    "overview": "Sri Ganesh Integrated Logistics (www.sgilogistics.in) represents a verified production web deployment. Built with modern web engineering standards, intuitive user journeys, and robust cross-browser responsiveness.",
    "problem": "The client required a contemporary digital web presence to establish authority, communicate core value propositions clearly, and provide seamless customer acquisition and inquiry handling on mobile and desktop devices.",
    "objectives": [
      "Design and deploy an authoritative, high-performance web experience tailored to industry standards.",
      "Ensure sub-1.5 second load times on mobile 4G/5G networks through optimized assets and modern bundling.",
      "Implement structured SEO metadata to boost Google organic search visibility for relevant business queries.",
      "Provide frictionless contact, quotation, and service booking workflows with immediate communication triggers."
    ],
    "responsibilities": [
      "Engineered the responsive frontend user interface and component architecture.",
      "Ensured comprehensive cross-browser compatibility across Safari, Chrome, Edge, and mobile browsers.",
      "Configured production DNS, SSL certificates, and hosting deployment pipelines.",
      "Optimized Core Web Vitals to achieve high Google Lighthouse scores."
    ],
    "implementationDetails": [
      "Implemented modular UI components adhering to consistent design tokens and responsive breakpoints.",
      "Integrated asynchronous form validation and notification triggers for customer inquiries.",
      "Structured clean JSON-LD schema markup for enhanced search engine indexing."
    ],
    "challenges": [
      {
        "challenge": "Delivering rapid load times and crisp visual aesthetics across varying network bandwidths.",
        "solution": "Applied next-gen image compression, responsive source sets, and tree-shaken script bundles."
      }
    ],
    "outcome": "Successfully deployed to production at https://www.sgilogistics.in/, providing the client with an active, high-converting digital platform that powers daily business operations and client interactions.",
    "liveUrl": "https://www.sgilogistics.in/",
    "githubUrl": null
  },
  {
    "id": "kpfurniture",
    "slug": "kpfurniture",
    "title": "KP Furniture",
    "subtitle": "KP Furniture - Premium manufacturer of sofas, cots, mattresses, dining tables, and office furniture ...",
    "category": "E-commerce",
    "additionalCategories": [
      "E-commerce",
      "Full Stack"
    ],
    "featured": false,
    "status": "Production / Active",
    "client": "KP Furniture",
    "year": "2024 - 2025",
    "role": "Full Stack Web Developer",
    "summary": "KP Furniture - Premium manufacturer of sofas, cots, mattresses, dining tables, and office furniture in Guntur. Custom designs, quality craftsmanship since 1998.",
    "heroImage": "/projects/kpfurniture-screenshot.png",
    "gallery": [
      {
        "url": "/projects/kpfurniture-screenshot.png",
        "caption": "KP Furniture official desktop homepage and primary web interface."
      }
    ],
    "technologies": [
      "React 19",
      "Next.js",
      "PostgreSQL",
      "Razorpay",
      "Tailwind CSS",
      "Cart State"
    ],
    "metrics": [
      {
        "label": "Deployment",
        "value": "Production Live"
      },
      {
        "label": "Speed",
        "value": "< 1.4s"
      },
      {
        "label": "Design",
        "value": "100% Responsive"
      }
    ],
    "overview": "KP Furniture (www.kpfurniture.co.in) represents a verified production web deployment. Built with modern web engineering standards, intuitive user journeys, and robust cross-browser responsiveness.",
    "problem": "The client required a contemporary digital web presence to establish authority, communicate core value propositions clearly, and provide seamless customer acquisition and inquiry handling on mobile and desktop devices.",
    "objectives": [
      "Design and deploy an authoritative, high-performance web experience tailored to industry standards.",
      "Ensure sub-1.5 second load times on mobile 4G/5G networks through optimized assets and modern bundling.",
      "Implement structured SEO metadata to boost Google organic search visibility for relevant business queries.",
      "Provide frictionless contact, quotation, and service booking workflows with immediate communication triggers."
    ],
    "responsibilities": [
      "Engineered the responsive frontend user interface and component architecture.",
      "Ensured comprehensive cross-browser compatibility across Safari, Chrome, Edge, and mobile browsers.",
      "Configured production DNS, SSL certificates, and hosting deployment pipelines.",
      "Optimized Core Web Vitals to achieve high Google Lighthouse scores."
    ],
    "implementationDetails": [
      "Implemented modular UI components adhering to consistent design tokens and responsive breakpoints.",
      "Integrated asynchronous form validation and notification triggers for customer inquiries.",
      "Structured clean JSON-LD schema markup for enhanced search engine indexing."
    ],
    "challenges": [
      {
        "challenge": "Delivering rapid load times and crisp visual aesthetics across varying network bandwidths.",
        "solution": "Applied next-gen image compression, responsive source sets, and tree-shaken script bundles."
      }
    ],
    "outcome": "Successfully deployed to production at https://www.kpfurniture.co.in/, providing the client with an active, high-converting digital platform that powers daily business operations and client interactions.",
    "liveUrl": "https://www.kpfurniture.co.in/",
    "githubUrl": null
  },
  {
    "id": "taxwizsolutions",
    "slug": "taxwizsolutions",
    "title": "tax-wiz",
    "subtitle": "Taxwiz Solutions Official Enterprise Web Application",
    "category": "Finance",
    "additionalCategories": [
      "Finance",
      "Full Stack"
    ],
    "featured": false,
    "status": "Production / Active",
    "client": "tax-wiz",
    "year": "2024 - 2025",
    "role": "Full Stack Web Developer",
    "summary": "tax-wiz is a modern, responsive production web application engineered for optimal performance, clean typography, cross-device compatibility, and verified business outcomes.",
    "heroImage": "/projects/taxwizsolutions-screenshot.png",
    "gallery": [
      {
        "url": "/projects/taxwizsolutions-screenshot.png",
        "caption": "tax-wiz official desktop homepage and primary web interface."
      }
    ],
    "technologies": [
      "React 19",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Tailwind CSS",
      "REST APIs"
    ],
    "metrics": [
      {
        "label": "Deployment",
        "value": "Production Live"
      },
      {
        "label": "Speed",
        "value": "< 1.4s"
      },
      {
        "label": "Design",
        "value": "100% Responsive"
      }
    ],
    "overview": "tax-wiz (www.taxwizsolutions.online) represents a verified production web deployment. Built with modern web engineering standards, intuitive user journeys, and robust cross-browser responsiveness.",
    "problem": "The client required a contemporary digital web presence to establish authority, communicate core value propositions clearly, and provide seamless customer acquisition and inquiry handling on mobile and desktop devices.",
    "objectives": [
      "Design and deploy an authoritative, high-performance web experience tailored to industry standards.",
      "Ensure sub-1.5 second load times on mobile 4G/5G networks through optimized assets and modern bundling.",
      "Implement structured SEO metadata to boost Google organic search visibility for relevant business queries.",
      "Provide frictionless contact, quotation, and service booking workflows with immediate communication triggers."
    ],
    "responsibilities": [
      "Engineered the responsive frontend user interface and component architecture.",
      "Ensured comprehensive cross-browser compatibility across Safari, Chrome, Edge, and mobile browsers.",
      "Configured production DNS, SSL certificates, and hosting deployment pipelines.",
      "Optimized Core Web Vitals to achieve high Google Lighthouse scores."
    ],
    "implementationDetails": [
      "Implemented modular UI components adhering to consistent design tokens and responsive breakpoints.",
      "Integrated asynchronous form validation and notification triggers for customer inquiries.",
      "Structured clean JSON-LD schema markup for enhanced search engine indexing."
    ],
    "challenges": [
      {
        "challenge": "Delivering rapid load times and crisp visual aesthetics across varying network bandwidths.",
        "solution": "Applied next-gen image compression, responsive source sets, and tree-shaken script bundles."
      }
    ],
    "outcome": "Successfully deployed to production at https://www.taxwizsolutions.online/, providing the client with an active, high-converting digital platform that powers daily business operations and client interactions.",
    "liveUrl": "https://www.taxwizsolutions.online/",
    "githubUrl": null
  },
  {
    "id": "atlasfitnesselite",
    "slug": "atlasfitnesselite",
    "title": "Atlas Fitness Elite",
    "subtitle": "Atlas Fitness Elite Official Enterprise Web Application",
    "category": "Business Websites",
    "additionalCategories": [
      "Business Websites",
      "Full Stack"
    ],
    "featured": false,
    "status": "Production / Active",
    "client": "Atlas Fitness Elite",
    "year": "2024 - 2025",
    "role": "Full Stack Web Developer",
    "summary": "Atlas Fitness Elite is a modern, responsive production web application engineered for optimal performance, clean typography, cross-device compatibility, and verified business outcomes.",
    "heroImage": "/projects/atlasfitnesselite-screenshot.png",
    "gallery": [
      {
        "url": "/projects/atlasfitnesselite-screenshot.png",
        "caption": "Atlas Fitness Elite official desktop homepage and primary web interface."
      }
    ],
    "technologies": [
      "React 19",
      "Vite",
      "Tailwind CSS",
      "SEO Schema",
      "Mobile Optimization",
      "Lucide Icons"
    ],
    "metrics": [
      {
        "label": "Deployment",
        "value": "Production Live"
      },
      {
        "label": "Speed",
        "value": "< 1.4s"
      },
      {
        "label": "Design",
        "value": "100% Responsive"
      }
    ],
    "overview": "Atlas Fitness Elite (www.atlasfitnesselite.com) represents a verified production web deployment. Built with modern web engineering standards, intuitive user journeys, and robust cross-browser responsiveness.",
    "problem": "The client required a contemporary digital web presence to establish authority, communicate core value propositions clearly, and provide seamless customer acquisition and inquiry handling on mobile and desktop devices.",
    "objectives": [
      "Design and deploy an authoritative, high-performance web experience tailored to industry standards.",
      "Ensure sub-1.5 second load times on mobile 4G/5G networks through optimized assets and modern bundling.",
      "Implement structured SEO metadata to boost Google organic search visibility for relevant business queries.",
      "Provide frictionless contact, quotation, and service booking workflows with immediate communication triggers."
    ],
    "responsibilities": [
      "Engineered the responsive frontend user interface and component architecture.",
      "Ensured comprehensive cross-browser compatibility across Safari, Chrome, Edge, and mobile browsers.",
      "Configured production DNS, SSL certificates, and hosting deployment pipelines.",
      "Optimized Core Web Vitals to achieve high Google Lighthouse scores."
    ],
    "implementationDetails": [
      "Implemented modular UI components adhering to consistent design tokens and responsive breakpoints.",
      "Integrated asynchronous form validation and notification triggers for customer inquiries.",
      "Structured clean JSON-LD schema markup for enhanced search engine indexing."
    ],
    "challenges": [
      {
        "challenge": "Delivering rapid load times and crisp visual aesthetics across varying network bandwidths.",
        "solution": "Applied next-gen image compression, responsive source sets, and tree-shaken script bundles."
      }
    ],
    "outcome": "Successfully deployed to production at https://www.atlasfitnesselite.com/, providing the client with an active, high-converting digital platform that powers daily business operations and client interactions.",
    "liveUrl": "https://www.atlasfitnesselite.com/",
    "githubUrl": null
  },
  {
    "id": "pathwayinternationaledu",
    "slug": "pathwayinternationaledu",
    "title": "Pathway International",
    "subtitle": "Pathway International - Expert international education consultancy for overseas studies. Get guidanc...",
    "category": "Business Websites",
    "additionalCategories": [
      "Business Websites",
      "Full Stack"
    ],
    "featured": false,
    "status": "Production / Active",
    "client": "Pathway International",
    "year": "2024 - 2025",
    "role": "Full Stack Web Developer",
    "summary": "Pathway International - Expert international education consultancy for overseas studies. Get guidance for university admissions, visa assistance, and scholarships for USA, UK, Canada, Australia & Europe.",
    "heroImage": "/projects/pathwayinternationaledu-screenshot.png",
    "gallery": [
      {
        "url": "/projects/pathwayinternationaledu-screenshot.png",
        "caption": "Pathway International official desktop homepage and primary web interface."
      }
    ],
    "technologies": [
      "React 19",
      "Vite",
      "Tailwind CSS",
      "SEO Schema",
      "Mobile Optimization",
      "Lucide Icons"
    ],
    "metrics": [
      {
        "label": "Deployment",
        "value": "Production Live"
      },
      {
        "label": "Speed",
        "value": "< 1.4s"
      },
      {
        "label": "Design",
        "value": "100% Responsive"
      }
    ],
    "overview": "Pathway International (www.pathwayinternationaledu.com) represents a verified production web deployment. Built with modern web engineering standards, intuitive user journeys, and robust cross-browser responsiveness.",
    "problem": "The client required a contemporary digital web presence to establish authority, communicate core value propositions clearly, and provide seamless customer acquisition and inquiry handling on mobile and desktop devices.",
    "objectives": [
      "Design and deploy an authoritative, high-performance web experience tailored to industry standards.",
      "Ensure sub-1.5 second load times on mobile 4G/5G networks through optimized assets and modern bundling.",
      "Implement structured SEO metadata to boost Google organic search visibility for relevant business queries.",
      "Provide frictionless contact, quotation, and service booking workflows with immediate communication triggers."
    ],
    "responsibilities": [
      "Engineered the responsive frontend user interface and component architecture.",
      "Ensured comprehensive cross-browser compatibility across Safari, Chrome, Edge, and mobile browsers.",
      "Configured production DNS, SSL certificates, and hosting deployment pipelines.",
      "Optimized Core Web Vitals to achieve high Google Lighthouse scores."
    ],
    "implementationDetails": [
      "Implemented modular UI components adhering to consistent design tokens and responsive breakpoints.",
      "Integrated asynchronous form validation and notification triggers for customer inquiries.",
      "Structured clean JSON-LD schema markup for enhanced search engine indexing."
    ],
    "challenges": [
      {
        "challenge": "Delivering rapid load times and crisp visual aesthetics across varying network bandwidths.",
        "solution": "Applied next-gen image compression, responsive source sets, and tree-shaken script bundles."
      }
    ],
    "outcome": "Successfully deployed to production at https://www.pathwayinternationaledu.com/, providing the client with an active, high-converting digital platform that powers daily business operations and client interactions.",
    "liveUrl": "https://www.pathwayinternationaledu.com/",
    "githubUrl": null
  },
  {
    "id": "autocollectrecovery",
    "slug": "autocollectrecovery",
    "title": "Auto Collect Recovery Services",
    "subtitle": "Fast, Reliable & Professional Vehicle Recovery Across the UK. 24/7 Emergency Service, Auction Collec...",
    "category": "Business Websites",
    "additionalCategories": [
      "Business Websites",
      "Full Stack"
    ],
    "featured": false,
    "status": "Production / Active",
    "client": "Auto Collect Recovery Services",
    "year": "2024 - 2025",
    "role": "Full Stack Web Developer",
    "summary": "Fast, Reliable & Professional Vehicle Recovery Across the UK. 24/7 Emergency Service, Auction Collection, and Transportation.",
    "heroImage": "/projects/autocollectrecovery-screenshot.png",
    "gallery": [
      {
        "url": "/projects/autocollectrecovery-screenshot.png",
        "caption": "Auto Collect Recovery Services official desktop homepage and primary web interface."
      }
    ],
    "technologies": [
      "React 19",
      "Vite",
      "Tailwind CSS",
      "SEO Schema",
      "Mobile Optimization",
      "Lucide Icons"
    ],
    "metrics": [
      {
        "label": "Deployment",
        "value": "Production Live"
      },
      {
        "label": "Speed",
        "value": "< 1.4s"
      },
      {
        "label": "Design",
        "value": "100% Responsive"
      }
    ],
    "overview": "Auto Collect Recovery Services (www.autocollectrecovery.co.uk) represents a verified production web deployment. Built with modern web engineering standards, intuitive user journeys, and robust cross-browser responsiveness.",
    "problem": "The client required a contemporary digital web presence to establish authority, communicate core value propositions clearly, and provide seamless customer acquisition and inquiry handling on mobile and desktop devices.",
    "objectives": [
      "Design and deploy an authoritative, high-performance web experience tailored to industry standards.",
      "Ensure sub-1.5 second load times on mobile 4G/5G networks through optimized assets and modern bundling.",
      "Implement structured SEO metadata to boost Google organic search visibility for relevant business queries.",
      "Provide frictionless contact, quotation, and service booking workflows with immediate communication triggers."
    ],
    "responsibilities": [
      "Engineered the responsive frontend user interface and component architecture.",
      "Ensured comprehensive cross-browser compatibility across Safari, Chrome, Edge, and mobile browsers.",
      "Configured production DNS, SSL certificates, and hosting deployment pipelines.",
      "Optimized Core Web Vitals to achieve high Google Lighthouse scores."
    ],
    "implementationDetails": [
      "Implemented modular UI components adhering to consistent design tokens and responsive breakpoints.",
      "Integrated asynchronous form validation and notification triggers for customer inquiries.",
      "Structured clean JSON-LD schema markup for enhanced search engine indexing."
    ],
    "challenges": [
      {
        "challenge": "Delivering rapid load times and crisp visual aesthetics across varying network bandwidths.",
        "solution": "Applied next-gen image compression, responsive source sets, and tree-shaken script bundles."
      }
    ],
    "outcome": "Successfully deployed to production at https://www.autocollectrecovery.co.uk/, providing the client with an active, high-converting digital platform that powers daily business operations and client interactions.",
    "liveUrl": "https://www.autocollectrecovery.co.uk/",
    "githubUrl": null
  },
  {
    "id": "chatpatidelhi",
    "slug": "chatpatidelhi",
    "title": "Chatpati Delhi",
    "subtitle": "Experience authentic Delhi street food at Chatpati Delhi. Serving delicious chaats, thalis, curries,...",
    "category": "Business Websites",
    "additionalCategories": [
      "Business Websites",
      "Full Stack"
    ],
    "featured": false,
    "status": "Production / Active",
    "client": "Chatpati Delhi",
    "year": "2024 - 2025",
    "role": "Full Stack Web Developer",
    "summary": "Experience authentic Delhi street food at Chatpati Delhi. Serving delicious chaats, thalis, curries, and traditional Indian dishes made with love. Order now!",
    "heroImage": "/projects/chatpatidelhi-screenshot.png",
    "gallery": [
      {
        "url": "/projects/chatpatidelhi-screenshot.png",
        "caption": "Chatpati Delhi official desktop homepage and primary web interface."
      }
    ],
    "technologies": [
      "React 19",
      "Vite",
      "Tailwind CSS",
      "SEO Schema",
      "Mobile Optimization",
      "Lucide Icons"
    ],
    "metrics": [
      {
        "label": "Deployment",
        "value": "Production Live"
      },
      {
        "label": "Speed",
        "value": "< 1.4s"
      },
      {
        "label": "Design",
        "value": "100% Responsive"
      }
    ],
    "overview": "Chatpati Delhi (chatpatidelhi.com) represents a verified production web deployment. Built with modern web engineering standards, intuitive user journeys, and robust cross-browser responsiveness.",
    "problem": "The client required a contemporary digital web presence to establish authority, communicate core value propositions clearly, and provide seamless customer acquisition and inquiry handling on mobile and desktop devices.",
    "objectives": [
      "Design and deploy an authoritative, high-performance web experience tailored to industry standards.",
      "Ensure sub-1.5 second load times on mobile 4G/5G networks through optimized assets and modern bundling.",
      "Implement structured SEO metadata to boost Google organic search visibility for relevant business queries.",
      "Provide frictionless contact, quotation, and service booking workflows with immediate communication triggers."
    ],
    "responsibilities": [
      "Engineered the responsive frontend user interface and component architecture.",
      "Ensured comprehensive cross-browser compatibility across Safari, Chrome, Edge, and mobile browsers.",
      "Configured production DNS, SSL certificates, and hosting deployment pipelines.",
      "Optimized Core Web Vitals to achieve high Google Lighthouse scores."
    ],
    "implementationDetails": [
      "Implemented modular UI components adhering to consistent design tokens and responsive breakpoints.",
      "Integrated asynchronous form validation and notification triggers for customer inquiries.",
      "Structured clean JSON-LD schema markup for enhanced search engine indexing."
    ],
    "challenges": [
      {
        "challenge": "Delivering rapid load times and crisp visual aesthetics across varying network bandwidths.",
        "solution": "Applied next-gen image compression, responsive source sets, and tree-shaken script bundles."
      }
    ],
    "outcome": "Successfully deployed to production at https://chatpatidelhi.com/, providing the client with an active, high-converting digital platform that powers daily business operations and client interactions.",
    "liveUrl": "https://chatpatidelhi.com/",
    "githubUrl": null
  },
  {
    "id": "pj-finance",
    "slug": "pj-finance",
    "title": "PJ Finance",
    "subtitle": "Loan & Repayment Collection Management System",
    "category": "Finance",
    "additionalCategories": [
      "Full Stack",
      "Finance",
      "Dashboards"
    ],
    "featured": false,
    "status": "Production / Active",
    "client": "PJ Financial Services",
    "year": "2024",
    "role": "Full Stack Developer",
    "summary": "A robust, responsive web application and PWA for micro-finance operators to manage borrower accounts, calculate EMI schedules, record daily/weekly collections, and export legal PDF ledgers.",
    "heroImage": "/projects/screenshot-desktop.png",
    "gallery": [
      {
        "url": "/projects/screenshot-desktop.png",
        "caption": "Finance dashboard showing overall loan disbursements, pending dues, and collection ratios."
      }
    ],
    "technologies": [
      "React 19",
      "Express.js",
      "Node.js",
      "Neon PostgreSQL",
      "Google OAuth",
      "JWT",
      "Recharts",
      "jsPDF",
      "Tailwind CSS"
    ],
    "metrics": [
      {
        "label": "Collection Speed",
        "value": "Instant Receipt"
      },
      {
        "label": "Architecture",
        "value": "PWA + REST"
      },
      {
        "label": "Database",
        "value": "Neon Serverless"
      }
    ],
    "overview": "Local financing and lending operations frequently suffer from manual paperwork, missed repayment track records, and reconciliation delays. PJ Finance replaces manual notebooks with a responsive, offline-tolerant collection management portal.",
    "problem": "Field agents collecting payments lacked a reliable mobile interface with automatic interest calculation, receipt generation, and real-time dashboard sync for the administration team.",
    "objectives": [
      "Streamline borrower onboarding with KYC details and flexible interest repayment models.",
      "Empower field agents to record collections on mobile devices in seconds with downloadable PDF receipts.",
      "Provide administrators with aggregate analytics on cashflow, default rates, and branch performance."
    ],
    "responsibilities": [
      "Engineered full-stack architecture combining React 19 frontend with Express.js REST API.",
      "Implemented secure authentication using Google OAuth alongside JWT sessions.",
      "Designed PostgreSQL tables with relational integrity for loans, repayments, and audit logs."
    ],
    "implementationDetails": [
      "Built custom interest calculation algorithms accommodating grace periods and penalty fees.",
      "Configured serverless PostgreSQL via Neon for high availability and low latency."
    ],
    "challenges": [
      {
        "challenge": "Generating consistent, printable receipts directly from mobile phones without a desktop printer.",
        "solution": "Integrated vector-based PDF generation formatted specifically for thermal 80mm printers."
      }
    ],
    "outcome": "Eliminated reconciliation errors for client operations and slashed daily payment recording time.",
    "liveUrl": "https://pj-finance.vercel.app",
    "githubUrl": null
  },
  {
    "id": "dropyhub",
    "slug": "dropyhub",
    "title": "Dropyhub",
    "subtitle": "Delivery Partner Ecosystem & Last-Mile Logistics Dispatch Platform",
    "category": "Full Stack",
    "additionalCategories": [
      "Full Stack",
      "Business Websites",
      "Dashboards"
    ],
    "featured": false,
    "status": "Active Professional Role",
    "client": "Dropyhub (Hyderabad)",
    "year": "2024 - Present",
    "role": "Full Stack Developer",
    "summary": "Currently contributing as a Full Stack Developer at Dropyhub (Hyderabad), building responsive partner onboarding portals, fleet management interfaces, robust backend REST APIs, and operational workflows connecting delivery executives with Swiggy, Zomato, Blinkit, and Amazon.",
    "heroImage": "/projects/dropyhub-screenshot.png",
    "gallery": [
      {
        "url": "/projects/dropyhub-screenshot.png",
        "caption": "Dropyhub official delivery partner ecosystem and logistics platform."
      }
    ],
    "technologies": [
      "React 19",
      "Node.js",
      "Express.js",
      "REST APIs",
      "Tailwind CSS",
      "State Management",
      "High-Density DataTables"
    ],
    "metrics": [
      {
        "label": "Partner Network",
        "value": "Swiggy • Zomato • Zepto"
      },
      {
        "label": "Fleet Type",
        "value": "EV & Bike Logistics"
      },
      {
        "label": "Engineering Role",
        "value": "Full Stack Developer"
      }
    ],
    "overview": "Dropyhub (dropyhub.com) is a major delivery partner and fleet aggregation ecosystem headquartered in Hyderabad, Telangana. It empowers delivery executives with zero-fee onboarding, accidental insurance coverage, EV vehicle rentals, instant emergency loans, and performance rewards while dispatching last-mile fulfillment across leading quick-commerce giants.",
    "problem": "Managing thousands of distributed delivery executives across multiple quick-commerce client accounts requires lightning-fast onboarding forms, document KYC verification, and rock-solid dispatch dashboards that perform flawlessly under heavy live data loads.",
    "objectives": [
      "Develop maintainable React frontend components for partner onboarding and operations dispatchers.",
      "Build secure, performant RESTful endpoints supporting partner lifecycle states and document uploads.",
      "Optimize frontend bundle sizes and eliminate layout shifts for field usage across budget smartphones."
    ],
    "responsibilities": [
      "Developing and shipping production full-stack features across the web stack.",
      "Collaborating with product stakeholders to translate operational requirements into scalable code.",
      "Refactoring legacy UI modules into reusable, modular component libraries.",
      "Ensuring API resilience, data validation, and robust client-side error boundaries."
    ],
    "implementationDetails": [
      "Built clean, accessible UI components adhering to design standards and responsive breakpoints.",
      "Created unit-tested API controllers with comprehensive input validation and structured logging.",
      "Implemented high-density data tables with client-side search, filtering, and status pagination."
    ],
    "challenges": [
      {
        "challenge": "Handling complex live state transitions and high data throughput without UI lag.",
        "solution": "Employed memoized selectors and debounced search filters to eliminate redundant component re-renders."
      }
    ],
    "outcome": "Consistent delivery of production-ready features supporting daily partner onboarding and seamless dispatch operations.",
    "liveUrl": "https://dropyhub.com/",
    "githubUrl": null
  }
];
