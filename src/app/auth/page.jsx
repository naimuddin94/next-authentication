import { getServerSession } from "next-auth";
import GithubSignin from "../../components/ui/GithubSignin";
import SigninForm from "../../components/ui/SinginForm";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import React from "react";
import { authOptions } from "../utils/auth";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await getServerSession(authOptions);

  if (session) {
    return redirect("/");
  }
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Card>
        <CardHeader>
          <CardTitle>Please Login ...</CardTitle>
          <CardDescription>
            Welcome to login here and authorize your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SigninForm />
          <GithubSignin />
        </CardContent>
      </Card>
    </div>
  );
};

export default page;
