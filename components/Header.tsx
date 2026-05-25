"use client";

import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "/#home" },
  { name: "Services", href: "/#services" },
  { name: "About Us", href: "/about" },
  { name: "Operations", href: "/operations" },
  { name: "Why Us", href: "/why-choose-us" },
  { name: "Certificates", href: "/certificates" },
  { name: "Contact", href: "/#contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () =>
      window.removeEventListener(
        "scroll",
        onScroll
      );
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=DM+Sans:wght@400;500&display=swap');

        :root {
          --navy:  #0b1628;
          --navy2: #132040;
          --gold:  #c9a84c;
          --gold2: #e8c87a;
        }

        /* NAV LINK */
        .nav-link {
          position: relative;

          font-family:
            'DM Sans', sans-serif;

          font-size: 0.88rem;
          font-weight: 500;

          letter-spacing: 0.04em;

          text-decoration: none;

          transition: color .25s;

          white-space: nowrap;
        }

        .nav-link::after {
          content: '';

          position: absolute;

          left: 0;
          bottom: -4px;

          width: 0;
          height: 1.5px;

          background: var(--gold);

          border-radius: 2px;

          transition: width .3s ease;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        /* HEADER */
        .header-scrolled {
          background:
            rgba(11,22,40,0.97) !important;

          box-shadow:
            0 4px 40px rgba(0,0,0,0.35);

          border-bottom:
            1px solid rgba(201,168,76,0.15) !important;
        }

        /* CTA */
        .cta-btn {
          display: inline-flex;

          align-items: center;
          gap: 8px;

          font-family:
            'DM Sans', sans-serif;

          font-size: 0.82rem;
          font-weight: 500;

          letter-spacing: 0.07em;
          text-transform: uppercase;

          color: var(--navy);

          background:
            linear-gradient(
              135deg,
              var(--gold),
              var(--gold2)
            );

          padding: 10px 22px;

          border-radius: 10px;

          text-decoration: none;

          transition:
            box-shadow .25s,
            transform .25s;

          white-space: nowrap;
        }

        .cta-btn:hover {
          box-shadow:
            0 8px 28px rgba(201,168,76,0.4);

          transform:
            translateY(-1px);
        }

        /* MOBILE DRAWER */
        .drawer-link {
          display: flex;

          align-items: center;
          justify-content: space-between;

          font-family:
            'DM Sans', sans-serif;

          font-size: 1.05rem;
          font-weight: 400;

          color: #cbd5e1;

          text-decoration: none;

          padding: 14px 0;

          border-bottom:
            1px solid rgba(255,255,255,0.06);

          transition: color .2s;
        }

        .drawer-link:hover {
          color: var(--gold2);
        }

        .drawer-link:last-child {
          border-bottom: none;
        }

        /* MOBILE HEADER FIX */
        @media (max-width: 1024px) {

          .desktop-nav,
          .desktop-cta {
            display: none !important;
          }

        }

        @media (max-width: 768px) {

          .header-container {
            padding: 0 14px !important;
          }

          .logo-title {
            font-size: 1rem !important;
          }

          .logo-subtitle {
            font-size: 0.52rem !important;
            letter-spacing: 0.09em !important;
          }

          .mobile-menu-btn {
            padding: 7px 9px !important;
          }

        }

        @media (max-width: 480px) {

          .header-container {
            padding: 0 10px !important;
          }

          .logo-wrapper {
            gap: 8px !important;
          }

          .logo-title {
            font-size: 0.92rem !important;
          }

          .logo-subtitle {
            font-size: 0.46rem !important;
          }

        }
      `}</style>

      {/* HEADER */}
      <header
        className={
          scrolled
            ? "header-scrolled"
            : ""
        }
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 50,

          background: scrolled
            ? undefined
            : "transparent",

          borderBottom:
            "1px solid rgba(255,255,255,0.08)",

          backdropFilter:
            "blur(14px)",

          WebkitBackdropFilter:
            "blur(14px)",

          padding: scrolled
            ? "10px 0"
            : "14px 0",

          transition:
            "padding .3s, background .3s, box-shadow .3s, border-color .3s",
        }}
      >
        <div
          className="header-container"
          style={{
            maxWidth: 1280,
            margin: "0 auto",

            padding: "0 24px",

            display: "flex",

            alignItems: "center",

            justifyContent:
              "space-between",
          }}
        >

          {/* LOGO */}
          <a
            href="/#home"
            className="logo-wrapper"
            style={{
              display: "flex",

              alignItems: "center",

              gap: 12,

              textDecoration: "none",

              flexShrink: 0,
            }}
          >

            <Image
              src="/logo.PNG"
              alt="Life Cycle Logo"
              width={44}
              height={44}
              className="w-10 h-10 md:w-[44px] md:h-[44px]"
              style={{
                objectFit:
                  "contain",
              }}
            />

            <div
              style={{
                lineHeight: 1.1,
              }}
            >

              <p
                className="logo-title"
                style={{
                  fontFamily:
                    "'Cormorant Garamond', Georgia, serif",

                  fontSize:
                    "1.25rem",

                  fontWeight: 700,

                  color: "#fff",

                  margin: 0,

                  letterSpacing:
                    "0.01em",
                }}
              >
                Life Cycle
              </p>

              <p
                className="logo-subtitle"
                style={{
                  fontFamily:
                    "'DM Sans', sans-serif",

                  fontSize:
                    "0.65rem",

                  fontWeight: 400,

                  color:
                    "rgba(201,168,76,0.85)",

                  margin: 0,

                  letterSpacing:
                    "0.12em",

                  textTransform:
                    "uppercase",
                }}
              >
                General Trading Co. Ltd
              </p>

            </div>

          </a>

          {/* DESKTOP NAV */}
          <nav
            className="desktop-nav"
            style={{
              display: "flex",

              alignItems: "center",

              gap: 32,
            }}
          >

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="nav-link"
                style={{
                  color:
                    "rgba(255,255,255,0.82)",
                }}
              >
                {link.name}
              </a>
            ))}

          </nav>

          {/* DESKTOP CTA */}
          <a
            href="/#contact"
            className="cta-btn desktop-cta"
          >
            Request a Quotation{" "}
            <ArrowUpRight size={14} />
          </a>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
            className="mobile-menu-btn"
            style={{
              background:
                "rgba(255,255,255,0.08)",

              border:
                "1px solid rgba(255,255,255,0.14)",

              borderRadius: 10,

              padding:
                "8px 10px",

              color: "#fff",

              cursor: "pointer",

              display: "flex",

              alignItems: "center",

              marginLeft: 12,
            }}
          >
            <Menu size={22} />
          </button>

        </div>

      </header>

      {/* MOBILE DRAWER */}
      <AnimatePresence>

        {isOpen && (
          <>
            {/* BACKDROP */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.25,
              }}
              onClick={() =>
                setIsOpen(false)
              }
              style={{
                position: "fixed",

                inset: 0,

                background:
                  "rgba(0,0,0,0.65)",

                backdropFilter:
                  "blur(4px)",

                zIndex: 60,
              }}
            />

            {/* DRAWER */}
            <motion.div
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                duration: 0.32,
                ease: [
                  0.32,
                  0,
                  0.16,
                  1,
                ],
              }}
              style={{
                position: "fixed",

                top: 0,
                right: 0,

                width: "82%",
                maxWidth: 360,

                height: "100%",

                background:
                  "linear-gradient(160deg, var(--navy) 0%, var(--navy2) 100%)",

                borderLeft:
                  "1px solid rgba(201,168,76,0.2)",

                zIndex: 70,

                overflowY: "auto",

                padding:
                  "28px 28px 48px",

                display: "flex",

                flexDirection:
                  "column",
              }}
            >

              {/* DRAWER HEADER */}
              <div
                style={{
                  display: "flex",

                  alignItems: "center",

                  justifyContent:
                    "space-between",

                  marginBottom: 40,
                }}
              >

                <div>

                  <p
                    style={{
                      fontFamily:
                        "'Cormorant Garamond', Georgia, serif",

                      fontSize:
                        "1.4rem",

                      fontWeight: 700,

                      color: "#fff",

                      margin: 0,
                    }}
                  >
                    Life Cycle
                  </p>

                  <p
                    style={{
                      fontFamily:
                        "'DM Sans', sans-serif",

                      fontSize:
                        "0.62rem",

                      color:
                        "var(--gold)",

                      letterSpacing:
                        "0.14em",

                      textTransform:
                        "uppercase",

                      margin: 0,
                    }}
                  >
                    General Trading Co. Ltd
                  </p>

                </div>

                <button
                  onClick={() =>
                    setIsOpen(false)
                  }
                  aria-label="Close menu"
                  style={{
                    background:
                      "rgba(255,255,255,0.06)",

                    border:
                      "1px solid rgba(255,255,255,0.12)",

                    borderRadius: 10,

                    padding: "8px",

                    color: "#fff",

                    cursor: "pointer",

                    display: "flex",
                  }}
                >
                  <X size={20} />
                </button>

              </div>

              {/* GOLD RULE */}
              <div
                style={{
                  height: 1,

                  background:
                    "linear-gradient(90deg, var(--gold), transparent)",

                  marginBottom: 28,

                  opacity: 0.5,
                }}
              />

              {/* NAVIGATION */}
              <nav
                style={{
                  flexGrow: 1,
                }}
              >

                {navLinks.map(
                  (link, i) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      className="drawer-link"
                      onClick={() =>
                        setIsOpen(false)
                      }
                      initial={{
                        opacity: 0,
                        x: 20,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay:
                          0.1 +
                          i * 0.055,
                      }}
                    >
                      {link.name}

                      <ArrowUpRight
                        size={14}
                        style={{
                          opacity: 0.4,
                        }}
                      />

                    </motion.a>
                  )
                )}

              </nav>

              {/* CTA */}
              <a
                href="/#contact"
                onClick={() =>
                  setIsOpen(false)
                }
                className="cta-btn"
                style={{
                  marginTop: 32,

                  justifyContent:
                    "center",

                  borderRadius: 12,

                  padding:
                    "14px 24px",

                  fontSize:
                    "0.85rem",
                }}
              >
                Request a Quotation{" "}
                <ArrowUpRight size={14} />
              </a>

              {/* GLOW */}
              <div
                aria-hidden
                style={{
                  position:
                    "absolute",

                  bottom: 0,
                  right: 0,

                  width: 200,
                  height: 200,

                  background:
                    "radial-gradient(circle, rgba(201,168,76,0.12) 0%, transparent 70%)",

                  pointerEvents:
                    "none",
                }}
              />

            </motion.div>

          </>
        )}

      </AnimatePresence>
    </>
  );
}