import Image from "next/image";
import React from "react";
import { Heading, PrimaryBtn, Text } from "../../../elements";
import { ProfileContainer, ProfileImage } from "../styles/profile-styles";

const Profile = ({ user }) => {
  return (
    <ProfileContainer>
      <ProfileImage>
        <Image
          src="/images/user/default-profile.png"
          alt="profile-image"
          layout="fill"
        />
      </ProfileImage>
      <Heading size="1.5rem">{user.name}</Heading>
      <Text>{user.email}</Text>
      <PrimaryBtn>Change Password</PrimaryBtn>
    </ProfileContainer>
  );
};

export default Profile;
