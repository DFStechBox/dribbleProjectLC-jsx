import styles from "./UseEffectExamples.module.css";
import { useEffect, useState } from "react";
import { randomizeArr } from '../../helpers/array'

const colors = ["#333", "brown", "purple"];

export default function UseEffectExamples() {
  const [showBox, setShowBox] = useState(true);
  const [randomColor, setRandomColor] = useState(colors[0])

  useEffect(() => {
    const btnElem = document.getElementById("my-btn");
    console.log(btnElem);
  }, [showBox]);
  return (
    <section
      style={{ backgroundColor: randomColor, }}
      className={styles.container}
    >
      <h1>useEffect Examples</h1>
      {showBox && <div className={styles.block}></div>}

      <button
        onClick={() => {
          setShowBox(!showBox);
        }}
        id="my-btn"
        className={styles.btn}
      >
        Toggle Box
      </button>
      <button
        onClick={() => {
          const randomColor = randomizeArr(colors)[0];
          setRandomColor(randomColor);
        }}
        id="my-btn"
        className={styles.btn}
      >
        Randomize Color
      </button>
    </section>
  );
}
