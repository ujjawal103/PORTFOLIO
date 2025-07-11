// projects.js

const majorProjects = [
  {
    title: "IMET - Human Rental System",
    description: "A unique platform where humans can be rented for various services or tasks, built to showcase full-stack development capabilities.IMET is a full-stack web application where users register by profession, log in/out, and post or receive reviews. It includes complete authentication, validations, and a responsive EJS-based UI. Helps freelancers gain visibility and build trust through user reviews.",
    techStack: [
        {  imgSrc : "/Express.png" ,name : "Express js"},
        {  imgSrc : "/Node.js.png" ,name : "Node js"}, 
        {  imgSrc : "/MongoDB.png" ,name : "Mongo DB"}, 
        {  imgSrc : null ,name : "EJS"} , 
        {  imgSrc : null ,name : "MVC Architecture"}],
    thumbnail: "/projects/major1.png", 
    videoTutorialLink: "https://www.youtube.com/embed/D-aAB1rytok" , 
    liveAt : "https://imet.onrender.com/"
  },
  {
    title: "Deployed Zone - Project Showcase",
    description: "Built a complete platform to create, manage, and display personal projects with images. Developed a custom authentication system using ERP ID and password storage. Features project CRUD, profile photo upload, and Render deployment.",
    techStack: [
        {  imgSrc : "/Express.png" ,name : "Express js"},
        {  imgSrc : "/Node.js.png" ,name : "Node js"}, 
        {  imgSrc : "/MongoDB.png" ,name : "Mongo DB"}, 
        {  imgSrc : null ,name : "EJS"} , ],
    thumbnail: "/projects/major2.png",
    videoTutorialLink: "https://www.youtube.com/embed/Nd48mVfTi68",
    liveAt : "https://deployedzone.onrender.com/projects"
  },
  {
    title: "Code Rooms - Notes for BCA Students",
    description: "A responsive site to share digital and handwritten notes tailored for BCA students of the University of Lucknow. It solves the real problem of scattered study materials by offering semester-wise, structured access.",
    techStack: [
         {  imgSrc : "/HTML5.png" ,name : "HTML"},
         {  imgSrc : "/CSS3.png" ,name : "CSS"}, 
         {  imgSrc : "/JavaScript.png" ,name : "JS"}, 
    ],
    thumbnail: "/projects/major3.png",
    videoTutorialLink: "https://www.youtube.com/embed/Nd48mVfTi68",
    liveAt : "https://ujjawal103.github.io/Code-Rooms/"
  },
//   {
//     title: "Memory Card Game using React",
//     description: "A fun React-based memory card game that sharpens your memory skills while demonstrating component-based logic.",
//     techStack: ["React", "CSS Modules"],
//     thumbnail: "images/memory-card-thumbnail.jpg",
//     videoTutorialLink: "https://youtu.be/memorygame-demo",
    // liveAt : "https://imet.onrender.com/"
//   }
];

