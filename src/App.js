import { useState } from 'react';
import ReactGA from 'react-ga';
import { Segment, Intro } from './components';
import './App.css';

// initialize ga
ReactGA.initialize('UA-125401051-1');
ReactGA.pageview(window.location.pathname + '/home');

function App() {
  // state of current page
  const [currentPage, setCurrentPage] = useState('Hi');

  // mappings from pages to components
  const pages = {
    Hi: <Intro />,
    Tech: <Intro />,
    Projects: <Intro />,
    Ideas: <Intro />,
    Fun: <Intro />,
  };

  return (
    <div className="App">
      <header style={styles.h1}>John Leonardo</header>
      <Segment setCurrentPage={setCurrentPage} />
      {pages[currentPage]}
    </div>
  );
}

const styles = {
  h1: {
    fontFamily: "'Fraunces', serif",
    fontWeight: 700,
    fontSize: 60,
    color: '#0F216B',
  },
};

export default App;
