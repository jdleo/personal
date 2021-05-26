import ReactGA from 'react-ga';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';

// assets
import spark from '../assets/spark.gif';
import reach from '../assets/reach.gif';
import casper from '../assets/casper.gif';
import garlicoin from '../assets/garlicoin.png';
import ghost from '../assets/ghost.jpg';
import lite from '../assets/lite.png';
import reachv2 from '../assets/reachv2.gif';

export default function Projects() {
  // component did mount
  useEffect(() => {
    ReactGA.event({ category: 'Navigation', action: 'Loaded Projects' });
  }, []);

  // items for projects
  const items = [
    {
      title: 'Lite.fyi',
      description:
        'A very micro link shortener, that does exactly what it says (shortens links, duh). All of the clutter taken away.',
      image: lite,
      stats: ['react', 'javascript', 'netlify', 'firestore'],
      action: 'lite.fyi',
      url: 'https://lite.fyi',
    },
    {
      title: 'Reach v2',
      description:
        "A matchmaker between creators and brands with an elegant approach to brand deals. We've focused on keeping the process simple. Brands set the performance metrics, creators swipe through a curated stack of offers, and boom– it's time to get paid.",
      image: reachv2,
      stats: ['react', 'react native', 'typescript', 'google cloud', 'express'],
      action: 'Producthunt',
      url: 'https://www.producthunt.com/posts/reach-9',
    },
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
                <a href={item.url} style={styles.spanAnchor} target="_blank" rel="noreferrer">
                  <span style={styles.span}>
                    {item.action} <FontAwesomeIcon style={styles.icon} icon={faArrowRight} />
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
    fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
    fontSize: 20,
    color: '#adadad',
  },
  itemContainer: {
    padding: '12px 18px',
    backgroundColor: '#f9f9f9',
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
  itemHeader: {
    fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
    fontWeight: 700,
    fontSize: 26,
    color: '#000000',
  },
  itemParagraph: {
    fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
    fontSize: 16,
    color: '#080808',
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
  anchorContainer: {
    marginTop: 30,
    marginBottom: 20,
  },
  spanAnchor: {
    textDecoration: 'none',
  },
  span: {
    backgroundColor: '#000000',
    color: '#f9f9f9',
    fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
    fontWeight: 800,
    fontSize: 16,
    padding: '12px 16px',
    borderRadius: 8,
  },
  icon: {
    marginLeft: 8,
  },
};
