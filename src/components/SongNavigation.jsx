import { useNavigate, useLocation } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import SearchIcon from "@mui/icons-material/Search";
import { Paper, BottomNavigationAction, BottomNavigation } from "@mui/material";
import { useEffect, useState } from "react";

const SongNavigation = () => {
  const [value, setValue] = useState("/");

  let location = useLocation();
  let navigate = useNavigate();

  useEffect(() => {
    setValue(location.pathname);
  }, [location]);

  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={5}
    >
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          navigate(`${newValue}`);
        }}
      >
        <BottomNavigationAction
          label="Search"
          icon={<SearchIcon />}
          value="/"
        />
        <BottomNavigationAction
          label="Song"
          icon={<MusicNoteIcon />}
          value="/songdetails"
        />

        <BottomNavigationAction
          label="Favorites"
          icon={<FavoriteIcon />}
          value="/favorite"
        />
      </BottomNavigation>
    </Paper>
  );
};

export default SongNavigation;
