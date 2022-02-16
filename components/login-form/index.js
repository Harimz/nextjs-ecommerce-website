import React, { useState, useEffect } from "react";
import {
  ErrorText,
  Form,
  InputContainer,
  InputFieldContainer,
  InputHeading,
  PrimaryBtn,
  Spinner,
} from "../../elements";
import { HiAtSymbol } from "react-icons/hi";
import { Input } from "../../elements";
import { FaLock } from "react-icons/fa";
import Link from "next/link";
import { ToastContainer } from "react-toastify";
import { useForm } from "react-hook-form";
import { loginOptions } from "../../utils";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useProtectedRoute } from "../../hooks";

const LoginForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm(loginOptions);
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const submitHandler = async (user) => {
    try {
      setLoading(true);
      const result = await signIn("credentials", {
        redirect: false,
        email: user.email,
        password: user.password,
      });

      if (!result.error) {
        setLoading(false);
        router.replace("/");
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <>
      <ToastContainer autoClose={5000} />

      <Form onSubmit={handleSubmit(submitHandler)}>
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

        <PrimaryBtn m="0 0 1rem 0" type="submit">
          {loading ? <Spinner /> : "Sign In"}
        </PrimaryBtn>
        <Link href="/">Forgot your password?</Link>
      </Form>
    </>
  );
};

export default LoginForm;
