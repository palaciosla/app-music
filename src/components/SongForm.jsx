import React, { useState } from "react";
import Container from "@mui/material/Container";
import FormControl from "@mui/material/FormControl";
import { TextField, Paper, Button, Stack, Typography, Alert } from "@mui/material";
import { SearchOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

let initialForm = {
  artist: "",
  song: "",
};



const SongForm = ({ handleSearch, setIsLoading }) => {
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState(false);

  let navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!form.artist || !form.song) {
      return setError(true)
    }
    navigate("/songdetails")
    handleSearch(form);
    setForm(initialForm);
  };

  return (
    <Container sx={{ display: "flex", minHeight: "80vh", width: "100%" }}>
      <Paper
        sx={{
          width: "auto",
          height: "auto",
          margin: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "#ebefff"
        }}
        elevation={3}
      >
        {" "}
        <form onSubmit={handleSubmit}>
          <FormControl sx={{ padding: 5 }}>
            <Typography variant="button" color="primary" mb={2} align="center">song finder</Typography>
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              <TextField
                id="artist"
                label="Artist"
                margin="dense"
                name="artist"
                onChange={handleChange}
              />
              <TextField
                id="song"
                label="Song"
                margin="dense"
                name="song"
                onChange={handleChange}
              />
              <Button
                type="submit"
                variant="contained"
                sx={{bgcolor: "#9eadf8"}}
                endIcon={<SearchOutlined />}
                margin="dense"
              >
                Search
              </Button>
            </Stack>
        {error && <Alert severity="error" sx={{marginTop: 5}}>The form must be completed!</Alert>}
          </FormControl>
        </form>
      </Paper>
    </Container>
  );
};

export default SongForm;
