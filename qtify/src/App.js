import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Section from "./components/Section/Section";
import SongsSection from "./components/SongsSection/SongsSection"; // 👈 import
import axios from "axios";

function App() {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);

  useEffect(() => {
    // Fetch Top Albums
    axios
      .get("https://qtify-backend-labs.crio.do/albums/top")
      .then((res) => {
        setTopAlbums(res.data);
      })
      .catch((err) => console.error("Error fetching top albums:", err));

    // Fetch New Albums
    axios
      .get("https://qtify-backend-labs.crio.do/albums/new")
      .then((res) => {
        setNewAlbums(res.data);
      })
      .catch((err) => console.error("Error fetching new albums:", err));
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <Section title="Top Albums" data={topAlbums} />
      <Section title="New Albums" data={newAlbums} />
      <SongsSection /> {/* 👈 render Songs section here */}
    </div>
  );
}

export default App;
