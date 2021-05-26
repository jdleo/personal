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
        <br /> I'm currently a Full-Stack Software Engineer at <a href="https://ibm.com">IBM</a> building out complex,
        distributed systems and microservices with iX.
        <br />
        <br /> My favorite programming languages are Go and Typescript, favorite baseball team is the Mariners, and
        favorite new music artist is Clairo. <br />
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
