import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Customer Relationship Manager",
      company_name: "ICICI LOMBARD",
      icon: starbucks,
      iconBg: "#383E56",
      date: "October 2021 - June 2022",
      points: [
        "Handling Relationship with ICICI LOMBARD as well as ICICI BANK Customers.",
        "ICICI Lombard Offers Customer's the best Insurance for Motor and Health.",
        "Our work is Handling there customer and Educating them How to use the Application made by ICICI Lombard.",
        "We use to our customer in there queries related to Insurance.",
        "It was really Greatfull thing to work with ICICI Bank itself.",
      ],
    },
   
    {
      title: "INTERNSHIP (Software Developer).",
      company_name: "Copia Consultancy Services",
      icon: shopify,
      iconBg: "#383E56",
      date: "May/15/2023 - August/31/2023",
      points: [
        "I did 3 months of internship as a Software Developer Intern as I was new to the Industry ",
        "Developing and maintaining web applications using React.js and DOTNET technologies.",
        "Again in the field of Information Technology I got to work with Banking sector in which I was working in previous company too",
        "In Fornt End we use React.js and in backend we use DOTNET .",
        "I also got opportunity for  Deployment of Projects to Clients.",
      ],
    },

    {
      title: "Software Developer",
      company_name: "Copia Consultancy Services",
      icon: shopify,
      iconBg: "#383E56",
      date: "September/1/2023 - Working...",
      points: [
        "AFter 3 Months of Internship Got confimed in the company because of the Hardwork and dedication ",
        "Developing and maintaining web applications using React.js and DOTNET technologies.",
        "Again in the field of Information Technology I got to work with Banking sector in which I was working in previous company too",
        "In Fornt End we use React.js and in backend we use DOTNET .",
        "I also got opportunity for  Deployment of Projects to Clients.",
      ],
    },
   
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Snake Game",
      description:
        "Made a Project on Snake Game using HTML CSS and JAVASCRIPT. Experience the nostalgia from the era of 90s mobile games this is the new version of snake game we used to play in Nokia mobiles",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JAVASCRIPT",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/AmeyaJagtap08/snakegame",
    },
    {
      name: "To Do List",
      description:
        "Made a Project on Todolist using HTML CSS and JAVASCRIPT.Using the concepts of CRUD operation made this project. In this project you can add your daily work with a Title and Description",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/AmeyaJagtap08/Todolist",
    },

    {
      name: "3D Portfolio",
      description:
        "I made this Project just to let recruiters know about my ability to code and what i can do. It was not possible for me to showcase my skills just with a resume so i made this portfolio.",
        
      tags: [
        {
          name: "3 js",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "React",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/AmeyaJagtap08/Todolist",
    },
   
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  