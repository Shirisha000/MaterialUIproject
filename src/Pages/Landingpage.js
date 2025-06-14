import React from "react";

import Navbar from "../components/Navbar";
import Herosection from "../components/Herosection";
import Accordioncom from "../components/Accordioncom";
import Cardsdisplay from "../components/Cardsdisplay";
import MainTab from "../components/Tables/MainTab";
import Graphdis from "../components/Graphsec/Graphdis";
import { Container } from "@mui/material";

const Landingpage = ({ mode, setmode }) => {
  return (
    <div>
      <Container>
        <Navbar mode={mode} setmode={setmode} />
        <Herosection />
        <Accordioncom />
        <Cardsdisplay />
        <MainTab />
        <Graphdis />
      </Container>
    </div>
  );
};

export default Landingpage;
