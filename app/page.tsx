"use client";

import './globals.css';
import Container from "@/components/Container";
import Theme from "@/components/globals/Theme";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import * as React from "react";
import { Code, Video, Share, ShieldCheck, Rocket, Languages } from "lucide-react"; // Optional icons

const LandingPage = () => {
  return (
    <>
      {/* Header */}
      <header className="px-6 h-16 sticky top-0 inset-x-0 w-full bg-background/50 backdrop-blur-lg border-b border-border z-50 shadow-sm">
        <Container reverse>
          <div className="flex items-center justify-between h-full mx-auto max-w-screen-2xl">
            <div className="flex items-start">
              <Link href="/" className="flex items-center gap-2">
                <span className="text-2xl font-bold">🚀 CodeBurst</span>
              </Link>
            </div>
            <nav className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <ul className="flex items-center justify-center gap-10 text-base font-medium">
                <Link href="/ide" className="hover:text-primary transition-colors">
                  IDE
                </Link>
                <Link href="/confrence" className="hover:text-primary transition-colors">
                  Conference
                </Link>
                <Link href="/docs" className="hover:text-primary transition-colors">
                  Docs
                </Link>
                <Link href="https://github.com/apurvjha123" className="hover:text-primary transition-colors">
                  About
                </Link>
                <Link href="https://github.com/Chit-Chat-Org/Chit-Chat-Nextjs" className="hover:text-primary transition-colors">
                  GitHub
                </Link>
              </ul>
            </nav>
            <div className="flex items-center gap-6">
              <Link href="/sign-in" className={buttonVariants({ size: "lg", variant: "ghost" })}>
                Login
              </Link>
              <Theme />
            </div>
          </div>
        </Container>
      </header>

      {/* Hero Section */}
      <section className="py-32 bg-background text-center">
        <Container>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight tracking-tight max-w-5xl mx-auto">
            Collaborate. Communicate. <br className="hidden md:block" />
            Code in Real-Time.
          </h1>
          <p className="mt-8 text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto">
            A unified platform to code together, share screens, video chat, and launch ideas—any language, any dependency, no limits.
          </p>
          <div className="mt-12 flex justify-center gap-6 flex-wrap">
            <Link href="/project" className={buttonVariants({ size: "lg" })}>
              project
            </Link>
            <Link href="/confrence" className={buttonVariants({ size: "lg", variant: "outline" })}>
            Confrence
            </Link>
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-muted">
        <Container>
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold">Why Choose CodeBurst?</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
              Built for teams, educators, freelancers and dreamers who want to build together, faster.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-left text-lg">
            {[
              { title: 'Live IDE Collaboration', desc: 'Edit and run code together in real-time.', icon: <Code size={36} /> },
              { title: 'Built-in Video Calling', desc: 'Talk face-to-face while building.', icon: <Video size={36} /> },
              { title: 'Screen Sharing', desc: 'Present your code or debug together.', icon: <Share size={36} /> },
              { title: 'Multi-Language Support', desc: 'From Python to Rust, run it all.', icon: <Languages size={36} /> },
              { title: 'Instant Deploy', desc: 'One-click deploy and live preview.', icon: <Rocket size={36} /> },
              { title: 'Secure & Encrypted', desc: 'Your data is safe and encrypted.', icon: <ShieldCheck size={36} /> }
            ].map((feature, i) => (
              <div key={i} className="p-8 rounded-2xl bg-background border shadow-md hover:shadow-lg transition">
                <div className="mb-4 text-primary">{feature.icon}</div>
                <h3 className="font-semibold text-xl mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-base">{feature.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Footer */}
      <footer className="border-t bg-background py-8">
        <Container className="text-center text-sm text-muted-foreground">
          © 2025 CodeBurst. Built with ❤️.
        </Container>
      </footer>
    </>
  );
};

export default LandingPage;
