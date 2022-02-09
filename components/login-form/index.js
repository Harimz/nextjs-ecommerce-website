import React from "react";
import {
  InputContainer,
  InputFieldContainer,
  InputHeading,
  PrimaryBtn,
  TransparentBtn,
} from "../../elements";
import { HiAtSymbol } from "react-icons/hi";
import { Input } from "../../elements";
import { FaLock } from "react-icons/fa";
import Link from "next/link";

const LoginForm = () => {
  return (
    <>
      <form>
        <InputFieldContainer>
          <InputHeading>Email</InputHeading>
          <InputContainer>
            <HiAtSymbol className="input-icon" />
            <Input placeholder="johndoe@example.com" />
          </InputContainer>
        </InputFieldContainer>

        <InputFieldContainer>
          <InputHeading>Password</InputHeading>
          <InputContainer>
            <FaLock className="input-icon" />
            <Input type="password" placeholder="Password" />
          </InputContainer>
        </InputFieldContainer>

        <PrimaryBtn m="0 0 1rem 0">Sign In</PrimaryBtn>
        <Link href="/">Forgot your password?</Link>
      </form>
    </>
  );
};

export default LoginForm;
