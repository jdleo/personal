import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngry } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import ReactGA from 'react-ga';
import countapi from 'countapi-js';
import styles from './styles';

export default function Hater() {
  // state mgmt
  const [hates, setHates] = useState(0);
  const [clicked, setClicked] = useState(false);

  // component did mount
  useEffect(
    () =>
      countapi
        .get('jdleo.me', 'hates')
        .then(result => {
          setHates(result.value);
        })
        .catch(() => {}),
    []
  );

  // for handling like
  const handleHate = e => {
    // prevent default
    e.preventDefault();

    if (clicked) return;

    // flag click
    setClicked(true);

    // log like event
    ReactGA.event({ category: 'Interaction', action: 'Hated' });

    // increment on api
    countapi.hit('jdleo.me', 'hates').finally(() => {});

    // increment in state
    setHates(hates + 1);

    setTimeout(() => {
      // flag click
      setClicked(false);
    }, 300);
  };

  return (
    <div style={styles.itemContainer}>
      <header style={styles.itemHeader}>Hate this page?</header>
      <br />
      <p style={styles.itemParagraph}>Then why did you scroll all the way down? 😡</p>
      <br />
      <div style={styles.anchorContainer} id={clicked ? 'pop' : ''}>
        <a href={'https://jdleo.me'} style={styles.spanAnchor} onClick={e => handleHate(e)}>
          <span style={styles.hateSpan}>
            <FontAwesomeIcon icon={faAngry} /> {hates === 0 ? 'loading...' : hates.toLocaleString()}
          </span>
        </a>
      </div>
    </div>
  );
}
