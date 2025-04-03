import Link from "next/link";
import { Shield, Check, Github, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LandingPage() {
  return (
    <div className="bg-transparent text-white flex flex-col">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 border border-zinc-800"></div>
      </div>
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 py-16">
        <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
          <div className="mb-8 relative">
            <div className="h-24 w-24 bg-zinc-900/50 rounded-full flex items-center justify-center border border-zinc-800">
              <div className="h-16 w-16 bg-zinc-900 rounded-full flex items-center justify-center border border-zinc-700">
                <Shield className="h-8 w-8 text-white" />
                <Check className="h-4 w-4 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              </div>
            </div>
            <div className="absolute -inset-4 border border-zinc-800 rounded-full opacity-50"></div>
          </div>
          <h1 className="text-4xl tracking-tighter md:text-5xl lg:text-6xl font-bold text-center mb-6 leading-tight">
            Next.js + Better Auth +<br />
            Prisma Starter Kit
          </h1>
          <p className="text-zinc-400 tracking-tight text-center max-w-2xl mb-10">
            Better-Auth is a complete authentication solution for your Next.js
            projects, powered by Prisma and styled with Shadcn UI components.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mx-auto">
            <Button className="rounded-md tracking-tight group bg-zinc-100 text-black hover:bg-zinc-200 h-12 text-base">
              <Github className="mr-2 h-5 w-5" />
              Get the repo{" "}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              variant="outline"
              className="w-fit rounded-md border-zinc-800 text-white hover:bg-zinc-900 h-12 text-base"
            >
              Try Demo
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16 w-full">
            {[
              {
                title: "Authentication",
                description: "Email, OAuth, Magic Links",
              },
              {
                title: "Database Ready",
                description: "Prisma ORM integration",
              },
              {
                title: "UI Components",
                description: "Shadcn UI styled components",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="border rounded-md border-zinc-800 bg-zinc-900/20 p-6 backdrop-blur-sm"
              >
                <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
                <p className="text-zinc-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
