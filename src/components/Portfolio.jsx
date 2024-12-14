// src/components/Portfolio.jsx
import React from 'react';
import Project from './Project';

function Portfolio() {
  const projects = [
    {
      title: "Weather Dashboard",
      description: "The Weather Dashboard is a web application designed for travelers who want to see the weather outlook for multiple cities. This tool allows users to plan their trips according to current and future weather conditions in various locations.",
      Technologies: "HTML, Javascript, Node.js with Express.js and Weather Data using OpenWeather API",
      image: "/images/weather_app.jpg", 
      deployedLink: "https://weather-app-u1xb.onrender.com/",
      githubLink: "https://github.com/nandyamit/Weather-App"
    },
    {
      title: "Bucket List",
      description: "A simple and intuitive bucket list application built with React and Vite, allowing users to track and manage their life goals and aspirations.",
      Technologies: "HTML, Javascript, REACT and Node.js",
      image: "/images/Bucklist App Image.jpg", 
      deployedLink: "https://gorgeous-ganache-bcb5d9.netlify.app/",
      githubLink: "https://github.com/nandyamit/bucketlist"
    },
    {
      title: "Film Tracker",
      description: "A React-TypeScript application that helps you track films you want to watch and ones you've already seen. The app uses the OMDB API for film data and localStorage for persisting your film lists.",
      Technologies: "React 18.2.0, TypeScript 5.2.2, Vite 5.2.0, React Router DOM 6.23.1, React Icons 5.2.1, OMDB API, localStorage for data persistence.",
      image: "/images/Filmtracker_app.jpg", 
      deployedLink: "https://myfilmtracker.netlify.app/",
      githubLink: "https://github.com/nandyamit/Film-Tracker"
    },

    {
      title: "Git Recuriter",
      description: "Git Recuriter is a web-based tool that helps employers find potential candidates by leveraging the GitHub API. The application allows users to browse through GitHub profiles, save interesting candidates, and manage a list of potential recruits.",
      Technologies: "React, TypeScript, Vite, React Router, GitHub REST API, Local Storage for data persistence, Tailwind CSS for styling.",
      image: "/images/Git Recuirter.jpg",
      deployedLink: "https://git-recruiter.onrender.com/",
      githubLink: "https://github.com/nandyamit/Git-Recruit"
    },
    
    {
      title: "Kanban-board",
      description: "This Kanban Task Management App is a secure and efficient solution for organizing and tracking tasks using a Kanban board interface. It features JWT authentication for secure access and provides a user-friendly interface for managing tasks and users.",
      Technologies: "Frontend: React.js with TypeScript, Routing: React Router, API Communication: Fetch API, Authentication: JSON Web Tokens (JWT), State Management: React Hooks (useState, useEffect, useRef), Styling: Custom CSS with responsive design.",
      image: "/images/KanBan Board.png",
      deployedLink: "https://kanban-board-application-7bc1.onrender.com",
      githubLink: "https://github.com/nandyamit/Kanban-board-application"
    },

    {
      title: "StallStarz- Restroom Finder App",
      description: "StallStarz is a user-friendly web application designed to help users find nearby public restrooms. Listings include detailed amenity information and directions. Users also have the ability to rate and review public restroo",
      Technologies: "Frontend: React, TypeScript, React Bootstrap, React Router, JWT Authentication, Backend: Node.js, Express, PostgreSQL, Sequelize ORM, JWT for authentication.",
      image: "/images/StallStarz.png",
      deployedLink: "https://stallstarz.onrender.com/login",
      githubLink: "https://github.com/nandyamit/restroom-finder"
    },

  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Portfolio</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;