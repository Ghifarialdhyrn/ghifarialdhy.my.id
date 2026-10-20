"use client";

import Link from "next/link";

import { useEffect, useMemo, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import { useTheme } from "next-themes";
import { useMounted } from "@/hooks/useMounted";

import { Menu, X, Sun, Moon, Download, Mail } from "lucide-react";

import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

import { NAVIGATION, SITE_CONFIG } from "@/lib/constants";

import { cn } from "@/lib/utils";

export default function Navbar() {
  const { resolvedTheme, setTheme } = useTheme();

  const mounted = useMounted();

  const [mobileOpen, setMobileOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  const [activeSection, setActiveSection] = useState("home");

  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const total = document.documentElement.scrollHeight - window.innerHeight;

      setScrollProgress(total > 0 ? (window.scrollY / total) * 100 : 0);

      const sections = NAVIGATION.map((item) => document.getElementById(item.href.replace("#", "")))
        .filter(Boolean) as HTMLElement[];

      const scrollPosition = window.scrollY + 100;
      const passedSections = sections.filter(
        (section) => section.getBoundingClientRect().top + window.scrollY <= scrollPosition,
      );
      const active = passedSections[passedSections.length - 1];

      if (active) setActiveSection(active.id);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
      }
    };

    window.addEventListener("keydown", close);

    return () => window.removeEventListener("keydown", close);
  }, []);

  const navbarClass = useMemo(
    () =>
      cn(
        `
        fixed
        inset-x-0
        top-0
        z-50
        transition-all
        duration-500
        `,

        scrolled
          ? `
        border-b
        border-[var(--border)]
        bg-[color:var(--background)/0.75]
        backdrop-blur-2xl
        shadow-2xl
        `
          : "bg-transparent",
      ),

    [scrolled],
  );

  const mobileVariants = {
    hidden: {
      opacity: 0,
      y: -20,
    },

    visible: {
      opacity: 1,
      y: 0,
    },

    exit: {
      opacity: 0,
      y: -20,
    },
  };

  if (!mounted) return null;

  return (
    <>
      {/* Scroll Progress */}

      <div
        className="
        fixed
        left-0
        top-0
        z-[60]
        h-[2px]
        bg-[var(--foreground)]
        transition-all
        duration-150
        "

        style={{
          width: `${scrollProgress}%`,
        }}
      />

      <header className={navbarClass}>
        <Container
          className="
          flex
          h-20
          items-center
          justify-between
          "
        >
          {/* Logo */}

          <Link
            href="/"

            className="
            text-xl
            font-bold
            tracking-[0.25em]
            text-[var(--foreground)]
            transition-colors
            "
          >
            {SITE_CONFIG.name.toUpperCase()}
          </Link>

          {/* Desktop Navigation */}

          <nav
            className="
            hidden
            items-center
            gap-8
            lg:flex
            "
          >
            {NAVIGATION.map((item) => {
              const active = activeSection === item.href.replace("#", "");

              return (
                <Link
                  key={item.href}

                  href={item.href}
                  onClick={() => setActiveSection(item.href.replace("#", ""))}

                  className={cn(
                    `
                        relative
                        text-sm
                        font-medium
                        transition-colors
                        duration-300
                        `,

                    active
                      ? "text-[var(--foreground)]"
                      : `
                        text-[var(--muted)]
                        hover:text-[var(--foreground)]
                        `,
                  )}
                >
                  {item.title}

                  {active && (
                    <motion.div
                      layoutId="navbar-indicator"

                      className="
                            absolute
                            -bottom-2
                            left-0
                            h-[2px]
                            w-full
                            rounded-full
                            bg-[var(--foreground)]
                            "
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right */}

          <div
            className="
            hidden
            items-center
            gap-3
            lg:flex
            "
          >
            <button
              type="button"
              aria-label={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} theme`}
              title={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} theme`}
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] transition-all hover:bg-[var(--card)]"
            >
              {resolvedTheme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <Button
              href={SITE_CONFIG.resume}
              leftIcon={<Download size={18} />}
              className="btn-primary"
            >
              Download CV
            </Button>
          </div>

          {/* Mobile Toggle */}

          <button
            onClick={() => setMobileOpen(!mobileOpen)}

            className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-full
            border
            border-[var(--border)]
            transition
            lg:hidden
            "
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </Container>

        {/* Mobile Menu */}

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              variants={mobileVariants}

              initial="hidden"

              animate="visible"

              exit="exit"

              transition={{
                duration: 0.25,
              }}

              className="
              border-t
              border-[var(--border)]
              bg-[var(--background)]
              lg:hidden
              "
            >
              <Container className="py-8">
                <nav className="flex flex-col gap-6">
                  {NAVIGATION.map((item) => (
                    <Link
                      key={item.href}

                      href={item.href}

                      onClick={() => {
                        setActiveSection(item.href.replace("#", ""));
                        setMobileOpen(false);
                      }}

                      className="
                        text-lg
                        font-medium
                        text-[var(--muted)]
                        hover:text-[var(--foreground)]
                        transition-colors
                        "
                    >
                      {item.title}
                    </Link>
                  ))}
                </nav>

                <div className="mt-8 flex items-center gap-3">
                  <Button
                    fullWidth
                    href={SITE_CONFIG.resume}
                    leftIcon={<Download size={18} />}
                    className="btn-primary flex-1"
                  >
                    Download CV
                  </Button>
                  <button
                    type="button"
                    aria-label={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} theme`}
                    title={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} theme`}
                    onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--border)] transition-all hover:bg-[var(--card)]"
                  >
                    {resolvedTheme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                  </button>
                </div>

                <div
                  className="
                  mt-8
                  flex
                  items-center
                  gap-5
                  "
                >
                  {[
                    {
                      icon: FaGithub,
                      href: SITE_CONFIG.github,
                    },
                    {
                      icon: FaLinkedin,
                      href: SITE_CONFIG.linkedin,
                    },
                    {
                      icon: FaInstagram,
                      href: SITE_CONFIG.instagram,
                    },
                  ].map(({ icon: Icon, href }) => (
                    <Link key={href} href={href} target="_blank">
                      <Icon
                        size={20}

                        className="
                            text-[var(--muted)]
                            hover:text-[var(--foreground)]
                            transition-colors
                            "
                      />
                    </Link>
                  ))}

                  <Link href={`mailto:${SITE_CONFIG.email}`}>
                    <Mail
                      size={20}

                      className="
                      text-[var(--muted)]
                      hover:text-[var(--foreground)]
                      transition-colors
                      "
                    />
                  </Link>
                </div>
              </Container>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
