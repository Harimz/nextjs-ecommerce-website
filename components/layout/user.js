import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  FaShoppingCart,
  FaUserAlt,
  FaHeart,
  FaShoppingBag,
} from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import {
  CartIcon,
  ItemCount,
  OptionsItem,
  UserContainer,
  UserImage,
  UserMenu,
  UserOptions,
} from "./styles/user-styles";
import { Heading } from "../../elements";
import Link from "next/link";
import { userMenuVariants } from "../../utils";
import { AnimatePresence } from "framer-motion";
import { useUser } from "../../hooks/useUser";
import axios from "axios";
import { useRouter } from "next/router";
import Cart from "../cart";
import { useScrollDirection } from "../../hooks";

const User = () => {
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const { mutateUser } = useUser();
  const router = useRouter();
  const { scrollDirection } = useScrollDirection();
  const ref = useRef();

  const logoutHandler = async () => {
    mutateUser(await axios.post("/api/auth/logout"), false);
    router.push("/");
  };

  useEffect(() => {
    if (scrollDirection === "DOWN") {
      setProfileMenuOpen(false);
    }

    const checkIfClickedOutside = (e) => {
      if (profileMenuOpen && ref.current && !ref.current.contains(e.target)) {
        setProfileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [scrollDirection, profileMenuOpen]);

  useEffect(() => {
    if (profileMenuOpen) {
      setProfileMenuOpen(!profileMenuOpen);
    }
  }, [router.asPath]);

  return (
    <UserContainer>
      <Cart />

      <UserMenu>
        <UserImage onClick={() => setProfileMenuOpen((state) => !state)}>
          <Image
            src="/images/user/default-profile.png"
            alt="user-image"
            layout="fill"
          />
        </UserImage>

        <AnimatePresence>
          {profileMenuOpen && (
            <UserOptions
              variants={userMenuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              ref={ref}
            >
              <Link href="/user/profile" passHref>
                <OptionsItem>
                  <FaUserAlt className="options-icon" />
                  <Heading size="0.75rem">Profile</Heading>
                </OptionsItem>
              </Link>
              <Link href="/user/wishlist" passHref>
                <OptionsItem>
                  <FaHeart className="options-icon" />
                  <Heading size="0.75rem">Wishlist</Heading>
                </OptionsItem>
              </Link>
              <Link href="/user/history" passHref>
                <OptionsItem>
                  <FaShoppingBag className="options-icon" />
                  <Heading size="0.75rem">Purchase History</Heading>
                </OptionsItem>
              </Link>
              <OptionsItem onClick={logoutHandler}>
                <BiLogOut className="options-icon" />
                <Heading size="0.75rem">Logout</Heading>
              </OptionsItem>
            </UserOptions>
          )}
        </AnimatePresence>
      </UserMenu>
    </UserContainer>
  );
};

export default User;
