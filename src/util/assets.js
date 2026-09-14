import { FaHandshake, FaLeaf, FaLightbulb } from "react-icons/fa";
import {
  FaClock,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaPinterestP,
} from "react-icons/fa";
import { FaFacebook, FaHome } from "react-icons/fa";
import { FaMedal, FaUsers } from "react-icons/fa";
import {
  FaCube,
  FaDraftingCompass,
  FaExpandArrowsAlt,
  FaHardHat,
  FaPaintRoller,
} from "react-icons/fa";

const about = "/about.avif";
const portfolio1 = "/portfolio1.avif";
const portfolio2 = "/portfolio2.avif";
const portfolio3 = "/portfolio3.avif";
const portfolio4 = "/portfolio4.avif";
const portfolio5 = "/portfolio5.avif";
const portfolio6 = "/portfolio6.avif";
const team1 = "/team1.avif";
const team2 = "/team2.avif";
const team3 = "/team3.avif";
const user1 = "/user1.avif";
const heroImg = "/heroImg.jpg";
const user2 = "/user2.jpg";
const user3 = "/user3.jpg";

export const assets = {
  about,
  portfolio1,
  portfolio2,
  portfolio3,
  portfolio4,
  portfolio5,
  portfolio6,
  team1,
  team2,
  team3,
  user1,
  user2,
  user3,
  heroImg,
};

export const story = {
  badge: "Our Story",
  title: "Journey",
  paragraphs: [
    "Founded in 2005 by Alexandra Chen, DesignHaven began as a small studio with a big vision: to redefine home design by blending artistic expression with functional living.",
    "What started as a passion project has grown into an award-winning design studio, recognized internationally for innovative home modeling and interior design solutions.",
    "Our philosophy centers on creating spaces that don't just look beautiful, but feel like home - reflecting the unique personality and lifestyle of each client.",
  ],
  image: about,
};

export const values = [
  {
    title: "Innovation",
    description:
      "We embrace new technologies and creative approaches to deliver unique design solutions.",
    icon: FaLightbulb,
    delay: "0s",
  },
  {
    title: "Integrity",
    description:
      "Honest communication and transparent processes build lasting client relationships.",
    icon: FaHandshake,
    delay: "0.2s",
  },
  {
    title: "Sustainability",
    description:
      "Responsible design that respects the environment and future generations.",
    icon: FaLeaf,
    delay: "0.4s",
  },
];

export const timeline = [
  {
    year: "2005",
    title: "Studio Founded",
    description:
      "DesignHaven opens its doors in a small studio in Los Angeles with a vision to transform home design.",
  },
  {
    year: "2010",
    title: "First Major Award",
    description:
      "Receives 'Best Residential Design' award at the International Design Awards.",
  },
  {
    year: "2015",
    title: "Sustainable Design Focus",
    description:
      "Launches dedicated sustainable design division focusing on eco-friendly home solutions.",
  },
  {
    year: "2023",
    title: "Virtual Design Studio",
    description:
      "Introduces immersive 3D modeling and virtual reality design experiences for clients.",
  },
];

export const blogPosts = [
  {
    id: 1,
    image: portfolio1,
    date: "May 15, 2023",
    readTime: "5 min read",
    title: "The Future of Sustainable Home Design",
    description:
      "Exploring innovative materials and technologies for eco-friendly living spaces.",
  },
  {
    id: 2,
    image: portfolio2,
    date: "April 28, 2023",
    readTime: "7 min read",
    title: "Maximizing Small Spaces: Design Strategies",
    description:
      "Creative solutions for optimizing functionality in compact living areas.",
  },
  {
    id: 3,
    image: portfolio3,
    date: "April 10, 2023",
    readTime: "6 min read",
    title: "Color Psychology in Interior Design",
    description:
      "How color choices impact mood and perception in living spaces.",
  },
  {
    id: 4,
    image: portfolio4,
    date: "March 22, 2023",
    readTime: "8 min read",
    title: "Smart Home Integration: The Future is Now",
    description:
      "How technology is transforming modern home design and functionality.",
  },
  {
    id: 5,
    image: portfolio5,
    date: "March 5, 2023",
    readTime: "6 min read",
    title: "Biophilic Design: Bringing Nature Indoors",
    description:
      "The benefits of incorporating natural elements into interior spaces.",
  },
  {
    id: 6,
    image: portfolio6,
    date: "February 18, 2023",
    readTime: "7 min read",
    title: "The Art of Lighting in Home Design",
    description: "How proper lighting can transform the ambiance of any space.",
  },
];

