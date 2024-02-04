import { Button } from "@/components/ui/button";
import { LogInIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div>
        <h1 className="text-xl font-bold">Main Content Page</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit?</p>
        <p className="mt-3 mb-1">Go authenticate and make more special something</p>
        <Link href="/auth">
          <Button variant="secondary">
            <LogInIcon className="mr-2 h-4 w-4" /> Login with Email
          </Button>
        </Link>
      </div>
    </main>
  );
}
