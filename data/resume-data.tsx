import { GitHubIcon, LinkedInIcon, XIcon, InstagramIcon } from "@/components/icons";
import { PLAT, LIS, SHAPEAI, SLIIT, SFS, ANANDA, COHERE, IFS, Miniblocks, Mahara, Bliss, Sinhala, QuackDebug, AlgoFinder, Blinker } from "@/public";

export const RESUME_DATA = {
  name: "Sayuru Bopitiya",
  initials: "SR",
  location: "Colombo, LK",    
  locationLink: "https://www.google.com/maps/place/Colombo",
  about: "Hello there! (Obi-Wan reference) I'm Sayuru, a Software Engineer and a Computer Science undergraduate who loves to build things :)",
  aboutBulletPoints: [   
    "3+ years of industry experience",
    "Won some hackathons, eg. IEEEXtreme 16.0, Minihackathon + more",
    "President | SLIIT FOSS Community",
    "Ex-President | Mozilla Campus Club of SLIIT & SLIIT Gavel Club",    
    "Final Year Undergraduate @ SLIIT",
    <>
    Huge Pokémon fan! <img src='/pikachu-running.gif' alt='Pikachu running' className='moving-gif' style={{ display: 'inline', verticalAlign: 'middle' }} />
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
      /*{
        name: "X",
        url: "https://twitter.com/",
        icon: XIcon,
      },*/
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
      name: 'Miniblocks',
      link: 'https://github.com/miniblocks-app',
      badges: ["No-Code", "App Development", "Cross-Platform"],
      title: "A No-Code Cross-Platform App Development Platform for kids!",
      logo: Miniblocks,
      date: "Since Jun 2024",
      description: "A Blocky-based programming environment for developing cross-platform mobile applications focusing on young kids aged 10 to 15. The platform is designed to be a fun and engaging way for kids to learn the basics of programming and app development. The platform is mainly built using Flutter.",
      videoLink: "",
      projectDetailsLink: "https://github.com/miniblocks-app",
    },
    {
      name: 'Platned Mahara',
      link: 'https://www.linkedin.com/posts/platned_introducing-platned-mahara-the-ultimate-activity-7252325225726459904-vmsO?utm_source=share&utm_medium=member_desktop',
      badges: ["Automated Testing", "DDT", "Chrome Extension", "Desktop Application"],
      title: "Automating Business Workflows by a mile",
      logo: Mahara,
      date: "Since Sep 2024",
      description: "I'm the Dev Lead of Platned Mahara which is the ultimate IFS Cloud application testing tool designed to transform how you test your IFS Cloud solutions. With Platned, you can run expected outcomes in just a few clicks, making it the perfect solution for your needs. Mahara consists of 2 components: A chrome extension to capture the API calls and a Desktop Application to execute the tests.",
      videoLink: "https://www.linkedin.com/posts/platned_introducing-platned-mahara-the-ultimate-activity-7252325225726459904-vmsO?utm_source=share&utm_medium=member_desktop",
      projectDetailsLink: "https://www.linkedin.com/posts/platned_introducing-platned-mahara-the-ultimate-activity-7252325225726459904-vmsO?utm_source=share&utm_medium=member_desktop",
    },
    {
      name: 'Enhancing Sinhala NLP Project',
      link: 'https://www.linkedin.com/posts/sayuru-bopitiya_nlp-sinhala-ai-activity-7255545828344246273-ha-q?utm_source=share&utm_medium=member_desktop',
      badges: ["ML", "Research", "Sinhala", "NLP", "Evaluations"],
      title: "A project to enhance Sinhala's NLP capabilities",
      logo: Sinhala,
      date: "Since Sep 2024",
      description: "This project is a part of Cohere for AI's 'Expedition Aya' initiative. I'm in a team of amazingly talented people who truly believe in the future of the Sinhala langugage. The project created a foundational dataset of 10 million Sinhala entries by translating the FLAN dataset and fine-tuning the Gemma 2 model. We translated MMLU datasets for evaluation, revealing significant potential for improvement in Sinhala NLP. This project means so much for the digital future of Sinhala, ensuring that more tools are available to improve accessibility and AI capabilities for underrepresented languages.",
      videoLink: "https://www.youtube.com/watch?v=DRIqxn7bxI4",
      projectDetailsLink: "https://github.com/the-ai-team/enhancing-sinhala-nlp",
    },
  ],
  projects: [
    {
      name: 'Bliss',
      link: '',
      badges: ["Mental health", "Flutter", "Therapy"],
      title: "Professional therapy. For everyone.",
      logo: Bliss,
      date: "Since Sep 2022",
      description: "Bliss is a dream project of mine which also happens to be one of the first. This project won the MiniHackathon competition in 2022 and got us into the Quarter-finals of the Microsoft Imagine Cup 2022. Many people in Sri Lanka struggle with mental health issues. Without tech introduced, the mental health crisis will grow. Bliss provides free and effective therapy for Sri Lankans during these difficult times.",
      videoLink: "",
      projectDetailsLink: "https://www.linkedin.com/posts/sayuru-bopitiya_hypertext-sliit-msclub-activity-6978056739065671680-lZfo?utm_source=share&utm_medium=member_desktop",
    },
    {
      name: "Blinker",
      link: "",
      badges: ["Python", "OpenCV", "EyeCare"],
      title: "Detecting eye conditions early on",
      logo: Blinker,
      date: "Sep 2023",
      description: "When I was very young, I used to blink alot. Fortunately, I received care and was subjected to glasses from grade 1 :') Blinker is a project that aims to help people like myself identify their condition early on. It uses a camera to detect the eye and count the blinks and then takes the count to finalize the condition.",
      videoLink: "", 
      projectDetailsLink: "https://github.com/SayuruRehan/Blinker",
    },
    {
      name: "Quack Debugging",
      link: "https://sayururehan.github.io/quackdebugging/",
      badges: ["Ducks", "Debugging", "Terminal"],
      title: "Debug your code with a cyber ducky :)",
      logo: QuackDebug,
      date: "Nov 2023",
      description: "When I was learning coding, I used to follow David Malan's CS50 courses. There he keeps a rubber ducky near him and I've always wondered why. After a bit of Googling, I stumbled upon 'Rubber Duck Debugging'. Quack Debugging is a project that aims to help developers debug their code by explaining the code to a virtual rubber duck (or cyber duck, if you are a cool person). Users can chat with the Cyber Duck about their code, knowledge, life, relationships (anything you want - just dump your trauma). The project is built using Jekyll and is hosted on GitHub Pages.",
      videoLink: "", 
      projectDetailsLink: "https://sayururehan.github.io/quackdebugging/",
    },
    {
      name: "Algorithm Pathfinder",
      link: "https://sayururehan.github.io/algorithm-pathfinder/",
      badges: ["Algorithms", "Pathfinder", "Jekyll"],
      title: "A visualizer for different kinds of pathfinding algorithms",
      logo: AlgoFinder,
      date: "May 2023",
      description: "In order to learn algorithms practically,  I worked on this application. This project helped me understand the very core of Algorithms. At its core, a pathfinding algorithm seeks to find the shortest path between two points. This application visualizes various pathfinding algorithms in action, and more! All of the algorithms on this application are adapted for a 2D grid, where 90 degree turns have a 'cost' of 1 and movements from a node to another have a 'cost' of 1. (Inspired by Clement's creation)",
      videoLink: "", 
      projectDetailsLink: "https://sayururehan.github.io/algorithm-pathfinder/",
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
      activities: "I am a final year undergraduate specializing in Software Engineering. I'm the Current President of the SLIIT FOSS Community and was the Former President of the Mozilla Campus Club of SLIIT and the Former President of the SLIIT Gavel Club. Additionally, I was a part of AIESEC for over 2+ years (Both Nationally and Globally). I have hosted and conducted many tech sessions and workshops for the Juniors both physically and virtually.",
      logo: SLIIT
    },
    {
      school: "Ananda College",
      degree: "Advanced Level, Physical Sciences",
      start: "2018",
      end: "2020",
      activities: "Was awarded the 'Wimala Nissanka Memorial Award' in 2021. I was also the Assistant Treasurer of the ICT Society and the Chief Editor of the Science Union. I was also a member of the Committee Member of the Interact Club and a member of the Senior Beat Band of the Music Circle and the Western Music Association.",
      logo: ANANDA
    },
    {
      school: "Lyceum International School",
      degree: "Ordinary Level",
      start: "when I was a kid",
      end: "2017",
      activities: "I was awarded the 'Best Actor' and 'Merit Award' on 2 consective years for performance in Drama & Theatre. I achieved the District Commissioner's Cord for Scouting and led the Scouting Troop for a while. Represented the school in the U-15 and U-17 Cricket teams, U-17 Table Tennis Team, and the U-19 Chess Team",
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
          <li> • Working in the Supply Chain, Procurement defects and implementations.</li>
          <li> • Core developer of the 'Avalara Tax System' Integration for the Brazilian Tax Localization. Development related to tax calculations and system integrations.</li>
          <li> • Core developer of the Activity-based emissions calculations for Scope 3 emissions in the sustainability initiative (ESG Framework) for purchased goods/services and Carbon emission tracking metrics according to UN guidelines.</li>
          <li> • Working in the Surge Initiative for IFS Cloud Maintenix migration and report layout migrations initiative.</li>
        </ul>
      ]
    },
    {
      company: "Platned",
      link: "https://www.platned.com/",
      badges: ["IFS ERP", "OracleDB", "BOOMI", "Automated Testing", "Extension Developer", "Integration Developer"],
      title: "Technical Consultant",
      logo: PLAT,
      start: "Mar 2024",
      end: "Present",
      description: [
        <ul>
          <li> • Dev Lead for the Platned Mahara product.</li>
          <li> • Implemented Agile practices such as User story breakdowns, estimations and sprints.</li>
          <li> • Worked on IFS APPS10 Aurena implementation and consultation for Hindustan Aeronautics Limited (HAL).</li>
          <li> • IFS Cloud 23R2 implementation for Lightsource BP.</li>
          <li> • Handled BOOMI integrations with IFS Cloud for Multiplex.</li>
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
          <li> • Joined the Platform Team for the Develper Tools & Extensibility team and later in the Experience Framework team within the Technology Team.</li>
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
      description: "When I find some free time, I like to do covers of some songs I love. I have an Instagram account where I upload my music. I have been doing covers for a little over a year now and I have a small following on Instagram (mostly friends). I hope to release some into Spotify :)",
      link: "https://www.instagram.com/sraymusic/",
    },
  ],
} as const;