export const contactInfo = [
  {
    id: 1,
    icon: FaMapMarkerAlt,
    title: "Our Office",
    value: "123 Design Street, Creative District  Los Angeles, CA 90001",
  },
  {
    id: 2,
    icon: FaPhoneAlt,
    title: "Phone Number",
    value: "+91 987654321",
  },
  {
    id: 3,
    icon: FaEnvelope,
    title: "Email Address",
    value: "info@designhaven.com",
  },
  {
    id: 4,
    icon: FaClock,
    title: "Working Hours",
    value: "Monday - Friday: 9:00 AM - 6:00 PM",
    value1: "Saturday: 10:00 AM - 4:00 PM",
  },
];

export const socialLinks = [
  { id: 1, icon: FaFacebookF, link: "#" },
  { id: 2, icon: FaInstagram, link: "#" },
  { id: 3, icon: FaPinterestP, link: "#" },
  { id: 4, icon: FaLinkedinIn, link: "#" },
];

export const services = [
  "3D Home Modeling",
  "Interior Design",
  "Architectural Planning",
  "Sustainable Design",
  "Space Optimization",
  "Project Management",
];

export const footerData = {
  company: {
    name: "DesignHaven",
    description:
      "Premium home modeling and interior design studio creating exceptional living spaces since 2005.",
    logoIcon: FaHome,
    socialLinks: [
      { icon: FaFacebook, url: "#" },
      { icon: FaInstagram, url: "#" },
      { icon: FaPinterestP, url: "#" },
      { icon: FaLinkedinIn, url: "#" },
    ],
  },

  quickLinks: [
    { label: "Home", page: "home" },
    { label: "About Us", page: "about" },
    { label: "Services", page: "services" },
    { label: "Portfolio", page: "portfolio" },
    { label: "Our Team", page: "team" },
    { label: "Blog", page: "blog" },
  ],

  services: [
    "3D Home Modeling",
    "Interior Design",
    "Architectural Design",
    "Space Planning",
    "Sustainable Design",
    "Project Management",
  ],

  contactInfo: {
    address: "New Ashok Nagar, New Delhi",
    phone: "+1 (555) 123-4567",
    email: "info@designhaven.com",
  },

  newsletter: {
    title: "Subscribe to Our Newsletter",
    description:
      "Get design tips, project inspiration, and exclusive offers directly to your inbox.",
  },

  copyright: {
    text: "© 2026 DesignHaven. All rights reserved.",
    policies: [
      { label: "Privacy Policy", url: "#" },
      { label: "Terms of Service", url: "#" },
      { label: "Cookie Policy", url: "#" },
    ],
  },
};

export const homePageData = {
  hero: {
    badge: "Award-Winning Design Studio",
    title: {
      normal: "Where",
      highlight: "Dream Homes",
      end: "Become Reality",
    },
    description:
      "We transform your vision into breathtaking living spaces with premium home modeling and interior design services that reflect your unique personality and lifestyle.",

    stats: [
      { value: "300+", label: "Projects Completed" },
      { value: "18+", label: "Years Experience" },
      { value: "98%", label: "Client Satisfaction" },
    ],
    image: {
      src: heroImg,
      alt: "Luxury Home Design",
    },
  },

  features: {
    title: "Premium Design Solutions",
    subtitle:
      "We combine creativity with functionality to deliver exceptional home modeling experiences.",
    items: [
      {
        icon: FaLightbulb,
        title: "Innovative Design",
        description:
          "Cutting-edge design concepts tailored to your specific needs and preferences.",
      },
      {
        icon: FaUsers,
        title: "Client-Centric Approach",
        description:
          "Your vision is our priority at every stage of the design process.",
      },
      {
        icon: FaMedal,
        title: "Award-Winning Quality",
        description: "Recognition for excellence in design and craftsmanship.",
      },
    ],
  },

  testimonials: {
    title: "What Our Clients Say",
    subtitle:
      "Hear from homeowners who transformed their living spaces with our designs.",
    items: [
      {
        name: "Sarah Johnson",
        role: "Homeowner, Malibu",
        image: user1,
        rating: 5,
        quote: "DesignHaven transformed our vision into a stunning reality.",
      },
      {
        name: "Michael Chen",
        role: "Real Estate Developer",
        image: user2,
        rating: 5,
        quote:
          "Their 3D models helped us secure investors and exceeded expectations.",
      },
      {
        name: "Priya Sharma",
        role: "Interior Design Client",
        image: user3,
        rating: 4.5,
        quote: "Beautiful, sustainable design that reduced our energy bills.",
      },
    ],
  },
};
export const filters = [
  "All Projects",
  "Residential",
  "Commercial",
  "Interior Design",
  "Sustainable",
];

