export interface PainPoint {
  id: string;
  question: string;
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
}

export interface ProductCategory {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  hsCode: string;
  topMarkets: string[];
  margin: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

// ============================================================================
// CENTRAL WEBINAR PRICING SOURCE OF TRUTH
// ============================================================================
export const WEBINAR_PRICE_CONFIG = {
  amount: 9, // numeric in INR
  currency: "INR",
  currencySymbol: "₹",
  formatted: "₹9",
  originalValue: "₹14,999",
  isSpecialOffer: true,
  pricingNote: "Limited-seat live masterclass for Indian professionals, traders, students & beginners.",
};

// Brand Line:
// EXPORT EASY HAI
// Explore. Learn. Export.

export const BRAND_NAME = "EXPORT EASY HAI";
export const BRAND_TAGLINE = "Explore. Learn. Export.";

// Navigation:
// • Home
// • The Opportunity
// • How It Works
// • Products
// • Live Batch
// • Webinar
// • About
// • FAQs
export const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "The Opportunity", href: "#opportunity" },
  { label: "Products", href: "#products" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Live Batch", href: "#live-batch" },
  { label: "About", href: "#about" },
  { label: "FAQs", href: "#faq" },
];

// 1. Hero Section:
export const HERO_CONTENT = {
  eyebrow: "FOR PROFESSIONALS, TRADERS, STUDENTS & ASPIRING EXPORTERS",
  headlineMain: "QUIT 9 TO 5.",
  headlineSub: "BUILD AN EXPORT BUSINESS.",
  supportingCopy:
    "Learn how to start an India-to-Gulf export business with a practical, step-by-step roadmap—so you can move from confusion to your first shipment with greater clarity and confidence.",
  positioningNote:
    "Build your export business with the right six-month roadmap, consistent execution, and expert guidance. This is a target roadmap, not a guaranteed result.",
  primaryCTA: `Reserve Your ${WEBINAR_PRICE_CONFIG.formatted} Webinar Seat`,
  secondaryCTA: "See How It Works",
  trustStrip: [
    "Beginner-friendly guidance",
    "India-to-Gulf export focus (Dubai, Kuwait, Qatar)",
    "Live Hinglish training",
    "Documentation and compliance support",
  ],
};

// 2. Problem Section:
export const PROBLEM_CONTENT = {
  heading: "Your Job Pays the Bills. But Is It Building Your Future?",
  subcopy1:
    "A 9-to-5 job can give you stability. But if you want ownership, independence, and a business of your own, waiting for the “perfect time” can keep you stuck for years.",
  subcopy2: "You may already be thinking about exporting, but questions hold you back:",
  questions: [
    "Which product should I export?",
    "How do I find genuine buyers in the Gulf?",
    "What documents are required?",
    "How do I avoid customs delays and costly mistakes?",
    "How can I trust a supplier or buyer I have never met?",
    "Can I start while continuing my job?",
  ],
  closingLine:
    "You do not need more random information. You need a clear process and practical support.",
};

// 3. Opportunity Section:
export const OPPORTUNITY_CONTENT = {
  heading: "Indian Products. Gulf Demand. A Practical Business Opportunity.",
  body1:
    "The Gulf market includes the UAE, Saudi Arabia, Qatar, Oman, Kuwait, and Bahrain. Indian products across multiple categories are already familiar to buyers in these markets.",
  body2:
    "Export Easy Hai helps beginners understand how to evaluate products, choose a suitable market, verify business contacts, prepare documents, and plan a shipment responsibly.",
  categoriesList: [
    "Textiles and apparel",
    "Food and agricultural products",
    "Spices and packaged goods",
    "Handicrafts and home décor",
    "Engineering goods and components",
    "Home and lifestyle products",
    "Beauty and personal-care products",
    "Other suitable Indian products based on demand and compliance requirements",
  ],
  cta: "Explore the Export Roadmap",
  complianceNote:
    "Product suitability, margins, licences, duties, and import requirements vary by product and destination. Always verify current requirements before committing money to a shipment.",
};

