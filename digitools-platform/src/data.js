import design from "./assets/products/design-tool.png";
import operation from "./assets/products/operation.png";
import portfolio from "./assets/products/portfolio.png";
import cart from "./assets/products/shopping-cart.png";
import social from "./assets/products/social-media.png";
import writing from "./assets/products/writing_2327400 1.png";

export const productsData = [
  {
    id: 1,
    name: "AI Writing Pro",
    description: "Generate high-quality content with advanced AI.",
    price: 29,
    period: "Mo",
    tag: "Best Seller",
    tagType: "bg-yellow-100 text-yellow-600",
    features: ["Unlimited AI", "50+ templates", "Grammar check"],
    icon: writing
  },
  {
    id: 2,
    name: "Design Templates Pack",
    description: "2000+ templates for social media.",
    price: 49,
    period: "One-Time",
    tag: "Popular",
    tagType: "bg-purple-100 text-purple-600",
    features: ["2000+ templates", "Monthly updates", "License"],
    icon: design
  },
  {
    id: 3,
    name: "Premium Stock Assets",
    description: "Millions of royalty-free assets.",
    price: 19,
    period: "Mo",
    tag: "New",
    tagType: "bg-green-100 text-green-600",
    features: ["10M+ assets", "Commercial use", "No attribution"],
    icon: portfolio
  },
  {
    id: 4,
    name: "Automation Toolkit",
    description: "Automate your workflow easily.",
    price: 79,
    period: "Mo",
    tag: "Popular",
    tagType: "bg-purple-100 text-purple-600",
    features: ["50+ automations", "API access", "Custom workflows"],
    icon: operation
  },
  {
    id: 5,
    name: "Resume Builder Pro",
    description: "Create professional resumes.",
    price: 15,
    period: "One-Time",
    tag: "New",
    tagType: "bg-green-100 text-green-600",
    features: ["100+ templates", "ATS optimization", "Export PDF"],
    icon: writing
  },
  {
    id: 6,
    name: "Social Media Kit",
    description: "Create engaging social content.",
    price: 39,
    period: "Mo",
    tag: "Best Seller",
    tagType: "bg-yellow-100 text-yellow-600",
    features: ["5000+ assets", "Scheduler", "Analytics"],
    icon: social
  }
];