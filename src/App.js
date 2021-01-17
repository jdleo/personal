import './App.css';

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
  },
  paragraph: {
    fontFamily: "'Roboto', sans-serif",
    fontSize: 20,
  },
};

export default App;
