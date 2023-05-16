import { Card, CardActions, CardContent, Typography } from "@mui/material";
import React from "react";

import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { useContext } from "react";
import { DataContext } from "../../context/DataProvider";

import { styled } from "@mui/material/styles";
const StyledCard = styled(Card)`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  width: 240px;
  margin: 8px;
  box-shadow: none;
`;

const Archive = ({ archive }) => {
  const { setNotes, archiveNotes, setArchiveNotes, setDeletedNotes } =
    useContext(DataContext);

  const unArchiveNote = () => {
    const updatedNotes = archiveNotes.filter((data) => data.id !== archive.id);
    setArchiveNotes(updatedNotes);
    setNotes((prevArr) => [archive, ...prevArr]);
  };
  const deleteNote = () => {
    const updatedNotes = archiveNotes.filter((data) => data.id !== archive.id);
    setArchiveNotes(updatedNotes);
    setDeletedNotes((prevArr) => [archive, ...prevArr]);
  };

  return (
    <StyledCard>
      <CardContent>
        <Typography>{archive.heading}</Typography>
        <Typography>{archive.text}</Typography>
      </CardContent>
      <CardActions>
        <ArchiveOutlinedIcon
          fontSize="x-small"
          style={{ marginLeft: "auto" }}
          onClick={() => unArchiveNote(archive)}
        />
        <DeleteOutlinedIcon
          fontSize="x-small"
          onClick={() => deleteNote(archive)}
        />
      </CardActions>
    </StyledCard>
  );
};

export default Archive;
