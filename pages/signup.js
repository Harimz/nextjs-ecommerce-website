import React from "react";
import Head from "next/head";
import { RiLoginCircleLine } from "react-icons/ri";
import SignupForm from "../components/signup-form";
import { FormContainer, Heading } from "../elements";
import { withIronSessionSsr } from "iron-session/next";
import { sessionOptions } from "../lib/session";

const SignUpPage = () => {
  return (
    <FormContainer>
      <Head>
        <title>Sign up</title>
        <meta name="description" content="Create you account today" />
      </Head>
      <RiLoginCircleLine className="icon" />
      <Heading fw="800">Signup for an account</Heading>
      <SignupForm />
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

export default SignUpPage;
