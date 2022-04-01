import React from "react";
import Image from "next/image";
import { Heading, Text } from "../../elements";
import {
  ContentContainer,
  ProfilePic,
  UserCardContainer,
} from "./styles/user-card-styles";

const UserCard = ({ username, text, user }) => {
  return (
    <UserCardContainer>
      <ProfilePic>
        <Image
          src="/images/user/default-profile.png"
          alt="Default profile picture"
          layout="fill"
        />
      </ProfilePic>
      <ContentContainer>
        <Heading size="1.5rem">{username}</Heading>
        <Text>{text}</Text>
      </ContentContainer>
    </UserCardContainer>
  );
};

export default UserCard;
