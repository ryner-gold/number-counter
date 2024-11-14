"use client";

import { useState } from "react";
import DevWrapper from "@/components/DevWrapper/DevWrapper";

import styles from "@/app/styles.module.css";

import { Doto } from "next/font/google"; // Import both fonts

const doto_init = Doto({
  subsets: ["latin"],
  weight: ["300", "500"],
  display: "swap",
  fallback: ["sans-serif"]
});

export default function Home() {
  const [count, setCount] = useState<number>(0);
  const [isAddBtnActive, setIsAddBtnActive] = useState<boolean>(false);

  console.log(`State: ${isAddBtnActive}`);

  function increaseCount() {
    setIsAddBtnActive(true);
    setCount(count + 1);

    setTimeout(() => {
      setIsAddBtnActive(false);
    }, 300);
  }

  function decreaseCount() {
    setCount(count - 1);
  }

  return (
    <DevWrapper enabled={true}>
      <div className={styles.parentContainer} id="parent-container">
        <div className={`${styles.titleContainer}`}>
          <h1 className={`${doto_init.className}`} id="title-container">
            Number Counter
          </h1>
        </div>
        <p
          data-testid="count"
          id="count-container"
          className={`${styles.countContainer} ${isAddBtnActive ? `${styles.animateCountContainer} ${styles.someOtherClass}` : ""}`}
        >
          {count}
        </p>
        <div className={styles.buttonContainer} id="button-container">
          <button
            data-testid="add-btn"
            id="increase-count-btn"
            className={styles.increaseCountBtn}
            onClick={increaseCount}
          >
            +
          </button>
          <button
            data-testid="minus-btn"
            id="decrease-count-btn"
            className={styles.decreaseCountBtn}
            onClick={decreaseCount}
          >
            -
          </button>
        </div>
      </div>
    </DevWrapper>
  );
}
