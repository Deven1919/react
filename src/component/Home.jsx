import SwipeDrawer from "./SwipeDrawer";
import Notes from "./Note/Notes";
import { Box } from "@mui/material";
import Form from "./Form";

export default function Home() {
  return (
    <>
      <Box
        sx={{
          // border: "5px solid blue",
          display: "flex",
          // flexDirection: "column",
          // // marginTop: "100px",
          justifyContent: "center",
        }}
      >
        <SwipeDrawer />

        <Notes />
        {/* <DeleteNotes /> */}
      </Box>
    </>
  );
}
