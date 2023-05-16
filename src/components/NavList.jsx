import React from "react";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { Link } from "react-router-dom";

const NavList = () => {
  const navList = [
    { id: 1, name: "Notes", icon: <LightbulbOutlinedIcon />, route: "/" },
    {
      id: 2,
      name: "Archive",
      icon: <ArchiveOutlinedIcon />,
      route: "/archive",
    },
    { id: 3, name: "Bin", icon: <DeleteOutlinedIcon />, route: "/delete" },
  ];
  return (
    <List>
      {navList.map((list) => (
        <ListItem button key={list.id}>
          <Link
            to={list.route}
            style={{
              textDecoration: "none",
              display: "flex",
              color: "inherit",
            }}
          >
            <ListItemIcon style={{ alignItems: "center" }}>
              {list.icon}
            </ListItemIcon>
            <ListItemText primary={list.name} />
          </Link>
        </ListItem>
      ))}
    </List>
  );
};

export default NavList;
