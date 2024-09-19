import React, { useContext } from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { v4 as uuid } from "uuid";
import Grid from "@mui/material/Grid2";
// import Form from "../Form";
import Form from "../Form";
import Note from "./Note";
import { DataContext } from "../../context/DataContext";

//////////////////////////////////////////////////////
const DrawerHeader = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));
export default function Notes() {
  const { notes } = useContext(DataContext);
  // console.log(notes);
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        // border: "2px solid black",
      }}
    >
      <Box
        sx={{
          width: "100%",
          p: 3,
        }}
      >
        <DrawerHeader />

        <Form />
        <Grid container marginTop="16px">
          {notes.map((notes) => (
            <Grid item="true" marginBottom="10px" key={uuid().toString()}>
              <Note key={notes.id} note={notes} />
            </Grid>
          ))}
        </Grid>
        {/* <Note /> */}
      </Box>
    </Box>
  );
}