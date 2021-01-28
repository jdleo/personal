import { useState } from 'react';
import * as crypto from 'crypto';
import styles from './styles';

export default function Hash() {
  // state mgmt
  const [textToHash, setTextToHash] = useState('');

  // hashing algorithms to use
  const hashes = ['sha1', 'sha224', 'sha256', 'rmd160', 'md5'];

  return (
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
  );
}
