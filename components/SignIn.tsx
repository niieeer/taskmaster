import { signIn } from "@/lib/auth";
import Link from "next/link";
import { GithubIcon } from "./icons/GithubIcon";
import { GoogleIcon } from "./icons/GoogleIcon";
import { Button } from "./ui/button";

export function SignIn() {
  return (
    <form
      className="flex bg-gray-100 mt-10 flex-col items-center justify-center gap-4 p-8 text-center w-full max-w-md mx-auto rounded-2xl"
      action={async () => {
        "use server";
        await signIn("github", { redirectTo: "/" });
      }}
    >
      <h1 className="text-3xl tracking-wide font-bold mb-4">Se connecter</h1>
      <input
        className="w-full rounded-md border border-gray-400 p-2 text-black"
        type="email"
        name="email"
        placeholder="Adresse email"
      />
      <input
        type="password"
        className="w-full rounded-md border border-gray-400 p-2 text-black"
        name="password"
        placeholder="Password"
      />
      <Button className="w-full p-3 px-4">Se connecter</Button>
      <div className="flex gap-4 items-center w-full">
        <Button
          className="w-full flex gap-3 items-center p-3 px-4 rounded bg-white border border-gray-400 text-black hover:bg-gray-200"
          type="submit"
        >
          <GithubIcon className="text-foreground" size={18} />
        </Button>
        <Button
          className="w-full flex gap-3 items-center p-3 px-4 rounded bg-white border border-gray-400 text-black hover:bg-gray-200"
          type="submit"
        >
          <GoogleIcon className="text-foreground" size={18} />
        </Button>
      </div>
      <Link href="/signup">{`Vous n'avez pas de compte ?`}</Link>
    </form>
  );
}
