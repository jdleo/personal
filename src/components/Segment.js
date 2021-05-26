import { useState } from 'react';

export default function Segment(props) {
  // to hold page names
  const pages = ['Hi', 'Tech', 'Projects', 'Ideas', 'Fun'];

  // state mgmt
  const [selectedPage, setSelectedPage] = useState('Hi');

  return (
    <div style={styles.container}>
      {pages.map((page, i) => (
        <div
          key={`${i}`}
          onClick={() => {
            setSelectedPage(page);
            props.setCurrentPage(page);
          }}
          style={{
            ...styles.block,
            ...(page === selectedPage
              ? { backgroundColor: '#000000', color: '#f9f9f9' }
              : { backgroundColor: '#f9f9f9', color: '#000000' }),
          }}
        >
          {page}
        </div>
      ))}
    </div>
  );
}

const styles = {
  container: {
    borderRadius: 8,
    marginBottom: 50,
    marginTop: 20,
    display: 'flex',
    height: 45,
    overflow: 'hidden',
    fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
    padding: 6,
    backgroundColor: '#f9f9f9',
    fontWeight: 600,
    cursor: 'pointer',
  },
  block: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
};
