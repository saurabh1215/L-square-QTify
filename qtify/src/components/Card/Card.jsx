// src/components/Card/Card.jsx
import React from "react";
import styles from "./Card.module.css";
import Chip from "@mui/material/Chip";

function Card({ album }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img
          src={album.image}
          alt={album.title}
          className={styles.albumImage}
        />
        <Chip
          label={
            album.likes !== undefined
              ? `${album.likes} Likes`
              : `${album.follows} Follows`
          }
          className={styles.chip}
          color="primary"
          size="small"
        />
      </div>
      <p className={styles.title}>{album.title}</p>
    </div>
  );
}

export default Card;
