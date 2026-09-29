export interface PainPoint {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
  details: string;
  tag: string;
}

export interface ProductCategory {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  hsCode: string;
  topMarkets: string[];
  margin: string;
  tag: string;
}

export interface CourseItem {
  id: string;
  title: string;
  description: string;
  category: string;
  lessons: string;
  access: string;
  image: string;
  badge?: string;
  rating: number;
  students: string;
  price: string;
  originalPrice: string;
  modules: string[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  business: string;
  story: string;
  result: string;
  turnover: string;
  countries: string;
  image: string;
  videoDuration: string;
  quote: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "Reality", href: "#reality" },
  { label: "Opportunity", href: "#opportunity" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Products", href: "#products" },
  { label: "Courses", href: "#courses" },
  { label: "Webinars", href: "#webinar" },
  { label: "Safety", href: "#fraud-prevention" },
  { label: "Success Stories", href: "#success-stories" },
  { label: "FAQ", href: "#faq" },
];

export const TRUST_STATS = [
  { value: "200+", label: "Countries", sub: "Global Reach" },
  { value: "₹8T+", label: "Export Market", sub: "Annual Opportunity" },
  { value: "1000+", label: "Product Categories", sub: "Ready for Export" },
];

export const HERO_PILLS = [
  { title: "Practical Learning", desc: "No Theory Gyan", icon: "GraduationCap" },
  { title: "Fraud Prevention", desc: "& Buyer Verification", icon: "ShieldCheck" },
  { title: "Step-by-Step Guidance", desc: "From India to Global", icon: "Compass" },
  { title: "Lifetime Access", desc: "& Community Support", icon: "Users" },
];

export const PAIN_POINTS: PainPoint[] = [
  {
    id: "routine",
    title: "Same routine every day",
    subtitle: "Trading 40+ hours a week for a fixed paycheck with zero creative or financial upside.",
    icon: "Calendar",
  },
  {
    id: "growth",
    title: "Limited income growth",
    subtitle: "Annual increments barely beat inflation while living expenses multiply rapidly.",
    icon: "TrendingDown",
  },
  {
    id: "freedom",
    title: "No financial freedom",
    subtitle: "Always seeking approval for leave, pay, and career trajectory from management.",
    icon: "Lock",
  },
  {
    id: "dreams",
    title: "Someone else's dreams",
    subtitle: "Pouring peak energy into building corporate wealth instead of your own family legacy.",
    icon: "Briefcase",
  },
];

export const ARBITRAGE_EXAMPLES = [
  {
    product: "Indian Cotton Textiles & Garments",
    domestic: "₹350/kg",
    export: "$25 – $35/kg (₹2,100 – ₹2,900)",
    multiplier: "7.2x Margin",
    flag: "🇺🇸 🇪🇺",
  },
  {
    product: "Single-Origin Lakadong Turmeric",
    domestic: "₹280/kg",
    export: "$32 – $42/kg (₹2,650 – ₹3,500)",
    multiplier: "10.5x Margin",
    flag: "🇬🇧 🇦🇺",
  },
  {
    product: "Handcrafted Moradabad Brass Decor",
    domestic: "₹650/piece",
    export: "$65 – $95/piece (₹5,400 – ₹7,900)",
    multiplier: "9.8x Margin",
    flag: "🇦🇪 🇺🇸",
  },
];

export const TIMELINE_STEPS: StepItem[] = [
  {
    number: "01",
    title: "Choose a product with demand",
    description: "Identify high-margin Indian goods with verified global demand rather than guessing.",
    details: "Learn HS-Code research, domestic sourcing hotspots, and international demand validation techniques.",
    tag: "Product Discovery",
  },
  {
    number: "02",
    title: "Find the right target market",
    description: "Pinpoint countries with zero or low import duties, high buying power, and active import volumes.",
    details: "Analyze trade agreements, free trade policies, and consumer behavior in USA, EU, Gulf, and Asia.",
    tag: "Market Selection",
  },
  {
    number: "03",
    title: "Find & verify genuine buyers",
    description: "Connect with authentic international buyers and eliminate 100% of scammers and fraudulent brokers.",
    details: "Master B2B databases, embassies, trade fairs, and our 5-step background verification framework.",
    tag: "Buyer Acquisition",
  },
  {
    number: "04",
    title: "Handle documentation with ease",
    description: "Navigate IEC, GST, LUT, AD Code, Bill of Lading, and Certificate of Origin without headaches.",
    details: "Ready-to-use checklist templates so you never get stuck at customs or bank counters.",
    tag: "Compliance & Legal",
  },
  {
    number: "05",
    title: "Ship the product safely",
    description: "Coordinate with trusted freight forwarders, choose between FCL/LCL, and secure transit insurance.",
    details: "Incoterms decoded: FOB, CIF, EXW explained with practical cost-saving booking methods.",
    tag: "Logistics & Shipping",
  },
  {
    number: "06",
    title: "Receive international payment",
    description: "Get paid securely through Letter of Credit (LC), Advance TT, or Escrow with zero risk of default.",
    details: "FEMA compliance, BRC/e-BRC closure, and foreign exchange bank processing made simple.",
    tag: "Banking & FX",
  },
  {
    number: "07",
    title: "Repeat & scale globally",
    description: "Turn one-off international shipments into long-term retainer purchase contracts.",
    details: "Build long-term buyer relationships, negotiate volume orders, and scale product portfolios.",
    tag: "Scaling Growth",
  },
];

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    id: "textiles",
    title: "Textiles & Apparel",
    subtitle: "Garments, Fabrics, Home Linen & Silk",
    image: "/images/prod-textiles.jpg",
    hsCode: "HS 50 - 63",
    topMarkets: ["United States", "Germany", "United Kingdom", "UAE"],
    margin: "45% – 70%",
    tag: "High Volume",
  },
  {
    id: "food-agri",
    title: "Food & Agriculture",
    subtitle: "Spices, Basmati Rice, Organic Herbs",
    image: "/images/prod-spices.jpg",
    hsCode: "HS 07 - 12",
    topMarkets: ["Saudi Arabia", "USA", "Netherlands", "Singapore"],
    margin: "35% – 60%",
    tag: "Recurrent Demand",
  },
  {
    id: "handicrafts",
    title: "Handicrafts & Decor",
    subtitle: "Brass Artifacts, Terracotta, Woodcraft",
    image: "/images/prod-handicrafts.jpg",
    hsCode: "HS 44 & 74",
    topMarkets: ["Australia", "France", "Japan", "Canada"],
    margin: "80% – 140%",
    tag: "Highest Margin",
  },
  {
    id: "engineering",
    title: "Engineering Goods",
    subtitle: "Machinery, Auto Parts, Industrial Fasteners",
    image: "/images/prod-engineering.jpg",
    hsCode: "HS 84 - 87",
    topMarkets: ["USA", "Germany", "Italy", "South Africa"],
    margin: "30% – 50%",
    tag: "B2B Contracts",
  },
  {
    id: "home-lifestyle",
    title: "Home & Lifestyle",
    subtitle: "Cane Furniture, Handwoven Rugs, Kitchenware",
    image: "/images/prod-home-decor.jpg",
    hsCode: "HS 94 & 57",
    topMarkets: ["United Kingdom", "USA", "Nordics", "UAE"],
    margin: "55% – 85%",
    tag: "Premium Retail",
  },
  {
    id: "beauty",
    title: "Beauty & Personal Care",
    subtitle: "Ayurveda, Saffron Skincare, Herbal Wellness",
    image: "/images/prod-beauty.jpg",
    hsCode: "HS 3304",
    topMarkets: ["USA", "Europe", "South Korea", "Middle East"],
    margin: "65% – 95%",
    tag: "Global Trend",
  },
  {
    id: "packaging",
    title: "Packaging & Boxes",
    subtitle: "Eco-friendly corrugated cartons, bio-packaging",
    image: "/images/prod-packaging.jpg",
    hsCode: "HS 4819",
    topMarkets: ["UAE", "UK", "Netherlands"],
    margin: "25% – 40%",
    tag: "Essential Utility",
  },
];

