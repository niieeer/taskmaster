import { auth } from "@/src/lib/auth";
import {
  LoginButton,
  LogoutButton,
} from "./api/auth/[...nextauth]/AuthButtons";

export default async function Home() {
  const session = await auth();
  return (
    <div className="mx-auto py-4 max-w-lg flex flex-col items-center justify-center gap-4">
      <h1 className="">
        Hello{" "}
        {session?.user
          ? "Authentificated" + session?.user?.email
          : "Not logged in"}
      </h1>
      <div>{session?.user ? <LogoutButton /> : <LoginButton />}</div>
    </div>
  );
}
