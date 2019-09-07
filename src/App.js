import React from 'react';
import Typing from 'react-typing-animation';
import './App.css';

function App() {
  const Email = "musambaloyi@gmail.com";
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <Typing >
            <span>
              Hi,
              <br></br>
              <strong>
                  Musa Here !
              </strong>
              <i>
                <br></br> Welcome to my site
                <br></br> Unfortunately it's  currently under Construction!
                <br></br>
                <strong>
                  THANKS
                </strong>
              </i>
            </span>
          </Typing>
        </p>
          <p>
            Contact me at - <a href={"mailto:" + Email}>{Email}</a>
          </p>
      </header>
    </div>
  );
}

export default App;
