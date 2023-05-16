import { Card, CardActions, CardContent, Typography } from "@mui/material";
import React from "react";
import {
  RestoreFromTrashOutlined as Restore,
  DeleteForeverOutlined as Delete,
} from "@mui/icons-material";
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

const DeleteNote = ({ note }) => {
  const { setNotes, deletedNotes, setDeletedNotes } = useContext(DataContext);

  const restoreNote = (note) => {
    const updatedNotes = deletedNotes.filter((data) => data.id !== note.id);
    setDeletedNotes(updatedNotes);
    setNotes((prevArr) => [note, ...prevArr]);
  };

  const removeNotes = (note) => {
    const noteIndex = deletedNotes.findIndex((data) => data.id === note.id);
    if (noteIndex !== -1) {
      const updatedNotes = [...deletedNotes];
      updatedNotes.splice(noteIndex, 1);
      setDeletedNotes(updatedNotes);
    }
  };

  return (
    <StyledCard key={note.id}>
      <CardContent>
        <Typography>{note.heading}</Typography>
        <Typography>{note.text}</Typography>
      </CardContent>
      <CardActions>
        <Delete
          fontSize="x-small"
          onClick={() => removeNotes(note)}
          style={{ marginLeft: "auto" }}
        />
        <Restore fontSize="x-small" onClick={() => restoreNote(note)} />
      </CardActions>
    </StyledCard>
  );
};

export default DeleteNote;
