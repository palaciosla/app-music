import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "../pages/Home";
import SongNavigation from "../components/SongNavigation";
import Favourites from "../pages/Favourites";
import DetailsSong from "../pages/DetailsSong";
import axios from "axios";

const SongApp = () => {
  const [search, setSearch] = useState(null);
  const [lyric, setLyric] = useState(null);
  const [artist, setArtist] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState(null);
  const [myFavoritesSong, setMyFavoritesSong] = useState(
    JSON.parse(localStorage.getItem("myFavoritesSongs")) || []
  );

  let navigate = useNavigate();

  const handleSearch = (data) => {
    setErrors(null);
    setArtist(null);
    setLyric(null);
    setSearch(data);
  };

  useEffect(() => {
    if (search === null) return;
    setIsLoading(true);
    let { artist, song } = search;
    let artistURL =
      `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${artist}`.replace(
        / /g,
        "_"
      );
    let songURL = `https://api.lyrics.ovh/v1/${artist}/${song}`.replace(
      / /g,
      "_"
    );

    const getData = async () => {
      try {
        const [resArtist, resSong] = await axios.all([
          axios.get(artistURL),
          axios.get(songURL),
        ]);

        setIsLoading(false);
        setArtist(resArtist);
        setLyric(resSong);
      } catch (error) {
        setErrors(error);
        setArtist(undefined);
        setLyric(undefined);
      }
    };

    getData();
  }, [search]);

  const handleAddFavoritesSong = () => {
    let idFavorite = `${search.artist
      .replace(/ /g, "_")
      .toLowerCase()}${search.song.replace(/ /g, "_").toLowerCase()}`;
    let favoriteSong = {
      idFavorite,
      search,
      lyric,
      image: artist.data.artists[0].strArtistThumb,
      artist,
    };
    setMyFavoritesSong([...myFavoritesSong, favoriteSong]);
  };

  useEffect(() => {
    localStorage.setItem("myFavoritesSongs", JSON.stringify(myFavoritesSong));
  }, [myFavoritesSong]);

  const handleDeleteFavoriteSong = (id, song) => {
    let isDelete = window.confirm(`¿Desea borrar la cancion "${song}"?`);

    if (isDelete) {
      let songs = myFavoritesSong.filter((el) => el.idFavorite !== id);
      console.log(songs);
      setMyFavoritesSong(songs);
      localStorage.setItem("myFavoritesSongs", JSON.stringify(songs));
    }
  };

  const handleOpenFavoriteSong = (song) => {
    setErrors(null);
    navigate("/songdetails");
    setLyric(song.lyric);
    setArtist(song.artist);
  };

  return (
    <>
      <SongNavigation />
      <Routes>
        <Route
          path="/"
          element={
            <Home handleSearch={handleSearch} setIsLoading={setIsLoading} />
          }
        />
        <Route
          path="/songdetails"
          element={
            <DetailsSong
              artist={artist}
              lyric={lyric}
              search={search}
              isLoading={isLoading}
              myFavoritesSong={myFavoritesSong}
              handleAddFavoritesSong={handleAddFavoritesSong}
              errors={errors}
              setErrors={setErrors}
            />
          }
        />
        <Route
          path="/favorite"
          element={
            <Favourites
              myFavoritesSong={myFavoritesSong}
              handleDeleteFavoriteSong={handleDeleteFavoriteSong}
              handleOpenFavoriteSong={handleOpenFavoriteSong}
            />
          }
        />
      </Routes>
    </>
  );
};

export default SongApp;
