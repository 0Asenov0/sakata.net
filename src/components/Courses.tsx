import React from 'react';


interface Course {
  status: string;
  name: string;
  topics: string[];
}

interface CoursesProps {
  courses: Course[];
}

const Courses: React.FC<CoursesProps> = ({ courses }) => {
  return (
    <section className="about">
      <div className="container">
           <h2 className="section-title">Courses</h2>
        {courses.map((course, index) => (
          <div key={index} className="about-content">
            <div className="about-text">
              <span className="status">{`Status: ${course.status}`}</span>
              <h3>{course.name}</h3>
              <div className="skills">
                {course.topics.map((topic) => (
                  <div key={topic} className="skill">{topic}</div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Courses;
