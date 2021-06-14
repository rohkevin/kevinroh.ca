import { FaLinkedinIn, FaGithub, FaRegEnvelopeOpen, FaInstagram, FaSpotify } from 'react-icons/fa'
export const links = [
  {
    linkIndex: "01",
    name: "home",
    path: "/"
  },
  {
    linkIndex: "02",
    name: "about",
    path: "/about"
  },
  {
    linkIndex: "03",
    name: "works",
    path: "/works"
  },
  // {
  //   linkIndex: "04",
  //   name: "perspectives",
  //   path: "/perspectives"
  // },
  // {
  //   linkIndex: "05",
  //   name: "musings",
  //   path: "/musings"
  // },
];

export const social = [
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/kevinroh/",
    icon: <FaLinkedinIn className="social-icon"/>
  },
  {
    name: "github",
    url: "https://github.com/rohkevin/",
    icon: <FaGithub className="social-icon"/>
  },
  {
    name: "email",
    url: "mailto:kevinrohmail@gmail.com",
    icon: <FaRegEnvelopeOpen className="social-icon"/>
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/roh.kev/",
    icon: <FaInstagram className="social-icon"/>
  },
  {
    name: "spotify",
    url: "https://open.spotify.com/user/12147067787?si=VhR6p9WeSTqW31I75Mhmig",
    icon: <FaSpotify className="social-icon"/>
  },
];
export const projects = [
  {
    id: "project01",
    name: "Vaxport",
    summary: "A digital vaccine passport for travelers.",
    description: [
      {
        sectionTitle: "Intro",
        content: ["Vaxport is a mobile application designed to serve as a digital vaccine passport. With vaccines rolling out internationally, countries are starting to open up borders again. The process of providing health records is not standardized, making the process different for each country visited."]
      },
      {
        sectionTitle: "Objective",
        content: ["Vaxport aims to simplify the vaccination verification process digitally. The application will send user-uploaded vaccination record images to government databases, which verify that the user is  vaccinated. Ultimately, this data can be used to check the user's healths and determine next steps (i.e. full quarantine, shortened quarantine, etc)."]
      }, 
      {
        sectionTitle: "Assumptions",
        content: ["A few initial assumptions we've made while building this app were:"],
        list: [
          "User is an international traveler, meaning they possess a valid passport",
          "A government database exists where Vaxport app can interact with to obtain verified user data.",
          "User is fully vaccinated (not partially)",
          "User has access to working technologies (internet access & phone w/camera) to access the web application",
        ]
      },
      {
        sectionTitle: "Technologies Used",
        content: [
          "React is used for the front end of the application for multiple reasons. Asides from the fast performance of the React library, it has great community resources such as the react-webcam and react-qr-scanner packages. This enabled a faster deployment of a working prototype which would not have been possible if the entire camera interface had to be programmed.",
          "On the back end, Firebase is used. Firebase was chosen for the ease of implementation to robust back end services. Features used include: Firebase Authentication, Firebase Firestore Database, and Firebase Storage for cloud image storing.",
          "For additional features, we've used the NewsAPI to share the most up-to-date news around the world. The API integration is not visible in the live demo due to a subscription requirement for live deployed applications."
        ]
      },
      {
        sectionTitle: "Challenges",
        content: [
          "We ran across a few challenges through the development of this application.",
          "The first challenge was to determine if this should be a web application or a native application. A few factors went into considerations, including: functionality, security, compatibility with platforms, maintenance, deployment time, and app store approval. Since the nature of this application was to target international travelers, accessibility was an important factor. Furthermore for a hackathon, we wanted a functional demo product to present. As a result, we decided on utilizing React to build a web application which is easier to build and more compatible with devices around the world compared to a native app.",
          "Another challenge was the short amount of time we had (24 hours) to deploy a working demo for the hackathon. As the only developer on the team, I had to strategically plan the application in a short amount of time with my team which consisted of two other UX designers. It was critical that I didn't rush into the application without planning. Although this application does have a highly complex architectural design, it was imperative to avoid underestimating the problem from the start.",
          "Finally, implementation of the camera interface, QR generator, and the QR scanner was another hurdle. Since this was a web application using React, we did not have readily available device components that React Native offers out of the box. Thankfully, similar camera technologies existed on NPM. It was my first time utilizing these technologies, so it took time to understand how each would work within the stack, select the correct packages, and initialize the packages with correct dependencies.", 
          "Overall it was a great learning experience and I found very cool packages to work with!"
        ]
      },
      {
        sectionTitle: "Going Forward",
        content: ["In the future we would like to work towards the following:"],
        list: [
          "Considering the use of utilizing a native app builder such as React Native or Flutter. The web app is great for accessibility and fast deployment, but an actual app will have better speed, stability, cleaner functionality with native mobile features, and offline availability.",
          "Incorporate image-to-text recognition for uploaded records, which will add an extra layer of verifying user records. This will eventually be a key step towards automating the vaccination verification process.",
          "Work with the Canadian government to start connecting to health database systems. Work within North America first and then move outwards. Connect to international databases that contain COVID vaccinated individuals.",
        ]
      },
      {
        sectionTitle: "",
        content: ["Vaxport was built for TOHacks 2021 Hackathon, with two UX designers and myself as the dev. A large portion of it was built in the 24h hackathon, with a few touchups afterward."]
      }
      
      
      

      
    ],
    stack: "React | Firebase (Auth, Firestore Database, Storage) | SASS | API-Integration",
    github: "https://github.com/rohkevin/vaxport",
    live: "https://vaxport-app.web.app/",
    coverImage: "/00-Home.png",
    sliderImages: [
      "/Vaxport.mp4",
      "/00-Home.png",
      "/01-Registration.png",
      "/02-Passport.png",
      "/03-Record.png",
      "/03a-RecordUpload.png",
      "/03b-UploadComplete.png",
      "/04-PendingPage.png",
      "/05-Dashboard.png",
      "/05a-DashboardProfile.png",
      "/05b-DashboardNews.png",
      "/06-QRBadge.png",
      "/07-LoggedinHome.png",
      "/08-HomeNav.png",
      "/09-LoginAdmin.png",
      "/10-AdminDashboard.png",
      "/11-ScanQR.png",
      "/12-LoadQR.png"
    ]
  },
  {
    id: "project02",
    name: "Grow Up",
    summary: "An educational resource hub for young adults on financial literacy, housing markets, entertainment, life advisory, and more.",
    
    description: [
      {
        sectionTitle: "Intro",
        content: ["GrowUp is an educational resource hub on topics such as financial literacy, housing markets, entertainment, life advisory, and more. Its purpose is to educate individuals on common topics that aren't commonly taught in school, yet are critical to our lives. The target audience is mainly young adults out of college or already in the workplace, but not limited to those who want to learn."]
      },
      {
        sectionTitle: "Objective",
        content: ["The client requested a site where they would be able to have multiple journalists write columns on various topics. A few of the requirements included user-authentication, journalist writing privileges, administrative access for the client, fast and responsive application, and blank HTML space to accommodate ads in the future."]
      }, 
      {
        sectionTitle: "Technologies Used",
        content: [
          "The blog is built using React with its powerful context API. Users can be authenticated using Firebase Auth, allowing sign-up through email or Google. Authentication levels are currently restricted to those who have new blog-writing rights, managed through a private context. All posts are managed through Firebase's Firestore Database, with write access to only authenticated users.",
          "When it comes to handling the application resources, a web host (Firebase) is used. The target audience is currently only within the client's country (Canada), and so a geolocated web host is better suited. Furthermore, the client did not predict the website to have exponential growth in its starting stages, and so a CDN is not required."
        ]
      },
      {
        sectionTitle: "Challenges",
        content: [
          "To deliver a successful product, we had to tackle performance as well as accessibility.",
          "To optimize performance, it was critical to identify what utilizes the highest computing power and memory when rendering.",
          "One of these was images, where excessively large images were loaded on page load. Ideally, the images would be compressed files using GUI tools like ImageOptim or Squoosh. This would've been a potential solution since our site was small enough to handle all the manual image optimizations. However, images on GrowUp were being rendered through an external image API. This meant querying the right image sizes was critical to having optimized images. By utilizing React Hooks, the images were rendered such that it would not exceed the maximum window size. To further reduce the time taken to render image components, JSX elements were rendered with initialized width and height that created placeholders for images, reducing the cumulative layout shift at page load.",
          "For accessibility, we made a conscious effort to follow the guidelines outlined by WCAG (Web Content Accessibility Guideline) developed through the W3C Process. This included creating aria-labels where text labels are not visible, alt text for images, utilizing the correct HTML elements for their functionalities (<button> tags for buttons, etc.), and working towards sufficient contrast ratios between backgrounds and the components. This was a challenge in the sense that accessibility is not always the first thing on a programmer's mind when creating an application. By going over the code and reviewing the guidelines, it allowed me to ensure inclusivity through good practices.",
        ]
      },
      {
        sectionTitle: "Going Forward",
        content: ["We are currently launching production of this site. I am excited to see what challenges may arise in the production setting. With that said, a few notes going forward with this project:"],
        list: [
          "Tracking production-related issues by wrapping the application with tools that give observability like Splunk. Setting error boundaries to capture points of failure.",
          "Implementing Google Analytics to analyze user traffic and other metrics.",
          "Continuously working with the client to get an iterative feedback loop going on improvements or breakages to the site."
        ]
      },

    ],
    stack: "React | Firebase (Auth, Firestore)",
    github: "https://github.com/rohkevin/growup-v2",
    live: "https://grow-up-app.web.app/",
    coverImage: "/GU01.png",
    sliderImages: [
      "/GU01.png",
      "/GU02.png",
      "/GU03.png",
      "/GU04.png",
      "/GU05.png",
      "/GU06.png",
      "/GU07.png",
      "/GU08.png",
      "/GU09.png",
      "/GU10.png",
      "/GU11.png",
    ]
  },
  {
    id: "project03",
    name: "Personal Website",
    summary: "Version 3 of my personal website! This is what you're currently seeing.",
    description: [
      "You are currently viewing this project! Previous versions were built more for hobby, until I realized I could see myself doing this as a job."
    ],
    stack: "React | Sass | Netlify",
    github: "https://github.com/rohkevin/kevinroh.ca",
    live: "https://kevinroh.ca",
    coverImage: "/pw01.png",
    sliderImages: [
      "/pw01.png",

    ]
  },
]
export const musings = [
  {
    date: "March 4, 2021",
    quote: "Courage doesn't always roar. Sometimes courage is the quiet voice at the end of the day saying, I will try again tomorrow.",
    author: "Mary Anne Radmacher"
  },
  {
    date: "February 23, 2021",
    quote: "You were born an original. Don't die a copy.",
    author: "John Landis Mason"
  },
  {
    date: "January 30, 2021",
    quote: "One, remember to look up at the stars and not down at your feet. Two, never give up work. Work gives you meaning and purpose and life is empty without it. Three, if you are lucky enough to find love, remember it is there and don't throw it away.",
    author: "Stephen Hawking"
  },
  {
    date: "December 3, 2020",
    quote: "Never give up on a dream just because of the time it will take to accomplish it, time will pass anyway.",
    author: "Earl Nightingale",
  },

  {
    date: "October 28, 2020",
    quote: "Yesterday is gone. Tomorrow has not yet come. We only have today. Let us begin.",
    author: "Mother Teresa",
  },

  {
    date: "September 10, 2020",
    quote: "Happiness is not something ready-made. It comes from your own actions",
    author: "Dalai Lama",
  },

  {
    date: "September 3, 2020",
    quote: "For what it's worth: it's never too late to be whoever you want to be. I hope you live a life you're proud of, and if you find you're not, I hope you have the strength to start over again.",
    author: "F. Scott Fitzgerald",
  },

  {
    date: "September 1, 2020",
    quote: "Everything will be okay in the end. If it's not okay, it's not the end.",
    author: "Fernando Sabino",
  },

  {
    date: "August 21, 2020",
    quote: "Now, here, you see, it takes all the running you can do, to keep in the same place. If you want to get somewhere else, you must run at least twice as fast as that.",
    author: "Lewis Carroll, Through the Looking Glass",
  },

  {
    date: "July 28, 2020",
    quote: "Be tolerant with others and strict with yourself.",
    author: "Marcus Aurelius",
  },

  {
    date: "July 7, 2020",
    quote: "If you can't fly then run, if you can't run then walk, if you can't walk then crawl. But whatever you do, you have to keep moving forward.",
    author: "Martin Luther King Jr.",
  },

  {
    date: "June 21, 2020",
    quote: "The greatest lesson that I learned in all of this is that you have to start. Start now, start here, start small and keep it simple.",
    author: "Jack Dorsey",
  },

  {
    date: "June 21, 2020",
    quote: "The most important thing to remember is this: To be ready at any moment to give up what you are for what you might become.",
    author: "W.E.B. Du Bois",
  },

  {
    date: "June 15, 2020",
    quote: "Time is the coin of your life. It is the only coin you have, and only you can determine how it will be spent. Be careful lest you let other people spend it for you.",
    author: "Carl Sandburg",
  },

  {
    date: "June 3, 2020",
    quote: "The dream is free, the hustle is sold separately",
    author: "Tyrese Gibson",
  },

  {
    date: "May 31, 2020",
    quote: "There is a time to let things happen, and a time to make things happen.",
    author: "Unknown",
  },

  {
    date: "May 17, 2020",
    quote: "In any moment we have two options: to step forward into growth or step back into safety.",
    author: "Abraham Maslow",
  },
  {
    date: "May 15, 2020",
    quote: "Watch your thoughts; they become words. Watch your words; they become actions. Watch your actions; they become habits. Watch your habits; they become character. Watch your character; it becomes your destiny.",
    author: "Frank Outlaw",
  },
  {
    date: "May 1, 2020",
    quote: "In the end, love is what makes us see life in different color.",
    author: "Marivi Fuentes, Money Heist",
  },
  {
    date: "April 15, 2020",
    quote: "The ones who are crazy enough to think they can change the world are the ones that do.",
    author: "Steve Jobs",
  },

  {
  date: "March 29, 2020",
  quote: "Associate yourself with people of good quality, for it is better to be alone than in bad company.",
  author: "Booker T. Washington",
  },
  {
    date: "March 6, 2020",
    quote: "Accept the fact that all events occur for a reason, and that it is within your capacity to see this reason as positive.",
    author: "Robert Greene",
  },

  {
    date: "March 3, 2020",
    quote: "When you want to succeed as bad as you want to breathe, then you will be successful.",
    author: "Eric Thomas",
  },
]
export const photos = [
  {
    path: "/Edited/compressed/vn1.jpg",
    name: "Moped Haven",
    location: "Hanoi, Vietnam"
  },
  {
    path: "/Edited/compressed/vn4.jpg",
    name: "Rivers, paddies, and hidden caves",
    location: "Trang An, Vietnam"
  },
  {
    path: "/Edited/compressed/vn5.jpg",
    name: "Passing storm ",
    location: "Ha Long Bay, Vietnam"
  },
  {
    path: "/Edited/compressed/vn7.jpg",
    name: "Town of Lanterns ",
    location: "Hoi An, Vietnam"
  },
  {
    path: "/Edited/compressed/ph1.jpg",
    name: "After a 2 hour moped ride in the rain",
    location: "El Nido, Philippines"
  },
  {
    path: "/Edited/compressed/ph2.jpg",
    name: "Morning sunrise before seeing the whales",
    location: "Oslob, Philippines"
  },
  {
    path: "/Edited/compressed/ams-desktop.jpg",
    name: "AmsterDAM",
    location: "Amsterdam, Netherlands"
  },
  {
    path: "/Edited/compressed/ldnh1.jpg",
    name: "Chinatown",
    location: "London, UK"
  },
  {
    path: "/Edited/compressed/japan1.jpg",
    name: "Sunset Temples",
    location: "Kyoto, Japan"
  },
  {
    path: "/Edited/compressed/paris3.jpg",
    name: "Bonjour Paris!",
    location: "Paris, France"
  },
  {
    path: "/Edited/compressed/segovia1.jpg",
    name: "Castles of Europe",
    location: "Segovia, Spain"
  },
  {
    path: "/Edited/compressed/sevilla1.jpg",
    name: "Vinos and tapas",
    location: "Sevilla, Spain"
  },
  {
    path: "/Edited/compressed/lisbon3.jpg",
    name: "Fado and the revolution",
    location: "Lisbon, Portugal"
  },
  {
    path: "/Edited/compressed/swiss18.png",
    name: "The most amount of peace I've felt from a place",
    location: "Interlaken, Switzerland"
  },
  {
    path: "/Edited/compressed/swiss5.jpg",
    name: "Unreal",
    location: "Interlaken, Switzerland"
  },


]