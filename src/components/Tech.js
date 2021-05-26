import ReactGA from 'react-ga';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';

export default function Tech() {
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
    { name: 'Go', tags: ['open source', 'microservices', 'mux', 'protobufs', 'networking'] },
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
            Github <FontAwesomeIcon style={styles.icon} icon={faArrowRight} />
          </span>
        </a>
      </div>
    </div>
  );
}

const styles = {
  paragraph: {
    fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
    fontSize: 20,
    color: '#adadad',
  },
  itemContainer: {
    padding: '21px 30px',
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    marginTop: 26,
  },
  itemHeader: {
    fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
    fontWeight: 700,
    fontSize: 26,
    color: '#000000',
  },
  itemBubble: {
    backgroundColor: '#000000',
    color: '#f9f9f9',
    padding: 8,
    margin: 6,
    borderRadius: 8,
    fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
    fontSize: 12,
    fontWeight: 500,
    display: 'inline-block',
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
