import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const signupSchema = Yup.object({
  name: Yup.string()
    .required("Name is required")
    .min(1, "name must exceed 1 character")
    .max(15, "name must not exceed 15 characters"),
  email: Yup.string().required("Email is required").email("Email is invalid"),
  password: Yup.string()
    .required("Password is required")
    .min(5, "Must be over 5 characters!")
    .max(25, "Must be less than 25 characters!"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match!")
    .required("Confirm password is required!"),
});

const loginSchema = Yup.object({
  email: Yup.string().required("Email is required").email("Email is invalid"),
  password: Yup.string().required("Password is required"),
});

export const signupOptions = { resolver: yupResolver(signupSchema) };

export const loginOptions = { resolver: yupResolver(loginSchema) };
