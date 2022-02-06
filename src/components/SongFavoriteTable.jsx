import React from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Button
} from "@mui/material";
import SongFavoriteTableRow from "./SongFavoriteTableRow";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import { useNavigate } from "react-router-dom";

const SongFavoriteTable = ({ myFavoritesSong, handleDeleteFavoriteSong, handleOpenFavoriteSong }) => {
  let navigate = useNavigate();
  return (
    <Paper
      sx={{
        width: "auto",
        height: "auto",
        margin: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "#ebefff",
      }}
      elevation={10}
    >
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell colSpan={2} align="center">
              Artist
            </TableCell>
            <TableCell align="center">Song</TableCell>
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {myFavoritesSong.length > 0 ? (
            myFavoritesSong.map((song) => (
              <SongFavoriteTableRow
                song={song}
                key={song.idFavorite}
                handleDeleteFavoriteSong={handleDeleteFavoriteSong}
                handleOpenFavoriteSong={handleOpenFavoriteSong}
              />
            ))
          ) : (
            <TableRow>
              <TableCell
                colSpan={5}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "160%",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                Sin canciones favoritas <SentimentVeryDissatisfiedIcon />
                <Button onClick={() => navigate("/")}>Buscar</Button>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default SongFavoriteTable;
