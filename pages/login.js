import React from "react";
import { FormContainer, Heading, Text } from "../elements";
import { RiLoginCircleLine } from "react-icons/ri";
import Link from "next/link";
import LoginForm from "../components/login-form";
import Head from "next/head";
import { withIronSessionSsr } from "iron-session/next";
import { sessionOptions } from "../lib/session";

const LoginPage = () => {
  return (
    <FormContainer>
      <Head>
        <title>Log In</title>
        <meta
          name="description"
          content="Already have an account? Log in now"
        />
      </Head>
      <RiLoginCircleLine className="icon" />
      <Heading fw="800">Login to your account</Heading>
      <Text>
        Or <Link href="/signup">signup for an account</Link>
      </Text>
      <LoginForm />
    </FormContainer>
  );
};

export const getServerSideProps = withIronSessionSsr(async function ({
  req,
  res,
}) {
  const user = req.session.user;

  if (user) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
},
sessionOptions);

export default LoginPage;
