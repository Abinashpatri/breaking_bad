import React, { useEffect, useState } from "react";
import { Box, styled, Grid } from "@mui/material";
import Character from "./Character";

import { fetchData } from "../api";

const Characters = ({ text }) => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getData();
  }, [text]);

  const getData = async () => {
    let response = await fetchData(text);
    setCharacters(response.data);
  };

  return (
    <Box style={{ margin: 20, background: 'black' }}>
      <Grid container spacing={4}>
        {characters.map((character) => (
          <Grid item xs={3}>
            <Character character={character} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Characters;
