import { GitHubIcon, LinkedInIcon, XIcon, InstagramIcon } from "@/components/icons";
import { CityUniversityLogo, EthGlobalLogo, IEEELogo, ThirdwebLogo, Cosensys, DeveloperDao, Apple, Olympiad, Arta, Cryptoblk, HKIS, CAIS, VideoFast, TextBehindImage } from "@/public";

export const RESUME_DATA = {
  name: "Sayuru Bopitiya",
  initials: "SR",
  location: "Colombo, LK",    
  locationLink: "https://www.google.com/maps/place/Colombo",
  about: "Hello there! (Star Wars reference) I'm Sayuru, a Software Engineer and a Computer Science undergraduate who loves to build things :)",
  aboutBulletPoints: [   
    "3+ years of industry experience",
    "Won some hackathons, eg. IEEEXtreme 16.0, Minihackathon + more",   
    "President | Mozilla Campus Club of SLIIT",
    "President | SLIIT Gavel Club",    
    "Final Year Undergraduate @ SLIIT",
    "Huge Liverpool fan (Let's go Reds!) ❤️",
  ],
  avatarUrl1: "https://pbs.twimg.com/profile_images/1814304469099880448/KAxACa0Z_400x400.jpg",
  avatarUrl2: "https://github.com/SayuruRehan/portfolio/blob/master/public/avatar.png",
  personalWebsiteUrl: "https://rexanwong.xyz",
  contact: {  
    email: null,
    social: [
      {
        name: "X",
        url: "https://twitter.com/",
        icon: XIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sayuru-bopitiya/",
        icon: LinkedInIcon,
      },
      {   
        name: "Instagram",
        url: "https://instagram.com/sayururehan",
        icon: InstagramIcon,
      },   
      {   
        name: "GitHub",
        url: "https://github.com/sayururehan",
        icon: GitHubIcon,
      },   
    ],
  },
  skills: [
    "Java",
    "Angular",
    "C++",
    "C#",
    ".NET",
    "NextJS",
    "React",
    "Typescript",
    "NodeJS",
    "TailwindCSS",
    "PL/SQL",
    "OracleDB",
    "Python",
    "Docker",
    "Kubernetes",
    "IFS ERP",
    "BOOMI",
    "Javascript",
    "Azure",
    "Kotlin",
    "Power BI",
  ],
  currentlyBuilding: [
    {
      name: 'Text Behind Image',
      link: 'https://textbehindimage.rexanwong.xyz',
      badges: ["Free tool", "Design tool"],
      title: "Create text-behind-image designs easily",
      logo: TextBehindImage,
      date: "Since September 2024",
      description: "Creating stunning text-behind-image designs are difficult and there's not many easy-to-use tools online that helps you do that. So I built my own free tool, in 3 hours with AI tools such as cursor.sh, that helps you create these stunning text-behind-image designs easily on your images. Since launching, the tool has gotten 10K users, 2 million views on X/Twitter, #1 Product of the Day on Product Hunt, and notable shoutouts from people like Ryan Hoover, the founder of Product Hunt.",
      videoLink: "https://www.youtube.com/watch?v=3b_Rkv0GYV0",
      projectDetailsLink: "https://producthunt.com/posts/text-behind-image",
    },
    {
      name: 'VideoFast (videofast.gg)',
      link: 'https://videofast.gg',
      badges: ["Startup", "Remotion", "Video editing tool"],
      title: "A super easy to use online video editor",
      logo: VideoFast,
      date: "Since Janurary 2024",
      description: "I've started building VideoFast since the beginning of 2024, while working on schoolwork at the same time.  From iterating and constantly improving the design and the usability of the video editor, it has evolved into the easiest video editor that you will ever use.  Currently, VideoFast has got the #2 Product of the Day on Product Hunt and has over 500 regular users using the editor.",
      videoLink: "https://www.youtube.com/watch?v=b1WPCgIV_0I&t=6s",
      projectDetailsLink: "https://producthunt.com/posts/videofast",
    },
  ],
  awards: [
    {
      name: "Hong Kong Blockchain Olympiad",
      link: "https://www.hkbcol.org/",
      badges: ["Olympiad", "In Person", "100+ teams"],
      title: "Gold medalist award",
      logo: Olympiad,
      date: "8/2024",
      description: "The HKBCOL is a blockchain solution design competition where teams from all secondary schools from Hong Kong compete to pitch and present their blockchain solution to industry leading judges. I was awarded the gold medal (first place) for my project Proof of Workout Protocol and selected to represent Hong Kong at the International Blockchain Olympiad in the Netherlands.",
      videoLink: "https://www.youtube.com/watch?v=OYj3Vru7Y4g",
      projectDetailsLink: "https://github.com/rexanwong/proof-of-workout-protocol",
    },
    {
      name: "Developer Dao & Mina Protocol Hackathon",
      link: "https://twitter.com/rexan_wong/status/1681156987143462912",
      badges: ["Hackathon", "Online", "40+ Projects"],
      title: "1st Place",
      logo: DeveloperDao,
      date: "6/2023",
      description: "Developer DAO, the biggest Web3 Developer Organisation, and Mina Protocol, a zero knowledge based blockchain with a market cap of $800 million USD, ran a week-long, remote hackathon with ~ $10,000 in prizes to be won in USDC, Mina Token and CODE.  The hackathon is focused on building zero-knowledge applications on Mina Protocol with SnarkyJS.   I built a privacy-focused decentralized zkApp that aims to enable anonymous and secure protests where participants can join and support various causes while preserving their privacy.  This hackathon was the most hardcore hackathon I've participated in : joining the hackathon, knowing very little about zero-knowledge (zk) technology, let alone building zk technology.  Throughout the process, I had to dive deep and learn all these new concepts while building my zkApp.  In the end, my project won first place in the hackathon, out of 40 other projects, and this victory provoked me to go further deeper into this tough concept of zero knowledge technology.",
      videoLink: "https://www.youtube.com/watch?v=UkD0pTwgjBg&t=481s", 
      projectDetailsLink: "https://github.com/rexanwong/zk-protest",
    },
    {
      name: "Apple Swift Student Challenge",
      link: "https://twitter.com/rexan_wong/status/1656085283836940288",
      badges: ["Hackathon", "Online", "13500+ Submissions"],
      title: "WWDC23 Scholar",
      logo: Apple,
      date: "Q2 2023",
      description: "The Swift Student Challenge at WWDC (Worldwide Developers Conference) is an annual competition organized by Apple to celebrate the ingenuity and expertise of student developers using Swift.  Apple picks around 300 applications out of a pool of more than 10,000+ applicants to win, and I was one of the 300 applicants to win the challenge.   I built an iOS app/game that challenges users to find an image of a random word generated by the app in their photo album, then used machine learning models to verify that the image being selected matches the random word.",
      videoLink: null, 
      projectDetailsLink: "https://github.com/rexanwong/photorush",
    },
  ],
  notableShoutouts: [
    {
      name: "Ryan Hoover, founder of Product Hunt:",
      tweetLink: "https://twitter.com/rrhoover/status/1842977911617335783",
    },
    {
      name: "Steven Tey, former developer advocate at Vercel:",
      tweetLink: "https://twitter.com/steventey/status/1843026678580469916",
    },
  ],
  education: [
    {
      school: "Sri Lanka Institute of Information Technology",
      degree: "Bachelor's in Software Engineering",
      start: "2021",
      end: "2025",
      activities: "I am a final year undergraduate specializing in Software Engineeing. I'm the President of the Mozilla Campus Club of SLIIT and the President of the SLIIT Gavel Club. Additionally, I'm the Assistant Treasurer of the SLIIT FOSS Community (Free and Open Source Software) and I was a member of AIESEC in SLIIT for over 2+ years. I have hosted many tech sessions and workshops for the Juniors both physically and virtually.",
      logo: HKIS
    },
    {
      school: "Ananda College, Colombo 10",
      degree: "Advanced Level, Physical Sciences",
      start: "2018",
      end: "2020",
      activities: "Was awarded the 'Wimala Nissanka Memorial Award' in 2021. I was also the Assistant Treasurer of the ICT Society and the Chief Editor of the Science Union. I was also a member of the Committee Member of the Interact Club",
      logo: CAIS
    },
    {
      school: "Lyceum International School, Panadura",
      degree: "Ordinary Level",
      start: " ",
      end: "2017",
      activities: "Scored 8A's and 1B. I achieved the District Commissioner's Cord for Scouting. I represented the school in the U-15 and U-17 Cricket teams, U-17 Table Tennis Team, and the U-19 Chess Team",
      logo: CAIS
    }, 
  ],
  work: [
    {
      company: "IFS",
      link: "https://www.ifs.com/",
      badges: ["Contract", "Supply Chain", "PL/SQL", "IFS ERP"],
      title: "Technical Consultant (External)",
      logo: ThirdwebLogo,
      start: "Oct 2024",
      end: "Present",
      description:
        "I am currently working as an external Technical Consultant for the IFS Supply Chain Product Area on a contract basis",
    },
    {
      company: "Platned",
      link: "https://www.platned.com/",
      badges: ["IFS ERP", "PL/SQL", "OracleDB", "BOOMI", "Automated Testing", "Extension Developer", "Integration Developer"],
      title: "Junior Technical Consultant",
      logo: Arta,
      start: "Present",
      end: "Mar 2024",
      description:
        "During the summer of 2022, I interned at Arta Tech Fin as a blockchain research intern. My responsibilities included conducting research on blockchain technologies and their potential applications in the financial industry.  At Arta Tech Fin, I had the chance to work with experienced professionals in the financial industry and learn about the latest trends and developments in blockchain technology. I gained valuable insights into how blockchain can be used to solve problems and improve processes in the financial sector, and was able to contribute to the company's research efforts.",
    },
    {
      company: "Cohere for AI",
      link: "https://www.platned.com/",
      badges: ["IFS ERP", "PL/SQL", "OracleDB", "BOOMI", "Automated Testing", "Extension Developer", "Integration Developer"],
      title: "ML Researcher & Contributor",
      logo: Arta,
      start: "Sep 2023",
      end: "Present",
      description:
        "Was a volunteer contributor to the Aya Project in Cohere for AI.",
    },
    {
      company: "IFS",
      link: "https://www.platned.com/",
      badges: ["IFS ERP", "PL/SQL", "OracleDB", "BOOMI", "Automated Testing", "Extension Developer", "Integration Developer"],
      title: "Software Engineer Intern",
      logo: Arta,
      start: "Present",
      end: "Mar 2024",
      description:
        "During the summer of 2022, I interned at Arta Tech Fin as a blockchain research intern. My responsibilities included conducting research on blockchain technologies and their potential applications in the financial industry.  At Arta Tech Fin, I had the chance to work with experienced professionals in the financial industry and learn about the latest trends and developments in blockchain technology. I gained valuable insights into how blockchain can be used to solve problems and improve processes in the financial sector, and was able to contribute to the company's research efforts.",
    },
    {
      company: "Shape AI",
      link: "https://shape-ai.com/",
      badges: ["Remote"],
      title: "Business Development & Social Media Manager Intern",
      logo: Arta,
      start: "Present",
      end: "Mar 2024",
      description:
        "During the summer of 2022, I interned at Arta Tech Fin as a blockchain research intern. My responsibilities included conducting research on blockchain technologies and their potential applications in the financial industry.  At Arta Tech Fin, I had the chance to work with experienced professionals in the financial industry and learn about the latest trends and developments in blockchain technology. I gained valuable insights into how blockchain can be used to solve problems and improve processes in the financial sector, and was able to contribute to the company's research efforts.",
    },
    {
      company: "SNAP Ferd",
      link: "https://www.platned.com/",
      badges: ["IFS ERP", "PL/SQL", "OracleDB", "BOOMI", "Automated Testing", "Extension Developer", "Integration Developer"],
      title: "Data Analyst Intern",
      logo: Arta,
      start: "Present",
      end: "Mar 2024",
      description:
        "During the summer of 2022, I interned at Arta Tech Fin as a blockchain research intern. My responsibilities included conducting research on blockchain technologies and their potential applications in the financial industry.  At Arta Tech Fin, I had the chance to work with experienced professionals in the financial industry and learn about the latest trends and developments in blockchain technology. I gained valuable insights into how blockchain can be used to solve problems and improve processes in the financial sector, and was able to contribute to the company's research efforts.",
    },
  ],
  dataScience: [
    {
      projectName: "Sitting Posture Buddy",
      projectDescription: "An iOS app that tracks your sitting posture in real time and alerts you when your posture becomes bad (like a cooked spaghetti noodle)",
      badges: ["iOS", "CoreML", "CreateML", "UIKit"],
      projectLink: "https://github.com/RexanWONG/sitting-posture-buddy"

    },
    {
      projectName: "Traning a model to play Doom from pixels",
      projectDescription: "A deep neural network that is trained to collect objects in a 3D environment based on the game of Doom, using Sample Factory, an asynchronous implementation of the PPO algorithm.",
      badges: ["Python", "Reinforcement learning", "Sample Factory", "VizDoom"],
      projectLink: "https://huggingface.co/rexanwong/rl_course_vizdoom_health_gathering_supreme"
    },
    {
      projectName: "Kangaroo or Giraffe",
      projectDescription: "A deep CNN image classifier that detects between a kangaroo or a giraffe",
      badges: ["Python", "Tensorflow", "Keras"],
      projectLink: "https://github.com/RexanWONG/kangaroo-or-giraffe"
    },
    {
      projectName: "Analyzing referee decisions in the EPL",
      projectDescription: 'Analyzing and uncovering patterns related to yellow card decisions and understand the tendencies of different referees in the english premier league from 2017-2022',
      badges: ["Python", "Numpy", "Pandas"],
      projectLink: "https://github.com/RexanWONG/analysis_referee_decisions_in_english_premier_league/blob/main/analyzing_referee_decisions_in_epl_2017_2022.ipynb"

    },
  ],
  music: [
    {
      awardName: "@sraymusic",
      year: "",
      description: "When I find some free time, I like to do covers of some songs I love. I have a Instagram account where I upload my music. I have been producing music for a little over a year now and I have a small following on Instagram (mostly friends). I hope to release some into Spotify :)",
      link: "https://www.instagram.com/sraymusic/",
    },
  ],
} as const;
