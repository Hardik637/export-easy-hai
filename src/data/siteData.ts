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
  { label: "How It Works", href: "#how-it-works" },
  { label: "Products", href: "#products" },
  { label: "Live Batch", href: "#live-batch" },
  { label: "Webinar", href: "#webinar" },
  { label: "About", href: "#about" },
  { label: "FAQs", href: "#faq" },
];

// 1. Hero Section:
export const HERO_CONTENT = {
  eyebrow: "STUCK IN A 9 TO 5?",
  headlineMain: "QUIT 9 TO 5.",
  headlineSub: "BUILD AN EXPORT BUSINESS.",
  supportingCopy:
    "Learn how to start an India-to-Gulf export business with a practical, step-by-step roadmap—so you can move from confusion to your first shipment with greater clarity and confidence.",
  positioningNote:
    "Build your export business in 6 months with the right roadmap, consistent execution, and expert guidance. This is a target roadmap, not a guaranteed result.",
  primaryCTA: "Reserve Your ₹699 Webinar Seat",
  secondaryCTA: "See How It Works",
  trustStrip: [
    "Beginner-friendly guidance",
    "India-to-Gulf export focus",
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
  eyebrow: "QUIT 9 TO 5. BUILD AN EXPORT BUSINESS IN 6 MONTHS.",
  subhead: "India-to-Gulf Export Starter Webinar",
  description:
    "A live, practical webinar for working professionals and complete beginners who want to understand how to start exporting from India to the Gulf.",
  learnList: [
    "How the India-to-Gulf export model works",
    "How to evaluate product opportunities across multiple categories",
    "How to choose a suitable Gulf market",
    "How to find and verify suppliers and buyers",
    "How to set up your export business legally",
    "Which documents are commonly involved in an export shipment",
    "How to reduce the risk of customs delays and documentation mistakes",
    "How to create a practical six-month export action roadmap",
  ],
  receiveList: [
    "Beginner export roadmap",
    "Product-selection checklist",
    "Buyer-verification checklist",
    "Export documentation checklist",
  ],
  details: {
    format: "Live online webinar",
    platform: "Zoom",
    language: "Hinglish",
    schedule: "Every Sunday at 1:00 PM IST",
    fee: "₹699",
    seats: "Limited to 50 participants per session",
    recording: "Not included; live attendance only",
  },
  primaryCTA: "Reserve My Seat for ₹699",
  paymentNote:
    "Complete your payment securely through Razorpay. After successful payment, you will be redirected to WhatsApp to receive the Zoom link and joining instructions.",
  refundNote:
    "No refunds are offered after registration. Please review the webinar details before completing payment.",
  disclaimer:
    "The six-month roadmap is an educational framework and not a promise of income, orders, profits, or business success. Results depend on product choice, capital, execution, market conditions, compliance, and other factors.",
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
      desc: "Learn about the UAE, Saudi Arabia, Qatar, Oman, Kuwait, and Bahrain.",
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
      desc: "Clear explanations without unnecessary jargon.",
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
  role: "Founder • Mentor • Export Educator",
  title: "Learn With Rahul Makwana",
  bio1:
    "Rahul Makwana helps beginners understand the practical side of building an India-to-Gulf export business—from product selection and business setup to buyer verification, documentation, and shipment execution.",
  bio2:
    "His teaching approach focuses on making export easier to understand, easier to plan, and safer to execute.",
  experienceProof: [
    "Years of export experience",
    "Export shipments and clients supported",
    "Relevant certifications and industry guidance",
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
    question: "Can a complete beginner start exporting?",
    answer:
      "Yes. You can begin by learning the process, selecting a suitable product, understanding the target market, and completing the required legal and documentation steps. Your starting requirements will depend on your product, business structure, destination, and shipment model.",
  },
  {
    question: "Do I need to quit my job immediately?",
    answer:
      "No. Many people first learn and validate their export plan while continuing their existing work. Decide when to make a career change only after reviewing your finances, responsibilities, and business progress.",
  },
  {
    question: "Which countries do you cover?",
    answer:
      "The programme focuses on Gulf markets including the UAE, Saudi Arabia, Qatar, Oman, Kuwait, and Bahrain.",
  },
  {
    question: "Which products can I export?",
    answer:
      "Potential categories include textiles, food and agriculture, handicrafts, engineering goods, home products, beauty products, and other suitable Indian products. Product eligibility and compliance requirements must be checked separately.",
  },
  {
    question: "Is the webinar live or recorded?",
    answer:
      "The ₹699 webinar is live on Zoom and conducted in Hinglish.",
  },
  {
    question: "When is the webinar held?",
    answer: "Every Sunday at 1:00 PM IST.",
  },
  {
    question: "How do I receive the Zoom link?",
    answer:
      "After successful Razorpay payment, you will be redirected to WhatsApp for the Zoom link and joining instructions.",
  },
  {
    question: "Is the webinar refundable?",
    answer: "No. Registrations are non-refundable after payment.",
  },
  {
    question: "What happens after the webinar?",
    answer:
      "If you are ready for structured implementation support, you can apply for the next four-month live Gulf export batch.",
  },
  {
    question: "Is a profitable shipment guaranteed?",
    answer:
      "No. Export results depend on product selection, demand, sourcing, pricing, compliance, logistics, capital, and execution. The programme provides education and guidance, not a guarantee of profit or orders.",
  },
  {
    question: "Is one-on-one coaching available?",
    answer: "One-on-one coaching is not currently being offered.",
  },
];

// 14. Final CTA Section:
export const FINAL_CTA_CONTENT = {
  headline: "YOUR NEXT CHAPTER STARTS WITH ONE CLEAR STEP.",
  subcopy:
    "You do not have to understand everything today. Start by learning the process, understanding the risks, and creating a practical roadmap for your India-to-Gulf export journey.",
  primaryCTA: "Reserve Your ₹699 Webinar Seat",
  secondaryCTA: "Apply for the Next Live Batch",
  closingLine:
    "From India to the Gulf. Learn the process. Prepare with clarity. Export with confidence.",
};

// 15. Footer Copy:
export const FOOTER_CONTENT = {
  brand: "EXPORT EASY HAI",
  tagline: "Explore. Learn. Export.",
  mission:
    "Practical India-to-Gulf export education for beginners who want to build a business beyond the 9-to-5.",
  quickLinks: [
    { label: "Home", href: "#hero" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Products", href: "#products" },
    { label: "Webinar", href: "#webinar" },
    { label: "Live Batch", href: "#live-batch" },
    { label: "About", href: "#about" },
    { label: "FAQs", href: "#faq" },
    { label: "Contact", href: "#footer" },
  ],
  legalLinks: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms and Conditions", href: "#" },
    { label: "Disclaimer", href: "#" },
    { label: "Refund Policy", href: "#" },
  ],
  disclaimer:
    "Export Easy Hai provides educational content and practical guidance. We do not guarantee profits, buyers, orders, shipment completion, business success, or any specific financial outcome. Participants are responsible for verifying current laws, duties, licences, documentation, suppliers, buyers, and professional advice relevant to their transaction.",
  contactEmail: "support@exporteasyhai.com",
};
