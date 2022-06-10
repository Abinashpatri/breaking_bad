import React from "react";
import { Card, styled, Tooltip, Typography, Box } from "@mui/material";


const Image = styled("img")({
  height: 300,
  width: "100%",
  objectFit: "cover",
});
const Cardbg = styled(Card)`
background: black;
`

const Character = ({ character }) => {
  return (
    <Cardbg>
      <Tooltip title={
        <Box>
            <Typography> Name: {character.name} </Typography>
            <Typography> Real Name: {character.portrayed} </Typography>
            <Typography> Nickname: {character.nickname} </Typography>
            <Typography> Birthday: {character.birthday} </Typography>
            <Typography> Status {character.status} </Typography>
        </Box>
      }
      arrow placement="top"
      >
        <Image src={character.img} alt="character" />
      </Tooltip>
    </Cardbg>
  );
};

export default Character;
