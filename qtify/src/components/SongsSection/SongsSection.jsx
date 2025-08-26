// src/components/SongsSection/SongsSection.jsx
import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Tab, Tabs } from "@mui/material";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Card from "../Card/Card";
import styles from "./SongsSection.module.css";

import prevIcon from "../../assets/prev.svg";
import nextIcon from "../../assets/next.svg";

function SongsSection() {
  const [genresData, setGenresData] = useState([]);
  const [songsData, setSongsData] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("all");

  const carouselRef = useRef(null);

  useEffect(() => {
    // Fetch genres
    axios
      .get("https://qtify-backend-labs.crio.do/genres")
      .then((res) => {
        // API returns { data: [...] }
        const genresArray = Array.isArray(res.data) ? res.data : res.data.data || [];
        setGenresData(genresArray);
      })
      .catch((err) => console.error("Error fetching genres:", err));

    // Fetch songs
    axios
      .get("https://qtify-backend-labs.crio.do/songs")
      .then((res) => setSongsData(res.data))
      .catch((err) => console.error("Error fetching songs:", err));
  }, []);

  const filteredSongs =
    selectedGenre === "all"
      ? songsData
      : songsData.filter((song) => song.genre?.key === selectedGenre);

  const items = filteredSongs.map((song, index) => (
    <Card key={index} album={song} isSong={true} />
  ));

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h3>Songs</h3>
      </div>

      {/* Tabs */}
      <Tabs
        value={selectedGenre}
        onChange={(e, newValue) => setSelectedGenre(newValue)}
        variant="scrollable"
        scrollButtons="auto"
       sx={{
    '& .MuiTab-root': {
      color: 'white',
      textTransform: 'none',
      fontWeight: 500,
      fontSize: '16px',
    },
    '& .Mui-selected': {
      color: 'white',
    },
    '& .MuiTabs-indicator': {
      backgroundColor: '#34c94b',
      height: 3,
      borderRadius: '2px 2px 0 0',
    },
  }}
      >
        <Tab key="all" value="all" label="All" />
        {genresData.map((genre) => (
          <Tab key={genre.key} value={genre.key} label={genre.label} />
        ))}
      </Tabs>

      {/* Carousel */}
      <div className={styles.carouselWrapper}>
        <AliceCarousel
          mouseTracking
          items={items}
          disableDotsControls
          disableButtonsControls
          ref={carouselRef}
          stagePadding={{ left: 0, right: 0 }}
          responsive={{
            0: { items: 2 },
            512: { items: 4 },
            1024: { items: 6 },
            1440: { items: 7 },
          }}
        />

        {/* Prev / Next buttons */}
        <button
          className={`${styles.navButton} ${styles.prevButton}`}
          onClick={() => carouselRef.current?.slidePrev()}
        >
          <img src={prevIcon} alt="Previous" />
        </button>
        <button
          className={`${styles.navButton} ${styles.nextButton}`}
          onClick={() => carouselRef.current?.slideNext()}
        >
          <img src={nextIcon} alt="Next" />
        </button>
      </div>
    </div>
  );
}

export default SongsSection;