// 4. What Export Easy Hai Helps You Do:
export const WHAT_WE_HELP_DO = {
  heading: "From “I Want to Export” to “I Know My Next Step.”",
  subcopy:
    "Export Easy Hai is designed for complete beginners—especially working professionals who want to build a business beyond their salary but do not know where to start.",
  learningPoints: [
    "Select products with realistic Gulf-market potential",
    "Identify the right target country and customer",
    "Find and verify suppliers and buyers",
    "Set up your export business entity legally",
    "Understand IEC, GST, AD Code, invoices, packing lists, shipping bills, and related documents",
    "Coordinate with freight forwarders and logistics partners",
    "Reduce avoidable customs and documentation errors",
    "Choose safer payment terms and reduce fraud risk",
    "Prepare for your first shipment step by step",
    "Build a repeatable process for future orders",
  ],
  cta: "Start With the Beginner Roadmap",
};

// 5. How It Works:
export const HOW_IT_WORKS_CONTENT = {
  heading: "A Clearer Path to Your First Export Shipment",
  steps: [
    {
      number: "01",
      title: "Choose a suitable product",
      description:
        "Understand product demand, sourcing options, compliance requirements, and realistic margins before making a decision.",
    },
    {
      number: "02",
      title: "Select your Gulf market",
      description:
        "Compare opportunities across the UAE, Saudi Arabia, Qatar, Oman, Kuwait, and Bahrain based on product fit and buyer demand.",
    },
    {
      number: "03",
      title: "Find and verify business contacts",
      description:
        "Learn how to identify genuine suppliers and buyers, check business details, and recognise common warning signs.",
    },
    {
      number: "04",
      title: "Set up legally",
      description:
        "Understand the basic business setup, registrations, export permissions, and compliance steps required for your situation.",
    },
    {
      number: "05",
      title: "Prepare the documents",
      description:
        "Follow a practical documentation process to reduce errors, delays, and last-minute confusion.",
    },
    {
      number: "06",
      title: "Plan the shipment",
      description:
        "Understand freight options, packaging, insurance, customs coordination, and the responsibilities of each party.",
    },
    {
      number: "07",
      title: "Execute and improve",
      description:
        "Use what you learn from the first shipment to create a more reliable and scalable export process.",
    },
  ],
  cta: "See the Full Export Process",
};

// 6. Webinar Offer Section:
export const WEBINAR_CONTENT = {
  eyebrow: "EXPORT BUSINESS MASTER CLASS",
  title: "Export Business Master Class",
  subhead: "Export Business Master Class (Live 3-Hour Workshop)",
  description:
    "A live, practical 3-hour masterclass for working professionals, traders, students, and beginners who want to understand how to start exporting from India to Gulf markets (Dubai, Kuwait, Qatar, Saudi Arabia).",
  learnList: [
    "How to start exporting from India step by step",
    "How to evaluate and choose profitable products",
    "How to choose the right Gulf country (Dubai, Kuwait, Qatar)",
    "How to find and verify genuine buyers and suppliers",
    "How to set up your export business legally (IEC, GST, HS codes, Bank AD Code)",
    "International payment terms, LC, Forex & freight coordination",
    "Customs clearance (ICEGATE) and shipment planning",
    "How to avoid scams, fraud, and expensive rookie mistakes",
    "A practical six-month export action roadmap",
  ],
  receiveList: [
    "Beginner export roadmap",
    "Product-selection checklist",
    "Buyer-verification checklist",
    "Export documentation checklist",
    "Workbook and templates",
    "Bonus materials & community access",
  ],
  details: {
    format: "Live online webinar",
    platform: "Zoom",
    language: "Hinglish",
    duration: "3 Hours",
    schedule: "Every Sunday at 1:00 PM IST",
    fee: WEBINAR_PRICE_CONFIG.formatted,
    amount: WEBINAR_PRICE_CONFIG.amount,
    originalValue: WEBINAR_PRICE_CONFIG.originalValue,
    seats: "Limited to 300 participants per session",
    recording: "Not included; live attendance only",
    reminders: "WhatsApp reminders & Zoom access link included",
    whatsappNumber: "9131676447",
  },
  primaryCTA: `Reserve My Seat for ${WEBINAR_PRICE_CONFIG.formatted}`,
  paymentNote:
    "Complete your payment securely through Razorpay. After successful payment, you will receive WhatsApp confirmation with the Zoom access link.",
  refundNote:
    "No refunds are offered after registration. Please review the webinar details before completing payment.",
  disclaimer:
    "The six-month roadmap is an educational framework and not a promise of income, orders, profits, or business success. Results depend on product choice, capital, execution, market conditions, compliance, and other factors.",
};

