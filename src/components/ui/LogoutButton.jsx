"use client";
import React from "react";
import { Button } from "./button";
import { signOut } from "next-auth/react";

const LogoutButton = () => {
  return (
    <Button
      onClick={() => signOut({ callbackUrl: `${window.location.origin}/auth` })}
      variant="secondary"
    >
      Logout
    </Button>
  );
};

export default LogoutButton;
