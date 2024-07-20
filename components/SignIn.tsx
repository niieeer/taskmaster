import { signIn } from "@/lib/auth";
import { GithubIcon } from "./icons/GithubIcon";
import { GoogleIcon } from "./icons/GoogleIcon";

export function SignIn() {
  return (
    <form
      className="flex flex-col items-center justify-center gap-4 p-8 text-center w-auto"
      action={async () => {
        "use server";
        await signIn("github", { redirectTo: "/" });
      }}
    >
      <h1 className="text-3xl font-bold mb-4">Sign in</h1>
      <button
        className="flex gap-3 items-center p-2 px-4 rounded bg-black text-white hover:bg-gray-800"
        type="submit"
      >
        <GithubIcon className="text-foreground" size={18} /> Sign in with GitHub
      </button>
      <button
        className="flex gap-3 items-center p-2 px-4 rounded bg-white border border-gray-400 text-black hover:bg-gray-100"
        type="submit"
      >
        <GoogleIcon className="text-foreground" size={18} /> Sign in with Google
      </button>
    </form>
  );
}