export const MENTOR_HIGHLIGHTS = [
  {
    title: "Live Webinars with Q&A",
    desc: "Direct answers to your export questions and live product evaluations.",
    icon: "Video",
  },
  {
    title: "Practical Case Studies & Examples",
    desc: "Real breakdown of actual shipments from Nhava Sheva and Mundra ports.",
    icon: "FileSpreadsheet",
  },
  {
    title: "Fraud Prevention & Buyer Verification",
    desc: "Battle-tested protocols to safeguard your cargo and advance payments.",
    icon: "ShieldAlert",
  },
  {
    title: "Templates, Checklists & Resources",
    desc: "Plug-and-play proforma invoices, quotation sheets, and contract drafts.",
    icon: "FileCheck",
  },
];

export const COURSES: CourseItem[] = [
  {
    id: "foundation",
    title: "Export Business Foundation",
    description: "Start from zero and master the complete export lifecycle from IEC registration to bank reconciliation.",
    category: "Complete Blueprint",
    lessons: "20+ Lessons",
    access: "Lifetime Access",
    image: "/images/course-foundation.jpg",
    badge: "Bestseller",
    rating: 4.9,
    students: "4,200+ Exporters",
    price: "₹4,999",
    originalPrice: "₹14,999",
    modules: [
      "Export Firm Setup & Entity Registration",
      "IEC, GST, LUT & Bank AD Code Filing",
      "Choosing Your Profitable Niche Product",
      "Finding Overseas Buyers with 0 Ad Spend",
      "Understanding Port Clearances & Customs",
    ],
  },
  {
    id: "buyers",
    title: "Find Verified Buyers Globally",
    description: "Discover genuine international importers, bypass intermediaries, and negotiate long-term export orders.",
    category: "B2B Sales Mastery",
    lessons: "15+ Lessons",
    access: "Lifetime Access",
    image: "/images/course-buyers.jpg",
    rating: 4.8,
    students: "2,850+ Exporters",
    price: "₹3,999",
    originalPrice: "₹9,999",
    modules: [
      "International Trade Data Mining",
      "Embassy Commercial Wings & EPCs",
      "Crafting Cold Outreach That Gets Replies",
      "Quotation & Proforma Invoice Structuring",
      "Handling Price Negotiations with Foreign Importers",
    ],
  },
  {
    id: "documentation",
    title: "Export Documentation Made Easy",
    description: "Demystify all legal documents, shipping bills, certificates of origin, and avoid costly customs penalties.",
    category: "Compliance & Banking",
    lessons: "12+ Lessons",
    access: "Lifetime Access",
    image: "/images/course-docs.jpg",
    rating: 4.9,
    students: "3,100+ Exporters",
    price: "₹3,499",
    originalPrice: "₹8,499",
    modules: [
      "Commercial Invoice & Packing List Masterclass",
      "Bill of Lading (BL) & Airway Bill (AWB)",
      "Certificate of Origin & Preferential Trade Agreements",
      "FEMA Compliance & EDPMS / IDPMS",
      "e-BRC Generation & Bank Settlement",
    ],
  },
  {
    id: "frauds",
    title: "Avoid Export Frauds & Scams",
    description: "Identify fake buyers, fraudulent payment guarantees, phantom freight forwarders, and trade traps.",
    category: "Security & Risk Control",
    lessons: "10+ Lessons",
    access: "Lifetime Access",
    image: "/images/course-scams.jpg",
    badge: "Must Watch",
    rating: 5.0,
    students: "5,400+ Exporters",
    price: "₹2,999",
    originalPrice: "₹7,999",
    modules: [
      "Top 10 International Export Scams Unveiled",
      "Verifying Foreign Companies in Under 10 Minutes",
      "Letter of Credit (LC) Red Flag Clauses",
      "Payment Terms Matrix: 100% Risk vs 0% Risk",
      "ECGC Insurance & Debt Recovery Systems",
    ],
  },
];

