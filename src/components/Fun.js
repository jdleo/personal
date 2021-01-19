import ReactGA from 'react-ga';
import { Icon } from 'react-fa';
import { useEffect, useState } from 'react';
import crypto from 'crypto';
import countapi from 'countapi-js';

export default function Fun() {
  // state mgmt
  const [textToHash, setTextToHash] = useState('');
  const [likes, setLikes] = useState(0);

  // component did mount
  useEffect(() => {
    ReactGA.event({ category: 'Navigation', action: 'Loaded Fun' });

    // load likes
    countapi
      .get('jdleo.me', 'likes')
      .then(result => {
        setLikes(result.value);
      })
      .catch(() => {});
  }, []);

  // for handling like
  const handleLike = e => {
    e.preventDefault();

    // increment on api
    countapi
      .hit('jdleo.me', 'likes')
      .then(() => {})
      .catch(() => {});

    // increment in state
    setLikes(likes + 1);
  };

  // hashing algorithms to use
  const hashes = ['sha1', 'sha224', 'sha256', 'rmd160', 'md5'];

  return (
    <div>
      <div style={styles.itemContainer}>
        <header style={styles.itemHeader}>Like this page?</header>
        <br />
        <p style={styles.itemParagraph}>These likes are real. Hit the button to show some love ❤️</p>
        <br />
        <div style={styles.anchorContainer}>
          <a href={'https://jdleo.me'} style={styles.spanAnchor} onClick={e => handleLike(e)}>
            <span style={styles.span}>
              <Icon style={styles.icon} name="heart" /> {likes === 0 ? 'loading...' : likes.toLocaleString()}
            </span>
          </a>
        </div>
      </div>
      <div style={styles.itemContainer}>
        <header style={styles.itemHeader}>Hash Converter</header>
        <br />
        <p style={styles.itemParagraph}>Enter a text value, and you can see the various hash outputs.</p>
        <br />
        <input
          style={styles.input}
          placeholder="Enter text..."
          value={textToHash}
          onChange={e => setTextToHash(e.target.value)}
        />
        {hashes.map((hash, i) => (
          <div key={`${i}`} style={styles.codeBlock}>
            <code>
              <span style={{ color: 'red' }}>
                {hash}(<span style={{ color: 'yellow' }}>'{textToHash}'</span>) ={' '}
              </span>
              {crypto.createHash(hash).update(textToHash).digest('hex')}
            </code>
          </div>
        ))}
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
  input: {
    borderRadius: 8,
    border: '2px solid #0F216B',
    overflow: 'hidden',
    padding: 12,
    fontFamily: "'Roboto', sans-serif",
    color: '#0F216B',
    textAlign: 'center',
    fontWeight: 500,
    fontSize: 18,
    boxShadow: '5px 5px 35px 5px rgba(0,0,0,0.16)',
  },
  codeBlock: {
    borderRadius: 8,
    overflow: 'hidden',
    padding: 12,
    fontFamily: "'Roboto', sans-serif",
    color: '#fff',
    textAlign: 'center',
    fontWeight: 500,
    fontSize: window.innerWidth > 450 ? 12 : 10,
    backgroundColor: '#050505',
    boxShadow: '5px 5px 35px 5px rgba(0,0,0,0.16)',
    marginTop: 20,
    marginBottom: 20,
  },
  itemContainer: {
    padding: '21px 30px',
    boxShadow: '5px 5px 35px 5px rgba(0,0,0,0.12)',
    borderRadius: 8,
    marginTop: 26,
  },
  itemHeader: { fontFamily: "'Fraunces', serif", fontWeight: 600, fontSize: 26, color: '#0F216B' },
  itemBubble: {
    backgroundColor: '#aaffaa',
    color: '#050505',
    padding: 8,
    margin: 6,
    borderRadius: 8,
    fontFamily: "'Roboto', sans-serif",
    fontSize: 12,
    fontWeight: 500,
    display: 'inline-block',
  },
  itemParagraph: {
    fontFamily: "'Roboto', sans-serif",
    fontSize: 14,
    color: '#0F216B',
  },
  spanAnchor: {
    textDecoration: 'none',
  },
  anchorContainer: {
    marginTop: 20,
    marginBottom: 20,
  },
  span: {
    backgroundColor: '#DA667B',
    color: '#fff',
    fontFamily: "'Roboto', sans-serif",
    fontWeight: 500,
    fontSize: 18,
    padding: '21px 30px',
    borderRadius: 8,
    boxShadow: '5px 5px 35px 5px rgba(0,0,0,0.33)',
  },
  icon: {
    marginRight: 10,
  },
};
