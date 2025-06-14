import { Stack } from "@mui/material";
import React from "react";
import Firstgraph from "./Firstgraph";
import Secondgraph from "./Secondgraph";
import Thirdgraph from "./Thirdgraph";

const Graphdis = () => {
  return (
    <Stack direction="row">
      <Firstgraph />
      <Secondgraph />
      <Thirdgraph />
    </Stack>
  );
};

export default Graphdis;
