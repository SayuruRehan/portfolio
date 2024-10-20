import { GitHubIcon, LinkedInIcon, XIcon, InstagramIcon } from "@/components/icons";
import { DeveloperDao, Apple, Olympiad, Arta, TextBehindImage, PLAT, LIS, SHAPEAI, SLIIT, SFS, ANANDA, COHERE, IFS, AVATAR } from "@/public";

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
    <>
    Huge Pokemon fan! <img src='/pikachu-running.gif' alt='Pikachu running' className='moving-gif' style={{ display: 'inline', verticalAlign: 'middle' }} />
    </>
  ],
  avatarUrl1: "/profile.png",
  avatarUrl2: "/avatar.png",
  personalWebsiteUrl: "https://sayururehan.vercel.app/",
  contact: {  
    email: null,
    social: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sayuru-bopitiya/",
        icon: LinkedInIcon,
      },     
      {   
        name: "GitHub",
        url: "https://github.com/sayururehan",
        icon: GitHubIcon,
      },
      {   
        name: "Instagram",
        url: "https://instagram.com/sayururehan",
        icon: InstagramIcon,
      },
      {
        name: "X",
        url: "https://twitter.com/",
        icon: XIcon,
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
  /*notableShoutouts: [
    {
      name: "Ryan Hoover, founder of Product Hunt:",
      tweetLink: "https://twitter.com/rrhoover/status/1842977911617335783",
    },
    {
      name: "Steven Tey, former developer advocate at Vercel:",
      tweetLink: "https://twitter.com/steventey/status/1843026678580469916",
    },
  ],*/
  education: [
    {
      school: "Sri Lanka Institute of Information Technology",
      degree: "Bachelor's in Software Engineering",
      start: "2021",
      end: "2025",
      activities: "I am a final year undergraduate specializing in Software Engineeing. I'm the President of the Mozilla Campus Club of SLIIT and the President of the SLIIT Gavel Club. Additionally, I'm the Assistant Treasurer of the SLIIT FOSS Community (Free and Open Source Software) and I was a member of AIESEC in SLIIT for over 2+ years. I have hosted many tech sessions and workshops for the Juniors both physically and virtually.",
      logo: SLIIT
    },
    {
      school: "Ananda College",
      degree: "Advanced Level, Physical Sciences",
      start: "2018",
      end: "2020",
      activities: "Was awarded the 'Wimala Nissanka Memorial Award' in 2021. I was also the Assistant Treasurer of the ICT Society and the Chief Editor of the Science Union. I was also a member of the Committee Member of the Interact Club.",
      logo: ANANDA
    },
    {
      school: "Lyceum International",
      degree: "Ordinary Level",
      start: "when I was a kid",
      end: "2017",
      activities: "Scored 8A's and 1B. I achieved the District Commissioner's Cord for Scouting. I represented the school in the U-15 and U-17 Cricket teams, U-17 Table Tennis Team, and the U-19 Chess Team",
      logo: LIS
    }, 
  ],
  work: [
    {
      company: "IFS",
      link: "https://www.ifs.com/",
      badges: ["Contract", "Supply Chain", "PL/SQL", "IFS ERP", "Procurement"],
      title: "Technical Consultant (External)",
      logo: IFS,
      start: "Oct 2024",
      end: "Present",
      description:[
        <ul>
          <li> • Working in the Supply Chain Product Area of R&D.</li>
          <li> • Development of the Avalara Integration in procurement.</li>
        </ul>
      ]
    },
    {
      company: "Platned",
      link: "https://www.platned.com/",
      badges: ["IFS ERP", "OracleDB", "BOOMI", "Automated Testing", "Extension Developer", "Integration Developer"],
      title: "Junior Technical Consultant",
      logo: PLAT,
      start: "Mar 2024",
      end: "Present",
      description: [
        <ul>
          <li> • Worked on IFS APPS10 Aurena implementation and consultation for Hindustan Aeronautics Limited (HAL).</li>
          <li> • IFS Cloud 23R2 implementation for Lightsource BP.</li>
          <li> • Handled BOOMI integrations with IFS Cloud for Multiplex.</li>
          <li> • Dev Lead in the Platned Mahara tool for automating business workflows.</li>
        </ul>
      ]
    },
    {
      company: "Cohere for AI",
      link: "https://cohere.com/",
      badges: ["Open Source", "Machine Learning", "NLP", "Tokenizers", "AI", "Evaluations", "Python"],
      title: "ML Researcher & Contributor",
      logo: COHERE,
      start: "Sep 2023",
      end: "Present",
      description: [
        <ul>
          <li> • ML researcher in the 'Enhancing Sinhala NLP Project'</li>
          <li> • Contributor for the Global MMLU Translations Project. I was placed in the Top 20 global contributors for the project.</li>
          <li> • Contributor for the Aya 101 initiative.</li>
        </ul>
      ]
    },
    {
      company: "IFS",
      link: "https://www.ifs.com/",
      badges: ["Java", "Angular", "Docker", "PL/SQL", "OracleDB", "Azure", "Automated Testing", "PowerApps"],
      title: "Software Engineer Intern",
      logo: IFS,
      start: "Dec 2022",
      end: "Jan 2024",
      description: [
        <ul>
          <li> • Joined the Platform Team for the DevEx team and currently in the Technology Team within Experience Framework.</li>
          <li> • Contributed for Stage 3 and Stage 4 development for the timezone support implementation and Custom Objects.</li>
          <li> • Contributed heavily for Validation/ Container/ Release/ Sanity testing and some of the technical documentations.</li>
          <li> • Collaborated using Agile Methodologies following the 7 Stage Development Process.</li>
          <li> • A member of Purple Force and conducted sessions on 'Competitive Programming' for undergraduates at IIT as a representative of IFS.</li>
          <li> • Finalist at IFS AI Hackathon '23 - Team Hallucin8</li>
        </ul>
      ]
    },
    {
      company: "Shape AI",
      link: "https://shape-ai.com/",
      badges: ["Remote", "Sales", "Social Media", "Marketing", "Content Creation"],
      title: "Business Development & Social Media Manager Intern",
      logo: SHAPEAI,
      start: "Apr 2021",
      end: "Oct 2022",
      description: [
        <ul>
          <li> • Responsible for creating social media marketing content.</li>
          <li> • Assisted in the growth of the Shape AI community.</li>
          <li> • Conducted sales activities such as cold calling, cold emailing and customer meetings.</li>
        </ul>
      ]
    },
    {
      company: "SNAP Ferd",
      link: "https://www.sfsacademy.lk/",
      badges: ["Power BI", "Data Analysis", "Data Visualizations", "Workflow automation", "Project Management"],
      title: "Data Analyst Intern",
      logo: SFS,
      start: "Nov 2020",
      end: "Apr 2021",
      description: [
        <ul>
          <li> • Responsible for developing dashboards (Planning & Progress) using , Gathering information from clients/contractors to show information.</li>
          <li> • Handling the 'Zutec Platform' for a cloud-based document control system.</li>
          <li> • Preparing presentations for demonstrations with stakeholders (QA/QC, Project Managers, etc.).</li>
        </ul>
      ]
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
