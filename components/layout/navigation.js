import React, { useState } from "react";
import Link from "next/link";
import { Container, InputContainer, Input } from "../../elements";
import { Heading } from "../../elements/headings";
import { FaSearch } from "react-icons/fa";
import {
  AuthContainer,
  AuthLink,
  MenuButton,
  MenuButtonBurger,
  NavWrapper,
} from "./styles/nav-styles";
import MobileNav from "./mobile-nav";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Container>
      <NavWrapper>
        <Link passHref href="/">
          <Heading type="pointer">Shigeo</Heading>
        </Link>

        <InputContainer mobile w="60%">
          <FaSearch className="input-icon" />
          <Input placeholder="Search for a product" />
        </InputContainer>

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