// ============================================================================
// WHO IS THIS WEBINAR FOR (Audience Suitability)
// ============================================================================
export const WHO_IS_THIS_FOR = {
  eyebrow: "WHO SHOULD ATTEND",
  title: "Designed For Ambitious Beginners & Working Professionals",
  subtitle:
    "You do not need to quit your current job or risk significant capital right away. The export process can be learned and prepared alongside your existing responsibilities.",
  audiences: [
    {
      role: "9-to-5 Working Professionals",
      tag: "Flexible Hours",
      desc: "Build an independent export business step by step while maintaining your current salary and career stability.",
    },
    {
      role: "Students & Young Graduates",
      tag: "Career Building",
      desc: "Gain practical international trade knowledge, global compliance skills, and real-world business acumen early on.",
    },
    {
      role: "Domestic Wholesalers & Traders",
      tag: "Market Expansion",
      desc: "Expand beyond saturated domestic markets and tap into high-value currency demand across the Arabian Gulf.",
    },
    {
      role: "Manufacturers & Producers",
      tag: "Direct Exports",
      desc: "Eliminate unnecessary middlemen and export your goods directly to buyers across UAE, Saudi Arabia, and Qatar.",
    },
    {
      role: "Aspiring Exporters & Beginners",
      tag: "Zero Experience",
      desc: "Clear the confusion around IEC, GST, custom documentation, logistics, and foreign exchange from scratch.",
    },
  ],
};

// ============================================================================
// PROBLEMS BEGINNERS FACE (Key Challenges Addressed)
// ============================================================================
export const PROBLEMS_BEGINNERS_FACE = {
  eyebrow: "THE REAL CHALLENGES",
  title: "What Stops Most Beginners From Exporting?",
  subtitle:
    "Most aspiring exporters do not fail from lack of ambition—they stall because of confusing paperwork, unverified contacts, and fear of losing capital.",
  problems: [
    {
      title: "Which product should I export?",
      question: "Which Indian products have realistic demand, profitable margins, and viable shelf-life in Gulf markets?",
      resolution: "We teach a data-backed product-market evaluation framework rather than relying on guesswork.",
    },
    {
      title: "How do I choose the right Gulf country?",
      question: "Should I start in UAE (Dubai), Saudi Arabia, Qatar, Kuwait, Oman, or Bahrain?",
      resolution: "Compare import regulations, local consumer habits, duty structures, and buyer profiles per country.",
    },
    {
      title: "How do I find and verify genuine buyers?",
      question: "How can I tell if an overseas buyer is legitimate before shipping valuable goods?",
      resolution: "Follow a multi-point verification checklist including chamber checks, credit screening, and embassy records.",
    },
    {
      title: "How do I avoid customs delays & payment fraud?",
      question: "What documents are required (IEC, GST, AD Code, ICEGATE) and which payment terms (LC vs Advance) protect me?",
      resolution: "Learn the exact banking and trade documentation protocols refined over 20+ years in international trade forex.",
    },
  ],
};

// ============================================================================
// COMPLETE 11-TOPIC WEBINAR CURRICULUM
// ============================================================================
export const WEBINAR_CURRICULUM = [
  {
    number: "01",
    title: "Introduction to India-to-Gulf Export Opportunities",
    desc: "Understanding the trade corridor connecting India with UAE, Saudi Arabia, Qatar, Kuwait, Oman, and Bahrain.",
  },
  {
    number: "02",
    title: "Product Evaluation & Profit Margin Strategy",
    desc: "How to assess demand, competition, compliance requirements, and realistic export margins without hype.",
  },
  {
    number: "03",
    title: "Gulf Country Selection & Market Nuances",
    desc: "Targeting specific markets (Dubai/UAE, Saudi Arabia, Qatar, etc.) based on your product fit and buyer profiles.",
  },
  {
    number: "04",
    title: "Buyer & Supplier Discovery & Verification Framework",
    desc: "Practical techniques to identify genuine buyers and domestic suppliers—and how to cross-check business legitimacy.",
  },
  {
    number: "05",
    title: "Legal Business Setup & Licensing",
    desc: "The essential registrations: Sole Proprietorship/LLP, IEC (Import Export Code), GST, and RCMC requirements.",
  },
  {
    number: "06",
    title: "Essential Export Documentation",
    desc: "Mastering Proforma Invoices, Commercial Invoices, Packing Lists, Certificates of Origin, and Shipping Bills.",
  },
  {
    number: "07",
    title: "Payment Terms, Letter of Credit (LC) & Forex Risk",
    desc: "How to structure payments (Advance, LC, DA/DP), manage currency fluctuation, and safeguard your funds.",
  },
  {
    number: "08",
    title: "Logistics, Freight Forwarding & Incoterms",
    desc: "Selecting air vs. sea freight, working with reliable freight forwarders, and understanding FOB vs. CIF terms.",
  },
  {
    number: "09",
    title: "Customs Clearance & ICEGATE Procedures",
    desc: "Navigating port clearance, AD Code registration at custom ports, and preventing costly port demurrage fees.",
  },
  {
    number: "10",
    title: "Fraud Prevention & Scam Avoidance",
    desc: "Recognizing red flags, unverified intermediaries, fake purchase orders, and payment trap scenarios.",
  },
  {
    number: "11",
    title: "The 6-Month Action Roadmap",
    desc: "A structured timeline mapping out each milestone from initial preparation to executing your first live shipment.",
  },
];

