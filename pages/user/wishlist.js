import React from "react";
import { withIronSessionSsr } from "iron-session/next";
import Wishlist from "../../components/user/wishlist";
import { server } from "../../config";
import { Container } from "../../elements";
import { sessionOptions } from "../../lib/session";

const WishListPage = () => {
  return (
    <Container>
      <Wishlist />
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

export default WishListPage;
