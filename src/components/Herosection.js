import React from "react";
import { Box, Stack } from "@mui/material";
import HeroImg from "./HeroImg";
import HeroText from "./HeroText";
//import HeroDivider from "./HeroDivider";
const Herosection = () => {
  return (
    <Stack
      direction="row"
      spacing={2}
      justifyContent="space-between"
      sx={{ display: { xs: "block", sm: "block", md: "flex" } }}
    >
      <Box sx={{ flex: "2" }}>
        <HeroText />
      </Box>
      <Box sx={{ flex: "1" }}>
        <HeroImg />
      </Box>
    </Stack>
  );
};

export default Herosection;
