import ReactGA from 'react-ga';
import { useEffect } from 'react';

// fun components
import { Liker, Hash } from './_fun';

export default function Fun() {
  // component did mount
  useEffect(() => {
    ReactGA.event({ category: 'Navigation', action: 'Loaded Fun' });
  }, []);

  return (
    <div>
      <Liker />
      <Hash />
    </div>
  );
}
