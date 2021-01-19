import ReactGA from 'react-ga';
import { useEffect } from 'react';

export default function Ideas() {
  // component did mount
  useEffect(() => {
    ReactGA.event({ category: 'Navigation', action: 'Loaded Ideas' });
  }, []);

  // different technologies and languages
  const items = [
    {
      name: 'Distributed System Builder',
      description:
        "Distributed systems are gross, have very little visibility, and are very hard to configure and provision with Terraform. This would be a beautiful drag-and-drop style web-app that allows us to drag different cloud components, configure them, and link them together all visually, with no-code. On the backend, it would generate the appropriate Terraform files to provision the entire infrastructure. First principles say this isn't impossible ;)",
      tags: ['free plan', 'pro plan @ $100/month'],
    },
    {
      name: 'Snapchat Textposts',
      description:
        'Gen-Z is slowly shifting away from Twitter/FB/IG and looking for something more intimate and less cluttered. Snapchat offers an SDK for deep integrations with bitmojis, and authentication, this app could integrate with those and serve as textpost companion to Snapchat. Think Twitter, but way less cluttered, and with deep integrations to Snapchat',
      tags: ['self-service ads'],
    },
    {
      name: 'Bulk Cannabis Marketplace',
      description:
        "As cannabis rapidly gets accepted by local/federal governments, it's definitely a hot market to be in. This could be a web-app built on blockchain (solidity), that allows peer-to-peer bulk cannabis exchange. This would replace the existing, traditional system of having to go through brokers. Farmers meet vendors.",
      tags: ['1-5% on every transaction'],
    },
    {
      name: 'Resume A/B Testing',
      description:
        "They say the average recruiters take 6-8 seconds to look at a resume before making a decision. Not sure how truthy this is; however, if it's true, our resumes need to be PERFECT. This would be a web-app that allows us to upload multiple variations of resumes, and users have 6-8 seconds to vote yes/no like Tinder cards. You get a beautiful A/B test visualization at the end to see the best performing resume",
      tags: ['buy credits for tests', 'earn credits for voting', 'companies can see resumes of top candidates'],
    },
    {
      name: 'Gen-Z AI Marketing',
      description:
        'Ads catered to Gen-Z, specifically from e-comm stores, all follow a similar format, have a similar feel. They are very simple and made for portrait screens (IG/Snap ads). This would be an app, where you upload your store, some assets, and AI mixed with some heuristic models would generate some beautiful ads for you automatically. Great for dropshippers',
      tags: ['free plan', 'pro plan @ $10/month'],
    },
  ];

  return (
    <div>
      <p style={styles.paragraph}>
        The following are some project ideas I've had but haven't had time to get around to. Feel free to execute on any
        of these.
      </p>
      {items.map((item, i) => (
        <div style={styles.itemContainer} key={`${i}`}>
          <header style={styles.itemHeader}>{item.name}</header>
          <br />
          <p style={styles.itemParagraph}>{item.description}</p>
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
