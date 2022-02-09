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

export default SignUpPage;
