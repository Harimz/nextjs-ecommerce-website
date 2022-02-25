import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaLock, FaUserAlt } from "react-icons/fa";
import { HiAtSymbol } from "react-icons/hi";
import {
  ErrorText,
  Form,
  Input,
  InputContainer,
  InputFieldContainer,
  InputHeading,
  PrimaryBtn,
  Spinner,
} from "../../elements";
import { signupOptions } from "../../utils";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { errorMessage } from "../../helpers";
import { signIn, useSession } from "next-auth/react";

const SignupForm = () => {
  const pageLoading = status === "loading";
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm(signupOptions);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const { data: session, status } = useSession();

  if (pageLoading) {
    return <p>Loading...</p>;
  }

  const submitHandler = async (user) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      setLoading(true);

      const { data } = await axios.post(
        "/api/auth/register",
        { name: user.name, email: user.email, password: user.password },
        config
      );

      const result = await signIn("credentials", {
        redirect: false,
        email: user.email,
        password: user.password,
      });

      setLoading(false);

      if (!result.error) {
        router.replace("/");
      }
    } catch (error) {
      setLoading(false);
      toast.error(errorMessage(error), {
        position: "top-center",
      });
    }
  };

  return (
    <>
      <ToastContainer autoClose={5000} />

      <Form onSubmit={handleSubmit(submitHandler)}>
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

        <PrimaryBtn m="0 0 1rem 0" type="submit" w="100%">
          {loading ? <Spinner /> : "Sign Up"}
        </PrimaryBtn>
      </Form>
    </>
  );
};

export default SignupForm;
