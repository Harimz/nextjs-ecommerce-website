import React from "react";
import Profile from "../../components/user/profile";
import { Container } from "../../elements";
import { withIronSessionSsr } from "iron-session/next";
import { sessionOptions } from "../../lib/session";

const ProfilePage = ({ user }) => {
  return (
    <Container>
      <Profile user={user} />
    </Container>
  );
};

export const getServerSideProps = withIronSessionSsr(async function ({
  req,
  res,
}) {
  const user = req.session.user;

  if (!user) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      user,
    },
  };
},
sessionOptions);

export default ProfilePage;
