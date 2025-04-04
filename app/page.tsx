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
import {
  Shield,
  Check,
  Github,
  ArrowRight,
  Layout,
  ArrowUpRight,
  LogOut,
} from "lucide-react";
import { authClient } from "@/lib/auth-client";
import LogoutButton from "@/components/auth/logout-button-icon";
import HeroSection from "./_components/hero";
export default async function page() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  console.log("here is what i am working..");
  console.log({ session });
  return (
    <div className="flex relative min-h-screen flex-col">
      <header className="relative z-20 border-b">
        <div className="container  flex h-16 items-center justify-between">
          <div className="flex items-center ">
            <span className="font-bold text-xl">Better-Auth</span>
          </div>
          <nav className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <ModeToggle />
              {session?.user ? (
                <div className="flex gap-2 items-center">
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
                  <LogoutButton />
                </div>
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
      <HeroSection />
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
