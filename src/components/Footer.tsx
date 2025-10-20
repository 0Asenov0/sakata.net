import React from 'react';

interface FooterLink {
  name: string;
  url: string;
  iconClass: string;
}

interface FooterProps {
  links: FooterLink[];
  year?: number;
}

const Footer: React.FC<FooterProps> = ({ links, year = new Date().getFullYear() }) => {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <h3>Links</h3>
            <div id="links" className="social-links">
              {links.map((link) => (
                <div key={link.name} className="links">
                  <span>{link.name}</span>
                  <a href={link.url} className="social-link">
                    <i className={link.iconClass}></i>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {year}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
