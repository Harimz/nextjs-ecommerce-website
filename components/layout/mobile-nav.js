import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import {
  AuthContainer,
  Backdrop,
  Menu,
  MenuHeader,
  NavList,
  SubAuthLink,
  SubMenu,
} from "./styles/mobile-nav-styles";
import { CATEGORIES } from "../../constants";
import {
  FaLongArrowAltRight,
  FaLongArrowAltDown,
  FaSearch,
} from "react-icons/fa";
import { AuthLink } from "./styles/nav-styles";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import Link from "next/link";
import {
  InputContainer,
  PrimaryBtn,
  TransparentBtn,
  Input,
} from "../../elements";
import { backdropVariants, menuVariants } from "../../utils";
import { useUser } from "../../hooks/useUser";

const MobileNav = ({ menuOpen }) => {
  const [moreDetails, setMoreDetails] = useState(-1);
  const { user } = useUser();

  return (
    <AnimatePresence>
      {menuOpen && (
        <Backdrop
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <Menu variants={menuVariants}>
            <NavList>
              {CATEGORIES.map((category, i) => (
                <li key={i}>
                  <MenuHeader>
                    {moreDetails !== i && (
                      <FaLongArrowAltRight onClick={() => setMoreDetails(i)} />
                    )}
                    {moreDetails === i && (
                      <FaLongArrowAltDown onClick={() => setMoreDetails(-1)} />
                    )}
                    <Link
                      passHref
                      href={`/categories/${category.name.toLowerCase()}`}
                    >
                      <AuthLink>{category.name}</AuthLink>
                    </Link>
                  </MenuHeader>

                  {moreDetails === i && (
                    <SubMenu>
                      {category.subCategories.map((item, i) => (
                        <li key={i + 1}>
                          <MdCheckBoxOutlineBlank className="square" />
                          <Link
                            passHref
                            href={`/categories/${category.name.toLowerCase()}/${item.toLowerCase()}`}
                          >
                            <SubAuthLink>{item}</SubAuthLink>
                          </Link>
                        </li>
                      ))}
                    </SubMenu>
                  )}
                </li>
              ))}
            </NavList>

            <InputContainer w="100%">
              <FaSearch className="input-icon" />
              <Input />
            </InputContainer>

            {!user?.isLoggedIn && (
              <AuthContainer>
                <TransparentBtn>Login</TransparentBtn>
                <PrimaryBtn>Sign Up</PrimaryBtn>
              </AuthContainer>
            )}

            {user?.isLoggedIn && (
              <AuthContainer>
                <TransparentBtn>Profile</TransparentBtn>
                <PrimaryBtn>Logout</PrimaryBtn>
              </AuthContainer>
            )}
          </Menu>
        </Backdrop>
      )}
    </AnimatePresence>
  );
};

export default MobileNav;
