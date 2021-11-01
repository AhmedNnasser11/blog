import { useState } from "react";
import DropDown from "./DropDown/DropDown";
import Drawer from "../Drawer/Drawer";
import {
  CustomLink,
  LinksContainer,
  LinksName,
  Logo,
  NavbarContainer,
  SearchAndCart,
  SearchContainer,
  CustomInput,
  CustomCart,
  CustomContainer,
  CustomSearch,
  CustomIconButton,
  DropDownContainer,
  CustomMenu,
  CustomIconMenuButton,
  CustomClose,
} from "./NavbarStyle";
import { SidebarData } from "./sidebarData";

const Navbar = () => {
  const [focus, setFocus] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <NavbarContainer>
      <CustomContainer maxWidth="xl">
        <Logo>Blogar</Logo>
        <Drawer openMenu={openMenu} />
        <LinksContainer>
          {SidebarData.map((item, index) => (
            <LinksName key={index}>
              <CustomLink to={item.path}>{item.title}</CustomLink>
              {item.subNav ? (
                <DropDownContainer>
                  {item.subNav.map((ele, index) => (
                    <DropDown
                      key={index}
                      title={ele.title}
                      navigate={ele.path}
                    />
                  ))}
                </DropDownContainer>
              ) : null}
            </LinksName>
          ))}
        </LinksContainer>
        <SearchAndCart>
          <SearchContainer focus={focus}>
            <CustomSearch />
            <CustomInput
              type="search"
              placeholder={!focus ? "Search" : ""}
              onFocus={() => setFocus(true)}
              onBlur={() => setFocus(false)}
            />
          </SearchContainer>
          <CustomIconButton>
            <CustomCart />
          </CustomIconButton>
          <CustomIconMenuButton onClick={() => setOpenMenu(!openMenu)}>
            {!openMenu ? <CustomMenu /> : <CustomClose />}
          </CustomIconMenuButton>
        </SearchAndCart>
      </CustomContainer>
    </NavbarContainer>
  );
};

export default Navbar;
