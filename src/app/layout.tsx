import "./globals.css";
import type { Metadata } from "next";
import { Chakra_Petch, Pacifico } from "next/font/google";
import UserProvider from "@/providers/UserProvider";
import Nav from "./components/Nav";

const chakra = Chakra_Petch({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

const pacifico = Pacifico({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Adminia",
  description: "Generic admin dashboard for your next project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={chakra.className}>
        <Nav isNotLoggedIn={true} cursive={pacifico} />
        <UserProvider>{children}</UserProvider>
      </body>
    </html>
  );
}
