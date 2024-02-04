import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Github, Mail } from "lucide-react";
import React from "react";

const page = () => {
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
          <form action="">
            <Label>Email</Label>
            <Input name="email" placeholder="example@email.com" />
            <Button className="mt-3 w-full" variant="secondary">
              <Mail className="w-4 h-4 mr-1" />
              Login with email
            </Button>
          </form>
          <Button className="mt-6 w-full">
            <Github className="w-4 h-4 mr-1" />
            Login with github
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default page;
