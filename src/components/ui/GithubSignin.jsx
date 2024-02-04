"use client";
import { Github } from "lucide-react";
import React from "react";
import { Button } from "./button";
import { signIn } from "next-auth/react";

const GithubSignin = () => {
  return (
    <Button
      onClick={() =>
        signIn("github", {
          callbackUrl: `${window.location.origin}`,
        })
      }
      className="mt-6 w-full"
    >
      <Github className="w-4 h-4 mr-1" />
      Login with github
    </Button>
  );
};

export default GithubSignin;
