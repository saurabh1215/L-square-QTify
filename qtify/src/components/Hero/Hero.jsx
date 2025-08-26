import React from "react";
import styles from "./Hero.module.css";
import headphones from "../../assets/headphone1.png"; // must exactly match filename

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.text}>
        <h1>100 Thousand Songs, ad-free</h1>
        <h2>Over thousands of podcast episodes</h2>
      </div>
      <div className={styles.image}>
        <img src={headphones} alt="Headphones" />
      </div>
    </section>
  );
}

export default Hero;
