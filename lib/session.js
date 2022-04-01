export const sessionOptions = {
  password: process.env.SECRET_COOKIE_PASSWORD,
  cookieName: "iron-auth-session",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
};
