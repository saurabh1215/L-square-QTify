// src/components/Section/Section.jsx
import React, { useRef, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Card from "../Card/Card";
import styles from "./Section.module.css";

import prevIcon from "../../assets/prev.svg";
import nextIcon from "../../assets/next.svg";

function Section({ title, data, showSeeAll = true, isSong = false }) {
  const carouselRef = useRef(null);
  const [showAll, setShowAll] = useState(false);

  // ✅ Defensive mapping
  const items = Array.isArray(data)
    ? data.map((item, index) => (
        <Card key={index} album={item} isSong={isSong} />
      ))
    : [];

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h3>{title}</h3>
        {showSeeAll && (
          <button
            className={styles.seeAllBtn}
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Collapse" : "See All"}
          </button>
        )}
      </div>

      {showAll ? (
        <div className={styles.gridView}>{items}</div>
      ) : (
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
              1440: { items: 7 }, // for big screens
            }}
          />
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
      )}
    </div>
  );
}

export default Section;
