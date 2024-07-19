import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Header() {
  return (
    <header className="flex justify-between items-center py-6 px-4 sm:px-6 bg-gray-600 text-white">
      <Link href="/">
        <h1 className="text-3xl font-bold">Taskmaster</h1>
      </Link>
      <div className="flex gap-4">
        <Link href={`/login`}>
          <Button>Se connecter</Button>
        </Link>
        <Link href={`/signin`}>
          <Button>{`S'inscrire`} </Button>
        </Link>
      </div>
    </header>
  );
}
