import {
    //mobile,
    //backend,
    creator,
    web,
    devops,
    cloud,
    aws,
    azure,
    //html,
    //css,
    reactjs,
    //redux,
    linux,
    nodejs,
    bash,
    git,
    //figma,
    docker,
    showcallsite,
    settleupsite,
    tripguide,
    threejs,
    //meta,
    //shopify,
    techclanlogo,
    webflow,
    nestjs,
    nextjs,
    postgresql,
    virtualforce
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
      title: "Cloud Engineer",
      icon: cloud,
    },
    {
      title: "DevOps Engineer",
      icon: devops,
    },
    {
      title: "Webflow Designer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "Next.Js",
      icon: nextjs,
    },
    {
      name: "NestJs",
      icon: nestjs,
    },
    {
      name: "AWS",
      icon: aws,
    },
    {
      name: "Azure",
      icon: azure,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Weblow",
      icon: webflow,
    },
    {
      name: "Linux",
      icon: linux,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Bash",
      icon: bash,
    },
    {
      name: "Postgresql",
      icon: postgresql,
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
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Assosciate Software Engineer",
      company_name: "TechClan",
      icon: techclanlogo,
      iconBg: "#E6DEDD",
      date: "Mar 2025 - Present",
      points: [
        "At Upcover, implemented backend support for coupon and discount functionality within the payment system, ensuring accurate validation, pricing logic, and seamless integration with existing billing workflows.",
        "Assisted in integrating a new insurance provider by extending backend services, aligning data models, and ensuring compatibility with existing provider integrations and business rules.",
        "Led the end-to-end development of Showcall’s new Webflow website, translating Figma designs into a modern, high-performance interface with custom interactions, CMS-driven content, and smooth scrolling.",
        "Revamped an outdated website into a refreshed, conversion-focused experience, improving visual clarity, content structure, and overall brand perception.",
      ],
    },
    {
      title: "Devops Engineer",
      company_name: "Virtual Force",
      icon: virtualforce,
      iconBg: "#383E56",
      date: "Mar 2026 - Present",
      points: [
        "AI Chatbot Deployments — Deployed and migrated AI chatbot workloads across AWS EC2, Lightsail, and vast.ai — evaluating each platform's cost, scalability, and hardware fit before committing. Every deployment is automated through CI/CD pipelines, with an active Lightsail-to-EC2 migration currently in progress.",
        "AWS EKS Migration (Ameripolish) — Migrated a live floor-polishing SaaS product from EC2 to Elastic Kubernetes Service, handling cluster setup, node groups, IAM configuration, and production workload management on EKS from the ground up.",
        "Grafana Monitoring Stack — Architected a centralized real-time monitoring solution for Virtual Force's entire server fleet using Grafana, Grafana Alloy, and Prometheus — giving the team live dashboards and proactive alerting across all infrastructure.",
      ],
    },
    /*{
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
        "Settle Up - A full-stack expense management app for groups traveling or gathering. Users can create groups, add members via Gmail invites, track shared expenses, and manage budgets to stay within daily, weekly, or monthly limits. An AI chatbot will assist users with app navigation and queries.",
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