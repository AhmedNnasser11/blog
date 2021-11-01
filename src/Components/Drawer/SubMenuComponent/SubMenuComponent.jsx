import { IconButton } from "@mui/material";
import React, { useState } from "react";
import { CustomLink, DrawerDrop, DrawerLi, LinkContainer } from "../DrawerStyle";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const SubMenuComponent = ({ele, index}) => {
    const [subMenu, setSubMenu] = useState(false)
  return (
    <DrawerLi key={index}>
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
        <DrawerLi key={index}>
          <CustomLink to={ele.path}>{ele.title}</CustomLink>
        </DrawerLi>
      ))}
    </DrawerDrop>
  </DrawerLi>
  );
};

export default SubMenuComponent;
