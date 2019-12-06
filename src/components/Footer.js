import React from "react";
import styled from "@emotion/styled";

//UI imports
import AddIcon from "@material-ui/icons/Add";
import FavoriteIcon from "@material-ui/icons/Favorite";
import NavigationIcon from "@material-ui/icons/Navigation";

//STYLE start
const BottomBar = styled.div`
  position: absolute;
  z-index: 2;
  bottom: 40px;
  width: 80vw;
  display: flex;
  justify-content: space-between;
`;

const MenuButton = styled.button`
  background: #ffe;
  border-radius: 50%;
  font-family: "Source Sans Pro";
  font-weight: bold;
  box-shadow: 2px 11px 22px -6px rgba(0, 0, 0, 0.54);
  font-size: 20px;
  height: 60px;
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0000ff;
  cursor: pointer;
  &:hover {
    color: #ffe;
    background: #0000ff;
  }
`;

export default function Footer() {
  return (
    <BottomBar>
      <MenuButton>
        <AddIcon />
      </MenuButton>
      <MenuButton>
        <FavoriteIcon />
      </MenuButton>
      <MenuButton>
        <NavigationIcon />
      </MenuButton>
    </BottomBar>
  );
}