// ============================================================================
// RESOURCES INCLUDED WITH WEBINAR REGISTRATION
// ============================================================================
export const WEBINAR_RESOURCES = [
  {
    title: "Beginner Export Action Roadmap",
    format: "Digital PDF Guide",
    desc: "Structured milestone-by-milestone framework guiding your six-month preparation plan.",
  },
  {
    title: "Product Selection & HS Code Checklist",
    format: "Evaluation Matrix",
    desc: "Practical tool to evaluate product viability, Gulf demand, and tariff classifications.",
  },
  {
    title: "Buyer Verification & Due Diligence Checklist",
    format: "Verification Guide",
    desc: "Essential questions and verification channels to test potential buyers before shipping.",
  },
  {
    title: "Export Documentation Checklist",
    format: "Compliance Summary",
    desc: "Step-by-step documentation inventory covering IEC, GST, AD Code, and customs paperwork.",
  },
  {
    title: "Practical Workbook & Shipment Templates",
    format: "Printable / Digital Workbook",
    desc: "Sample commercial invoices, packing lists, and inquiry templates formatted for international standards.",
  },
  {
    title: "Community Access & Live Q&A Replay Access",
    format: "WhatsApp Community",
    desc: "Direct access to session reminders, follow-up notifications, and masterclass resources.",
  },
];

// ============================================================================
// GULF MARKETS & PRODUCT CATEGORIES NOTICE
// ============================================================================
export const GULF_MARKETS_INFO = {
  focus: "Export only — shipping Indian products to Arabian Gulf markets.",
  countries: [
    { name: "United Arab Emirates", highlight: "Dubai & Abu Dhabi hubs" },
    { name: "Kingdom of Saudi Arabia", highlight: "Riyadh & Jeddah markets" },
    { name: "Qatar", highlight: "Doha commercial sector" },
    { name: "Kuwait", highlight: "Kuwait City retail & wholesale" },
    { name: "Oman", highlight: "Muscat trade corridor" },
    { name: "Bahrain", highlight: "Manama distribution" },
  ],
  importantNotice:
    "We provide a structured educational framework to help you discover, vet, and qualify genuine buyers and suppliers directly. We do NOT sell pre-packaged buyer lists, database CDs, or fabricated trade contacts, as unverified lists frequently lead to fraud and customs complications.",
};

// 7. Why Learn With Us:
export const WHY_LEARN_WITH_US = {
  heading: "Practical Guidance. Fewer Expensive Mistakes.",
  subcopy:
    "Starting your first shipment can feel risky when you are unfamiliar with suppliers, buyers, customs, payments, and paperwork. Our approach is built around helping beginners understand the process before they commit their money.",
  practicalPoints: [
    {
      title: "End-to-end execution support",
      desc: "Understand the journey from product selection to shipment planning.",
    },
    {
      title: "Gulf-focused guidance",
      desc: "Learn about Dubai (UAE), Kuwait, Qatar, Saudi Arabia, Oman, and Bahrain.",
    },
    {
      title: "Supplier and buyer verification",
      desc: "Use a structured process instead of trusting unverified contacts.",
    },
    {
      title: "Documentation support",
      desc: "Understand the documents and sequence involved in export execution.",
    },
    {
      title: "Legal compliance assistance",
      desc: "Learn the basic setup and compliance steps for starting responsibly.",
    },
    {
      title: "Beginner-friendly teaching",
      desc: "Clear explanations without unnecessary jargon in Hinglish.",
    },
    {
      title: "Live doubt solving",
      desc: "Ask questions and learn through practical examples.",
    },
  ],
  cta: "Learn the Process Before You Ship",
};

