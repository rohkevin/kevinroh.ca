import { FaLinkedinIn, FaGithub, FaRegEnvelopeOpen, FaInstagram, FaSpotify } from 'react-icons/fa'

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
      "Vaxport is a mobile application designed to serve as a digital vaccine passport. With vaccines rolling out internationally, countries are starting to open up borders again. The process of providing health records is not standardized, making the process different for each country visited.", 
      "Vaxport aims to simplify this process digitally. The application is designed to send user-uploaded vaccination record image files to government database to verify that the user is truly vaccinated. This provides a secure method of knowing that vaccination records are not falsified, as well as removing the need to carry a physical record card.", 
      "A few initial assumptions we've made while building this app were:",
      "1. The app is built for international travelers so they require a passport",
      "2. A government database exists where Vaxport app is able to interact with, and obtain verified user data. We will simulate this data since we don't have direct access to government databases",
      "3. Users are fully vaccinated, not partially",
      "In the future we would like to work towards the following",
      "1. Incorporate image to text recognition for uploaded records, which will add an extra layer of verifying user records",
      "2. Connect to international databases that contain COVID vaccinated individuals",

      "Vaxport was built for TOHacks 2021 Hackathon, with two UX designers and myself as the dev. A large portion of it was built in the 24h hackathon, with a few touchups afterwards."
    ],
    stack: "React | Firebase (Auth, Firestore Database, Storage) | SASS | API-Integration",
    github: "https://github.com/vaxport",
    live: "https://vaxport-app.web.app/",
    sliderImages: [
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
    ],
    demoVideo: "/Vaxport.mp4"
  },
  {
    id: "project02",
    name: "Grow Up",
    summary: "A journalist site made by young adults, for young adults, on growing up and the steps of becoming \"more\" adult",
    description: ["You're in your twenties and you just finished college / university / in your first or second job. You feel like you've got a few things figured out but there's still a ton of other things you feel unconfident about. Does this describe you? Well you're on the right track, so are we! This website is dedicated to those of us feeling lost, need a bit of guidance, or could use another \"life-hack\". This is a blog on growing up, and we share a bit of our insight on what we've found out so far.", "The purpose of this blog was to create a journalist site for a client on daily topics for an adult. The client requested ad-space allocated.", "The blog is built using React with its context API. Users can be authenticated using Firebase Auth, allowing sign-up through email or Google. Authentication levels are currently restricted to those who have new blog-writing rights, managed through a private context. All posts are managed through Firebase's Firestore Database, with write access to only authenticated users."],
    stack: "React | Firebase (Auth, Firestore)",
    github: "https://github.com/rohkevin/growup-v2",
    live: "https://grow-up-app.web.app/",
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
    summary: "Third iteration of my personal website, and what you're currently seeing.",
    description: [
      "Personal website description", 
      "Built with React", 
      "Lighthouse score"
    ],
    stack: "React | Sass | Netlify",
    github: "https://github.com/rohkevin/kevinroh.ca",
    live: "https://kevinroh.ca",
    sliderImages: [
      "/mockup1.jpg",

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
    name: "Vietnamese roads"
  },
  {
    path: "/Edited/compressed/vn4.jpg",
    name: "Trang An rivers"
  },
  {
    path: "/Edited/compressed/vn5.jpg",
    name: "After a storm in Ha Long Bay"
  },
  {
    path: "/Edited/compressed/vn7.jpg",
    name: "Lanterns in Hoi An"
  },
  {
    path: "/Edited/compressed/ph1.jpg",
    name: "Sunset in El Nido"
  },
  {
    path: "/Edited/compressed/ph2.jpg",
    name: "Morning sunrise in Oslob"
  },
  {
    path: "/Edited/compressed/ams-desktop.jpg",
    name: "AmsterDAM"
  },
  {
    path: "/Edited/compressed/ldnh1.jpg",
    name: "London"
  },
  {
    path: "/Edited/compressed/japan1.jpg",
    name: "Temples of Kyoto"
  },
]