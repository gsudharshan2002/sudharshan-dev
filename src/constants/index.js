import todo from '../assets/projects/todo.png';
import blog from "../assets/projects/blog.png";
import portfolio from "../assets/projects/portfolio.png";
import gallery from "../assets/projects/gallery.png";
import blogging from "../assets/projects/blog.png";
import ecommerce from "../assets/projects/e-com.png";
import drum from "../assets/projects/drum.png";
import cal from "../assets/projects/cla.png";
import student from "../assets/projects/student.png";
import story from "../assets/projects/story.png";
import crm from "../assets/projects/crm.png";
import school from "../assets/projects/school.png";
import traffic from "../assets/projects/trafic.png";

import ticket from "../assets/projects/ticketbook.png";

export const PROFILE_CONTENT = `I am a passionate and adaptable developer with a strong foundation in full-stack development and a constant drive to learn emerging technologies. I thrive in collaborative environments and excel at translating complex problems into efficient, scalable solutions. My ability to communicate clearly and work seamlessly with cross-functional teams ensures smooth project execution and continuous improvement. I’m eager to contribute to innovative projects in a forward-thinking organization where I can grow both technically and personally, while delivering real value through clean, impactful code.`;

export const ABOUT_TEXT = `I’m a highly motivated and talented full stack developer with a strong foundation in building responsive and scalable web applications. As a recent graduate, I’ve already developed over 50 projects across various stacks including React, Next.js, Node.js, MySQL, MongoDB, and ASP.NET. I have a deep passion for learning new technologies and solving real-world problems through clean, maintainable code. I thrive in collaborative environments, adapt quickly to new challenges, and am always eager to contribute to impactful projects. Outside of coding, I enjoy exploring emerging tech trends and building innovative side projects.`;

export const Experience= [
  {
    year: "DEC 2024 - FEB 2025",
    role: "Python Developer Intern",
    company: "Futurenet Technologies private limited",
    description: `As a Python Intern at Odoo ERP, I am gaining hands-on experience in developing and customizing the Odoo platform. Odoo is a popular open-source ERP system that helps businesses manage functions like sales, inventory, accounting, and HR. I am learning to write Python code to create and modify Odoo modules, automate processes, and integrate business systems, while working closely with experienced developers to tailor Odoo to meet specific client needs.`,
    technologies: ["Python Development",
                  "Odoo Module Customization",
                  "Database Management (PostgreSQL)",
                  "Automation & Workflow Optimization",
                  "Java Script",
                ],
  }
];

