import ReactGA from 'react-ga';
import { Icon } from 'react-fa';
import { useEffect } from 'react';

export default function Ideas() {
  // component did mount
  useEffect(() => {
    ReactGA.event({ category: 'Navigation', action: 'Loaded Tech' });
  }, []);

  // different technologies and languages
  const items = [
    { name: 'Typescript', tags: ['deno', 'oak.ts', 'tslint', 'node.js', 'db models', 'mongoose', 'mongoDB', 'fuse'] },
    { name: 'Javascript', tags: ['express', 'react.js', 'koa', 'fastify', 'middleware', 'eslint', 'mocha', 'jest'] },
    {
      name: 'Python',
      tags: ['flask', 'django', 'algorithms', 'data structures', 'tensorflow', 'pillows', 'numpy', 'SQL'],
    },
    { name: 'Swift', tags: ['UIKit', 'swiftUI', 'alamofire', 'snapkit', 'kingfisher'] },
    { name: 'Java', tags: ['springboot', 'maven', 'algorithms', 'data structures', 'rest controller'] },
    { name: 'Docker', tags: ['continuous deployment', 'dockerfile', 'managed auth injection', 'networking'] },
    {
      name: 'Kubernetes',
      tags: ['multi-container apps', 'load balancing', 'sidecar', 'NodePort', 'ClusterIP', 'volumes'],
    },
    {
      name: 'Terraform',
      tags: ['pipeline automation', 'access management', 'resource group bundling', 'cloud agnostic'],
    },
  ];

  return (
    <div>
      <p style={styles.paragraph}>The following a list of different technologies I'm familiar with.</p>
      {items.map((item, i) => (
        <div style={styles.itemContainer} key={`${i}`}>
          <header style={styles.itemHeader}>{item.name}</header>
          <br />
          {item.tags.map(tag => (
            <span key={`${Math.random()}`} style={styles.itemBubble}>
              {tag}
            </span>
          ))}
        </div>
      ))}
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
  itemContainer: {
    padding: '21px 30px',
    boxShadow: '5px 5px 35px 5px rgba(0,0,0,0.12)',
    borderRadius: 8,
    marginTop: 26,
  },
  itemHeader: { fontFamily: "'Fraunces', serif", fontWeight: 600, fontSize: 26, color: '#0F216B' },
  itemBubble: {
    backgroundColor: '#050505',
    color: '#fff',
    padding: 8,
    margin: 6,
    borderRadius: 8,
    fontFamily: "'Roboto', sans-serif",
    fontSize: 12,
    fontWeight: 500,
    display: 'inline-block',
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
