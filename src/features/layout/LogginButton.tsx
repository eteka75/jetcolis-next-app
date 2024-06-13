"use client";
import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";

const LogginButton = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {!session && (
        <>
          <button onClick={() => signIn("github")}>Sign in with GitHub</button>
        </>
      )}
      {session != null && (
        <>
          <span>Signed in as {session?.user?.email}</span>

          <button onClick={() => signOut()}>Sign out</button>
        </>
      )}
    </div>
  );
};

export default LogginButton;
