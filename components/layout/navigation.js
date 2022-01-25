import React, { useState } from "react";
import Link from "next/link";
import { Container } from "../../elements";
import { Heading } from "../../elements/headings";
import { FaBars, FaSearch } from "react-icons/fa";
import {
  AuthContainer,
  AuthLink,
  MenuButton,
  MenuButtonBurger,
  NavWrapper,
  SearchContainer,
  SearchInput,
} from "./styles/nav-styles";
import MobileNav from "./mobile-nav";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Container>
      <NavWrapper>
        <Link passHref href="/">
          <Heading cursor="pointer">Shigeo</Heading>
        </Link>

        <SearchContainer>
          <FaSearch className="search" />
          <SearchInput />
        </SearchContainer>

        <AuthContainer gap="5rem">
          <Link passHref href="/login">
            <AuthLink>Login</AuthLink>
          </Link>
          <Link passHref href="/signup">
            <AuthLink>Signup</AuthLink>
          </Link>
        </AuthContainer>

        <MenuButton onClick={() => setMenuOpen((state) => !state)}>
          <MenuButtonBurger isOpen={menuOpen} />
        </MenuButton>
      </NavWrapper>

      <MobileNav menuOpen={menuOpen} setIsOpen={setMenuOpen} />
    </Container>
  );
};

export default Navigation;
