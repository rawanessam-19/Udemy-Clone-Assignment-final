import chatgptImg from "../assets/chatgpt.png";
import dataSciImg from "../assets/data sci.png";
import genAiImg from "../assets/gen ai.png";
import itCertImg from "../assets/it cert.png";
import skills1 from "../assets/skills1.png";
import skills2 from "../assets/skills2.png";
import skills3 from "../assets/skills3.png";

export const courses = [
  { id: 1, title: "The AI Engineer Course 2025", instructor: "365 Careers", price: "£349.99", badge: "Bestseller", rating: 4.4 },
  { id: 2, title: "The Beginner's Guide to AI", instructor: "Penny de B.", price: "£34.99", badge: "Bestseller", rating: 4.0 },
  { id: 3, title: "Master of AI in HR & Recruitment", instructor: "Experience Academy", price: "£2,499.99", badge: "Bestseller", rating: 3.1 }
];

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
    title: "Generative AI",
    subtitle: "1.7M learners",
    image: genAiImg
  },
  {
    id: 2,
    title: "IT Certifications",
    subtitle: "1.4M learners",
    image: itCertImg
  },
  {
    id: 3,
    title: "Data Science",
    subtitle: "3.8M learners",
    image: dataSciImg
  },
  {
    id: 4,
    title: "ChatGPT Tools",
    subtitle: "900K learners",
    image: chatgptImg
  }
];

export const featuredCourses = [
  {
    id: 201,
    title: "The AI Engineer Course 2025: Complete AI Engineer Bootcamp",
    instructor: "365 Careers",
    price: "£349.99",
    badge: "Bestseller",
    rating: 4.4,
    students: 1647,
    image: skills1
  },
  {
    id: 202,
    title: "The Beginner's Guide to AI - Unity 6 Compatible",
    instructor: "Penny de B.",
    price: "£34.99",
    tag: "Bestseller",
    rating: 4.0,
    students: 250,
    image: skills2
  },
  {
    id: 203,
    title: "Master of AI in HR & Recruitment",
    instructor: "Experience Academy",
    price: "£2,499.99",
    tag: "Bestseller",
    rating: 3.1,
    students: 50,
    image: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=800&q=60"
  },
  {
    id: 204,
    title: "7 Days of Hands-On AI Development Bootcamp",
    instructor: "School of AI",
    price: "£34.99",
    tag: "Premium",
    rating: 5.0,
    students: 3500,
    image: skills3
  }
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
