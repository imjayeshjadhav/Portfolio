export const navLinks = [
    { id:1, name: "Portfolio", type: "portfolio" },
    { id:2, name: "Contacts", type: "contact" },
    { id:3, name: "Resume", type: "resume" }
]

export const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.webp",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: false,
  },
];

export const INITIAL_Z_INDEX = 1000;

export const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export const techStack = [
  {
    category: "Programming Languages",
    items: ["C/C++", "Java", "Python", "JavaScript"],
  },
  {
    category: "Web/ Mobile Development",
    items: ["HTML", "CSS","Tailwind CSS", "Gsap","React.js", "Next.js", "NextAuth","React Native"],
  },
  {
    category: "Backend & APIs",
    items: ["Node.js", "Express.js", "RESTful APIs", "JWT Authentication"],
  },
  {
    category: "Machine Learning",
    items: ["Scikit-learn", "TensorFlow", "PyTorch", "Pandas", "NumPy"],
  },
  {
    category: "Databases, Tools & Platforms",
    items: ["MySQL", "MongoDB","Prisma", "Git", "Postman"],
  },
];

export const blogPosts = [
  {
    id: 1,
    date: "Dec 9, 2025",
    title:
      "Winning Smart India Hackathon 2025: Building an AI-Powered University Timetable Scheduler",
    image: "/images/sih.jpeg",
    link: "https://jayeshjadhav.dev/blog/sih-2025-winning-journey",
  },
  {
    id: 2,
    date: "July 20, 2025",
    title:
      "Inside My Software Engineering Internship at KumarInfotech: Real-World Full Stack Experience",
    image: "/images/internship-icon.png",
    link: "https://jayeshjadhav.dev/blog/kumarinfotech-internship-experience",
  },
  {
    id: 3,
    date: "June 30, 2025",
    title:
      "Auto Recruit: How I Built an AI-Driven Recruitment Platform with Gemini AI",
    image: "/images/robot.webp",
    link: "https://jayeshjadhav.dev/blog/auto-recruit-ai-platform",
  },
];
