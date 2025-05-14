"use client";

import {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
  useMemo,
} from "react";
import Cookies from "js-cookie";
import { useQuery } from "@tanstack/react-query";

const fetchUserDetails = async () => {
  const res = await fetch("/api/user/me");
  if (!res.ok) {
    throw new Error("Failed to fetch user");
  }
  return res.json();
};

export interface User {
  name: string;
  username: string;
  email: string;
  role: string;
  profileImage: string;
  isLoggedIn: boolean;
}

interface AppUserContextType {
  user: User | null;
  setUser: (user: User) => void;
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
}

const AppUserContext = createContext<AppUserContextType | undefined>(undefined);

export const AppUserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const token = Cookies.get("token");

  const { data, isSuccess } = useQuery({
    queryKey: ["user"],
    queryFn: fetchUserDetails,
    enabled: !!token,
    staleTime: 60 * 60 * 1000,
  });

  useEffect(() => {
    if (isSuccess && data) {
      setUser(data);
      setIsLoggedIn(true);
    }
  }, [isSuccess, data]);

  const value = useMemo(
    () => ({
      user,
      setUser,
      isLoggedIn,
      setIsLoggedIn,
    }),
    [user, isLoggedIn]
  );

  return (
    <AppUserContext.Provider value={value}>{children}</AppUserContext.Provider>
  );
};

export const useAppUserContext = () => {
  const context = useContext(AppUserContext);
  if (!context) {
    throw new Error("useAppUserContext must be used within an AppUserProvider");
  }
  return context;
};
