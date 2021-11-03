import React from "react";
import {
  NavDrawer,
  DrawerUl,
} from "./DrawerStyle";
import { SidebarData } from "../Navabr/sidebarData";
import SubMenuComponent from "./SubMenuComponent/SubMenuComponent";

const Drawer = ({ openMenu }) => {
  return (
    <NavDrawer openMenu={openMenu}>
      <DrawerUl>
        {SidebarData.map((ele, index) => (
          <SubMenuComponent ele={ele} key={index} />
        ))}
      </DrawerUl>
    </NavDrawer>
  );
};

export default Drawer;
