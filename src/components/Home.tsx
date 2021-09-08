import React from 'react';
import logo from '../logo.svg';

interface Props { }

function Home(props: Props) {
  return (
    <div className="Home">
        <div className="Main-body">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
    </div>
  );
}

export default Home;