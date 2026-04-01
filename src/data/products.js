import toolImg from "../assets/design-tool.png";
import portImg from "../assets/portfolio.png";
import socialImg from "../assets/social-media.png";
import writingImg from "../assets/writing.png";
import operationImg from "../assets/operation.png";
import designImg from "../assets/design-tool.png";


const products = [
  {
    id: 1,
    name: "AI Writing Pro",
    description: "Generate high-quality content using AI.",
    price: 9.99,
    period: "monthly",
    tag: "popular",
    tagType: "popular",
    features: ["Blog writing", "SEO content", "Templates"],
    image: toolImg,
  },
  {
    id: 2,
    name: "Design Templates Pack",
    description: "Ready-to-use UI/UX templates.",
    price: 19.99,
    period: "one-time",
    tag: "best seller",
    tagType: "best seller",
    features: ["Figma files", "Responsive layouts", "Modern design"],
    image: portImg,
  },
  {
    id: 3,
    name: "Premium Stock Assets",
    description: "Access high-quality images & videos.",
    price: 14.99,
    period: "monthly",
    tag: "new",
    tagType: "new",
    features: ["HD images", "4K videos", "Unlimited downloads"],
    image: socialImg,
  },
  {
    id: 4,
    name: "Automation Tools",
    description: "Automate your daily workflow tasks.",
    price: 12.99,
    period: "monthly",
    tag: "popular",
    tagType: "popular",
    features: ["Task automation", "Integrations", "Scheduling"],
    image: writingImg,
  },
  {
    id: 5,
    name: "Resume Builder Pro",
    description: "Create professional resumes easily.",
    price: 7.99,
    period: "monthly",
    tag: "best seller",
    tagType: "best seller",
    features: ["ATS friendly", "PDF export", "Templates"],
    image: operationImg,
  },
  {
    id: 6,
    name: "Social Media Content Kit",
    description: "Create engaging social media posts.",
    price: 11.99,
    period: "monthly",
    tag: "new",
    tagType: "new",
    features: ["Post templates", "Captions", "Hashtag generator"],
    image: designImg,
  }
];

export default products;