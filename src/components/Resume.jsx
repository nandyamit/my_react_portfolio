// src/components/Resume.jsx
import React from 'react';

function Resume() {
  const skills = {
    frontEnd: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'React.js',
      'Tailwind CSS',
      'Responsive Design'
    ],
    backEnd: [
      'Node.js',
      'Express.js',
      'MongoDB',
      'MySQL',
      'RESTful APIs',
      'GraphQL'
    ],
    tools: [
      'Git',
      'GitHub',
      'VS Code',
      'npm',
      'Render',
      'Netlify'

    ]
  };

  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Resume</h2>
      <div className="max-w-3xl mx-auto">
        <div className="mb-8 text-center">
          <a
            href="/CV - Amit Nandy.pdf"
            download
            className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition-colors duration-300"
          >
            Download Resume
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Front-End</h3>
            <ul className="space-y-2">
              {skills.frontEnd.map((skill, index) => (
                <li key={index} className="text-gray-700">• {skill}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Back-End</h3>
            <ul className="space-y-2">
              {skills.backEnd.map((skill, index) => (
                <li key={index} className="text-gray-700">• {skill}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Tools & Technologies</h3>
            <ul className="space-y-2">
              {skills.tools.map((skill, index) => (
                <li key={index} className="text-gray-700">• {skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;