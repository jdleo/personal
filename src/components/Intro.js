import ReactGA from 'react-ga';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';

export default function Intro() {
  // component did mount
  useEffect(() => {
    ReactGA.event({ category: 'Navigation', action: 'Loaded Intro' });
  }, []);

  return (
    <div>
      <p style={styles.paragraph}>
        Hey there, 👋. Thanks for visiting. <br />
        <br /> I'm currently a <a href="https://linkedin.com/in/jdleo">Software Engineer II</a> at{' '}
        <a href="https://amazon.com">Amazon</a> working on scaling logistics and delivery routing with Last Mile.
        Formerly, I worked at <a href="https://ibm.com">IBM</a> as a Software Engineer, working on distributed systems
        and low-latency, internal microservices.
        <br />
        <br />
        My favorite programming languages are Go and Typescript, my favorite food is Sushi 🍣 (omakase is the best).
        <br />
        <br />
        Feel free to look around, or reach out through email below.
      </p>
      <br />
      <br />
      <div style={styles.anchorContainer}>
        <a href="mailto:hi@jdleo.me" style={styles.spanAnchor}>
          <span style={styles.span}>
            Say hello <FontAwesomeIcon style={styles.icon} icon={faArrowRight} />
          </span>
        </a>
      </div>
    </div>
  );
}

const styles = {
  paragraph: {
    fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
    fontSize: '1.3rem',
    color: '#adadad',
  },
  spanAnchor: {
    textDecoration: 'none',
  },
  span: {
    backgroundColor: '#f9f9f9',
    color: '#000000',
    fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
    fontWeight: 800,
    fontSize: 18,
    padding: '21px 30px',
    borderRadius: 8,
  },
  icon: {
    marginLeft: 8,
  },
};
