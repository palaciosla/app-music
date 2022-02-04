import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "../pages/Home";
import { SearchOffOutlined } from "@mui/icons-material";
import { Paper, BottomNavigationAction, BottomNavigation } from "@mui/material";
import Favourites from "../pages/Favourites";
import DetailsSong from "../pages/DetailsSong";

const SongNavigation = () => {
  let navigate = useNavigate();

  return (
    <>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={5}
      >
        <BottomNavigation
          showLabels
          onChange={(event, newValue) => {
            navigate(`${newValue}`);
          }}
        >
          <BottomNavigationAction
            label="Buscar"
            icon={<SearchOffOutlined />}
            value="/"
          />
          <BottomNavigationAction
            label="Song"
            icon={<SearchOffOutlined />}
            value="/songdetails"
          />

          <BottomNavigationAction
            label="Favorites"
            icon={<SearchOffOutlined />}
            value="/favourite"
          />
        </BottomNavigation>
      </Paper>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favourite" element={<Favourites />} />
        <Route path="/songdetails" element={<DetailsSong />} />
      </Routes>
    </>
  );
};

export default SongNavigation;
