import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  CardHeader,
  Typography,
  CardActions,
  ToggleButton,
  Button,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";

const DetailsSong = ({
  artist,
  lyric,
  search,
  handleAddFavoritesSong,
  myFavoritesSong,
  errors,
  setErrors,
}) => {
  const [selected, setSelected] = useState(false);

  if (artist === null || lyric === null) return <Loader />;

  let lyricInfo;
  let artistInfo;

  let artistSinDatos = {
    strArtist: [search.artist],
    strCountry: "Sin datos",
    strArtistThumb:
      "https://i.pinimg.com/236x/3c/c9/ea/3cc9eadee80494adf4060b0526be6a34.jpg",
  };

  if (lyric) {
    lyricInfo = lyric.data.lyrics;
  }

  if (
    artist === undefined ||
    artist.data.artists === null ||
    artist.data.artists === undefined
  ) {
    artistInfo = artistSinDatos;
  } else {
    artistInfo = artist.data.artists[0];
  }

  let favorite;

  if (!errors) {
    myFavoritesSong.forEach((song) =>
      song.lyric.data.lyrics === lyricInfo
        ? (favorite = true)
        : (favorite = false)
    );
  }

  return (
    <>
      {!errors ? (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "90vh",
            margin: "50px 0",
          }}
        >
          <Card sx={{ maxWidth: 800 }}>
            <CardHeader
              sx={{ textTransform: "capitalize" }}
              title={artistInfo.strArtist || search.artist}
              subheader={`${artistInfo.strCountry || "Sin datos"}
          ${artistInfo.strGenre || "Sin datos"}
          ${artistInfo.intBornYear || "Sin datos"} - ${
                artistInfo.intDiedYear ? artistInfo.intDiedYear : "Presente"
              }
           `}
              action={
                <Button
                  aria-label="settings"
                  href={`https://${artistInfo.strWebsite || null}`}
                  target="_blank"
                >
                  Web Site
                </Button>
              }
            />
            <CardMedia
              component="img"
              alt={artistInfo.strArtist || search.artist}
              height="300"
              image={artistInfo.strArtistThumb || null}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ textTransform: "capitalize" }}
              >
                {search.song || "Sin datos"}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {lyricInfo}
              </Typography>
            </CardContent>
            <CardActions sx={{ display: "flex", justifyContent: "flex-end" }}>
              <ToggleButton
                value="check"
                selected={favorite}
                onChange={() => {
                  if (selected) {
                    return;
                  } else {
                    handleAddFavoritesSong();
                    setSelected(true);
                  }
                }}
                color="error"
                size="large"
                disableElevation
                disabled={favorite ? "disabled" : ""}
              >
                <FavoriteIcon />
              </ToggleButton>
            </CardActions>
          </Card>
        </Box>
      ) : (
        <ErrorMessage errors={errors} search={search} setErrors={setErrors} />
      )}
    </>
  );
};

export default DetailsSong;
