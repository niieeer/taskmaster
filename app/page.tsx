import { auth } from "@/lib/auth";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/footer";
import Header from "../components/header";
import src from "./img/task-banner.png";

export default async function Home() {
  const session = await auth();

  return (
    <div className="min-h-screen">
      <Header />
      <section className="w-full pt-12 md:pt-24 lg:pt-32">
        <div className="container space-y-10 xl:space-y-16">
          <div className="grid gap-4 px-10 md:grid-cols-2 md:gap-16">
            <div>
              <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                Une plateforme pour votre gestion de tâches
              </h1>
            </div>
            <div className="flex flex-col items-start space-y-4">
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Belle interface, facile à utiliser, personnalisable, open source
                et surtout gratuite.
              </p>
              <div className="space-x-4">
                <Link
                  href="/login"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  prefetch={false}
                >
                  Commencer
                </Link>
              </div>
            </div>
          </div>
          <Image
            className="mx-auto aspect-[3/1] overflow-hidden rounded-t-xl object-cover"
            src={src}
            alt="Hero"
            width={1270}
            height={300}
          />
        </div>
      </section>
      <Footer />
    </div>
  );
}
