// src/components/Button/Button.jsx
import React from "react";
import styles from "./Button.module.css"; // make sure you have this CSS file

function Button({ children, onClick }) {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
