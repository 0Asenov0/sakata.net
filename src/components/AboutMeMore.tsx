import React from 'react';


interface AboutMeProps {
  interests: string[];
}

const AboutMeMore: React.FC<AboutMeProps> = ({ interests }) => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">More Personal About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Hi again! In this paragraph i will tell you a bit about my personality. My name is Stoil. I have passion for cars and technology. Really enjoy following motorsport(mainly f1, motogp, rallying). I love travelling, visiting new places and people. I like working on my car and motorcylce and taking them for a ride.
              I like sports as long as i do them(not interested in watching anymore).  If you reached this part ... well thanks for reading.
            </p>
            <div className="skills">
              {interests.map((interest) => (
                <div key={interest} className="skill">{interest}</div>
              ))}
            </div>
          </div>
          <div className="about-image">
            <img
              src="#"
              alt="About Me"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeMore;
