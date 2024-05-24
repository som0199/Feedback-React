import {
  AppBar,
  Avatar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
// import MenuIcon from '@mui/icons-material/Menu';
import RateReviewIcon from "@mui/icons-material/RateReview";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const Navbar = ({ handleTheme, color }) => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="sticky">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <RateReviewIcon />
            </IconButton>
            <Typography
              variant="button"
              color={"ThreeDDarkShadow"}
              component="div"
              sx={{ flexGrow: 1, fontSize: "18px", fontWeight: "bold" }}
            >
              FeedBack Form
            </Typography>
            <Button onClick={handleTheme}>
              <Avatar>
                {color ? <LightModeIcon /> : <DarkModeIcon color="secondary" />}
              </Avatar>
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
