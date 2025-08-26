import React from "react";
import LogoImage from "../../assets/logo.png";
import styles from "./Logo.module.css";

export default function Logo() {
  return (
    <div className={styles.logoWrapper}>
      <img src={LogoImage} alt="logo" className={styles.logoImage} />
    </div>
  );
}
