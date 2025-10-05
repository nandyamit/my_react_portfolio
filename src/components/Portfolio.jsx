// src/components/Portfolio.jsx
import React from 'react';
import Project from './Project';

function Portfolio() {
  const projects = [
    {
      title: "Cosmickavi.com",
      description: "Cosmic Kavi (Astrologer Kavitha Nandy) is a professional astrology website offering personalized cosmic guidance and readings. Customers can navigate through About us page and Services offered page to learn more and use the contact page to get in touch with the astrologer. ",
      Technologies: "React 18, TypeScript, AWS S3, AWS CloudFront, AWS Lambda, AWS API Gateway, React Router, Webpack 5, CSS3 Modules, GitHub Actions",
      image: "/images/Cosmic Kavi.jpg", 
      deployedLink: "https://cosmickavi.com/",
      githubLink: "https://github.com/nandyamit/kavisastro-website"
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