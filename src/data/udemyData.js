import chatgptImg from "../assets/chatgpt.png";
import dataSciImg from "../assets/data sci.png";
import genAiImg from "../assets/gen ai.png";
import itCertImg from "../assets/it cert.png";
import skills1 from "../assets/skills1.png";
import skills2 from "../assets/skills2.png";
import skills3 from "../assets/skills3.png";


export const navbarLinks = [
  { id: "explore", label: "Explore" },
  { id: "plans", label: "Plans & Pricing" },
  { id: "business", label: "Udemy Business" },
  { id: "teach", label: "Teach on Udemy" },
];

export const heroData = {
  title: "Master tomorrow’s skills today",
  subtitle: "Power up your AI, career, and life skills with the most up-to-date, expert-led learning.",
  heroImage: "https://img-c.udemycdn.com/notices/home_banner/image_udlite/3d1b93d7-2ceb-4bea-b88a-8b9f843a95a2.jpg"
};

export const categories = [
  {
    id: 1,
    title: "The AI Engineer Course 2025",
    subtitle: "365 Careers",
    image: skills1,
    rating: 4.6,
    students: "11,725 ratings",
    price: "£309.99"
  },
  {
    id: 2,
    title: "The Beginner's Guide to AI - Unity 6 Compatible",
    subtitle: "Penny de B.",
    image: skills2,
    rating: 2,
    students: "2000 ratings",
    price: "£150"
  },
  {
    id: 3,
    title: "Master of AI in HR & Recruitment",
    subtitle: "Experience Academy",
    image: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=800&q=60",
    rating: 3.1,
    students: "6800 ratings",
    price: "£450"
  },
  {
    id: 4,
    title: "7 Days of Hands-On AI Development Bootcamp",
    subtitle: "School of AI",
    image: skills3,
    rating: 5,
    students: "450 ratings",
    price: "£600"
  }
];


export const featuredCourses = [
  {
    id: 201,
    title: "Generative AI ",
    image: genAiImg,
  },
  {
    id: 202,
    title: "IT Certification",
    image: itCertImg
  },
  {
    id: 203,
    title: "Data Science",
    image: dataSciImg
  },

];

export const trustedCompanies = [
  { id: "vok", domain: "volkswagen.co.uk", name: "Volkswagen" },
  { id: "samsung", domain: "samsung.com", name: "Samsung" },
  { id: "cisco", domain: "cisco.com", name: "Cisco" },
  { id: "vimeo", domain: "vimeo.com", name: "Vimeo" },
  { id: "pg", domain: "pg.com", name: "P&G" },
  { id: "hp", domain: "hp.com", name: "HPE" },
  { id: "citi", domain: "citi.com", name: "Citi" },
  { id: "eric", domain: "ericsson.com", name: "Ericsson" }
];
