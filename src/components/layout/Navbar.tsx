
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
} from "framer-motion";

import { useTheme } from "next-themes";
import { useMounted } from "@/hooks/useMounted";

import {
  Menu,
  X,
  Sun,
  Moon,
  Download,
  Mail,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa6";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

import { NAVIGATION, SITE_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";

/* =========================================
   SOCIAL LINKS
========================================= */

const socialLinks = [
  {
    icon: FaGithub,
    href: SITE_CONFIG.github,
    label: "GitHub",
  },
  {
    icon: FaLinkedin,
    href: SITE_CONFIG.linkedin,
    label: "LinkedIn",
  },
  {
    icon: FaInstagram,
    href: SITE_CONFIG.instagram,
    label: "Instagram",
  },
];

/* =========================================
   ANIMATION VARIANTS
========================================= */

const menuVariants = {
  hidden: {
    opacity: 0,
    y: -16,
    scale: 0.97,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1] as const,
      staggerChildren: 0.065,
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    scale: 0.98,
    filter: "blur(8px)",
    transition: {
      duration: 0.22,
      ease: "easeInOut" as const,
    },
  },
};

const menuItemVariants = {
  hidden: {
    opacity: 0,
    x: -14,
    filter: "blur(5px)",
  },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

/* =========================================
   NAVBAR
========================================= */

export default function Navbar() {
  const { resolvedTheme, setTheme } = useTheme();

  const mounted = useMounted();
  const shouldReduceMotion = useReducedMotion();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const isDark = resolvedTheme === "dark";

  /* =========================================
     SCROLL PROGRESS
  ========================================= */

  const { scrollY, scrollYProgress } = useScroll();

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.25,
  });

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 32);
  });

  /* =========================================
     ACTIVE SECTION OBSERVER
  ========================================= */

  useEffect(() => {
    const sections = NAVIGATION.map((item) => {
      const sectionId = item.href.replace("#", "");
      return document.getElementById(sectionId);
    }).filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              a.boundingClientRect.top - b.boundingClientRect.top
          );

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        rootMargin: "-25% 0px -60% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  /* =========================================
     MOBILE MENU SCROLL LOCK
  ========================================= */

  useEffect(() => {
    if (!mobileOpen) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileOpen]);

  /* =========================================
     ESCAPE KEY
  ========================================= */

  useEffect(() => {
    if (!mobileOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileOpen]);

  /* =========================================
     HANDLERS
  ========================================= */

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  const handleNavigation = (sectionId: string) => {
    setActiveSection(sectionId);
    closeMobileMenu();
  };

  if (!mounted) return null;

  return (
    <>
      {/* =========================================
          SCROLL PROGRESS
      ========================================= */}

      <motion.div
        className="
          fixed left-0 top-0 z-[80]
          h-[2px] w-full
          origin-left
          bg-[var(--foreground)]
        "
        style={{
          scaleX: smoothProgress,
        }}
      />

      {/* =========================================
          NAVBAR WRAPPER
      ========================================= */}

      <motion.header
        initial={
          shouldReduceMotion
            ? false
            : {
                opacity: 0,
                y: -35,
                filter: "blur(10px)",
              }
        }
        animate={{
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
        }}
        transition={{
          duration: shouldReduceMotion ? 0 : 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          fixed inset-x-0 top-0 z-50
          pt-4 sm:pt-5
        "
      >
        <Container>
          <motion.div
            animate={{
              y: scrolled ? 0 : 0,
              scale: scrolled ? 0.985 : 1,
            }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className={cn(
              "relative flex items-center justify-between",
              "rounded-2xl px-4 sm:px-5",
              "transition-all duration-500",
              scrolled
                ? [
                    "border border-[var(--border)]",
                    "bg-[var(--background)]/80",
                    "shadow-xl shadow-black/[0.06]",
                    "backdrop-blur-2xl",
                  ].join(" ")
                : [
                    "border border-transparent",
                    "bg-[var(--background)]/20",
                    "backdrop-blur-md",
                  ].join(" ")
            )}
          >
            {/* =====================================
                BRAND
            ===================================== */}

            <Link
              href="/"
              aria-label="Go to homepage"
              onClick={() => {
                setActiveSection("home");
                closeMobileMenu();
              }}
              className="group relative z-10 flex shrink-0 items-center gap-2.5"
            >
              <motion.span
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : {
                        rotateY: 180,
                        scale: 1.08,
                      }
                }
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 18,
                }}
                style={{
                  transformPerspective: 500,
                }}
                className="
                  flex h-9 w-9 items-center justify-center
                  rounded-xl
                  bg-[var(--foreground)]
                  text-[var(--background)]
                "
              >
                <Sparkles size={17} strokeWidth={1.8} />
              </motion.span>

              <span className="flex flex-col leading-none">
                <span className="
                  text-sm font-bold
                  tracking-[0.13em]
                  text-[var(--foreground)]
                  sm:text-base
                ">
                  {SITE_CONFIG.name.toUpperCase()}
                  <span className="text-[var(--muted)]">.</span>
                </span>

                <span className="
                  mt-1 hidden
                  text-[9px] font-medium
                  tracking-[0.2em]
                  text-[var(--muted)]
                  sm:block
                ">
                  DIGITAL PORTFOLIO
                </span>
              </span>
            </Link>

            {/* =====================================
                DESKTOP NAVIGATION
            ===================================== */}

            <nav
              aria-label="Main navigation"
              className="
                absolute left-1/2 hidden
                -translate-x-1/2
                items-center gap-1
                rounded-xl
                border border-[var(--border)]
                bg-[var(--card)]/50
                p-1
                backdrop-blur-xl
                lg:flex
              "
            >
              {NAVIGATION.map((item) => {
                const sectionId = item.href.replace("#", "");
                const active = activeSection === sectionId;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={active ? "location" : undefined}
                    onClick={() => handleNavigation(sectionId)}
                    className="
                      group relative
                      rounded-lg px-3.5 py-2
                    "
                  >
                    {active && (
                      <motion.span
                        layoutId="navbar-active-indicator"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 32,
                        }}
                        className="
                          absolute inset-0
                          rounded-lg
                          bg-[var(--foreground)]/[0.08]
                        "
                      />
                    )}

                    <motion.span
                      whileHover={
                        shouldReduceMotion
                          ? undefined
                          : {
                              y: -2,
                              rotateX: 10,
                            }
                      }
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 20,
                      }}
                      style={{
                        transformPerspective: 500,
                      }}
                      className={cn(
                        "relative z-10 block",
                        "text-[12px] font-medium",
                        "transition-colors duration-300",
                        active
                          ? "text-[var(--foreground)]"
                          : "text-[var(--muted)] group-hover:text-[var(--foreground)]"
                      )}
                    >
                      {item.title}
                    </motion.span>
                  </Link>
                );
              })}
            </nav>

            {/* =====================================
                DESKTOP ACTIONS
            ===================================== */}

            <div className="hidden items-center gap-2.5 lg:flex">
              {/* THEME TOGGLE */}

              <motion.button
                type="button"
                aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
                title={`Switch to ${isDark ? "light" : "dark"} theme`}
                onClick={toggleTheme}
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : {
                        rotate: 15,
                        scale: 1.08,
                      }
                }
                whileTap={{ scale: 0.9 }}
                transition={{
                  type: "spring",
                  stiffness: 350,
                  damping: 16,
                }}
                className="
                  flex h-10 w-10 items-center justify-center
                  rounded-xl
                  border border-[var(--border)]
                  text-[var(--foreground)]
                  transition-colors duration-300
                  hover:bg-[var(--card)]
                "
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={isDark ? "sun" : "moon"}
                    initial={{
                      opacity: 0,
                      rotate: -60,
                      scale: 0.6,
                    }}
                    animate={{
                      opacity: 1,
                      rotate: 0,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      rotate: 60,
                      scale: 0.6,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    {isDark ? (
                      <Sun size={17} />
                    ) : (
                      <Moon size={17} />
                    )}
                  </motion.span>
                </AnimatePresence>
              </motion.button>

              {/* DOWNLOAD CV */}

              <Button
                href={SITE_CONFIG.resume}
                leftIcon={<Download size={15} />}
                className="btn-primary"
              >
                Download CV
              </Button>
            </div>

            {/* =====================================
                MOBILE MENU BUTTON
            ===================================== */}

            <motion.button
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMobileOpen((prev) => !prev)}
              whileTap={{ scale: 0.9 }}
              className="
                relative z-[60]
                flex h-10 w-10 shrink-0
                items-center justify-center
                rounded-xl
                border border-[var(--border)]
                text-[var(--foreground)]
                transition-colors
                hover:bg-[var(--card)]
                lg:hidden
              "
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={mobileOpen ? "close" : "menu"}
                  initial={{
                    opacity: 0,
                    rotate: -90,
                    scale: 0.7,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    rotate: 90,
                    scale: 0.7,
                  }}
                  transition={{ duration: 0.18 }}
                >
                  {mobileOpen ? (
                    <X size={20} />
                  ) : (
                    <Menu size={20} />
                  )}
                </motion.span>
              </AnimatePresence>
            </motion.button>
          </motion.div>
        </Container>

        {/* =========================================
            MOBILE NAVIGATION
        ========================================= */}

        <AnimatePresence>
          {mobileOpen && (
            <>
              {/* BACKDROP */}

              <motion.button
                type="button"
                aria-label="Close navigation menu"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                onClick={closeMobileMenu}
                className="
                  fixed inset-0 z-40
                  cursor-default
                  bg-black/40
                  backdrop-blur-sm
                  lg:hidden
                "
              />

              {/* MENU PANEL */}

              <motion.div
                id="mobile-navigation"
                variants={menuVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="
                  absolute inset-x-0 top-full z-50
                  mt-3
                  overflow-hidden
                  rounded-2xl
                  border border-[var(--border)]
                  bg-[var(--background)]/95
                  shadow-2xl shadow-black/15
                  backdrop-blur-2xl
                  lg:hidden
                "
              >
                <Container className="py-6">
                  {/* MENU HEADER */}

                  <motion.div
                    variants={menuItemVariants}
                    className="
                      mb-5 flex items-center
                      justify-between
                    "
                  >
                    <span className="
                      text-[10px] font-semibold
                      tracking-[0.2em]
                      text-[var(--muted)]
                    ">
                      NAVIGATION
                    </span>

                    <span className="
                      font-mono text-[10px]
                      text-[var(--muted)]
                    ">
                      01 — {String(NAVIGATION.length).padStart(2, "0")}
                    </span>
                  </motion.div>

                  {/* NAVIGATION LINKS */}

                  <nav className="flex flex-col gap-1.5">
                    {NAVIGATION.map((item, index) => {
                      const sectionId = item.href.replace("#", "");
                      const active = activeSection === sectionId;

                      return (
                        <motion.div
                          key={item.href}
                          variants={menuItemVariants}
                        >
                          <Link
                            href={item.href}
                            onClick={() => handleNavigation(sectionId)}
                            className={cn(
                              "group flex items-center justify-between",
                              "rounded-xl px-4 py-3.5",
                              "transition-all duration-300",
                              active
                                ? "bg-[var(--card)] text-[var(--foreground)]"
                                : "text-[var(--muted)] hover:bg-[var(--card)] hover:text-[var(--foreground)]"
                            )}
                          >
                            <span className="flex items-center gap-4">
                              <span className="
                                font-mono text-[10px]
                                text-[var(--muted)]
                              ">
                                0{index + 1}
                              </span>

                              <span className="text-sm font-medium">
                                {item.title}
                              </span>
                            </span>

                            <motion.span
                              animate={{
                                x: active ? 0 : -4,
                                opacity: active ? 1 : 0.35,
                              }}
                              whileHover={{
                                x: 0,
                                opacity: 1,
                              }}
                              transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 20,
                              }}
                            >
                              <ArrowUpRight size={17} />
                            </motion.span>
                          </Link>
                        </motion.div>
                      );
                    })}
                  </nav>

                  {/* DIVIDER */}

                  <motion.div
                    variants={menuItemVariants}
                    className="my-6 h-px bg-[var(--border)]"
                  />

                  {/* ACTIONS */}

                  <motion.div
                    variants={menuItemVariants}
                    className="flex items-center gap-3"
                  >
                    <Button
                      fullWidth
                      href={SITE_CONFIG.resume}
                      leftIcon={<Download size={16} />}
                      className="btn-primary flex-1"
                    >
                      Download CV
                    </Button>

                    <motion.button
                      type="button"
                      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
                      onClick={toggleTheme}
                      whileTap={{ scale: 0.9 }}
                      className="
                        flex h-11 w-11 shrink-0
                        items-center justify-center
                        rounded-xl
                        border border-[var(--border)]
                        text-[var(--foreground)]
                        transition-colors
                        hover:bg-[var(--card)]
                      "
                    >
                      <AnimatePresence mode="wait" initial={false}>
                        <motion.span
                          key={isDark ? "sun-mobile" : "moon-mobile"}
                          initial={{
                            opacity: 0,
                            rotate: -45,
                            scale: 0.7,
                          }}
                          animate={{
                            opacity: 1,
                            rotate: 0,
                            scale: 1,
                          }}
                          exit={{
                            opacity: 0,
                            rotate: 45,
                            scale: 0.7,
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          {isDark ? (
                            <Sun size={18} />
                          ) : (
                            <Moon size={18} />
                          )}
                        </motion.span>
                      </AnimatePresence>
                    </motion.button>
                  </motion.div>

                  {/* SOCIAL LINKS */}

                  <motion.div
                    variants={menuItemVariants}
                    className="
                      mt-7 flex items-center
                      justify-between
                    "
                  >
                    <span className="
                      text-[10px] font-semibold
                      tracking-[0.18em]
                      text-[var(--muted)]
                    ">
                      LET'S CONNECT
                    </span>

                    <div className="flex items-center gap-5">
                      {socialLinks.map(({ icon: Icon, href, label }) => (
                        <Link
                          key={label}
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={label}
                          className="
                            text-[var(--muted)]
                            transition-colors duration-300
                            hover:text-[var(--foreground)]
                          "
                        >
                          <Icon size={18} />
                        </Link>
                      ))}

                      <Link
                        href={`mailto:${SITE_CONFIG.email}`}
                        aria-label="Send email"
                        className="
                          text-[var(--muted)]
                          transition-colors duration-300
                          hover:text-[var(--foreground)]
                        "
                      >
                        <Mail size={18} />
                      </Link>
                    </div>
                  </motion.div>

                  {/* FOOTER */}

                  <motion.div
                    variants={menuItemVariants}
                    className="
                      mt-7 flex items-center
                      justify-between
                      border-t border-[var(--border)]
                      pt-4
                    "
                  >
                    <span className="
                      text-[10px]
                      text-[var(--muted)]
                    ">
                      Designed & Built with care.
                    </span>

                    <span className="
                      font-mono text-[10px]
                      text-[var(--muted)]
                    ">
                      © {new Date().getFullYear()}
                    </span>
                  </motion.div>
                </Container>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
