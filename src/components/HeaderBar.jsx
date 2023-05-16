import React from "react";
import { styled } from "@mui/material/styles";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import { Menu } from "@mui/icons-material";
import logo from "./keep.png";

const Header = styled(AppBar)`
  z-index: 1201;
  background: #fff;
  height: 55px;
  box-shadow: inset 0 -1px 0 0 #dadce0;
`;

const Heading = styled(Typography)`
  color: #5f6368;
  font-size: 20px;
  margin-left: 15px;
`;
const HeaderBar = ({ open, handleDrawer }) => {
  return (
    <Header open={open}>
      <Toolbar>
        <IconButton
          onClick={handleDrawer}
          edge="start"
          sx={{
            marginRight: 1,
          }}
        >
          <Menu />
        </IconButton>
        <img src={logo} alt="Google Keep Logo" style={{ width: 25 }} />
        <Heading>Keep</Heading>
      </Toolbar>
    </Header>
  );
};

export default HeaderBar;
