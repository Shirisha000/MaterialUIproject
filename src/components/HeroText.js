import { Box, Typography } from "@mui/material";
import React from "react";
import HeroDivider from "./HeroDivider";

const HeroText = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "400px",
      }}
    >
      <Box>
        <HeroDivider />
      </Box>
      {/* <Typography variant="h4" fontWeight="500">
        Post Graduate Programme in Data Science.
      </Typography> */}
    </Box>
  );
};

export default HeroText;
