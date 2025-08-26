import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import styles from "./Navbar.module.css";

function Navbar({ searchData }) {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navContent}>
        <Link to="/" className={styles.logoLink}>
          <Logo />
        </Link>
        <Search
          placeholder="Search a song"
          searchData={searchData}
        />
        <Button className={styles.navButton}>Give Feedback</Button>
      </div>
    </nav>
  );
}

export default Navbar;
