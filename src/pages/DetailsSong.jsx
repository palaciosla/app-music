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
  setErrors
}) => {
  const [selected, setSelected] = useState(false);

  if (artist === null || lyric === null) return <Loader />;

  let lyricInfo;
  let artistInfo;

  if (artist && lyric) {
    lyricInfo = lyric.data.lyrics;
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
              title={artistInfo.strArtist}
              subheader={`${artistInfo.strCountry}
          ${artistInfo.strGenre}
          ${artistInfo.intBornYear} - ${
                artistInfo.intDiedYear ? artistInfo.intDiedYear : "Presente"
              }
           `}
              action={<Button aria-label="settings">Sitio Oficial</Button>}
            />
            <CardMedia
              component="img"
              alt={artistInfo.strArtist}
              height="300"
              image={artistInfo.strArtistThumb}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ textTransform: "capitalize" }}
              >
                {search.song}
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
        <ErrorMessage errors={errors} search={search} setErrors={setErrors}/>
      )}
    </>
  );
};

export default DetailsSong;
