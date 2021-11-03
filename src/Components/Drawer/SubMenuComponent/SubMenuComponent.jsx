import { IconButton } from "@mui/material";
import React, { useState } from "react";
import { CustomLink, DrawerDrop, DrawerLi, DrawerLiItem, LinkContainer } from "../DrawerStyle";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const SubMenuComponent = ({ele}) => {
    const [subMenu, setSubMenu] = useState(false)
  return (
    <DrawerLi>
    <LinkContainer>
      <CustomLink to={ele.path}>{ele.title}</CustomLink>
      {ele.subNav ? (
        <IconButton onClick={() => setSubMenu(!subMenu)}>
          <KeyboardArrowDownIcon />
        </IconButton>
      ) : null}
    </LinkContainer>
    <DrawerDrop subMenu={subMenu}>
      {ele.subNav?.map((ele, index) => (
        <DrawerLiItem key={index}>
          <CustomLink to={ele.path}>{ele.title}</CustomLink>
        </DrawerLiItem>
      ))}
    </DrawerDrop>
  </DrawerLi>
  );
};

export default SubMenuComponent;
