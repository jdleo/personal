import ReactGA from 'react-ga';
import { Icon } from 'react-fa';
import { useEffect } from 'react';

export default function Intro() {
  // component did mount
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + '/tech');
  });

  return (
    <div>
      <p style={styles.paragraph}>The following a list of different technologies I'm familiar with.</p>
      <br />
      <br />
      <div style={styles.anchorContainer}>
        <a href="https://github.com/jdleo" style={styles.spanAnchor}>
          <span style={styles.span}>
            Github <Icon style={styles.icon} name="arrow-right" />
          </span>
        </a>
      </div>
    </div>
  );
}

const styles = {
  paragraph: {
    fontFamily: "'Roboto', sans-serif",
    fontSize: 20,
    color: '#0F216B',
  },
  spanAnchor: {
    textDecoration: 'none',
  },
  span: {
    backgroundColor: '#0F216B',
    color: '#fff',
    fontFamily: "'Roboto', sans-serif",
    fontWeight: 500,
    fontSize: 18,
    padding: '21px 30px',
    borderRadius: 8,
    boxShadow: '5px 5px 35px 5px rgba(0,0,0,0.33)',
  },
  icon: {
    marginLeft: 8,
  },
};