export const SUCCESS_STORIES: TestimonialItem[] = [
  {
    id: "amit-sharma",
    name: "Amit Sharma",
    business: "Vedic Crafts Exports",
    story: "Was working as an operations executive in Gurgaon for 7 years. With Export Easy Hai, he found German and UK buyers for wooden brass handicrafts.",
    result: "Exporting to 9+ countries within 6 months of launching.",
    turnover: "₹64 Lakhs",
    countries: "Germany, UK, USA, UAE",
    image: "/images/story-amit.jpg",
    videoDuration: "3:42 Min Case Study",
    quote: "Export Easy Hai made the entire process so single-minded. From finding buyers to export documentation, everything was explained in a practical, step-by-step way.",
  },
  {
    id: "priya-mehta",
    name: "Priya Mehta",
    business: "Avani Natural Organics",
    story: "Transitioned from corporate HR to exporting certified organic turmeric, moringa powder, and millets to specialty organic food chains across Europe.",
    result: "Recurring monthly container contracts in Netherlands & France.",
    turnover: "₹1.1 Crore",
    countries: "Netherlands, France, Switzerland",
    image: "/images/story-priya.jpg",
    videoDuration: "4:15 Min Case Study",
    quote: "The live webinars and practical templates saved me months of painful trial and error. Rahul sir's buyer verification method is pure gold for anyone starting fresh.",
  },
  {
    id: "rohit-gupta",
    name: "Rohit Gupta",
    business: "Apex Forgings India",
    story: "Left his IT support job in Pune. Partnered with Rajkot auto-component makers to export precision steel gears to South African agricultural equipment firms.",
    result: "Replaced 5 years of salary with just two international shipments.",
    turnover: "₹92 Lakhs",
    countries: "South Africa, Kenya, Malaysia",
    image: "/images/story-rohit.jpg",
    videoDuration: "5:08 Min Case Study",
    quote: "I thought exporting required crores of capital. Rahul showed me how to begin with merchant export and zero manufacturing overhead. It changed my life completely.",
  },
  {
    id: "sneha-jain",
    name: "Sneha Jain",
    business: "Indus Loom Furnishings",
    story: "Started exporting handloom cushion covers and rugs directly to US boutique interior stores through verified B2B wholesale buyers.",
    result: "Built a sustainable 6-figure USD export business in 1 year.",
    turnover: "₹85 Lakhs",
    countries: "USA, Canada, Australia",
    image: "/images/story-sneha.jpg",
    videoDuration: "3:20 Min Case Study",
    quote: "The step-by-step guidance eliminated my fear of customs paperwork and shipping lines. The community support gives answers whenever I am at port clearance.",
  },
];

