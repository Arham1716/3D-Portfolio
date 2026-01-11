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
    showcallsite,
    settleupsite,
    tripguide,
    threejs,
    meta,
    shopify,
    techclanlogo,
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
      title: "Full Stack Developer",
      icon: web,
    },
    {
      title: "Modern Web Solutions",
      icon: mobile,
    },
    {
      title: "Backend Engineer",
      icon: backend,
    },
    {
      title: "Webflow Designer",
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
      title: "Assosciate Software Engineer",
      company_name: "TechClan",
      icon: techclanlogo,
      iconBg: "#383E56",
      date: "Sep 2025 - Jan 2026",
      points: [
        "At Upcover, implemented backend support for coupon and discount functionality within the payment system, ensuring accurate validation, pricing logic, and seamless integration with existing billing workflows.",
        "Assisted in integrating a new insurance provider by extending backend services, aligning data models, and ensuring compatibility with existing provider integrations and business rules.",
        "Led the end-to-end development of Showcall’s new Webflow website, translating Figma designs into a modern, high-performance interface with custom interactions, CMS-driven content, and smooth scrolling.",
        "Revamped an outdated website into a refreshed, conversion-focused experience, improving visual clarity, content structure, and overall brand perception.",
      ],
    },
    /*{
      title: "Full Stack Developer",
      company_name: "Settle Up",
      icon: settleup,
      iconBg: "#383E56",
      date: "Dec 2025 - Present",
      points: [
        "At Upcover, implemented backend support for coupon and discount functionality within the payment system, ensuring accurate validation, pricing logic, and seamless integration with existing billing workflows.",
        "assisted in integrating a new insurance provider by extending backend services, aligning data models, and ensuring compatibility with existing provider integrations and business rules.",
        "Led the end-to-end development of Showcall’s new Webflow website, translating Figma designs into a modern, high-performance interface with custom interactions, CMS-driven content, and smooth scrolling.",
        "Revamped an outdated website into a refreshed, conversion-focused experience, improving visual clarity, content structure, and overall brand perception.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },*/
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
      name: "Showcall",
      description:
        "A modern website showcasing Showcall’s event production, media, and broadcast services. Allows clients to explore projects, read articles, and access company information seamlessly, with dynamic content powered by CMS and interactive features like sliders and smooth scrolling.",
      tags: [
        {
          name: "Webflow",
          color: "blue-text-gradient",
        },
        {
          name: "Javascript",
          color: "green-text-gradient",
        },
      ],
      image: showcallsite,
      source_code_link: "https://showcall.webflow.io/",
    },
    {
      name: "Settle Up",
      description:
        "Settle Up – A full-stack expense management app designed for groups traveling or gathering together. Users can create groups, add members via Gmail invites, track shared expenses, and (with future AI integration) automatically calculate who owes whom, simplifying financial coordination and avoiding confusion.",
      tags: [
        {
          name: "NestJs",
          color: "blue-text-gradient",
        },
        {
          name: "Next.js",
          color: "green-text-gradient",
        },
        {
          name: "Postgresql",
          color: "pink-text-gradient",
        },
      ],
      image: settleupsite,
      source_code_link: "https://github.com/Arham1716/Settle-Up",
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