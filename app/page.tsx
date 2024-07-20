import { auth } from "@/lib/auth";
import Footer from "../components/footer";
import Header from "../components/header";

export default async function Home() {
  const session = await auth();
  return (
    <div className="min-h-screen">
      <Header />
      <div className="p-4 m-4 bg-gray-200 text-center">
        <h1>Hello {session?.user?.name}</h1>
        <h2> Tasmaster un site de gestion de tâches collaborative</h2>
      </div>
      <Footer />
    </div>
  );
}
