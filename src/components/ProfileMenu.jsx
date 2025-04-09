import React from "react";
import { Avatar, Menu } from "@mantine/core";
import { replace, useNavigate } from "react-router-dom";

const ProfileMenu = ({ user, logout }) => {
  //console.log(user);
  const navigate = useNavigate();
  return (
    <Menu
      trigger="hover"
      openDelay={100}
      closeDelay={400}
      transitionProps={{ transition: "rotate-right", duration: 150 }}
    >
      <Menu.Target>
        <Avatar src={user?.picture} alt="user image" radius={"xl"} />
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Label>Application</Menu.Label>
        <Menu.Item onClick={() => navigate("./favorites", { replace: true })}>
          Favorites
        </Menu.Item>
        <Menu.Item onClick={() => navigate("./bookings", { replace: true })}>
          Bookings
        </Menu.Item>
        <Menu.Label>Go back</Menu.Label>
        <Menu.Item
          onClick={() => {
            localStorage.clear();
            logout();
          }}
          color="red"
        >
          Logout
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default ProfileMenu;
