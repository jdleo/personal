import ReactGA from 'react-ga';
import './App.css';

// initialize ga
ReactGA.initialize('UA-125401051-1');
ReactGA.pageview(window.location.pathname + '/home');

function App() {
  return (
    <div className="App">
      <header style={styles.h1}>John Leonardo</header>
      <p style={styles.paragraph}>Hey there 👋 </p>
      <p style={styles.paragraph}>
        This website is currently under construction. If you need to reach out, you can reach me at{' '}
        <a href="mailto:hi@jdleo.me">hi@jdleo.me</a>
      </p>
    </div>
  );
}

const styles = {
  h1: {
    fontFamily: "'Fraunces', serif",
    fontWeight: 600,
    fontSize: 60,
    color: '#fff',
  },
  paragraph: {
    fontFamily: "'Roboto', sans-serif",
    fontSize: 20,
    color: '#fff',
  },
};

export default App;
