import React, { useState } from "react";
import SongForm from "../components/SongForm";

const Home = () => {
  const [search, setSearch] = useState(null);
  const [lyric, setLyric] = useState(null);
  const [bio, setBio] = useState(null);

  const handleSearch = data => {
      setSearch(data)
  }

  return <SongForm handleSearch={handleSearch} />;
};

export default Home;
