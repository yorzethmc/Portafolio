"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button, buttonVariants } from "@/components/ui/button";
import { Menu, X, Terminal } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const links = [
  { name: "Inicio", href: "/" },
  { name: "Servicios", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-7xl items-center justify-between mx-auto px-4">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
            <Terminal className="h-6 w-6 text-primary" />
            <span className="font-semibold tracking-tight">EYMC</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === link.href ? "text-foreground" : "text-muted-foreground"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link href="/contact" className={cn(buttonVariants({ size: "sm" }), "ml-4")}>Solicitar Cotización</Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden absolute top-16 left-0 w-full bg-background border-b border-border/40 px-4 py-4"
          >
            <nav className="flex flex-col gap-4">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-sm font-medium p-2 rounded-md transition-colors hover:bg-muted",
                    pathname === link.href ? "text-foreground bg-muted/50" : "text-muted-foreground"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Link href="/contact" className={cn(buttonVariants(), "w-full mt-2")} onClick={() => setIsOpen(false)}>Solicitar Cotización</Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
