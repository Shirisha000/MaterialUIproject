import * as React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
export default function HeroDivider() {
  return (
    <Card
      variant="outlined"
      sx={{
        maxWidth: 660,
        height: 300,
        height: { xs: 500, md: 300 },
        margin: { xs: "20px" },
      }}
    >
      <Box sx={{ p: 2 }}>
        <Stack
          direction="row"
          sx={{ justifyContent: "space-between", alignItems: "center" }}
        >
          <Typography
            gutterBottom
            variant="h4"
            component="div"
            fontWeight="500"
          >
            Learn AI Development
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            <ShareOutlinedIcon />
          </Typography>
        </Stack>
        <Typography
          variant="h3"
          fontWeight="500"
          sx={{
            backgroundImage:
              "linear-gradient(to right, #121FCF 0%, #CF1512 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            fontSize: { xs: "2rem", md: "2.2rem", sm: "3rem", lg: "3rem" },
          }}
        >
          Post Graduate Programme in Data Science.
        </Typography>
      </Box>
      <Divider />
      <Box sx={{ p: 2 }}>
        <Typography gutterBottom variant="body2"></Typography>
        <Stack direction="row" spacing={2}>
          <Chip color="primary" label="Download" size="large" />
          <Chip color="warning" label="Apply Now" size="large" />
          <Chip label="Login Now" size="large" />
        </Stack>
      </Box>
    </Card>
  );
}
