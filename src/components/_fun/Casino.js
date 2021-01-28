import { Icon } from 'react-fa';
import { useState } from 'react';
import styles from './styles';

export default function Casino() {
  // state mgmt
  const [balance, setBalance] = useState(1000.0);
  const [selectedColors, setSelectedColors] = useState([]);
  const [lastRoll, setLastRoll] = useState();

  // colors to draw
  const colors = ['#2e5149', '#ffb02b', '#4f8ee7', '#b9793a', '#0451c1', '#6139f7', '#e8b0cf', '#05df8d', '#e72a16'];

  // helper function to handle when color bubble is tapped
  const handleColorTap = (e, color) => {
    e.preventDefault();

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
    </div>
  );
}
