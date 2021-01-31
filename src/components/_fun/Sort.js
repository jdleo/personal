import { useState, useEffect } from 'react';
import styles from './styles';

export default function Sort() {
  // state mgmt
  const [colors, setColors] = useState([]);
  const [selectedAlgo, setSelectedAlgo] = useState('Selection Sort');
  const [sorting, setSorting] = useState(false);

  // component did mount
  // eslint-disable-next-line
  useEffect(() => generateColors(100), []);

  // helper method to generate n random colors, and set them into state
  const generateColors = n => {
    if (sorting) return;
    // colors to add to state
    const colors_ = [];

    for (let i = 0; i < n; i++) {
      // generate random number in [0, 0xFFFFFF] (color range)
      const num = ~~(Math.random() * (0xffffff + 1));
      // push hex to colors_
      colors_.push('#' + num.toString(16).padStart(6, 0));
    }

    // set state
    setColors(colors_);
  };

  // timer helper
  const timer = ms => new Promise(resolve => setTimeout(resolve, ms));

  /**
   *
   * @param {string} color
   */
  const colorToInt = color => {
    // get rgb
    const [r, g, b] = [color.slice(1, 3), color.slice(3, 5), color.slice(5, 7)];
    // return sum of hues
    return parseInt(r, 16) + parseInt(g, 16) + parseInt(b, 16);
  };

  // helper method for selection sort
  const selectionSort = async () => {
    // flag sorting
    setSorting(true);
    // get copy of colors
    const colors_ = [...colors];
    // go thru indices
    for (let i = 0; i < colors_.length; i++) {
      // current minimum index
      let min = i;
      // go from i + 1 to end of array
      for (let j = i + 1; j < colors_.length; j++) {
        // check if this is smaller than cur
        if (colorToInt(colors_[j]) < colorToInt(colors_[min])) {
          min = j;
        }
      }
      // swap min with i
      [colors_[i], colors_[min]] = [colors_[min], colors_[i]];
      // set state for visualization
      setColors([...colors_]);
      // sleep
      await timer(100);
    }

    // flag done sorting
    setSorting(false);
  };

  // helper method for bubble sort
  const bubbleSort = async () => {
    // flag sorting
    setSorting(true);
    // get copy of colors
    const colors_ = [...colors];
    // keep iterating
    while (true) {
      // flag for if we performed a swap
      let swapped = false;
      // go thru indices
      for (let i = 0; i < colors_.length - 1; i++) {
        // check if adjacent colors need to be swapped
        if (colorToInt(colors_[i]) > colorToInt(colors_[i + 1])) {
          // swap, and mark swapped
          [colors_[i], colors_[i + 1]] = [colors_[i + 1], colors_[i]];
          swapped = true;
          // set state for visualization
          setColors([...colors_]);
          // sleep
          await timer(1);
        }
      }

      // if there was no swap, break
      if (!swapped) break;
    }

    // flag done sorting
    setSorting(false);
  };

  // helper method for insertion sort
  const insertionSort = async () => {
    // flag sorting
    setSorting(true);
    // get copy of colors
    const colors_ = [...colors];

    // go from 1..len of colors
    for (let i = 1; i < colors_.length; i++) {
      // get key
      const key = colors_[i];
      // move elements of colors[0..i-1] that are greater than key,
      // to one position ahead
      let j = i - 1;
      while (j >= 0 && colorToInt(key) < colorToInt(colors_[j])) {
        colors_[j + 1] = colors_[j];
        j--;

        // set state for visualization
        setColors([...colors_]);
        // sleep
        await timer(1);
      }
      colors_[j + 1] = key;
    }

    // flag done sorting
    setSorting(false);
  };

  // list of sorting algorithms
  const algos = {
    'Selection Sort': selectionSort,
    'Bubble Sort': bubbleSort,
    'Insertion Sort': insertionSort,
  };

  return (
    <div style={styles.itemContainer}>
      <header style={styles.itemHeader}>Sort Visualization</header>
      <br />
      <p style={styles.itemParagraph}>
        Below is a simple visualization for various, famous sorting algorithms. Colors are really just hexadecimal
        values, so they will be sorted as if the colors are numbers.
      </p>
      <br />
      <button style={styles.betButton} onClick={() => generateColors(100)}>
        Randomize
      </button>
      <br />
      <form action="#">
        <label htmlFor="algo" style={styles.algoLabel}>
          Algorithm:{' '}
        </label>
        <select id="algo" name="algo" style={styles.algoSelect} onChange={e => setSelectedAlgo(e.target.value)}>
          {Object.keys(algos).map(algo => (
            <option key={algo} value={algo}>
              {algo}
            </option>
          ))}
        </select>
      </form>
      <br />
      <button style={styles.betButton} onClick={() => !sorting && algos[selectedAlgo]()}>
        Sort
      </button>
      <br />
      {colors.map((color, i) => (
        <div key={`${i}`} style={{ ...styles.colorCell, backgroundColor: color }} />
      ))}
    </div>
  );
}
