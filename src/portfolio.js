/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Keith Richard Limbo",
  title: "Flutter Developer | Mobile Application Engineer",
  subTitle: emoji(
    "Flutter Developer with 4+ years of experience architecting and shipping cross-platform mobile applications. I specialize in modernizing production Flutter codebases, BLoC-based state management, performant UI, RESTful APIs, Firebase, and end-to-end App Store and Google Play deployments."
  ),
  resumeLink: "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/keithlimbo",
  linkedin: "https://www.linkedin.com/in/keith-richard-limbo/",
  gmail: "keithrichardarca.limbo@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "A DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Cross-platform mobile applications with Flutter and Dart"),
    emoji("⚡ BLoC pattern and clean architecture for maintainable products"),
    emoji("⚡ RESTful APIs, Firebase, geolocation, and store deployments")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "flutter",
      fontAwesomeClassname: "fas fa-rocket"
    },
    {
      skillName: "dart",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "bloc",
      fontAwesomeClassname: "fas fa-project-diagram"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "dio / retrofit",
      fontAwesomeClassname: "fas fa-exchange-alt"
    },
    {
      skillName: "firebase / maps",
      fontAwesomeClassname: "fas fa-map-marker-alt"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Batangas State University",
      logo: require("./assets/images/Batangas_State_Logo.png"),
      subHeader:
        "Bachelor of Science in Information Technology, Major in Service Management",
      duration: "Aug 2018 - Jul 2022"
      // desc: "Participated in the research of XXX and published 3 papers.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Flutter / Mobile Architecture",
      progressPercentage: "95%"
    },
    {
      Stack: "APIs / Cloud Integration",
      progressPercentage: "85%"
    },
    {
      Stack: "Testing / Deployment",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Mobile Application Developer (Flutter)",
      company: "SD Solutions I.T. Outsourcing, Inc.",
      companylogo: require("./assets/images/fastsend.png"),
      date: "Nov 2023 - Present",
      desc: "Leading Flutter modernization and delivery across production mobile applications in Pasig, Manila.",
      descBullets: [
        "Migrated 75% of production Flutter projects to current stable releases and achieved Google Play 16KB page-size compliance.",
        "Refactored legacy codebases with BLoC state management across 9 production apps.",
        "Managed end-to-end deployments for bXTRA PH, My Basurero, and QCinema across Google Play and Apple App Store.",
        "Translated high-fidelity Figma mockups into responsive cross-platform interfaces.",
        "Integrated RESTful APIs and backend microservices with Dio and Retrofit."
      ]
    },
    {
      role: "Mobile Application Developer (Flutter)",
      company: "FastSend Mobile Solutions Inc.",
      companylogo: require("./assets/images/fastsend.png"),
      date: "Feb 2023 - Sep 2023",
      desc: "Architected core app logic and scalable frontend components for a mobile wallet product in Marikina, Manila.",
      descBullets: [
        "Implemented unit testing strategies across 4 critical business logic modules and data models.",
        "Mentored and onboarded 3 engineering interns on Flutter best practices and Dart standards.",
        "Authored technical documentation for application code, internal APIs, and development workflows."
      ]
    },
    {
      role: "Mobile Application Developer (Flutter)",
      company: "Libera",
      companylogo: require("./assets/images/libera.jpeg"),
      date: "Sep 2022 - Feb 2023",
      desc: "Built and maintained mobile product capabilities for a data-driven sales and logistics platform in Makati, Manila.",
      descBullets: [
        "Designed and connected 2 new API endpoints for evolving client requirements.",
        "Diagnosed and resolved critical bugs and memory leaks across legacy modules.",
        "Enforced clean code and modular architecture standards across code reviews."
      ]
    },
    {
      role: "Mobile Application Developer (Flutter) & Intern",
      company: "Nucleio Technologies IT Solutions",
      companylogo: require("./assets/images/nucleio.jpeg"),
      date: "Jan 2022 - Sep 2022",
      desc: "Built mobile interfaces and integrations for a digital services startup in Calamba, Laguna.",
      descBullets: [
        "Translated Figma wireframes into pixel-perfect Flutter layouts with customized widgets.",
        "Integrated Google Maps API for real-time geolocation tracking and spatial visualization.",
        "Engineered APIs connecting Firebase, Odoo ERP, and mobile applications.",
        "Assisted in WebRTC implementation for real-time audio and video streaming."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/fastsend.png"),
      projectName: "QCinema - Official Festival App",
      projectDesc:
        "Architected the official QCinema International Film Festival app with digital ticketing, interactive movie schedules, and targeted push notifications.",
      date: "Oct 2024 - Present",
      footerLink: []
    },
    {
      image: require("./assets/images/googleAssistantLogo.webp"),
      projectName: "bXTRA PH Ecosystem",
      projectDesc:
        "Developed a connected customer, rider, and vendor app ecosystem with real-time RESTful synchronization, merchant order routing, and in-app navigation. The customer app has surpassed 10,000 downloads with a 4.6-star rating.",
      date: "Nov 2023 - Present",
      footerLink: []
    },
    {
      image: require("./assets/images/pwaLogo.webp"),
      projectName: "My Basurero",
      projectDesc:
        "Built a waste management application with instant pickup estimates, an Environmental Points rewards system, and geolocation APIs for residential and enterprise pickups.",
      date: "Nov 2023 - Present",
      footerLink: []
    },
    {
      image: require("./assets/images/fun_factory.png"),
      projectName: "Brix Art - The Fun Factory",
      projectDesc:
        "Created an AR mobile app using TensorFlow Lite for camera-based puzzle recognition and custom 3D model rendering after puzzle completion.",
      date: "Jul 2023 - Sep 2023",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.thefunfactory.co.in/"
        }
        //  you can add extra buttons here.
      ]
    }
    // {
    //   image: require("./assets/images/nextuLogo.webp"),
    //   projectName: "Nextu",
    //   projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    //   footerLink: [
    //     {
    //       name: "Visit Website",
    //       url: "http://nextu.se/"
    //     }
    //   ]
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Based in Cuenca, Batangas, Philippines. Open to building reliable cross-platform mobile products and thoughtful digital experiences.",
  number: "+63938-650-8693",
  email_address: "keithrichardarca.limbo@gmail.com",
  location: "Cuenca, Batangas, Philippines"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
