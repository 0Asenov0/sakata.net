import React from 'react';


const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Hello! I'm Stoil, recent graduate with practical experience in technology and working with people.
              I have solid technical skills, good teamwork and problem-solving abilities, and I am motivated to learn, grow, and contribute real value across different professional fields.
            </p>
            
          
          </div>
          <div className="about-image">
            <img
              src="/sakata.net/images/moto_photo.jpg"
              alt="About Me"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
