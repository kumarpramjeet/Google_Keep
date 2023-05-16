import React, { useContext } from "react";
import Form from "./Form";
import { Box, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Note from "./Note";
import { DataContext } from "../../context/DataProvider";
import EmptyNotes from "./EmptyNotes";

const DrawerHeader = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

const Notes = () => {
  const { notes } = useContext(DataContext);
  return (
    <Box sx={{ display: "flex" }}>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />

        <Form />
        {notes.length > 0 ? (
          <Grid container>
            {notes.map((note) => (
              <Grid item key={note.id}>
                <Note note={note} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <EmptyNotes />
        )}
      </Box>
    </Box>
  );
};

export default Notes;
