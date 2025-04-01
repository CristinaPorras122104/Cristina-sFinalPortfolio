/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Cristina's Portfolio",
  description:
    "I'm a passionate 20-year-old BSIT student at Western Institute of Technology, currently in my 2nd year. I love exploring web development, programming, and tech-driven solutions while constantly learning and pushing my creative limits. Welcome to my portfolio—let’s build something amazing together! 🚀",
  og: {
    title: "Cristina Bernadette Portfolio",
  },
};

//Home Page
const greeting = {
  title: "Cristina Bernadette Porras",
  logo_name: "Cristina Bernadette",
  nickname: "tina_berna",
  subTitle:
    "I'm a passionate 20-year-old BSIT student at Western Institute of Technology, currently in my 2nd year. I love exploring web development, programming, and tech-driven solutions while constantly learning and pushing my creative limits. Welcome to my portfolio—let’s build something amazing together! 🚀",

  portfolio_repository: "https://github.com/CristinaPorras122104",
  githubProfile: "https://github.com/CristinaPorras122104",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/CristinaPorras122104",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },

  {
    name: "YouTube",
    link: "https://www.youtube.com/@cristinaporras422",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:cristinatorreporras@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/profile.php?id=100073276579717",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/tina_porras21/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Artificial Intelligence & Machine Learning",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Building and training machine learning models for predictive analytics and automation",
        "⚡ Experience in natural language processing (NLP) and computer vision applications",
        "⚡ Implementing deep learning solutions using frameworks like TensorFlow and PyTorch",
      ],
      softwareSkills: [
        {
          skillName: "TensorFlow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deep Learning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
    {
      title: "Web & Mobile Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Creating dynamic and interactive front-end web applications using ReactJS",
        "⚡ Developing cross-platform mobile applications with Flutter and React Native",
        "⚡ Building robust backend services with Node.js, Express, and databases",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Cloud Computing & DevOps",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Managing cloud infrastructure on AWS, GCP, and Azure",
        "⚡ Deploying and scaling applications using Docker and Kubernetes",
        "⚡ Integrating cloud-based databases and storage solutions",
        "⚡ Setting up CI/CD pipelines for automated deployments",
      ],
      softwareSkills: [
        {
          skillName: "Google Cloud Platform",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "Amazon Web Services",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Microsoft Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "UI/UX & Graphic Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Creating visually appealing and user-friendly interfaces",
        "⚡ Designing brand identities, logos, and digital assets",
        "⚡ Prototyping UI designs with interactive elements",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page

const degrees = {
  degrees: [
    {
      title: "Western Institute of Technology",
      subtitle: "Bachelor of Science in Information Technology",
      logo_path: "/images/witlogo-removebg-preview.png", // Updated path
      alt_name: "WIT",
      duration: "2023-2025",
      descriptions: [
        "⚡ I have studied fundamental IT subjects such as Data Structures, Algorithms, Networking, and Database Management Systems.",
        "⚡ I have hands-on experience with Cisco Packet Tracer, configuring static routing and network simulations.",
        "⚡ I am currently learning React to build modern web applications and improve my front-end development skills.",
        "⚡ I actively work on personal projects, including a portfolio website, to showcase my skills and continuous learning.",
      ],
      website_link:
        "https://www.facebook.com/WesternInstituteOfTechnology.Iloilo",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I am an aspiring IT professional with hands-on experience in web development, networking, and IT support. Through internships and freelance projects, I have honed my skills in building responsive websites, troubleshooting technical issues, and configuring network systems. Beyond technical work, I enjoy collaborating with tech communities and contributing to open-source projects. My goal is to continuously grow as a developer while helping others through my skills and creativity.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "IT Support Intern",
          company: "Western Institute of Technology",
          company_url:
            "https://www.facebook.com/WesternInstituteOfTechnology.Iloilo",

          duration: "March 2025 - Present",
          location: "Iloilo City",
          description:
            "Providing technical support for students and faculty by troubleshooting software and hardware issues. Assisting in maintaining the school's computer network and setting up devices for online and offline systems.",
          color: "#000000",
        },
        {
          title: "Freelance & Personal Projects",
          company: "Self-Employed",
          company_url: "https://your-portfolio.com",

          duration: "January 2025 - Present",
          location: "Iloilo City",
          description:
            "Developed responsive websites using React.js and Tailwind CSS. Worked with clients to create portfolio websites and business landing pages while improving skills in frontend and backend development..",
          color: "#0879bf",
        },
        {
          title: "Networking Simulation Project",
          company: "Academic Project",
          company_url: "https://www.linkedin.com/company/muffito-inc/about/",

          duration: "December 2024 - February 2025",
          location: "Western Institute of Technology",
          description:
            "Designed and implemented a simulated network using Cisco Packet Tracer. Configured static routing and VLANs to ensure efficient data transfer between multiple routers and devices.",
          color: "#28a745",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Web Development Intern",
          company: "CodeCrafters Solution",
          company_url: "https://www.codecrafters.com/",

          duration: "June 2024 - Aug 2024",
          location: "Iloilo City",
          description:
            "Developed dynamic and responsive websites using React.js, Tailwind CSS, and Firebase. Assisted in API integration and frontend optimization to improve user experience. Contributed to designing interactive UI components.",
          color: "#000000",
        },
        {
          title: "IT Support Intern",
          company: "TechWave Inc.",
          company_url: "https://www.techwave.com/",

          duration: "March 2024 - May 2024",
          location: "Iloilo City",
          description:
            "Provided technical support, troubleshooting hardware and software issues. Assisted in setting up network configurations and cybersecurity measures. Worked closely with the IT team to maintain system security.",
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Community Web Developer",
          company: "Iloilo Tech Community",
          company_url: "https://www.iloilotech.com/",

          duration: "July 2024 - Present",
          location: "Iloilo City",
          description:
            "Contributed to the development of a community website to showcase local tech events and resources. Collaborated with a team of developers to enhance digital presence and accessibility.",
          color: "#4285F4",
        },
        {
          title: "Open Source Contributor",
          company: "GitHub",
          company_url: "https://github.com/",

          duration: "Jan 2024 - Present",
          location: "Iloilo City ",
          description:
            "Actively contributing to open-source  in web development and software documentation. Worked on bug fixes, feature enhancements, and collaboration with global developers.",
          color: "#D83B01",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "I have worked on a diverse range of projects, from web development to network simulations, applying the latest technologies to solve real-world problems. My expertise includes creating responsive websites, optimizing network configurations, and experimenting with innovative solutions in software development. I enjoy turning ideas into functional applications that enhance user experience and efficiency.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "network-security-vulnerabilities",
      name: "Identifying and Mitigating Network Security Vulnerabilities",
      createdAt: "2024-05-10T00:00:00Z",
      description:
        "Research paper on analyzing common network security threats and preventive measures.",
      url: "https://example.com/network-security-paper",
    },
    {
      id: "react-portfolio-guide",
      name: "Building a Personal Portfolio with React",
      createdAt: "2024-07-15T00:00:00Z",
      description:
        "A step-by-step guide on designing and developing an interactive portfolio using ReactJS.",
      url: "https://example.com/react-portfolio-guide",
    },
    {
      id: "cisco-packet-tracer-tutorial",
      name: "Mastering Cisco Packet Tracer for Network Simulations",
      createdAt: "2024-09-03T00:00:00Z",
      description:
        "Comprehensive tutorial on setting up and configuring networks using Cisco Packet Tracer.",
      url: "https://example.com/cisco-packet-tracer-tutorial",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "GRADPIC-removebg-preview.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://hashnode.com/@cristina21",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Petalsville Subdivision, Jaro, Iloilo City, Philippines",
    locality: "Iloilo City",
    country: "Philippines",
    region: "Western Visayas",
    postalCode: "5000",
    streetAddress: "Lily Street",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/yk9y4v8VupUXFZh58",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
