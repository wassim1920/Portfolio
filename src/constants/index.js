import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  reactjs,
  nodejs,
  mongodb,
  git,
  figma,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  ec,
  RS,
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
    name: "figma",
    icon: figma,
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
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Full-Stack Developer",
    company_name: "GMC Tunis",
    icon: starbucks,
    iconBg: "#383E56",
    date: "January 2022 - April 2022",
    points: [
      "Backend: Implementation of the backend using Node.js and Express.js tohandle data and application logic.",
      "Frontend: Design and development of the application's frontend interface using React.js, ensuring a user-friendly and intuitive interface.",
      "Database: Utilization of MongoDB as the database to store and retrieve relevant information",
    ],
  },
  {
    title: "Computer Networking",
    company_name: "C2E FH",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "October 2021 - January 2022",
    points: [
      "Performing network maintenance activities, including firmware updates and security patches.",
      "Assisting in the design and implementation of local area networks (LAN) and wide area networks (WAN).",
    ],
  },
  {
    title: "Computer Networking",
    company_name: "C2E FH",
    icon: shopify,
    iconBg: "#383E56",
    date: "October 2021 - January 2022",
    points: [
      "Performing network maintenance activities, including firmware updates and security patches.",
      "Assisting in the design and implementation of local area networks (LAN) and wide area networks (WAN).",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
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
    name: "Booking",
    description:
      "hotel booking web app .seamlessly connects travelers with their ideal accommodationsWith a user-friendly interface, real-time availability updates.",
    tags: [
      {
        name: "nodeJS",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/wassim1920/Booking.git",
  },
  {
    name: "Admin",
    description:
      "admin dashboard. Streamline tasks, manage data, and gain valuable insights effortlessly. With controls and comprehensive analytics, this admin dashboard is a key to optimizing efficiency and making informed decisions.",
    tags: [
      {
        name: "nodeJS",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/wassim1920/adminNet.git",
  },
  {
    name: "Public Transportation",
    description:
      " public transportation App. Access real-time schedules, route information, and service updates, ensuring a smooth and convenient travel experience for commuters  ",
    tags: [
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link:
      "https://github.com/wassim1920/Public_TransportationApi.git",
  },
  {
    name: "HooBank",
    description:
      " public transportation App. Access real-time schedules, route information, and service updates, ensuring a smooth and convenient travel experience for commuters  ",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "MUI",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: meta,
    source_code_link: "https://github.com/wassim1920/HooBank.git",
  },
  {
    name: "shoppy",
    description:
      "  E-commerce Admin Dashboard app. manage products, orders, and customer interactions through a user-friendly interface.  ",
    tags: [
      {
        name: "nodeJs",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: ec,
    source_code_link: "https://github.com/wassim1920/shoppy.git",
  },
  {
    name: "Real Estate",
    description:
      "Real Estate app. Explore a diverse range of listings, from homes to commercial spaces, all in one place. detailed property information, interactive maps, and contact options. feature-rich app.",
    tags: [
      {
        name: "nodeJs",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: RS,
    source_code_link: "https://github.com/wassim1920/Real_Estate.git",
  },
];

export { services, technologies, experiences, testimonials, projects };
