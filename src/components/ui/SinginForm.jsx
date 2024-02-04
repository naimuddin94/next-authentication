"use client";
import { Mail } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { toast } from "./use-toast";

const SinginForm = () => {
  const [email, setEmail] = useState(null);
  const signInWithEmail = async () => {
    const signResult = await signIn("email", {
      email: email,
      callbackUrl: `${window.location.origin}`,
      redirect: false,
    });

    if (!signResult.ok) {
      return toast({
        title: "Error are happing here",
        description: "Something went wrong here try again letter",
        variant: "destructive",
      });
    }

    return toast({
      title: "Email sent successfully",
      description: "A magic link sent your email",
    });
  };
  return (
    <form action={signInWithEmail}>
      <Label>Email</Label>
      <Input
        onChange={(e) => setEmail(e.target.value)}
        name="email"
        placeholder="example@email.com"
      />
      <Button type="submit" className="mt-3 w-full" variant="secondary">
        <Mail className="w-4 h-4 mr-1" />
        Login with email
      </Button>
    </form>
  );
};

export default SinginForm;
