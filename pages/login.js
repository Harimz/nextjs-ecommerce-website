import React from "react";
import { FormContainer, Heading, Text } from "../elements";
import { RiLoginCircleLine } from "react-icons/ri";
import Link from "next/link";
import LoginForm from "../components/login-form";
import { getSession } from "next-auth/react";

const LoginPage = ({ session }) => {
  return (
    <FormContainer>
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
