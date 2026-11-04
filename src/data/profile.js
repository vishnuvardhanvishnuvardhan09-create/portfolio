/**
 * Personal and Profile Configuration for D Vishnu Vardhan
 * 
 * Contains verified details from resume, including exact academic qualifications table,
 * embedded systems specializations, contact links, and workshop achievements.
 */

export const profileData = {
  name: "D Vishnu Vardhan",
  initials: "DV",
  title: "Aspiring Embedded Systems Engineer | B.Tech ECE",
  shortTitle: "Embedded Systems Engineer",
  
  profileImage: "/profile.jpg",
  
  // Hero section messaging
  hero: {
    badge: "Embedded Systems & Firmware Engineer • B.Tech ECE",
    headline: "Architecting Reliable Bare-Metal Systems & Linux Internals",
    tagline: "Electronics and Communication Engineering student skilled in C with DSA, Python, Microcontrollers, and Computer Architecture.",
    ctaPrimary: "View Embedded Projects",
    ctaSecondary: "Download Resume",
    resumeLink: "/resume.pdf"
  },

  // About section & Career Objective
  about: {
    sectionTag: "About Me",
    title: "Passionate about low-level software and high-reliability hardware.",
    careerObjective: "Seeking a career that is more innovative and challenging which provides me opportunities to learn and enhance my skills and strengths in conjunction with company goals and objectives.",
    bio: "A quick learner and creative problem solver with a positive attitude, skilled in C with DSA, Python, Microcontroller, and Computer Architecture, looking for an opportunity to learn and contribute to a company's goals.",
    detailedBio: [
      "Currently pursuing B.Tech in Electronics and Communication Engineering at Sri Venkatesa Perumal College of Engineering and Technology (JNTU Ananthapur), I bridge the gap between software algorithms and hardware execution.",
      "My core technical competencies center around C programming with Data Structures & Algorithms, Python scripting & automation, Microcontroller interfacing & peripheral drivers, and Computer Architecture concepts."
    ],
    highlights: [
      {
        label: "Programming",
        value: "C with DSA"
      },
      {
        label: "Scripting",
        value: "Python"
      },
      {
        label: "Hardware",
        value: "Microcontroller"
      },
      {
        label: "Systems",
        value: "Computer Architecture"
      }
    ],
    personalTraits: [
      "Positive Attitude",
      "Quick Learner and Creative Problem Solver",
      "Smart working Nature"
    ],
    languages: ["English", "Telugu", "Hindi"],
    hobbies: [
      "Building side projects",
      "Volunteering or mentoring",
      "Team sports",
      "Running or trekking",
      "Blogging or content creation"
    ]
  },

  // Exact Academic Qualifications from Resume
  educationTable: [
    {
      course: "B. Tech (ECE)",
      institution: "Sri Venkatesa Perumal College of Engineering and Technology, Puttur.",
      board: "JNTU, Ananthapur.",
      year: "2027",
      aggregate: "CGPA-6.8%",
      status: "In Progress",
      type: "degree"
    },
    {
      course: "Intermediate (MPC)",
      institution: "Sri Sai Baba National Junior College, Anantapur.",
      board: "Board of Intermediate Education A.P.",
      year: "2023",
      aggregate: "4.53%",
      status: "Completed",
      type: "intermediate"
    },
    {
      course: "SSC",
      institution: "Z.P. High School, Alamuru.",
      board: "Board of Secondary Education A.P.",
      year: "2020",
      aggregate: "CGPA-8.67%",
      status: "Completed",
      type: "school"
    }
  ],

  // Detailed Education Coursework
  education: [
    {
      institution: "Sri Venkatesa Perumal College of Engineering and Technology, Puttur",
      affiliation: "JNTU, Ananthapur",
      degree: "B. Tech in Electronics and Communication Engineering (ECE)",
      period: "2023 - Expected 2027",
      grade: "CGPA-6.8%",
      status: "In Progress",
      description: "Rigorous engineering coursework covering Microprocessors & Microcontrollers, Computer Architecture, Embedded C, Linear Integrated Circuits, Digital Signal Processing, and Data Structures & Algorithms.",
      keyFocus: [
        "Embedded Systems Programming & Bare-Metal C",
        "Microprocessor Architecture (8085/8086, ARM Cortex basics)",
        "Hardware Interfacing & Networking Protocols (TCP/IP, UDP)"
      ]
    },
    {
      institution: "Sri Sai Baba National Junior College, Anantapur",
      affiliation: "Board of Intermediate Education A.P.",
      degree: "Intermediate (MPC - Mathematics, Physics, Chemistry)",
      period: "2021 - 2023",
      grade: "Aggregate: 4.53%",
      status: "Completed",
      description: "Pre-university curriculum with strong emphasis on Mathematics, Physical Sciences, and foundational scientific principles.",
      keyFocus: [
        "Advanced Mathematics & Calculus",
        "Physics (Electromagnetism, Circuits, Optics)",
        "Analytical Problem Solving"
      ]
    },
    {
      institution: "Z.P. High School, Alamuru",
      affiliation: "Board of Secondary Education A.P.",
      degree: "Secondary School Certificate (SSC)",
      period: "Completed 2020",
      grade: "CGPA-8.67%",
      status: "Graduated",
      description: "Comprehensive secondary education with strong academic foundation in Mathematics, Physical Sciences, and logical reasoning.",
      keyFocus: [
        "Scholastic Distinction (CGPA-8.67%)",
        "Early passion for science, electronics and technology"
      ]
    }
  ],

  // Workshops & Practical Training
  workshops: [
    {
      title: "PCB DESIGN Workshop",
      organization: "SVPCET, Puttur",
      date: "22nd - 30th July, 2025",
      badge: "Hands-on Technical Workshop",
      description: "Intensive 9-day practical workshop focusing on electronic circuit schematic capture, component footprint generation, track routing, design rule checking (DRC), and Gerber file generation for manufacturing.",
      topics: [
        "Schematic Capture & Component Selection",
        "Single & Double-layer PCB Routing",
        "Power & Ground Plane Distribution",
        "DRC (Design Rule Check) & Manufacturing Gerber Export",
        "Component Soldering & Continuity Verification"
      ]
    }
  ],

  // Verified Contact Information
  contact: {
    sectionTag: "Get In Touch",
    title: "Let's connect and build intelligent hardware systems together.",
    subtitle: "Open to internship opportunities, full-time graduate roles, and embedded systems project discussions.",
    email: "v6562257@gmail.com",
    linkedin: "https://www.linkedin.com/in/vishnuvardhand-449ece",
    github: "https://github.com/vishnuvardhanvishnuvardhan09-create",
    locationDisplay: "Andhra Pradesh, India",
    responseExpectation: "Prompt response within 24 hours"
  },

  // Footer Information
  footer: {
    copyright: "© 2026 D Vishnu Vardhan. All rights reserved.",
    tagline: "Engineered with precision for low-level systems & high-performance firmware."
  }
};
