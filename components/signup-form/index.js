import React from "react";
import { FaLock, FaUserAlt } from "react-icons/fa";
import { HiAtSymbol } from "react-icons/hi";
import {
  Input,
  InputContainer,
  InputFieldContainer,
  InputHeading,
  PrimaryBtn,
} from "../../elements";

const SignupForm = () => {
  return (
    <>
      <form>
        <InputFieldContainer>
          <InputHeading>Name</InputHeading>
          <InputContainer w="100%">
            <FaUserAlt className="input-icon" />
            <Input placeholder="John Doe" />
          </InputContainer>
        </InputFieldContainer>

        <InputFieldContainer>
          <InputHeading>Email</InputHeading>
          <InputContainer w="100%">
            <HiAtSymbol className="input-icon" />
            <Input placeholder="johndoe@example.com" />
          </InputContainer>
        </InputFieldContainer>

        <InputFieldContainer>
          <InputHeading>Password</InputHeading>
          <InputContainer w="100%">
            <FaLock className="input-icon" />
            <Input type="password" placeholder="Password" />
          </InputContainer>
        </InputFieldContainer>

        <InputFieldContainer>
          <InputHeading>Confirm Password</InputHeading>
          <InputContainer w="100%">
            <FaLock className="input-icon" />
            <Input type="password" placeholder="Confirm Password" />
          </InputContainer>
        </InputFieldContainer>

        <PrimaryBtn m="0 0 1rem 0">Sign Up</PrimaryBtn>
      </form>
    </>
  );
};

export default SignupForm;
