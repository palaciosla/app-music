import React from "react";
import SongForm from "../components/SongForm";

const Home = ({handleSearch, setIsLoading}) => {
  

  return <SongForm handleSearch={handleSearch} setIsLoading={setIsLoading} />;
};

export default Home;
