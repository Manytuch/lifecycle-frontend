"use client";

import {
  Facebook,
  Instagram,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

import {
  FaTiktok,
  FaXTwitter,
} from "react-icons/fa6";

const quickLinks = [
  { name: "Home", href: "/#home" },
  { name: "Services", href: "/#services" },
  { name: "About Us", href: "/about" },
  { name: "Operations", href: "/operations" },
  {
    name: "Why Choose Us",
    href: "/why-choose-us",
  },
  {
    name: "Certificates",
    href: "/certificates",
  },
  { name: "Contact", href: "/#contact" },
];

const services = [
  {
    name: "Customs Clearance",
    href: "/services/customs-clearance",
  },

  {
    name: "Shipping & Transportation",
    href: "/services/shipping-transportation",
  },

  {
    name: "Warehousing",
    href: "/services/warehousing",
  },

  {
    name: "Brokerage Services",
    href: "/services/brokerage-services",
  },

  {
    name: "General Supply",
    href: "/services/general-supply",
  },
];

const contact = [
  {
    icon: MapPin,

    label: "Office",

    value:
      "Juba & Nimule, South Sudan",

    href: null,
  },

  {
    icon: Phone,

    label: "Phone",

    value: "+211 923 339 344",

    href: "tel:+211923339344",
  },

  {
    icon: Mail,

    label: "Email",

    value:
      "info.lifecyclegeneral@gmail.com",

    href:
      "mailto:info.lifecyclegeneral@gmail.com",
  },
];

const socials = [
  {
    label: "Facebook",

    href:
      "https://www.facebook.com/share/1B6yxPpNSW/?mibextid=wwXIfr",

    icon: <Facebook size={16} />,
  },

  {
    label: "Instagram",

    href:
      "https://www.instagram.com/lifecycle202/",

    icon: <Instagram size={16} />,
  },

  {
    label: "TikTok",

    href:
      "https://www.tiktok.com/@life.cycle.genera",

    icon: <FaTiktok size={15} />,
  },

  {
    label: "X",

    href:
      "https://x.com/LifecycleGT",

    icon: <FaXTwitter size={15} />,
  },
];

export default function Footer() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;0,700;1,400&family=DM+Sans:wght@300;400;500&display=swap');

        .footer-root {
          font-family: 'DM Sans', sans-serif;

          --navy:  #0b1628;
          --navy2: #132040;
          --gold:  #c9a84c;
          --gold2: #e8c87a;

          overflow-x: hidden;
        }

        /* HEADINGS */
        .f-heading {
          font-family:
            'Cormorant Garamond',
            Georgia,
            serif;

          font-size: 1.15rem;

          font-weight: 700;

          color: #fff;

          letter-spacing: -0.01em;

          margin: 0 0 6px;
        }

        /* RULE */
        .f-heading-rule {
          height: 1.5px;

          width: 32px;

          background:
            linear-gradient(
              90deg,
              var(--gold),
              transparent
            );

          margin-bottom: 22px;

          border-radius: 2px;
        }

        /* LINKS */
        .f-link {
          display: flex;
          align-items: center;

          gap: 8px;

          font-size: 0.88rem;

          color: #64748b;

          text-decoration: none;

          padding: 5px 0;

          transition:
            color .22s,
            gap .22s;
        }

        .f-link:hover {
          color: var(--gold2);
          gap: 11px;
        }

        .f-dot {
          width: 5px;
          height: 5;

          border-radius: 50%;

          background: var(--gold);

          opacity: 0.5;

          flex-shrink: 0;

          transition: opacity .22s;
        }

        .f-link:hover .f-dot {
          opacity: 1;
        }

        /* SOCIAL */
        .f-social {
          width: 38px;
          height: 38px;

          border-radius: 10px;

          background:
            rgba(255,255,255,0.05);

          border:
            1px solid rgba(255,255,255,0.08);

          display: flex;
          align-items: center;
          justify-content: center;

          color: #94a3b8;

          text-decoration: none;

          transition:
            background .25s,
            border-color .25s,
            color .25s,
            transform .25s;
        }

        .f-social:hover {
          background:
            rgba(201,168,76,0.12);

          border-color:
            rgba(201,168,76,0.4);

          color: var(--gold2);

          transform: translateY(-2px);
        }

        /* CONTACT */
        .f-contact-row {
          display: flex;
          align-items: flex-start;

          gap: 14px;

          text-decoration: none;

          padding: 10px 0;

          border-bottom:
            1px solid rgba(255,255,255,0.05);

          transition: opacity .22s;
        }

        .f-contact-row:last-child {
          border-bottom: none;
        }

        .f-contact-row:hover {
          opacity: 0.85;
        }

        .f-contact-icon {
          width: 36px;
          height: 36px;

          border-radius: 10px;

          background:
            rgba(201,168,76,0.08);

          border:
            1px solid rgba(201,168,76,0.2);

          display: flex;
          align-items: center;
          justify-content: center;

          color: var(--gold);

          flex-shrink: 0;
        }

        /* NOISE */
        .footer-root::before {
          content: '';

          position: absolute;
          inset: 0;

          background-image:
            url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");

          pointer-events: none;

          z-index: 0;
        }

        @media (max-width: 1200px) {

          .footer-grid {
            grid-template-columns:
              1fr 1fr !important;

            gap: 42px !important;
          }

        }

        @media (max-width: 768px) {

          .footer-grid {
            grid-template-columns:
              1fr !important;

            gap: 36px !important;
          }

          .footer-root p {
            line-height: 1.7 !important;
          }

          .footer-brand {
            max-width: 100% !important;
          }

          .footer-bottom {
            flex-direction: column;
            align-items: flex-start !important;
          }

          .footer-logo {
            width: 56px !important;
            height: 56px !important;
          }

          .footer-socials {
            flex-wrap: wrap;
          }

          .footer-contact-text {
            font-size: 0.82rem !important;
            word-break: break-word;
          }

        }

        @media (max-width: 480px) {

          .footer-root {
            padding-top: 68px !important;
          }

          .footer-inner {
            padding-left: 18px !important;
            padding-right: 18px !important;
          }

        }
      `}</style>

      <footer
        className="footer-root"

        style={{
          position: "relative",

          background:
            "linear-gradient(160deg, #060d1a 0%, var(--navy) 50%, #0d1e38 100%)",

          overflow: "hidden",

          paddingTop:
            "clamp(68px, 8vw, 80px)",
        }}
      >

        {/* LINES */}
        <div
          aria-hidden

          style={{
            position: "absolute",
            inset: 0,

            opacity: 0.04,

            backgroundImage:
              "repeating-linear-gradient(135deg, #c9a84c 0px, #c9a84c 1px, transparent 1px, transparent 68px)",

            pointerEvents: "none",
          }}
        />

        {/* GLOWS */}
        <div
          aria-hidden

          style={{
            position: "absolute",

            top: -80,
            left: -80,

            width: 480,
            height: 480,

            borderRadius: "50%",

            background:
              "radial-gradient(circle, rgba(201,168,76,0.05) 0%, transparent 65%)",

            pointerEvents: "none",
          }}
        />

        <div
          aria-hidden

          style={{
            position: "absolute",

            bottom: 0,
            right: -60,

            width: 400,
            height: 400,

            borderRadius: "50%",

            background:
              "radial-gradient(circle, rgba(201,168,76,0.04) 0%, transparent 65%)",

            pointerEvents: "none",
          }}
        />

        <div
          className="footer-inner relative"

          style={{
            maxWidth: 1280,

            margin: "0 auto",

            padding:
              "0 24px 0",

            zIndex: 1,
          }}
        >

          {/* GRID */}
          <div
            className="footer-grid"

            style={{
              display: "grid",

              gridTemplateColumns:
                "1.6fr 1fr 1fr 1.3fr",

              gap: 48,
            }}
          >

            {/* BRAND */}
            <div
              className="footer-brand"
              style={{
                maxWidth: 320,
              }}
            >

              <div
                style={{
                  display: "flex",
                  alignItems: "center",

                  gap: 14,

                  marginBottom: 20,
                }}
              >

                {/* LOGO */}
                <div
                  className="footer-logo"

                  style={{
                    width: 64,
                    height: 64,

                    borderRadius: 16,

                    background:
                      "rgba(255,255,255,0.06)",

                    border:
                      "1px solid rgba(201,168,76,0.25)",

                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",

                    flexShrink: 0,

                    padding: 6,

                    overflow: "hidden",
                  }}
                >

                  <img
                    src="/logo.PNG"
                    alt="Life Cycle Logo"

                    style={{
                      width: "100%",
                      height: "100%",

                      objectFit: "contain",
                    }}
                  />

                </div>

                {/* TEXT */}
                <div>

                  <p
                    style={{
                      fontFamily:
                        "'Cormorant Garamond', Georgia, serif",

                      fontSize:
                        "1.3rem",

                      fontWeight: 700,

                      color: "#fff",

                      margin: 0,

                      lineHeight: 1.15,
                    }}
                  >
                    Life Cycle
                  </p>

                  <p
                    style={{
                      fontSize:
                        "0.62rem",

                      fontWeight: 400,

                      color:
                        "var(--gold)",

                      letterSpacing:
                        "0.14em",

                      textTransform:
                        "uppercase",

                      margin:
                        "3px 0 0",
                    }}
                  >
                    General Trading Co. Ltd
                  </p>

                </div>

              </div>

              {/* DESC */}
              <p
                style={{
                  fontSize: "0.88rem",

                  color: "#475569",

                  lineHeight: 1.8,

                  marginBottom: 28,
                }}
              >
                Reliable customs clearance,
                logistics, warehousing,
                brokerage, and supply
                solutions across South Sudan
                — built on professionalism
                and operational excellence.
              </p>

              {/* SOCIALS */}
              <div
                className="footer-socials"

                style={{
                  display: "flex",
                  gap: 10,
                }}
              >

                {socials.map(
                  ({
                    label,
                    href,
                    icon,
                  }) => (
                    <a
                      key={label}

                      href={href}

                      target="_blank"

                      rel="noopener noreferrer"

                      className="f-social"

                      aria-label={label}
                    >
                      {icon}
                    </a>
                  )
                )}

              </div>

            </div>

            {/* LINKS */}
            <div>

              <p className="f-heading">
                Quick Links
              </p>

              <div className="f-heading-rule" />

              <nav
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >

                {quickLinks.map(
                  ({
                    name,
                    href,
                  }) => (
                    <a
                      key={name}

                      href={href}

                      className="f-link"
                    >
                      <span className="f-dot" />

                      {name}
                    </a>
                  )
                )}

              </nav>

            </div>

            {/* SERVICES */}
            <div>

              <p className="f-heading">
                Our Services
              </p>

              <div className="f-heading-rule" />

              <nav
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >

                {services.map(
                  ({
                    name,
                    href,
                  }) => (
                    <a
                      key={name}

                      href={href}

                      className="f-link"
                    >
                      <span className="f-dot" />

                      {name}
                    </a>
                  )
                )}

              </nav>

            </div>

            {/* CONTACT */}
            <div>

              <p className="f-heading">
                Contact Information
              </p>

              <div className="f-heading-rule" />

              <div>

                {contact.map(
                  ({
                    icon: Icon,
                    label,
                    value,
                    href,
                  }) => {
                    const Tag = href
                      ? "a"
                      : "div";

                    return (
                      <Tag
                        key={label}

                        href={
                          href ??
                          undefined
                        }

                        className="f-contact-row"

                        style={{
                          color:
                            "inherit",
                        }}
                      >

                        <div className="f-contact-icon">
                          <Icon size={15} />
                        </div>

                        <div>

                          <p
                            style={{
                              fontSize:
                                "0.65rem",

                              letterSpacing:
                                "0.14em",

                              textTransform:
                                "uppercase",

                              color:
                                "#334155",

                              margin:
                                "0 0 3px",
                            }}
                          >
                            {label}
                          </p>

                          <p
                            className="footer-contact-text"

                            style={{
                              fontSize:
                                "0.85rem",

                              color:
                                "#94a3b8",

                              margin: 0,

                              lineHeight:
                                1.5,

                              wordBreak:
                                "break-word",
                            }}
                          >
                            {value}
                          </p>

                        </div>

                      </Tag>
                    );
                  }
                )}

              </div>

            </div>

          </div>

          {/* BOTTOM */}
          <div
            className="footer-bottom"

            style={{
              marginTop: 64,

              padding:
                "20px 0 28px",

              borderTop:
                "1px solid rgba(255,255,255,0.06)",

              display: "flex",

              alignItems: "center",

              justifyContent:
                "space-between",

              flexWrap: "wrap",

              gap: 12,
            }}
          >

            <p
              style={{
                fontSize: "0.78rem",

                color: "#334155",

                margin: 0,
              }}
            >
              ©{" "}
              {new Date().getFullYear()}{" "}
              Life Cycle General Trading
              Co. Ltd. All rights reserved.
            </p>

            <div
              style={{
                display: "flex",
                alignItems: "center",

                gap: 6,
              }}
            >

              <span
                style={{
                  width: 5,
                  height: 5,

                  borderRadius:
                    "50%",

                  background:
                    "var(--gold)",

                  opacity: 0.5,

                  display:
                    "inline-block",
                }}
              />

              <p
                style={{
                  fontSize:
                    "0.78rem",

                  color:
                    "#1e293b",

                  margin: 0,
                }}
              >
                Professional logistics
                &amp; supply chain
                operations.
              </p>

            </div>

          </div>

        </div>

      </footer>
    </>
  );
}