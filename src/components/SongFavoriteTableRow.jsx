import React from "react";
import { TableRow, TableCell, Avatar, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";

const SongFavoriteTableRow = ({ song, handleDeleteFavoriteSong, handleOpenFavoriteSong }) => {
  return (
    <TableRow>
      <TableCell>
        <Avatar
          alt={song.artist.data.artists[0].strArtist}
          src={song.artist.data.artists[0].strArtistThumb}
          sx={{ width: 50, height: 50 }}
        />
      </TableCell>
      <TableCell>{song.artist.data.artists[0].strArtist}</TableCell>
      <TableCell sx={{ textTransform: "capitalize" }}>{song.search.song}</TableCell>
      <TableCell>
        <IconButton aria-label="delete" color="secondary" size="small" onClick={() => handleOpenFavoriteSong(song)}>
          <FormatAlignJustifyIcon />
        </IconButton>
        <IconButton
          aria-label="delete"
          color="error"
          size="small"
          onClick={() => handleDeleteFavoriteSong(song.idFavorite, song.search.song)}
        >
          <DeleteIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default SongFavoriteTableRow;
