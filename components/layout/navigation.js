import Link from "next/link";
import React from "react";
import { Container, Flex } from "../../elements";
import { Heading } from "../../elements/headings";
import { AuthLink, SearchInput } from "./styles";

const Navigation = () => {
  return (
    <Container>
      <Flex p="2rem" justify="space-between" align="center">
        <Heading>Shigeo</Heading>
        <SearchInput />
        <Flex>
          <Link passHref href="/login">
            <AuthLink>Login</AuthLink>
          </Link>
          <Link passHref href="/signup">
            <AuthLink>Signup</AuthLink>
          </Link>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Navigation;
