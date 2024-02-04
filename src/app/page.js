import { Button } from "../components/ui/button";
import { LogInIcon } from "lucide-react";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { authOptions } from "./utils/auth";
import LogoutButton from "../components/ui/LogoutButton";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div>
        <h1 className="text-xl font-bold">Main Content Page</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit?</p>
        <p className="mb-1">Go authenticate and make more special something</p>
        {session ? (
          <LogoutButton/>
        ) : (
          <Link href="/auth">
            <Button variant="secondary">
              <LogInIcon className="mr-2 h-4 w-4" /> Login with Email
            </Button>
          </Link>
        )}
      </div>
    </main>
  );
}
