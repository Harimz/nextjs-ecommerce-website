import { useEffect } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";

export const useUser = ({ redirectTo = "", redirectIfFound = false } = {}) => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data: user, mutate: mutateUser } = useSWR("/api/auth/user", fetcher);

  const router = useRouter();

  useEffect(() => {
    if (!redirectTo || !user) return;

    if (
      (redirectTo && !redirectIfFound && !user?.isLoggedIn) ||
      (redirectIfFound && user?.isLoggedIn)
    ) {
      router.push(redirectTo);
    }
  }, [user, redirectIfFound, redirectTo, router]);

  return { user, mutateUser };
};
