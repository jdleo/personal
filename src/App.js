import { useState } from 'react';
import ReactGA from 'react-ga';
import Gradient from 'rgt';
import { Segment, Intro, Tech, Projects, Ideas, Fun } from './components';
import './App.css';

// initialize ga
ReactGA.initialize('UA-125401051-1');
ReactGA.pageview(window.location.pathname + '/');

function App() {
  // state of current page
  const [currentPage, setCurrentPage] = useState('Hi');

  // mappings from pages to components
  const pages = {
    Hi: <Intro />,
    Tech: <Tech />,
    Projects: <Projects />,
    Ideas: <Ideas />,
    Fun: <Fun />,
  };

  return (
    <div className="App">
      <header style={{ ...styles.h1, fontSize: window.innerWidth > 450 ? 60 : 30 }}>
        <Gradient dir="left-to-right" from="#0064f2" to="#7400c5">
          John{' '}
        </Gradient>
        <Gradient dir="left-to-right" from="#7400c5" to="#ff0074">
          Leonardo
        </Gradient>
      </header>
      <Segment setCurrentPage={setCurrentPage} />
      {pages[currentPage]}
      <br />
      <br />
      <br />
    </div>
  );
}

const styles = {
  h1: {
    fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
    fontWeight: 700,
    fontSize: 30,
    color: '#0F216B',
  },
};

export default App;
