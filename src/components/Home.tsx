import React, { useState } from 'react';

const Home: React.FC = () => {
  const [showGame, setShowGame] = useState(false);

  return (
    <section id="home" className="home">
      <div className="container">
        <div className="home-content">
          <h1>
            Hi, I am <span>Stoil</span>
          </h1>
          <p>Welcome, you made it to my website/portfolio.</p>

          <div
            className="home-btns"
            style={{
              display: 'flex',
              gap: '15px',
              alignItems: 'center',
              marginTop: '20px',
            }}
          >
            {/* Original Projects Button */}
            <a href="#projects" className="btn">
              View Projects
            </a>

            {/* Dino Game Toggle Buttons */}
            {!showGame && (
              <button className="btn" onClick={() => setShowGame(true)}>
                Play Dino Game
              </button>
            )}

            {showGame && (
              <button className="btn" onClick={() => setShowGame(false)}>
                Close Game
              </button>
            )}
          </div>

          {showGame && (
            <div
              style={{
                marginTop: '20px',
                display: 'flex',
                justifyContent: 'center',
                width: '100%',
                maxWidth: '800px', // max width for large screens
                border: '2px solid var(--primary-color)',
                borderRadius: '10px',
                padding: '10px',
                backgroundColor: 'white',
              }}
            >
              <iframe
                src="/dyno/t-rex-runner-gh-pages/index.html"
                title="Offline Dino Game"
                style={{
                  width: '100%',
                  height: '330px', // bigger height for the game
                  border: 'none',
                  minWidth: '567px', // ensures minimum playable width
                }}
              ></iframe>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Home;
