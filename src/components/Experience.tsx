import React from 'react';


interface Job {
  company: string;
  description: string;
  skills: string[];
}

interface ExperienceProps {
  jobs: Job[];
}

const Experience: React.FC<ExperienceProps> = ({ jobs }) => {
  return (
    <section className="about">
      <div className="container">
        <h2 className="section-title">Job Experience</h2>
        {jobs.map((job, index) => (
          <div key={index} className="about-content-">
            <div className="about-text">
              <h3>{job.company}</h3>
              <p>{job.description}</p>
              <div className="skills">
                {job.skills.map((skill) => (
                  <div key={skill} className="skill">{skill}</div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
