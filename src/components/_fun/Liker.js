import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import ReactGA from 'react-ga';
import axios from 'axios';
import styles from './styles';

export default function Liker() {
  // state mgmt
  const [likes, setLikes] = useState(0);
  const [clicked, setClicked] = useState(false);

  // url for api
  const api_url = 'https://us-central1-jdleo-api.cloudfunctions.net/api/likes';

  // component did mount
  useEffect(
    () =>
      axios.get(api_url).then(res => {
        // set likes from response
        setLikes(res.data.count);
      }),
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

    // send put request to api
    axios.put(api_url);

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
            <FontAwesomeIcon style={styles.icon} icon={faHeart} /> {likes === 0 ? 'loading...' : likes.toLocaleString()}
          </span>
        </a>
      </div>
    </div>
  );
}
