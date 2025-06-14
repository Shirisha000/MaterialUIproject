import { Stack } from "@mui/material";
import React from "react";
import Lastcard from "./LastCard";
//import FirstCard from "./FirstCard";
import Secondcard from "./Secondcard";
import Thirdcard from "./Thirdcard";

const Cardsdisplay = () => {
  return (
    <Stack
      direction="row"
      gap={3}
      m={4}
      justifyContent="space-between"
      sx={{ display: { xs: "block", md: "flex", lg: "flex" } }}
    >
      <Secondcard />
      <Lastcard />
      <Thirdcard />
    </Stack>
  );
};

export default Cardsdisplay;
