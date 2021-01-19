import { useState } from 'react';
import ReactGA from 'react-ga';
import { Segment, Intro, Tech, Projects, Ideas } from './components';
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
    Fun: <Intro />,
  };

  return (
    <div className="App">
      <header style={{ ...styles.h1, fontSize: window.innerWidth > 450 ? 60 : 30 }}>John Leonardo</header>
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
    fontFamily: "'Fraunces', serif",
    fontWeight: 700,
    fontSize: 30,
    color: '#0F216B',
  },
};

export default App;