export const FRAUD_PILLARS = [
  {
    title: "Verify Genuine Buyers",
    desc: "Check government trade registries, D&B ratings, tax identifiers, and embassy commercial attaches before sending quotes.",
    icon: "UserCheck",
  },
  {
    title: "Identify Fraud Warning Signs",
    desc: "Spot suspicious unverified domain emails, unrealistic high-value orders, and refusal to provide business registration.",
    icon: "AlertTriangle",
  },
  {
    title: "Use Trusted Tools & Platforms",
    desc: "Leverage Panjiva, ImportGenius, DGFT trade portal, and official Export Promotion Councils for background verification.",
    icon: "Cpu",
  },
  {
    title: "Real-Case Studies of Scams",
    desc: "Study real-life fraudulent scenarios: phantom BLs, unauthorized release of cargo, and fake bank payment guarantees.",
    icon: "FileSearch",
  },
  {
    title: "Checklists & Contract Templates",
    desc: "Download ironclad purchase order confirmations and non-negotiable payment milestone clauses.",
    icon: "ShieldCheck",
  },
];

export const FAQS: FAQItem[] = [
  {
    question: "Do I need a company to start exporting?",
    answer: "No, you do not need a Private Limited company to start. You can easily begin as a Sole Proprietorship with a simple GST registration, PAN card, and an Import Export Code (IEC) issued online by DGFT in under 24 hours.",
    category: "Setup",
  },
  {
    question: "How do I find genuine buyers?",
    answer: "We teach you 5 proven practical channels: Export Promotion Councils (EPCs), Indian Embassy commercial wings abroad, international B2B customs shipping databases, targeted LinkedIn B2B outreach, and international trade fair catalogues.",
    category: "Buyers",
  },
  {
    question: "What products can I export?",
    answer: "India exports over 1,000+ high-demand product categories! Top beginner-friendly sectors include textiles & apparel, agricultural commodities & spices, processed foods, handicrafts, engineering goods, and Ayurvedic personal care.",
    category: "Products",
  },
  {
    question: "How much money do I need to start?",
    answer: "You can start as a Merchant Exporter with ₹25,000 to ₹50,000 for government registrations (IEC, GST, RCMC) and initial outreach. You do not need your own factory or warehouse — you can source directly from manufacturers against buyer orders.",
    category: "Capital",
  },
  {
    question: "How long does it take to get my first order?",
    answer: "With consistent execution of our outreach framework, students typically secure their first international inquiry within 30 to 45 days, and complete their first commercial shipment within 3 to 5 months.",
    category: "Timeline",
  },
  {
    question: "Can beginners really start exporting?",
    answer: "Yes, absolutely! More than 70% of successful Indian exporters started with zero previous international trade background. The key is understanding documentation, proper buyer verification, and choosing the right product-market fit.",
    category: "Beginners",
  },
  {
    question: "What documents are required?",
    answer: "The essential documents are: IEC (Import Export Code), GST & LUT (Letter of Undertaking), Bank AD Code, Commercial Invoice, Packing List, Bill of Lading (BL) or Airway Bill, and Certificate of Origin. We provide exact fillable templates for each.",
    category: "Documentation",
  },
  {
    question: "How do I avoid export scams?",
    answer: "Never ship cargo without secured advance payment terms (e.g., 30% advance + 70% against BL copy) or an Irrevocable Confirmed Letter of Credit (LC) from a prime international bank. Always verify buyer credentials through our 5-point verification framework and take ECGC credit insurance.",
    category: "Safety",
  },
];