// 8. Founder / Mentor Section:
export const MENTOR_CONTENT = {
  name: "Rahul Makwana",
  role: "Export Consultant • International Trade & Forex Mentor",
  title: "Learn With Rahul Makwana",
  tagline: "20+ Years Banking & Trade Finance Experience • 5 Years as Trade Forex Head",
  bio1:
    "Rahul Makwana is a seasoned banking and financial services professional with over 20 years of experience across retail banking, trade finance, foreign exchange, international remittances, business development, and customer relationship management.",
  bio2:
    "Throughout his career, he has held leadership responsibilities with leading banking institutions, including 5 years as Trade Forex Head. He brings extensive practical knowledge of international trade transactions, import-export banking, trade documentation, and regulatory frameworks.",
  bio3:
    "An alumnus of IIM Ahmedabad (Strategic Management) and SP Jain (FinTech), Rahul is also nominated as an Industry Member on the Board of Studies at S.B. Patil Institute of Management, Pune. Through Export Easy Hai, he helps entrepreneurs navigate the journey from domestic business to global export markets.",
  credentials: [
    "20+ Years Banking & Trade Finance Experience",
    "5 Years as Trade Forex Head at Premier Banking Institutions",
    "Professional Certificate in Strategic Management – IIM Ahmedabad",
    "Financial Technology Education – SP Jain",
    "Industry Member – Board of Studies, S.B. Patil Institute of Management, Pune",
    "100+ Shipments Guided • 100+ Clients & Students Supported • 15+ Countries",
  ],
  social: {
    linkedin: "https://www.linkedin.com/in/rahul-makwana-4ba33646/",
    facebook: "https://www.facebook.com/profile.php?id=61583346396603&sk=about",
    whatsapp: "9131676447",
    email: "consult@exporteasyhai.com",
  },
  experienceProof: [
    "20+ Years Banking & Forex Experience",
    "100+ Shipments Guided",
    "100+ Students & Clients Mentored",
  ],
  cta: "Learn From the Export Roadmap",
};

// 9. Products Section:
export const PRODUCTS_CONTENT = {
  heading: "What Can You Export?",
  subcopy1:
    "There is no single “magic product” that guarantees success. The right choice depends on demand, competition, quality, compliance, sourcing, logistics, and your available capital.",
  subcopy2:
    "Export Easy Hai helps you evaluate suitable opportunities across categories such as:",
  categories: [
    {
      id: "textiles",
      title: "Textiles and apparel",
      subtitle: "Garments, fabrics, home linen, and other textile products.",
      image: "/images/prod-textiles.jpg",
      hsCode: "HS 50 - 63",
      topMarkets: ["UAE", "Saudi Arabia", "Oman"],
      margin: "Category Focus",
    },
    {
      id: "food-agri",
      title: "Food and agriculture",
      subtitle: "Spices, rice, herbs, processed foods, and other eligible products.",
      image: "/images/prod-spices.jpg",
      hsCode: "HS 07 - 12",
      topMarkets: ["UAE", "Saudi Arabia", "Qatar"],
      margin: "Category Focus",
    },
    {
      id: "handicrafts",
      title: "Handicrafts and décor",
      subtitle: "Traditional Indian craft products, décor, and lifestyle goods.",
      image: "/images/prod-handicrafts.jpg",
      hsCode: "HS 44 & 74",
      topMarkets: ["UAE", "Kuwait", "Bahrain"],
      margin: "Category Focus",
    },
    {
      id: "engineering",
      title: "Engineering goods",
      subtitle: "Components, tools, machinery-related products, and industrial supplies.",
      image: "/images/prod-engineering.jpg",
      hsCode: "HS 84 - 87",
      topMarkets: ["Saudi Arabia", "UAE", "Oman"],
      margin: "Category Focus",
    },
    {
      id: "home-lifestyle",
      title: "Home and lifestyle",
      subtitle: "Kitchenware, furniture, rugs, utility products, and décor.",
      image: "/images/prod-home-decor.jpg",
      hsCode: "HS 94 & 57",
      topMarkets: ["UAE", "Qatar", "Kuwait"],
      margin: "Category Focus",
    },
    {
      id: "beauty",
      title: "Beauty and personal care",
      subtitle: "Eligible wellness, beauty, herbal, and personal-care products.",
      image: "/images/prod-beauty.jpg",
      hsCode: "HS 3304",
      topMarkets: ["UAE", "Saudi Arabia", "Bahrain"],
      margin: "Category Focus",
    },
  ],
  cta: "Find a Product-Market Fit",
  responsibleClaim:
    "Product margins shown in training are examples for learning, not guaranteed returns. Verify costs, duties, taxes, freight, compliance, and buyer requirements before placing an order.",
};