export const projects = [
  {
    title: "Cliffside Villa",
    description:
      "A contemporary villa with panoramic ocean views and sustainable features.",
    location: "Malibu, California",
    image: portfolio1,
    categories: ["Residential", "Interior Design"],
    delay: "0s",
  },
  {
    title: "Skyline Apartments",
    description:
      "Luxury residential complex with smart home integration and premium amenities.",
    location: "New York, NY",
    image: portfolio2,
    categories: ["Commercial"],
    delay: "0.1s",
  },
  {
    title: "Eco-Family Residence",
    description:
      "Net-zero energy home with green roofing and rainwater harvesting system.",
    location: "Austin, Texas",
    image: portfolio3,
    categories: ["Sustainable", "Residential"],
    delay: "0.2s",
  },
  {
    title: "Urban Loft Transformation",
    description:
      "Complete interior redesign of a downtown loft space with industrial elements.",
    location: "Chicago, Illinois",
    image: portfolio4,
    categories: ["Interior Design"],
    delay: "0.3s",
  },
  {
    title: "Mountain Retreat",
    description:
      "Rustic modern home designed for year-round living in a mountain setting.",
    location: "Aspen, Colorado",
    image: portfolio5,
    categories: ["Residential"],
    delay: "0.4s",
  },
  {
    title: "Green Office Complex",
    description:
      "LEED-certified office building with biophilic design and energy-efficient systems.",
    location: "Seattle, Washington",
    image: portfolio6,
    categories: ["Sustainable", "Commercial"],
    delay: "0.5s",
  },
];

export const allServices = [
  {
    title: "3D Home Modeling",
    icon: FaCube,
    description:
      "Immersive 3D visualizations that bring your dream home to life before construction begins.",
    features: [
      "Virtual walkthroughs",
      "Material simulations",
      "Lighting studies",
    ],
    delay: "0s",
  },
  {
    title: "Interior Design",
    icon: FaPaintRoller,
    description:
      "Complete interior solutions that balance aesthetics, functionality, and personal style.",
    features: ["Space planning", "Custom furniture", "Color selection"],
    delay: "0.1s",
  },
  {
    title: "Architectural Design",
    icon: FaDraftingCompass,
    description:
      "Innovative architectural solutions that optimize space, light, and functionality.",
    features: ["Conceptual design", "Construction docs", "Permits & approvals"],
    delay: "0.2s",
  },
  {
    title: "Sustainable Design",
    icon: FaLeaf,
    description:
      "Eco-friendly designs that reduce environmental impact and operational costs.",
    features: [
      "Energy efficiency",
      "Sustainable materials",
      "Water conservation",
    ],
    delay: "0.3s",
  },
  {
    title: "Space Planning",
    icon: FaExpandArrowsAlt,
    description:
      "Strategic space utilization to maximize functionality and flow in any layout.",
    features: [
      "Functional zoning",
      "Traffic flow optimization",
      "Multipurpose solutions",
    ],
    delay: "0.4s",
  },
  {
    title: "Project Management",
    icon: FaHardHat,
    description:
      "End-to-end project supervision ensuring quality, timeline, and budget adherence.",
    features: ["Vendor coordination", "Quality control", "Timeline management"],
    delay: "0.5s",
  },
];

export const processSteps = [
  {
    step: "1",
    title: "Consultation",
    description:
      "Initial meeting to understand your vision, requirements, and budget.",
    delay: "0s",
  },
  {
    step: "2",
    title: "Concept Design",
    description: "Developing initial design concepts and 3D visualizations.",
    delay: "0.1s",
  },
  {
    step: "3",
    title: "Design Development",
    description:
      "Refining designs, selecting materials, and finalizing details.",
    delay: "0.2s",
  },
  {
    step: "4",
    title: "Implementation",
    description: "Project execution with regular updates and quality checks.",
    delay: "0.3s",
  },
];

export const teamData = [
  {
    id: 1,
    name: "Alexandra Chen",
    role: "Founder & Creative Director",
    bio: "20+ years in architectural design and project management.",
    image: team1,
    socials: {
      linkedin: "#",
      twitter: "#",
      instagram: "#",
    },
  },
  {
    id: 2,
    name: "Marcus Johnson",
    role: "Lead Architect",
    bio: "Specializes in sustainable design and innovative space planning.",
    image: team2,
    socials: {
      linkedin: "#",
      twitter: "#",
      instagram: "#",
    },
  },
  {
    id: 3,
    name: "Sophia Williams",
    role: "Interior Design Director",
    bio: "Expert in luxury interiors and bespoke furniture design.",
    image: team3,
    socials: {
      linkedin: "#",
      twitter: "#",
      instagram: "#",
    },
  },
  {
    id: 4,
    name: "Divine Park",
    role: "3D Modeling Specialist",
    bio: "Creates immersive virtual experiences and detailed renderings.",
    image: user1,
    socials: {
      linkedin: "#",
      twitter: "#",
      instagram: "#",
    },
  },
];
