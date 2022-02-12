import React from "react";
import {
  Form,
  InputContainer,
  InputFieldContainer,
  InputHeading,
  PrimaryBtn,
} from "../../elements";
import { HiAtSymbol } from "react-icons/hi";
import { Input } from "../../elements";
import { FaLock } from "react-icons/fa";
import Link from "next/link";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";

const LoginForm = () => {
  const { createdUser } = useSelector((state) => state.userRegister);

  return (
    <>
      <ToastContainer autoClose={5000} />

      <Form>
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
      </Form>
    </>
  );
};

export default LoginForm;
