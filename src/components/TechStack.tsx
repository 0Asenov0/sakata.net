interface AboutProps {
  skills: string[];
}

const TechStack: React.FC<AboutProps> = ({ skills }) => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">Tech Stack</h2>
        <div className="tech-stack-content">
          <div className="about-text">
            <p>
            </p>
            <div className="skills">
              {skills.map((skill) => (
                <div key={skill} className="skill">{skill}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;