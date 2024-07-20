import { Button } from "@/components/ui/button";
import { auth } from "@/lib/auth";
import Link from "next/link";
import { SignOut } from "./SignOut";

export default async function Header() {
  const session = await auth();
  return (
    <header className="flex justify-between items-center align-center py-6 px-4 sm:px-6 bg-gray-600 text-white">
      <Link href="/">
        <h1 className="text-3xl font-bold">Taskmaster</h1>
      </Link>
      <div className="flex gap-4 items-center">
        <div className="flex gap-4">{session?.user?.name}</div>

        {session?.user ? (
          <SignOut />
        ) : (
          <Link href="/login">
            <Button>Se connecter</Button>
          </Link>
        )}
      </div>
    </header>
  );
}
