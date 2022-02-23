import React from "react";
import { FormContainer, Heading, Text } from "../elements";
import { RiLoginCircleLine } from "react-icons/ri";
import Link from "next/link";
import LoginForm from "../components/login-form";
import { getSession } from "next-auth/react";
import Head from "next/head";

const LoginPage = ({ session }) => {
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

export const getServerSideProps = async (context) => {
  const session = await getSession({ req: context.req });

  if (session) {
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
};

export default LoginPage;
