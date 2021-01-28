import { Icon } from 'react-fa';
import { useState } from 'react';
import ReactGA from 'react-ga';
import styles from './styles';

export default function Casino() {
  // state mgmt
  const [balance, setBalance] = useState(1000.0);
  const [selectedColors, setSelectedColors] = useState([]);
  const [lastRoll, setLastRoll] = useState('');
  const [betText, setBetText] = useState('');
  const [error, setError] = useState('');

  // colors to draw
  const colors = ['#2e5149', '#ffb02b', '#4f8ee7', '#b9793a', '#0451c1', '#6139f7', '#e8b0cf', '#05df8d', '#e72a16'];

  // helper function to handle when color bubble is tapped
  const handleColorTap = (e, color) => {
    e.preventDefault();
    // clear error
    setError('');
    // clear last roll
    setLastRoll('');
    // check if this color is already selected
    if (selectedColors.includes(color)) {
      // remove from selected colors
      setSelectedColors(selectedColors.filter(c => c !== color));
    } else {
      // add to array
      setSelectedColors([...selectedColors, color]);
    }
  };

  // helper function to handle bet button being tapped
  const handleBet = e => {
    e.preventDefault();

    // check to see if they selected at least one color
    if (selectedColors.length > 0) {
      if (selectedColors.length < colors.length) {
        // check to see if valid bet
        if (!isNaN(betText)) {
          // parse bet
          const bet = parseFloat(betText);
          // check to see if they have balance for this bet
          if (balance - bet >= 0) {
            if (bet > 0) {
              // clear error
              setError('');

              // log bet event
              ReactGA.event({ category: 'Interaction', action: 'Bet', value: bet });

              // draw a random color
              const roll = colors[~~(Math.random() * colors.length)];

              // subtract balance
              let newBalance = balance - bet;

              // check if they won
              if (selectedColors.includes(roll)) {
                // calculate multiplier
                const multiplier = 1 / (selectedColors.length / colors.length);
                // multiply bet by multiplier, add to new balance
                newBalance += bet * multiplier;
              }
              // set new balance
              setBalance(newBalance);
              // set last roll
              setLastRoll(roll);
            } else {
              setError('Your bet must be greater than zero.');
            }
          } else {
            setError("You don't have enough balance for that bet.");
          }
        } else {
          setError('Your bet is not a valid number.');
        }
      } else {
        setError("You can't select all colors");
      }
    } else {
      setError('You have to select at least one color.');
    }
  };

  // helper function to render breaks
  const breaks = n => {
    return Array(n)
      .fill(0)
      .map((_, i) => <br key={`${i}`} />);
  };

  return (
    <div style={styles.itemContainer}>
      <header style={styles.itemHeader}>Gamble</header>
      <br />
      <p style={styles.itemParagraph}>
        This a simple game that allows you to choose a color (or many colors), and if it rolls and lands on one of the
        colors selected, you get the payout specified.
      </p>
      <br />
      <span style={styles.balanceSpan}>
        <Icon style={styles.balanceIcon} name="university" />{' '}
        {balance.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
      </span>
      {breaks(4)}
      {lastRoll && (
        <span style={{ ...styles.colorRoll, backgroundColor: lastRoll }}>
          You {selectedColors.includes(lastRoll) ? 'won' : 'lost'}!
        </span>
      )}
      {lastRoll && breaks(3)}
      <input
        style={styles.betInput}
        placeholder="Enter bet size..."
        value={betText}
        onChange={e => setBetText(e.target.value)}
      />
      {breaks(2)}
      <button style={styles.betButton} onClick={e => handleBet(e)}>
        BET
      </button>
      {error && <p style={styles.error}>{error}</p>}
      <header style={styles.itemHeader}>Select Color(s)</header>
      {console.log(selectedColors)}
      {colors.map(color => {
        const isSelected = selectedColors.includes(color);

        return (
          <div
            key={color}
            style={{
              ...styles.colorBlock,
              backgroundColor: color,
              boxShadow: isSelected ? '5px 5px 35px 5px rgba(0,0,0,0.50)' : 'none',
              border: isSelected ? '3px solid white' : 'none',
              height: isSelected ? 44 : 50,
              width: isSelected ? 44 : 50,
            }}
            onClick={e => handleColorTap(e, color)}
          ></div>
        );
      })}
      {selectedColors.length !== 0 && selectedColors.length !== colors.length && (
        <div style={styles.betStatContainer}>
          <span style={styles.betStat}>
            Win Probability:{' '}
            <code style={{ fontSize: 20 }}>{((selectedColors.length / colors.length) * 100).toFixed(2)}%</code>
          </span>
          <br />
          <span style={styles.betStat}>
            Payout: <code style={{ fontSize: 20 }}>{(1 / (selectedColors.length / colors.length)).toFixed(2)}x</code>
          </span>
        </div>
      )}
    </div>
  );
}
