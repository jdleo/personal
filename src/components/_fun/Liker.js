import { Icon } from 'react-fa';
import { useEffect, useState } from 'react';
import ReactGA from 'react-ga';
import countapi from 'countapi-js';
import styles from './styles';

export default function Liker() {
  // state mgmt
  const [likes, setLikes] = useState(0);
  const [clicked, setClicked] = useState(false);

  // component did mount
  useEffect(
    () =>
      countapi
        .get('jdleo.me', 'likes')
        .then(result => {
          setLikes(result.value);
        })
        .catch(() => {}),
    []
  );

  // for handling like
  const handleLike = e => {
    // prevent default
    e.preventDefault();

    if (clicked) return;

    // flag click
    setClicked(true);

    // log like event
    ReactGA.event({ category: 'Interaction', action: 'Liked' });

    // increment on api
    countapi
      .hit('jdleo.me', 'likes')
      .then(() => {})
      .catch(() => {});

    // increment in state
    setLikes(likes + 1);

    setTimeout(() => {
      // flag click
      setClicked(false);
    }, 300);
  };

  return (
    <div style={styles.itemContainer}>
      <header style={styles.itemHeader}>Like this page?</header>
      <br />
      <p style={styles.itemParagraph}>
        These likes are real. Hit the button (as much as you want) to show some love ❤️
      </p>
      <br />
      <div style={styles.anchorContainer} id={clicked ? 'pop' : ''}>
        <a href={'https://jdleo.me'} style={styles.spanAnchor} onClick={e => handleLike(e)}>
          <span style={styles.span}>
            <Icon style={styles.icon} name="heart" /> {likes === 0 ? 'loading...' : likes.toLocaleString()}
          </span>
        </a>
      </div>
    </div>
  );
}
