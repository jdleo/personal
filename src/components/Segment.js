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
              ? { backgroundColor: '#0F216B', color: '#fff' }
              : { backgroundColor: '#fff', color: '#0F216B' }),
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
    border: '2px solid #0F216B',
    marginBottom: 50,
    marginTop: 20,
    display: 'flex',
    height: 45,
    overflow: 'hidden',
    fontFamily: "'Roboto', sans-serif",
    fontWeight: 500,
    cursor: 'pointer',
    boxShadow: '5px 5px 35px 5px rgba(0,0,0,0.16)',
  },
  block: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
};
