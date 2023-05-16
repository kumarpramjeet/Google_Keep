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

const Note = ({ note }) => {
  const { notes, setNotes, setArchiveNotes, setDeletedNotes } =
    useContext(DataContext);

  const archiveNote = () => {
    const updatedNotes = notes.filter((data) => data.id !== note.id);
    setNotes(updatedNotes);
    setArchiveNotes((prevArr) => [note, ...prevArr]);
  };
  const deleteNote = () => {
    const updatedNotes = notes.filter((data) => data.id !== note.id);
    setNotes(updatedNotes);
    setDeletedNotes((prevArr) => [note, ...prevArr]);
  };

  return (
    <StyledCard key={note.id}>
      <CardContent>
        <Typography>{note.heading}</Typography>
        <Typography>{note.text}</Typography>
      </CardContent>
      <CardActions>
        <ArchiveOutlinedIcon
          fontSize="x-small"
          style={{ marginLeft: "auto" }}
          onClick={() => archiveNote(note)}
        />
        <DeleteOutlinedIcon
          fontSize="x-small"
          onClick={() => deleteNote(note)}
        />
      </CardActions>
    </StyledCard>
  );
};

export default Note;
