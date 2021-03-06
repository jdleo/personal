import ReactGA from 'react-ga';
import { useEffect } from 'react';

// fun components
import { Liker, Hash, Casino, Sort, Hater } from './_fun';

export default function Fun() {
  // component did mount
  useEffect(() => {
    ReactGA.event({ category: 'Navigation', action: 'Loaded Fun' });
  }, []);

  return (
    <div>
      <Liker />
      <Sort />
      <Casino />
      <Hash />
      <Hater />
    </div>
  );
}
