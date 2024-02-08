import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {
  LoginLink,
  LogoutLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { Button } from "@/components/ui/button";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Phnom Penh Digital University",
  description: "In progress...",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { getUser, isAuthenticated } = getKindeServerSession();
  const user = await getUser();
  const isAuthed = await isAuthenticated();

  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="flex justify-between items-center py-8 px-24">
          <h1 className="font-bold text-2xl">Phnom Penh Digital University</h1>
          {isAuthed ? (
            <div className="flex justify-between items-center gap-4 font-normal">
              {user?.picture ? (
                <Image
                  className="rounded-full"
                  src={user?.picture}
                  width={45}
                  height={45}
                  alt="user profile avatar"
                />
              ) : null}
              <div>
                <p className="text-xl">
                  {user?.given_name} {user?.family_name}
                </p>
              </div>
              <LogoutLink>
                <Button className="font-normal">Logout</Button>
              </LogoutLink>
            </div>
          ) : (
            <div className="flex gap-2">
              <LoginLink>
                <Button variant={"default"}>Login</Button>
              </LoginLink>
              <RegisterLink>
                <Button variant={"ghost"}>Register</Button>
              </RegisterLink>
            </div>
          )}
        </nav>
        {children}
      </body>
    </html>
  );
}
