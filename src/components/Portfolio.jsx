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
      title: "Bucket List App",
      description: "A full-stack application built with React and Node.js",
      Technologies: "HTML, Javascript, REACT and Node.js",
      image: "/images/Bucklist App Image.jpg", 
      deployedLink: "https://gorgeous-ganache-bcb5d9.netlify.app/",
      githubLink: "https://github.com/nandyamit/bucketlist"
    },
    {
      title: "Film Tracker App",
      description: "A React-TypeScript application that helps you track films you want to watch and ones you've already seen. The app uses the OMDB API for film data and localStorage for persisting your film lists.",
      Technologies: "React 18.2.0, TypeScript 5.2.2, Vite 5.2.0, React Router DOM 6.23.1, React Icons 5.2.1, OMDB API, localStorage for data persistence.",
      image: "/images/Filmtracker_app.jpg", 
      deployedLink: "https://myfilmtracker.netlify.app/",
      githubLink: "https://github.com/nandyamit/Film-Tracker"
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