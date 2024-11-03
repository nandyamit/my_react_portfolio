// src/components/Portfolio.jsx
import React from 'react';
import Project from './Project';

function Portfolio() {
  const projects = [
    {
      title: "Bucket List App",
      description: "A full-stack application built with React and Node.js",
      image: "/images/Bucklist App Image.jpg", 
      deployedLink: "https://gorgeous-ganache-bcb5d9.netlify.app/",
      githubLink: "https://github.com/nandyamit/bucketlist"
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