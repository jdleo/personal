import ReactGA from 'react-ga';
import { Icon } from 'react-fa';
import { useEffect } from 'react';

// assets
import spark from '../assets/spark.gif';
import reach from '../assets/reach.gif';
import casper from '../assets/casper.gif';
import garlicoin from '../assets/garlicoin.png';
import ghost from '../assets/ghost.jpg';

export default function Tech() {
  // component did mount
  useEffect(() => {
    ReactGA.event({ category: 'Navigation', action: 'Loaded Projects' });
  }, []);

  // items for projects
  const items = [
    {
      title: 'Spark',
      description:
        'A very simple social media, where it costs you “sparks” to follow people and like posts, so every one counts and has meaning.',
      image: spark,
      stats: ['react native', 'google app engine', 'firestore', 'typescript', 'expo'],
      action: 'Producthunt',
      url: 'https://www.producthunt.com/posts/spark-590ffd41-294d-4367-9455-84f45c05032b',
    },
    {
      title: 'Reach',
      description:
        "An influencer marketplace that allows influencers to sell promoted posts, and allows brands to book those services. Influencers choose what they're willing to post, set the prices, and brands book these posts in a streamlined fashion",
      image: reach,
      stats: ['swift', 'google app engine', 'firestore', 'stripe', 'alamofire', 'kingfisher'],
      action: 'Producthunt',
      url: 'https://www.producthunt.com/posts/reach-7',
    },
    {
      title: 'Casper',
      description:
        'A simple, modern chat app with no surprises. You can meet new people, add them, and chat with them once they\'ve added you back. If you want to be discovered easier, you can "boost" your profile for visibility.',
      image: casper,
      stats: ['swift', 'firestore', 'python', 'alamofire'],
      action: 'Producthunt',
      url: 'https://www.producthunt.com/posts/casper-3',
    },
    {
      title: 'Garlicoin',
      description:
        'A fun, meme cryptocurrency forked from Litecoin. I was the first developer on the project, and implemented a progressive-N algorithm to combat ASIC mining.',
      image: garlicoin,
      stats: ['C', 'blockchain'],
      action: 'Website',
      url: 'https://garlicoin.io/',
    },
    {
      title: 'Ghost',
      description:
        'Ghost was a fun iOS app, which was an anonymous social feed where you could upvote/downvote posts in a self-governing system.',
      image: ghost,
      stats: ['Swift', 'Firebase', 'Geofire'],
      action: 'Google',
      url:
        'https://www.google.com/search?q=ghost+anonymous+social+feed&source=lmns&client=firefox-b-1-d&hl=en&sa=X&ved=2ahUKEwiswZrztKTuAhVLRawKHUnDD_oQ_AUoAHoECAEQAA',
    },
  ];

  return (
    <div>
      <p style={styles.paragraph}>Here are some things I made.</p>
      {items.map((item, i) => (
        <div style={styles.itemContainer} key={`${i}`}>
          <div style={styles.imageContainer}>
            <img src={item.image} style={styles.thumbnail} alt="thumbnail" />
          </div>
          <div style={styles.attributeContainer}>
            <div style={styles.textContainer}>
              <header style={styles.itemHeader}>{item.title}</header>
              <p style={styles.itemParagraph}>{item.description}</p>
              {item.stats.map(stat => (
                <span key={`${Math.random()}`} style={styles.itemBubble}>
                  {stat}
                </span>
              ))}
              <div style={styles.anchorContainer}>
                <a href={item.url} style={styles.spanAnchor}>
                  <span style={styles.span}>
                    {item.action} <Icon style={styles.icon} name="arrow-right" />
                  </span>
                </a>
              </div>
            </div>
          </div>
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
    padding: '12px 18px',
    boxShadow: '5px 5px 35px 5px rgba(0,0,0,0.12)',
    borderRadius: 8,
    marginTop: 26,
    display: 'flex',
  },
  imageContainer: { flexGrow: 0.5, display: 'flex', justifyContent: 'flex-start' },
  attributeContainer: {
    flexGrow: 0.5,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginLeft: 20,
  },
  textContainer: { textAlign: 'left' },
  thumbnail: { width: 60, height: 60, borderRadius: 8 },
  itemHeader: { fontFamily: "'Fraunces', serif", fontWeight: 700, fontSize: 18, color: '#0F216B' },
  itemParagraph: {
    fontFamily: "'Roboto', sans-serif",
    fontSize: 14,
    color: '#0F216B',
  },
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
  anchorContainer: {
    marginTop: 30,
    marginBottom: 20,
  },
  spanAnchor: {
    textDecoration: 'none',
  },
  span: {
    backgroundColor: '#0F216B',
    color: '#fff',
    fontFamily: "'Roboto', sans-serif",
    fontWeight: 500,
    fontSize: 12,
    padding: '12px 16px',
    borderRadius: 8,
    boxShadow: '5px 5px 35px 5px rgba(0,0,0,0.33)',
  },
  icon: {
    marginLeft: 8,
  },
};