export const PROJECTS = [
  {
    title: "Advanced ToDo App",
    image: todo,
    description: [
      "An advanced ToDo app with filtering, drag-and-drop features, and user authentication.",
      "Built with React, Next.js, and .NET for backend services."
    ],
    technologies: ["React", "Next.js", ".NET", "MongoDB"],
    link: "https://github.com/gsudharshan2002",
  },
  {
  title: "Traffic Light Navigator",
  image: traffic,
  description: [
    "A console-based Java application that simulates a traffic light system.",
    "It accepts user input for traffic light colors and displays corresponding instructions like STOP, WAIT, or GO."
  ],
  technologies: ["Java", "OOP", "Console Application"],
  link: "https://github.com/gsudharshan2002", 

},
  {
    title: "Blog Website",
    image: blog,
    description: [
      "The goal of my full-stack blog website project is to gain hands-on experience in building a complete web application using React for the frontend and Node.js/Express for the backend.",
      "The backend (Node.js + Express) handles authentication, CRUD operations for posts, and GraphQL queries."
    ],
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
    link: "https://gsudharshan2002.github.io/portfolio-web-site/",
    },
  {
    title: "Portfolio Website",
    image: portfolio,
    description: [
      "A personal portfolio website showcasing projects, skills, and contact information."    ],
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
    link: "https://gsudharshan2002.github.io/portfolio-web-site/",
  },
  {
    title: "Gallery Website",
    image: gallery,
    description: [
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking."
    ],
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
    link: "https://gsudharshan2002.github.io/my-sample/",
  },
  {
    title: "Blogging Platform",
    image: blogging,
    description: [
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles."
    ],
    technologies: ["HTML", "CSS", "Vue.js", "Express", "MySQL"],
    link: "https://gsudharshan2002.github.io/portfolio-web-site/",
  },
  {
    title: "E-Commerce Project Listing App",
    image: ecommerce,
    description: [
      "A full-stack e-commerce application with product listings, cart functionality, and admin management.",
      "Built using React for frontend and ASP.NET Core Web API for backend."
    ],
    technologies: ["React", "ASP.NET Core", "SQL Server"],
    link: "https://github.com/gsudharshan2002",
  },
  
  {
    title: "Drum Machine",
    image: drum,
    description: [
      "An interactive drum machine built using React. Users can play sounds by clicking pads or using keyboard keys."
    ],
    technologies: ["React", "JavaScript", "HTML", "CSS"],
    link: "https://github.com/gsudharshan2002",
  },
  {
    title: "Spring Boot Calculator",
    image: cal,
    description: [
      "A backend calculator API built with Spring Boot, demonstrating RESTful operations and clean architecture."
    ],
    technologies: ["Spring Boot", "Java", "REST API"],
    link: "https://github.com/gsudharshan2002",
  },
  {
    title: "Student Management System",
    image: student,
    description: [
      "A full-stack application for managing students with complete CRUD functionality.",
      "Built using Spring Boot and MySQL."
    ],
    technologies: ["Spring Boot", "MySQL", "Java"],
    link: "https://github.com/gsudharshan2002",
  },
  {
  title: "Train Ticket Booking App",
  image: ticket,
  description: [
    "A console-based Java application for booking train tickets.",
    "Features include viewing available trains, selecting seats, booking tickets, and displaying passenger details."
  ],
  technologies: ["Java", "OOP", "Console Application"],
  link: "https://github.com/gsudharshan2002", // Replace with actual repo link if available
},
  {
    title: "Story Generative AI App",
    image: story,
    description: [
      "A creative app that uses OpenAI API to generate unique stories based on user input prompts."
    ],
    technologies: ["React", "OpenAI API","Python"],
    link: "https://github.com/gsudharshan2002",
  },
  {
    title: "CRM Website",
    image: crm,
    description: [
      "An enterprise-level CRM system for managing customer relationships and leads.",
      "Built with Next.js and React on the frontend, and ASP.NET Core Web API with JWT authentication on the backend."
    ],
    technologies: ["Next.js", "React", "ASP.NET Core", "JWT", "SQL Server"],
    link: "https://github.com/gsudharshan2002",
  },
  {
    title: "Student-Teacher Dashboard",
    image: school,
    description: [
      "A dynamic dashboard that adapts its UI based on user role (student or teacher).",
      "Full-stack application using React and Tailwind CSS for frontend, Spring Boot for backend."
    ],
    technologies: ["React", "Tailwind CSS", "Spring Boot", "Java"],
    link: "https://github.com/gsudharshan2002",
  }
];
export const Achievements = [
  {
    year: "2024",
    title: "TCS NQT – 80% Score",
    description: "Secured 79% in TCS National Qualifier Test, demonstrating strong problem-solving and technical skills.",
    tags: ["Problem Solving", "Java", "Aptitude"]
  },
  {
    year: "2023",
    title: "Built 50+ Real-World Projects",
    description: "Completed over 50 full-stack development projects across various technologies, focusing on clean code and real-world use cases.",
    tags: ["Full Stack", "React", "Spring Boot", "ASP.NET"]
  },
  {
    year: "2023",
    title: "GitHub Active Contributor",
    description: "Contributed actively to open-source and personal projects, maintaining clean and reusable codebases on GitHub.",
    tags: ["Open Source", "Clean Code", "GitHub"]
  }
];


export const CONTACT = {
  address: "kamaraj nagar,Ambattur estate near,chennai, Tamil nadu - 600050 ",
  phoneNo: "+91 6381 9956 74 ",
  email: "gsudharshan282002@gmail.com",
};
