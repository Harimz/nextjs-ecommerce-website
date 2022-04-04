import React, { useState } from "react";
import Link from "next/link";
import { InputContainer, Input } from "../../elements";
import { Heading } from "../../elements/headings";
import { FaSearch } from "react-icons/fa";
import {
  AuthContainer,
  AuthLink,
  MenuButton,
  MenuButtonBurger,
  NavContainer,
  NavWrapper,
} from "./styles/nav-styles";
import MobileNav from "./mobile-nav";
import { useScrollDirection } from "../../hooks";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useUser } from "../../hooks/useUser";
import User from "./user";
import Cart from "../cart";
import { MobileOptions } from "./styles/mobile-nav-styles";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollDirection } = useScrollDirection();
  const scrollingUp = scrollDirection === "UP";
  const [searchInput, setSearchInput] = useState("");
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [menuOpen]);

  const submitHandler = (e) => {
    e.preventDefault();

    router.push({
      pathname: "/search",
      query: { searchQuery: searchInput },
    });
  };

  return (
    <NavContainer scrollingUp={scrollingUp}>
      <NavWrapper>
        <Link passHref href="/">
          <Heading type="pointer">Shigeo</Heading>
        </Link>

        <InputContainer mobile w="60%">
          <form onSubmit={submitHandler}>
            <FaSearch className="input-icon" />
            <Input
              placeholder="Search for a product"
              onChange={({ target }) => setSearchInput(target.value)}
            />
          </form>
        </InputContainer>

        {!user?.isLoggedIn ? (
          <AuthContainer gap="5rem">
            <Link passHref href="/login">
              <AuthLink>Login</AuthLink>
            </Link>
            <Link passHref href="/signup">
              <AuthLink>Signup</AuthLink>
            </Link>
          </AuthContainer>
        ) : (
          <User />
        )}

        <MobileOptions>
          <Cart />
          <MenuButton onClick={() => setMenuOpen((state) => !state)}>
            <MenuButtonBurger isOpen={menuOpen} />
          </MenuButton>
        </MobileOptions>
      </NavWrapper>

      <MobileNav menuOpen={menuOpen} setIsOpen={setMenuOpen} />
    </NavContainer>
  );
};

export default Navigation;