// 10. Live Batch Section:
export const LIVE_BATCH_CONTENT = {
  heading: "The 4-Month Live Gulf Export Batch",
  subcopy1: "Ready to move beyond learning and work toward your own export business?",
  subcopy2:
    "The four-month live batch is designed for beginners who want structured guidance, accountability, and practical support while preparing to launch and execute their export process.",
  includesTitle: "What the batch includes",
  includes: [
    "Weekly live training sessions",
    "A step-by-step India-to-Gulf export roadmap",
    "Product and market-selection guidance",
    "Supplier and buyer verification guidance",
    "Legal business setup and compliance guidance",
    "Export documentation training",
    "Customs and shipment-planning guidance",
    "Assignments, templates, and checklists",
    "Group doubt-solving support",
    "First-shipment preparation and execution guidance",
    "Practical review of your action plan",
  ],
  expectedOutcomeTitle: "Expected outcome",
  expectedOutcome:
    "By the end of the batch, you should have a clearer export business plan, a selected product-market direction, a legal and documentation checklist, and a structured plan for preparing your first shipment.",
  disclaimer:
    "The batch does not guarantee profits, buyers, orders, or shipment success.",
  cta: "Apply for the Next Batch",
};

// 11. Replace Unverified Success Stories:
export const STORIES_REPLACEMENT_CONTENT = {
  heading: "Learn First. Build Your Story Next.",
  subcopy:
    "Export Easy Hai is focused on helping new learners build their own export journey through practical knowledge and consistent execution.",
  temporaryCopy:
    "You do not need someone else’s success story to begin. You need a clear process, realistic expectations, and the discipline to take the next step.",
  futureProofTitle: "Future proof section",
  futureProofDesc:
    "Real learner stories will be added here as verified students complete milestones such as:",
  milestones: [
    "Legal business setup",
    "Product and market selection",
    "Buyer or supplier verification",
    "First export order",
    "First completed shipment",
    "Repeat order or long-term buyer relationship",
  ],
};

// 12. Objection Section:
export const OBJECTION_CONTENT = {
  heading: "Worried About Losing Money on Your First Shipment?",
  body1:
    "That concern is valid. Customs delays, documentation errors, unreliable suppliers, unclear payment terms, and unverified buyers can create serious problems for beginners.",
  body2:
    "The goal of Export Easy Hai is not to promise zero risk. It is to help you identify risks earlier, make better decisions, and follow a more organised process before shipping.",
  weHelpTitle: "We help you understand how to:",
  points: [
    "Verify business contacts before committing",
    "Check documents before shipment",
    "Ask the right questions of suppliers and buyers",
    "Understand payment and delivery terms",
    "Plan logistics with the right partners",
    "Keep records for compliance and follow-up",
  ],
  cta: "Reduce Confusion Before Your First Shipment",
};

