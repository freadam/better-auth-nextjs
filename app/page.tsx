import { auth } from "@/lib/auth"; // path to your Better Auth server instance
import { headers } from "next/headers";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import {
  IconChevronRight,
  IconLockSquareRoundedFilled,
  IconShieldCheckFilled,
} from "@tabler/icons-react";
import LandingPage from "./_components/hero";
import {
  Shield,
  Check,
  Github,
  ArrowRight,
  Layout,
  ArrowUpRight,
} from "lucide-react";
export default async function page() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  console.log({ session });
  return (
    <div className="flex relative min-h-screen flex-col">
      <div className="h-screen absolute inset-0 w-full -z-10 opacity-40 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      <header className="relative z-20 border-b">
        <div className="container  flex h-16 items-center justify-between">
          <div className="flex items-center ">
            <span className="font-bold text-xl">Better-Auth</span>
          </div>
          <nav className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <ModeToggle />
              {session?.user ? (
                <a href="/dashboard">
                  <Button
                    className="rounded-sm flex items-center gap-2"
                    variant="outline"
                    size="default"
                  >
                    <Layout className="w-4 h-4" />
                    Dashboard
                  </Button>
                </a>
              ) : (
                <>
                  <Link href="/login">
                    <Button className="rounded-sm" variant="outline">
                      Log in
                    </Button>
                  </Link>
                  <Link href="/signup">
                    <Button className="rounded-sm">Sign up</Button>
                  </Link>
                </>
              )}
            </div>
          </nav>
        </div>
      </header>
      <LandingPage />
      <footer className="fixed border bottom-0 w-full z-10 border-t flex border-zinc-800 py-6 bg-black/80 backdrop-blur-sm">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <Shield className="h-5 w-5 mr-2" />
            <span className="text-sm font-medium">Auth Starter Kit</span>
          </div>
          <div className="flex items-center space-x-6">
            <Link
              href="#"
              className="text-sm flex gap-2 items-center text-zinc-400 hover:text-white"
            >
              Github <ArrowUpRight className="w-3 h-3" />
            </Link>
            <Link
              className="text-sm flex gap-2 items-center text-zinc-400 hover:text-white"
              href="#"
            >
              Docs <ArrowUpRight className="w-3 h-3" />
            </Link>
            <Link
              className="text-sm flex gap-2 items-center text-zinc-400 hover:text-white"
              href="#"
            >
              Examples
              <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>
          <div className="text-sm text-zinc-500 mt-4 md:mt-0">
            Better Auth Starter
          </div>
        </div>
      </footer>
    </div>
  );
}
