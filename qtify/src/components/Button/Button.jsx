import React from "react";
import styles from "./Button.module.css";

export default function Button({ children, onClick, type = "button", variant }) {
  const buttonClass = variant === "feedback" ? styles.feedbackButton : styles.button;

  return (
    <button className={buttonClass} type={type} onClick={onClick}>
      {children}
    </button>
  );
}
