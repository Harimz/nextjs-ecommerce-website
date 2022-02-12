import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaLock, FaUserAlt } from "react-icons/fa";
import { HiAtSymbol } from "react-icons/hi";
import {
  ErrorText,
  Input,
  InputContainer,
  InputFieldContainer,
  InputHeading,
  PrimaryBtn,
} from "../../elements";
import { signupOptions } from "../../utils";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../actions/userActions";

const SignupForm = () => {
  const dispatch = useDispatch();
  const { createdUser } = useSelector((state) => state.userRegister);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm(signupOptions);
  const router = useRouter();

  const submitHandler = async (user) => {
    dispatch(
      registerUser({
        name: user.name,
        email: user.email,
        password: user.password,
      })
    );

    if (createdUser) {
      router.replace("/login");
    }
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <InputFieldContainer>
        <InputHeading>Name</InputHeading>
        <InputContainer className={errors.name && "error"}>
          <FaUserAlt className="input-icon" />
          <Input placeholder="John Doe" {...register("name")} />
        </InputContainer>

        <ErrorText error={errors.name}>{errors.name?.message}</ErrorText>
      </InputFieldContainer>

      <InputFieldContainer>
        <InputHeading>Email</InputHeading>
        <InputContainer className={errors.email && "error"}>
          <HiAtSymbol className="input-icon" />
          <Input placeholder="johndoe@example.com" {...register("email")} />
        </InputContainer>

        <ErrorText error={errors.email}>{errors.email?.message}</ErrorText>
      </InputFieldContainer>

      <InputFieldContainer>
        <InputHeading>Password</InputHeading>
        <InputContainer className={errors.password && "error"}>
          <FaLock className="input-icon" />
          <Input
            type="password"
            placeholder="Password"
            {...register("password")}
          />
        </InputContainer>

        <ErrorText error={errors.password}>
          {errors.password?.message}
        </ErrorText>
      </InputFieldContainer>

      <InputFieldContainer>
        <InputHeading>Confirm Password</InputHeading>
        <InputContainer className={errors.confirmPassword && "error"}>
          <FaLock className="input-icon" />
          <Input
            type="password"
            placeholder="Confirm Password"
            {...register("confirmPassword")}
          />
        </InputContainer>

        <ErrorText error={errors.confirmPassword}>
          {errors.confirmPassword?.message}
        </ErrorText>
      </InputFieldContainer>

      <PrimaryBtn m="0 0 1rem 0" type="submit">
        Sign Up
      </PrimaryBtn>
    </form>
  );
};

export default SignupForm;