// 13. FAQ Section:
export const FAQS_CONTENT: FAQItem[] = [
  {
    question: "Can a complete beginner start an export business?",
    answer:
      "Yes. You can begin by learning the step-by-step export process, selecting an in-demand product, understanding Gulf import regulations, and completing essential legal registrations (IEC, GST). Our curriculum is specifically designed from the ground up for beginners with zero prior international trade experience.",
  },
  {
    question: "Do I need to quit my 9-to-5 job immediately?",
    answer:
      "No. We strongly recommend learning and validating your export roadmap while continuing your existing job. Initial stages—such as product selection, supplier evaluation, and market research—can be executed part-time during evenings and weekends before committing full-time capital.",
  },
  {
    question: "Which countries and markets are covered in the training?",
    answer:
      "Our training specifically focuses on the Arabian Gulf corridor: the United Arab Emirates (including Dubai and Abu Dhabi), the Kingdom of Saudi Arabia, Qatar, Kuwait, Oman, and Bahrain.",
  },
  {
    question: "Which products can I export from India?",
    answer:
      "High-demand categories include textiles and garments, food, spices and agricultural goods, handicrafts, lifestyle items, engineering goods, and personal care. We teach you how to analyze tariffs, HS codes, and Gulf compliance per product.",
  },
  {
    question: "Do you provide ready-made buyer or supplier lists?",
    answer:
      "No. We do not sell or provide ready-made buyer contact lists. Purchased database lists are notorious for outdated contacts and fraud. Instead, we teach you proven frameworks to find, vet, and verify genuine importers and local suppliers directly.",
  },
  {
    question: "What is your refund policy for the webinar?",
    answer:
      "Due to the live interactive nature and limited seating (capped at 300 participants), registrations are strictly non-refundable once booked. Please review the schedule and details before completing payment.",
  },
  {
    question: "Do I need an existing company, GST, or IEC before attending?",
    answer:
      "No prior business registration or Import Export Code (IEC) is required to attend the masterclass. We will walk you through the exact steps to register your business entity, obtain your IEC, and link your bank AD code properly.",
  },
  {
    question: "How and when will I receive the Zoom joining link?",
    answer:
      "Immediately upon successful payment, you will receive confirmation on WhatsApp and email. The Zoom access link, digital workbook, and masterclass reminders will be sent to your registered WhatsApp number before the session.",
  },
  {
    question: "What language is the masterclass conducted in?",
    answer:
      "The masterclass is conducted live in Hinglish (a practical blend of Hindi and English) to ensure all trade finance and customs concepts are easy to understand.",
  },
  {
    question: "Is profit or first-shipment success guaranteed?",
    answer:
      "No. International trade involves real-world market dynamics, capital requirements, and business execution. Export Easy Hai provides educational frameworks, risk mitigation techniques, and compliance roadmaps, not guarantees of profit or orders.",
  },
  {
    question: "Is one-on-one personal coaching or consulting included?",
    answer:
      "One-on-one consulting is not included in the masterclass. The session is a focused 3-hour group masterclass with live interactive Q&A at the end.",
  },
];

// 14. Final CTA Section:
export const FINAL_CTA_CONTENT = {
  headline: "YOUR NEXT CHAPTER STARTS WITH ONE CLEAR STEP.",
  subcopy:
    "You do not have to understand everything today. Start by learning the process, understanding the risks, and creating a practical roadmap for your India-to-Gulf export journey.",
  primaryCTA: `Reserve Your ${WEBINAR_PRICE_CONFIG.formatted} Seat`,
  secondaryCTA: "View Export Roadmap",
  closingLine:
    "From India to the Gulf. Learn the process. Prepare with clarity. Export with confidence.",
};

// 15. Footer Copy:
export const FOOTER_CONTENT = {
  brand: "EXPORT EASY HAI",
  legalEntity: "Kavneet International",
  tagline: "Explore. Learn. Export.",
  mission:
    "Practical India-to-Gulf export education for working professionals, traders, students, and beginners who want to build a business beyond the 9-to-5.",
  address: "B-9 Mayur Terracess, Behind Emrold City, Shivaji Nagar, Sambhaji Nagar, 431005 Maharashtra",
  contactEmail: "consult@exporteasyhai.com",
  contactWhatsApp: "+91 9131676447",
  whatsappUrl: "https://wa.me/919131676447",
  facebookUrl: "https://www.facebook.com/profile.php?id=61583346396603&sk=about",
  linkedinUrl: "https://www.linkedin.com/in/rahul-makwana-4ba33646/",
  quickLinks: [
    { label: "Home", href: "#hero" },
    { label: "About Rahul Makwana", href: "#founder" },
    { label: "Webinar Details", href: "#webinar-section" },
    { label: "Curriculum", href: "#curriculum" },
    { label: "Our Mission", href: "#mission" },
    { label: "FAQs", href: "#faqs" },
  ],
  legalLinks: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms and Conditions", href: "/terms" },
    { label: "Refund Policy", href: "/refund-policy" },
  ],
  disclaimer:
    "Export Easy Hai (Kavneet International) provides educational content and practical guidance. We do not guarantee profits, buyers, orders, shipment completion, business success, or any specific financial outcome. Participants are responsible for verifying current laws, duties, licences, documentation, suppliers, buyers, and professional advice relevant to their transaction.",
};
