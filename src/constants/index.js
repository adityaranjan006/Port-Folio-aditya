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
    title: "React Js",
    icon: mobile,
  },
  {
    title: "Graphics and Design",
    icon: backend,
  },
  {
    title: "Problem -Solving",
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
    name: "React JS",
    icon: reactjs,
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
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    
    title: "Education",
    company_name: "Guru Gobind Singh Public School",
    iconBg: "#383E56",
    date: "March-2017",
    points: [
      "Completed middle school(10th) in 2017 with 10 CGPA",
      "Completed high school(10+2) in 2019 with 85.8 %" ,
    ],
  },
  {
    
    title: "BE",
    company_name: "Siddaganga Institute of Technology",
    iconBg: "#383E56",
    date: "December 2020",
    points: [
      "BE aggregate score till 5ht Semester 9.04 (2023)",
      "I was among top 5 in the department with CGPA 9.74 (2021)" ,
    ],
  },
  {
    
    title: "Extra-Curricular Achievements",
    company_name: "VolleyBall",
    iconBg: "#383E56",
    date: "March-2019",
    points: [
      "Along with Academics I was also a very good athlete During my middle and high school days.",
      "I Secured series of Gold Medals in a row 2017-2019 state and National level tournaments",
      "Our team secured 3rd Position in National volley Ball championship in 2018",
    ],
  },
  {

    title: "Web-frontend Developer",
    company_name: "Team Sark",
    iconBg: "#383E56",
    date: "Febuary 2023",
    points: [
      "Developing and maintaining web applications using Html,Css,Javascript,React.js and other related technologies.",
      "Recently started learning this awesome Js Library which helped me understand the how seamless development is with React Js",
    ],
  },
  {
    title: "Graphics and Design",
    company_name: "Team Sark and Team Avalanche",
    iconBg: "#E6DEDD",
    date: "Jan 2021",
    points: [
      "Designing poster and event banners for events conducted by both team Sark and Avalanche.",
      "Collaborating with cross-functional teams including designers, high-quality output.",
    ],
  },
  {
    title: "Leading and Managing",
    company_name: "Team Avalanche",
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Its and Event Management Group which organizes evnets in SIT College",
      "Collaborating with other teams including Dance, Drama/Theatre and music we organize entertaining Events in college",
      "Team avalanche also a part of Goonj India,contributes to the society by helping out the under developed sections",
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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
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
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };