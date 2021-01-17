import ReactGA from 'react-ga';
import { Icon } from 'react-fa';
import { Segment, Intro } from './components';
import './App.css';

// initialize ga
ReactGA.initialize('UA-125401051-1');
ReactGA.pageview(window.location.pathname + '/home');

function App() {
  return (
    <div className="App">
      <header style={styles.h1}>John Leonardo</header>
      <Segment />
      <Intro />
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
