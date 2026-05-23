export const aboutItems = [
  {
    icon: "/images/icons/code.png",
    title: "Clean Code",
    text: "Writing maintainable, readable, and scalable code that is easier to extend over time."
  },
  {
    icon: "/images/icons/innovation.png",
    title: "Innovation",
    text: "Exploring practical ways to solve technical problems with thoughtful, creative solutions."
  },
  {
    icon: "/images/icons/systems.png",
    title: "System Design",
    text: "Breaking requirements into reliable architectures with performance, clarity, and long-term maintainability in mind."
  }
];

export const skills = [
  {
    title: "Languages & Core",
    items: ["Java", "Go", "C", "JavaScript"]
  },
  {
    title: "Web / Frontend / Full-Stack",
    items: ["HTML", "CSS", "Svelte", "Vanilla JavaScript"]
  },
  {
    title: "Databases & Data",
    items: ["PostgreSQL", "SQLite", "SHA-256 workflows"]
  },
  {
    title: "Systems & Tools",
    items: ["Linux", "Terminal / CLI tooling", "Makefiles", "Git"]
  },
  {
    title: "Interests & Learning",
    items: [
      "Embedded systems & hardware interfacing",
      "Systems design & architecture",
      "Cybersecurity & security awareness"
    ]
  }
];

export const projects = [
  {
    title: "GigFlow",
    description:
      "A full-stack event marketplace that connects planners with entertainers through event discovery, vendor profiles, applications, messaging, analytics, and a Smart Planner workflow.",
    technologies: ["React", "FastAPI", "PostgreSQL", "SQLAlchemy"],
    image: "/images/GigFlow.png",
    link: "https://github.com/ncortes04/Hackathon-2026"
  },
  {
    title: "NetScan",
    description:
      "A Linux C network scanner that discovers local IPv4 devices with ARP requests and labels vendors from an OUI database.",
    technologies: ["C", "libpcap", "ARP", "OUI lookup"],
    image: "/images/NetScanDemo.png",
    link: "https://github.com/PavloWick/NetScan"
  },
  {
    title: "Hex Converter",
    description: "A decimal, binary, and hexadecimal converter built in C.",
    technologies: ["C", "raylib"],
    image: "/images/HexConverter.png",
    link: ""
  },
  {
    title: "CLI Filechecker",
    description: "A command-line tool for checking magic bytes and SHA-256 hashes.",
    technologies: ["C", "libssl", "sqlite3"],
    image: "/images/FileChecker.png",
    link: "https://github.com/PavloWick/Filechecker"
  }
];

export const experience = [
  {
    title: "Tech Startup Club",
    text: "Collaborative student environment for learning, building, and discussing technical ideas and projects."
  },
  {
    title: "UW Tacoma - B.A. Computer Science & Business Data Analytics (In Progress)",
    text: "Developing a foundation in software engineering, systems thinking, and practical computer science problem solving."
  }
];

export const socials = [
  {
    href: "https://linkedin.com/in/pavlo-puzik",
    label: "LinkedIn profile",
    icon: "/images/icons/in.png"
  },
  {
    href: "https://github.com/PavloWick",
    label: "GitHub profile",
    icon: "/images/icons/git.png"
  },
  {
    href: "/images/PavloPuzik_Resume2026.pdf",
    label: "Resume PDF",
    icon: "/images/icons/resume.png"
  }
];