const minorProjects = [
  {
  title: "StoreRoom",
  description: "A fullstack app with secure login to manage and protect personal files.",
  thumbnail: "/projects/storeroom.png",
  videoTutorialLink: "https://www.youtube.com/embed/Nd48mVfTi68",
  liveAt: "https://storeroom-cxa8.onrender.com/"
  },
  {
    title: "Notes - Redux",
    description: "A note-taking app using React with Redux for state management and persistence.",
    thumbnail: "/projects/notes.png",
    videoTutorialLink: "https://www.youtube.com/embed/Nd48mVfTi68",
    liveAt: "https://notes-alpha-tan.vercel.app/"
  },
  {
    title: "Memory Card Game",
    description: "A React-based memory game that tracks player moves and matches cards.",
    thumbnail: "/projects/memory.png",
    videoTutorialLink: "https://www.youtube.com/embed/Nd48mVfTi68",
    liveAt: "https://memory-card-5w8e.onrender.com/"
  },
  {
    title: "BMI Calculator",
    description: "A BMI calculator built with React, accepting height and weight inputs.",
    thumbnail: "/projects/bmi.png",
    videoTutorialLink: "https://www.youtube.com/embed/Nd48mVfTi68",
    liveAt: "https://bmi-calculator-7wv1.onrender.com/"
  },
  {
    title: "Weather Fetch App",
    description: "A React app that fetches real-time weather using OpenWeatherMap API.",
    thumbnail: "/projects/weather.png",
    videoTutorialLink: "https://www.youtube.com/embed/Nd48mVfTi68",
    liveAt: "https://weatherapp-3xfo.onrender.com/"
  },
  {
    title: "TalkSpace - Chat",
    description: "A MongoDB-based chatting platform allowing public thread-based conversations.",
    thumbnail: "/projects/talk.png",
    videoTutorialLink: "https://www.youtube.com/embed/Nd48mVfTi68",
    liveAt: "https://talkspace-80p8.onrender.com/chats"
  },
  {
    title: "Movie Review",
    description: "A Node.js REST API that lets users review and rate movies via CRUD operations.",
    thumbnail: "/projects/movie.png",
    videoTutorialLink: "https://www.youtube.com/embed/Nd48mVfTi68",
    liveAt: "https://movie-review-wnuv.onrender.com/"
  },
  {
    title: "Expense Tracker",
    description: "A Node.js app that allows users to create, update, and delete expense records.",
    thumbnail: "/projects/expenseTracker.png",
    videoTutorialLink: "https://www.youtube.com/embed/Nd48mVfTi68",
    liveAt: "https://personal-wallet-l1tb.onrender.com/expenses"
  },
  {
    title: "Threads",
    description: "A basic thread-based app using Node.js to manage posts with full CRUD support.",
    thumbnail: "/projects/thread.png",
    videoTutorialLink: "https://www.youtube.com/embed/Nd48mVfTi68",
    liveAt: "https://threads-app-42gx.onrender.com/posts"
  },
  {
    title: "InstaFeed Page",
    description: "A static Instagram feed UI made with HTML and CSS for practice layout structuring.",
    thumbnail: "/projects/insta.png",
    videoTutorialLink: "https://www.youtube.com/embed/Nd48mVfTi68",
    liveAt: "https://ujjawal103.github.io/Insta-Feed-Section/"
  },
  {
    title: "Hit Number Game",
    description: "JavaScript game where players hit the correct number to gain score in a timed challenge.",
    thumbnail: "/projects/hit.png",
    videoTutorialLink: "https://www.youtube.com/embed/Nd48mVfTi68",
    liveAt: "https://ujjawal103.github.io/Hit-The-Bubble/"
  },
  {
    title: "Countdown Timer",
    description: "A customizable countdown timer made with HTML, CSS and JavaScript DOM manipulation.",
    thumbnail: "/projects/countdown.png",
    videoTutorialLink: "https://www.youtube.com/embed/Nd48mVfTi68",
    liveAt: "https://ujjawal103.github.io/CountDown-Timer/"
  },
  {
    title: "LeetMetric App",
    description: "A JavaScript app that fetches and displays LeetCode user stats using API integration.",
    thumbnail: "/projects/leetmetric.png",
    videoTutorialLink: "https://www.youtube.com/embed/Nd48mVfTi68",
    liveAt: "https://ujjawal103.github.io/LeetMetric-App/"
  },
  {
    title: "Love Test Machine",
    description: "A fun DOM-based app that generates a love percentage based on name input.",
    thumbnail: "/projects/love.png",
    videoTutorialLink: "https://www.youtube.com/embed/Nd48mVfTi68",
    liveAt: "https://ujjawal103.github.io/Love-Calculator/"
  },
  {
    title: "Simon Says Game",
    description: "A memory game using JavaScript to repeat and remember random color patterns.",
    thumbnail: "/projects/simon.png",
    videoTutorialLink: "https://www.youtube.com/embed/Nd48mVfTi68",
    liveAt: "https://ujjawal103.github.io/Symon-says-game/"
  },
   {
    title: "Tic Tac Toe Game",
    description: "A two-player Tic Tac Toe game with restart option and winner tracking, made using DOM manipulation.",
    thumbnail: "/projects/tic-tac-toe (2).png",
    videoTutorialLink: "https://www.youtube.com/embed/Nd48mVfTi68",
    liveAt: "https://ujjawal103.github.io/Tic-Tac-Toe/"
  },
  {
    title: "Stone Paper Scissors",
    description: "Classic game built using HTML, CSS, and JavaScript with an intuitive UI and score tracking.",
    thumbnail: "/projects/sps.png",
    videoTutorialLink: "https://www.youtube.com/embed/Nd48mVfTi68",
    liveAt: "https://ujjawal103.github.io/Stone-Paper-Scissor/"
  },
  {
    title: "Spotify Home Clone",
    description: "A clone of Spotify homepage built with HTML and CSS showcasing layout skills.",
    thumbnail: "/projects/spotify.png",
    videoTutorialLink: "https://www.youtube.com/embed/Nd48mVfTi68",
    liveAt: "https://ujjawal103.github.io/Spotify-Clone/"
  },
  {
    title: "Shopshy UI Clone",
    description: "A pixel-perfect HTML/CSS clone of the Shopshy shopping page for layout practice.",
    thumbnail: "/projects/shopshy.png",
    videoTutorialLink: "https://www.youtube.com/embed/Nd48mVfTi68",
    liveAt: "https://ujjawal103.github.io/1st-Project-Shopsy-Clone-3-layer-functioning-/"
  },
];


export { majorProjects, minorProjects };
