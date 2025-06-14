import React from "react";
import { Box } from "@mui/material";
const HeroImg = () => {
  return (
    <Box
      sx={{
        width: "400px",
        flexDirection: "center",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <img
        src="https://e7.pngegg.com/pngimages/37/153/png-clipart-student-student-thumbnail.png"
        alt="studimg"
        style={{ width: "100%" }}
      />
    </Box>
  );
};

export default HeroImg;
