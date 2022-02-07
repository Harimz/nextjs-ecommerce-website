import Link from "next/link";
import React from "react";
import { FooterContainer, Heading, Text } from "../../elements";
import {
  FooterWrapper,
  List,
  ListItem,
  ListLink,
} from "./styles/footer-styles";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <List>
          <ListItem>
            <Heading color="white">Shigeo</Heading>
          </ListItem>
          <ListItem>
            <Text>
              Latest electronic products, accessories, laptops and more
            </Text>
          </ListItem>
        </List>

        <List>
          <ListItem>
            <Heading color="white">Links</Heading>
          </ListItem>
          <ListItem>
            <Link passHref href="/">
              <ListLink>Home</ListLink>
            </Link>
          </ListItem>
          <ListItem>
            <Link passHref href="/profile">
              <ListLink>My Account</ListLink>
            </Link>
          </ListItem>
        </List>

        <List>
          <ListItem>
            <Heading color="white">Popular Categories</Heading>
          </ListItem>
          <ListItem>
            <Link passHref href="/categories/laptops">
              <ListLink>Laptops</ListLink>
            </Link>
          </ListItem>
          <ListItem>
            <Link passHref href="/categories/consoles">
              <ListLink>Consoles</ListLink>
            </Link>
          </ListItem>
          <ListItem>
            <Link passHref href="/categories/accessories">
              <ListLink>Accessories</ListLink>
            </Link>
          </ListItem>
        </List>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
