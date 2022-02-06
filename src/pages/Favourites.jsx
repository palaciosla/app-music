import React from "react";
import { Container } from "@mui/material";
import SongFavoriteTable from "../components/SongFavoriteTable";

const Favourites = ({myFavoritesSong, handleDeleteFavoriteSong, handleOpenFavoriteSong}) => {
  return (
    <Container sx={{ display: "flex", minHeight: "80vh", width: "100%" }}>
      <SongFavoriteTable myFavoritesSong={myFavoritesSong} handleDeleteFavoriteSong={handleDeleteFavoriteSong}
      handleOpenFavoriteSong={handleOpenFavoriteSong} />
    </Container>
  );
};

export default Favourites;
