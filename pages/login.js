import React from "react";
import { FormContainer, Heading, Text } from "../elements";
import { RiLoginCircleLine } from "react-icons/ri";
import Link from "next/link";
import LoginForm from "../components/login-form";

const LoginPage = () => {
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

export default LoginPage;
