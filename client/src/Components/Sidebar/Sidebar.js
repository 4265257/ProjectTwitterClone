import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as LogoIcon } from "../../assets/logo.svg";
import styled from "styled-components";
import { FiHome, FiBookmark, FiUser, FiBell } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { COLORS } from "../../constants";

const Sidebar = () => {
  return (
    <>
      <SidebarStyle>
        <LogoIcon style={{ marginTop: 10 }} />
        <NavigationLink to="/">
          <FiHome
            size={40}
            style={{ marginRight: 10, marginTop: 10, marginLeft: 30 }}
          />
          Home
        </NavigationLink>
        <NavigationLink to="/treasurymog">
          <FiUser
            size={40}
            style={{ marginRight: 10, marginTop: 10, marginLeft: 30 }}
          />
          Profile
        </NavigationLink>
        <NavigationLink to="/notification">
          <FiBell
            size={40}
            style={{ marginRight: 10, marginTop: 10, marginLeft: 30 }}
          />
          Notifications
        </NavigationLink>
        <NavigationLink to="/bookmarks">
          <FiBookmark
            size={40}
            style={{ marginRight: 10, marginTop: 10, marginLeft: 30 }}
          />
          Bookmarks
        </NavigationLink>
      </SidebarStyle>

    </>
  );
};
const SidebarStyle = styled.div`
  font-size: 15px;
  display: flex;
  flex-direction: column;
  margin-left: 5%;
  margin-right: 30px;
`;
const NavigationLink = styled(NavLink)`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
  font-weight: bold;
  color: black;

  &.active {
    color: ${COLORS.primary};
  }
`;


export default Sidebar;
