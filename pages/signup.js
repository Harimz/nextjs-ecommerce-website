import { getSession } from "next-auth/react";
import React from "react";
import { RiLoginCircleLine } from "react-icons/ri";
import SignupForm from "../components/signup-form";
import { FormContainer, Heading, Text } from "../elements";

const SignUpPage = () => {
  return (
    <FormContainer>
      <RiLoginCircleLine className="icon" />
      <Heading fw="800">Signup for an account</Heading>
      <SignupForm />
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

export default SignUpPage;
