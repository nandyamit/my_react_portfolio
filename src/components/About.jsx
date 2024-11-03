// src/components/About.jsx
import React from 'react';

function About() {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col items-center mb-8">
          <img
            src="/images/ProfilePic.jpg" // Add your photo path here
            alt="Developer"
            className="w-48 h-48 rounded-full shadow-lg mb-4"
          />
          <h1 className="text-3xl font-bold text-gray-800">About Me</h1>
        </div>
        
        <div className="prose lg:prose-lg mx-auto">
          <p className="text-gray-600 leading-relaxed mb-4">
            Hello! I'm Amit Nandy, a Technical Product Manager with over 10+ years of experience in building and scaling products for large tech companies. My experience in technical product management and knowledge about software development allows me to bridge the gap between user needs and technical feasibility. When I'm not crafting product roadmaps or running sprint planning sessions, you'll find me coding side projects and exploring new technologies. I believe in leading by example and maintaining my technical edge while driving product vision.
 
          </p>
                            
                    
          <p className="text-gray-600 leading-relaxed">
            I'm always interested in new technologies and opportunities to grow as a professional.
            Feel free to check out my portfolio or reach out if you'd like to connect!
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;