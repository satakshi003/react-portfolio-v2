// Portfolio content data - Edit this file to customize your portfolio

export const personalInfo = {
  name: "Satakshi Subhasmita",
  role: "Web Developer",
  email: "soumya3955@gmail.com",
  phone: "7735555020",
  location: "Bhubaneswar, Odisha",
  linkedin: "https://linkedin.com/in/satakshi-subhasmita",
  github: "https://github.com/satakshi-subhasmita", // Update with your actual GitHub
};

export const about = {
  headline: "Building the web, one pixel at a time.",
  description: `Web Developer with a strong foundation in frontend and backend development. 
  I'm passionate about creating responsive, user-friendly interfaces and designing 
  efficient server-side logic. Currently pursuing B.Tech in Computer Science at KIIT, 
  I'm eager to contribute to scalable web applications in fast-paced environments.`,
  highlights: [
    "Frontend & Backend Development",
    "Responsive Design Expert",
    "Clean Code Advocate",
    "Problem Solver",
  ],
};

export const skills = {
  languages: ["C", "C++", "Java", "JavaScript"],
  frontend: ["HTML", "CSS", "JavaScript", "React", "Responsive Design"],
  backend: ["Node.js", "Express.js", "RESTful APIs"],
  databases: ["MongoDB"],
  tools: ["Git", "GitHub", "VS Code"],
};

export const projects = [
  {
    id: 1,
    title: "YouTube Backend System",
    description:
      "A comprehensive backend system with RESTful APIs for user authentication, video metadata management, and channel logic. Features optimized MongoDB schema for scalable data handling.",
    tech: ["Node.js", "Express.js", "MongoDB"],
    github: "#", // Add your GitHub link
    demo: null,
  },
  {
    id: 2,
    title: "Interactive Quiz App",
    description:
      "An engaging quiz application with dynamic question handling, real-time scoring, and client-side validation. Built with vanilla JavaScript for optimal performance.",
    tech: ["JavaScript", "HTML", "CSS"],
    github: "#", // Add your GitHub link
    demo: "#", // Add demo link if available
  },
  {
    id: 3,
    title: "Amazon Clone",
    description:
      "A feature-rich e-commerce interface with cart functionality, dynamic DOM manipulation, and responsive UI elements simulating real-world shopping behavior.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "#", // Add your GitHub link
    demo: null,
  },
];

export const experience = [
  {
    id: 1,
    type: "work",
    title: "Front End Web Development Intern",
    organization: "Edunet Foundation (AICTE Collaboration)",
    location: "Remote",
    period: "Aug 2025 – Sept 2025",
    description: [
      "Developed responsive and user-friendly web pages using HTML, CSS, and JavaScript",
      "Implemented core UI components following clean code and design best practices",
      "Improved UI/UX design, responsiveness, and cross-browser compatibility",
    ],
    tech: ["HTML", "CSS", "JavaScript"],
  },
];

export const education = [
  {
    id: 1,
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Kalinga Institute of Industrial Technology (KIIT)",
    location: "Bhubaneswar",
    period: "2023 – Present",
    grade: "CGPA: 9.13 / 10",
  },
];

export const certifications = [
  {
    id: 1,
    title: "Front End Web Development Internship Certificate",
    issuer: "AICTE & Edunet Foundation",
    year: "2025",
    description:
      "Successfully completed a 6-week internship focused on HTML, CSS, and JavaScript.",
  },
];

export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];
