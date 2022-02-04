import React, { useState } from "react";
import Container from "@mui/material/Container";
import FormControl from "@mui/material/FormControl";
import { TextField, Paper, Button, Stack } from "@mui/material";
import { SearchOutlined } from "@mui/icons-material";

let initialForm = {
  artist: "",
  song: "",
};

const SongForm = ({ handleSearch }) => {
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    console.log("funciona");
    e.preventDefault();
    // setForm({
    //     ...form,
    //     [e.target.name]: e.target.value
    // })
  };

  return (
    <Container sx={{ display: "flex", minHeight: "90vh", width: "100%" }}>
      <Paper
        sx={{
          width: "auto",
          height: "auto",
          margin: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        elevation={3}
      >
        {" "}
        <form onSubmit={handleSubmit}>
          <FormControl sx={{ padding: 5 }}>
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
                color="secondary"
                endIcon={<SearchOutlined />}
                margin="dense"
              >
                Buscar
              </Button>
            </Stack>
          </FormControl>
        </form>
      </Paper>
    </Container>
  );
};

export default SongForm;
