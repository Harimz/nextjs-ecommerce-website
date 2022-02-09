import React, { useState } from "react";
import axios from "axios";
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

const SignupForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm(signupOptions);
  const [userCreated, setUserCreated] = useState(false);

  const submitHandler = async (user) => {
    try {
      const { data } = await axios.post("/api/users/register", user, {
        headers: { "Content-Type": "application/json" },
      });

      setUserCreated(true);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      {userCreated && "User Created!"}
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
