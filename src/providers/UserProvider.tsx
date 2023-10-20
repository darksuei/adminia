"use client";
import { UserContext } from "@/contexts";
import { useState } from "react";
import Cookies from "js-cookie";

type Params = {
  children: React.ReactNode;
};
export default function UserProvider({ children }: Params) {
  const [user, setUser] = useState<any>(UserContext);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
