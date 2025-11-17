// src/data/udemyData.js

// Navbar links
export const navbarLinks = [
  { id: "explore", label: "Explore" },
  { id: "plans", label: "Plans & Pricing" },
  { id: "business", label: "Udemy Business" },
  { id: "teach", label: "Teach on Udemy" },
];

// Hero content + large hero image hosted on unsplash
export const heroData = {
  title: "Master tomorrow’s skills today",
  subtitle:
    "Power up your AI, career, and life skills with the most up-to-date, expert-led learning.",
  heroImage:
    "https://img-c.udemycdn.com/notices/home_banner/image_udlite/3d1b93d7-2ceb-4bea-b88a-8b9f843a95a2.jpg"
};


// categories (cards)
export const categories = [
  {
    id: 1,
    title: "Generative AI",
    subtitle: "1.7M learners",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981d?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 2,
    title: "IT Certifications",
    subtitle: "1.4M learners",
    image:
      "https://images.unsplash.com/photo-1526378729258-4f8d3d4b6d69?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    title: "Data Science",
    subtitle: "3.8M learners",
    image:
      "https://images.unsplash.com/photo-1531497865149-3f9d12f0f0a6?auto=format&fit=crop&w=800&q=60",
  },
];

// featured courses (use Unsplash thumbnails)
export const featuredCourses = [
  {
    id: 201,
    title: "The Product Management for AI & Data Science Course",
    instructor: "365 Careers",
    price: "£609.99",
    tag: "Premium",
    image:
      "https://images.unsplash.com/photo-1584697964190-55d6b0b2f2d1?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 202,
    title: "The Beginner's Guide to AI - Unity 6 Compatible",
    instructor: "Penny de B.",
    price: "£34.99",
    tag: "Bestseller",
    image:
      "https://images.unsplash.com/photo-1526378729258-4f8d3d4b6d69?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 203,
    title: "Master of AI in HR & Recruitment",
    instructor: "Experience Academy",
    price: "£2,499.99",
    tag: "Bestseller",
    image:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 204,
    title: "7 Days of Hands-On AI Development Bootcamp",
    instructor: "School of AI",
    price: "£34.99",
    tag: "Premium",
    image:
      "https://images.unsplash.com/photo-1526378729258-4f8d3d4b6d69?auto=format&fit=crop&w=800&q=60",
  },
];

// trusted companies — use Clearbit logo service (hosted logos)
export const trustedCompanies = [
  { id: "vok", domain: "volkswagen.co.uk", name: "Volkswagen" },
  { id: "samsung", domain: "samsung.com", name: "Samsung" },
  { id: "cisco", domain: "cisco.com", name: "Cisco" },
  { id: "vimeo", domain: "vimeo.com", name: "Vimeo" },
  { id: "pg", domain: "pg.com", name: "P&G" },
  { id: "hp", domain: "hp.com", name: "HPE" },
  { id: "citi", domain: "citi.com", name: "Citi" },
  { id: "eric", domain: "ericsson.com", name: "Ericsson" },
];
