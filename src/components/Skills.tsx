import React from 'react'
import '../app/styles/skills.css';

const Skills = () => {
  return (
    <div id='skills' className="skills-container">
        <div className="skills-grid">
            <div className='skills-left'>
                <h2 className="skills-heading  ">Technologies I Work With</h2>
                <p className="skills-text">
                My expertise in HTML CSS JavaScript and TypeScript forms a strong foundation for creating modern, 
                interactive and visually appealing web applications. With HTML I focus on building well-structured and accessible layouts. 
                Using CSS I add unique styling and ensure that my designs are responsive across various devices. JavaScript is where I bring interactivity into my projects adding dynamic features and functionality to enhance the user experience. With TypeScript
             I prioritize writing reliable and maintainable code leveraging type safety for better error handling and smoother development in larger projects. Together these skills enable me to craft efficient and engaging websites that balance performance and design.
             </p>
            </div>
            <div>
                <div className="skills-right">
                    <div className='skilla-icons-grid'></div>
                    <div className="skills-space">
                     <h2>TYPESCRIPT</h2>
                     <h2>JAVASCRIPT</h2>
                     <h2>HTML</h2>
                     <h2>CSS</h2>
                    </div><br/>
                    <div className="skills-space">
                     <h2>NEXT.JS</h2>
                     <h2>TAILWIND</h2>
                     <h2>NODE.JS</h2>

                    </div>

                </div>
            </div>
        </div>
      
    </div>
  );
};

export default Skills
