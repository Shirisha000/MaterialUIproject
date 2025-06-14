import "./styles.css";
import { Box, Container, createTheme, ThemeProvider } from "@mui/material";
import Landingpage from "./Pages/Landingpage";
import { useState } from "react";

export default function App() {
  const [mode, setmode] = useState("dark");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"}>
        <Landingpage mode={mode} setmode={setmode} />
      </Box>
    </ThemeProvider>
  );
}
