import React from 'react';


interface EducationItem {
  status: string;
  institution: string;
  courses: string[];
}

interface EducationProps {
  educationList: EducationItem[];
}

const Education: React.FC<EducationProps> = ({ educationList }) => {
  return (
    <section className="about">
      <div className="container">
           <h2 className="section-title">Education</h2>
        {educationList.map((edu, index) => (
          <div key={index} className="about-content-">
            <div className="about-text">
              <span className="status">{`Status: ${edu.status}`}</span>
              <h3>{edu.institution}</h3>
              <div className="skills">
                {edu.courses.map((course) => (
                  <div key={course} className="skill">{course}</div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
