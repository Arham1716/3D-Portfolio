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
    imgowner,
    threejs,
    //meta,
    //shopify,
    techclanlogo,
    webflow,
    nestjs,
    nextjs,
    postgresql,
    googlecloud,
    golang,
    terraform,
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
    {
      name: "Go",
      icon: golang,
    },
    {
      name: "Terraform",
      icon: terraform,
    },
  ];
  
  const experiences = [
    {
      title: "DevOps Engineer",
      company_name: "Virtual Force Inc",
      icon: virtualforce,
      iconBg: "#383E56",
      date: "Feb 2026 - Present",
      points: [
        "Reduced cloud infrastructure costs by 75% by migrating production AI chatbot workloads from AWS EC2 to vast.ai, while automating staging-server shutdowns via AWS Lambda (Python) to cut idle costs further.",
        "Reduced deployment time by 65% by migrating the production SaaS application from AWS EC2 to Amazon EKS, provisioning Kubernetes clusters, managed node groups, and IAM roles, while enabling rolling deployments and automatic workload scaling.",
        "Reduced incident detection time from 20–30 minutes to seconds by building a centralized monitoring stack using Grafana, Grafana Alloy, and Prometheus for 20+ servers.",
        "Architected a multi-cloud (AWS + Azure DevOps) deployment for a video-generation microservice, provisioning 100+ AWS resources via Terraform (including ECS Fargate) with an encrypted remote state backend, and a keyless CI/CD pipeline via OIDC federation with rollback-protected rolling deployments.",
      ],
    },
    {
      title: "Full Stack Developer",
      company_name: "Tech Clan",
      icon: techclanlogo,
      iconBg: "#E6DEDD",
      date: "Apr 2025 - Feb 2026",
      points: [
        "Optimized NestJS backend APIs, improving system efficiency by 25%.",
        "Integrated a new insurance provider and delivered production-ready Webflow animations within one month.",
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
      name: "imgowner",
      description:
        "A container CVE attribution and OS package pin updater. A vulnerability scanner tells you a container has 241 CVEs; imgowner maps every finding back to the layer that introduced it, so you know whether the base image, your Dockerfile, or your app's dependencies brought it in. Ships with a local scan-history dashboard and signed, SBOM-backed releases.",
      tags: [
        {
          name: "Go",
          color: "blue-text-gradient",
        },
        {
          name: "Docker",
          color: "green-text-gradient",
        },
        {
          name: "Security",
          color: "pink-text-gradient",
        },
      ],
      image: imgowner,
      source_code_link: "https://github.com/Arham1716/imgowner",
    },
  ];
  
  const certifications = [
    {
      name: "Certified Partner Specialist: Gemini Enterprise Deployment",
      issuer: "Google Cloud",
      date: "Oct 2026",
      icon: googlecloud,
      badgeColor: "#4285F4",
      credential_link: "https://www.credly.com/go/GqwAfgnv",
    },
    {
      name: "Certified Partner Specialist: Gemini Enterprise Agent Development",
      issuer: "Google Cloud",
      date: "Oct 2026",
      icon: googlecloud,
      badgeColor: "#34A853",
      credential_link: "https://www.credly.com/go/zZuhmPZJ",
    },
  ];

  export { services, technologies, experiences, testimonials, projects, certifications };