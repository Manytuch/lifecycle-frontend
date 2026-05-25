import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";

import ContactForm from "./ContactForm";

const contactDetails = [
  {
    icon: MapPin,
    label: "Address",
    value: "Nimule, South Sudan",
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
    value: "info.lifecyclegeneral@gmail.com",
    href: "mailto:info.lifecyclegeneral@gmail.com",
  },
];

export default function Contact() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;0,700;1,400&family=DM+Sans:wght@300;400;500&display=swap');

        .contact-root {
          font-family: 'DM Sans', sans-serif;

          --navy:  #0b1628;
          --navy2: #132040;
          --gold:  #c9a84c;
          --gold2: #e8c87a;
          --cream: #faf8f3;

          overflow-x: hidden;
        }

        .contact-info-row {
          display: flex;
          align-items: flex-start;

          gap: 16px;

          padding: 18px 0;

          border-bottom:
            1px solid rgba(255,255,255,0.06);

          text-decoration: none;

          transition:
            gap .25s,
            transform .25s;
        }

        .contact-info-row:last-child {
          border-bottom: none;
        }

        .contact-info-row:hover {
          gap: 20px;
          transform: translateX(2px);
        }

        .contact-icon-box {
          width: 44px;
          height: 44px;

          border-radius: 12px;

          background:
            rgba(201,168,76,0.1);

          border:
            1px solid rgba(201,168,76,0.28);

          display: flex;
          align-items: center;
          justify-content: center;

          color: var(--gold);

          flex-shrink: 0;

          transition: background .3s;
        }

        .contact-info-row:hover .contact-icon-box {
          background:
            rgba(201,168,76,0.18);
        }

        .wa-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;

          gap: 10px;

          font-size: 0.84rem;
          font-weight: 500;

          letter-spacing: 0.06em;
          text-transform: uppercase;

          color: #fff;

          background:
            linear-gradient(135deg, #1a7a4a, #22a05a);

          padding: 14px 26px;

          border-radius: 12px;

          text-decoration: none;

          transition:
            box-shadow .3s,
            transform .3s;

          box-shadow:
            0 8px 28px rgba(26,122,74,0.35);
        }

        .wa-btn:hover {
          transform: translateY(-2px);

          box-shadow:
            0 16px 40px rgba(26,122,74,0.45);
        }

        .contact-root::after {
          content: '';

          position: absolute;
          inset: 0;

          background-image:
            url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");

          pointer-events: none;
          z-index: 0;
        }

        @media (max-width: 1024px) {

          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 52px !important;
          }

        }

        @media (max-width: 768px) {

          .contact-root p {
            line-height: 1.75 !important;
          }

          .wa-btn {
            width: 100%;
          }

          .contact-card-body {
            padding: 24px 20px 28px !important;
          }

          .contact-card-header {
            padding: 24px 20px !important;
          }

          .contact-email {
            font-size: 0.88rem !important;
            word-break: break-word;
          }

        }
      `}</style>

      <section
        id="contact"
        className="contact-root"

        style={{
          position: "relative",

          background: "var(--cream)",

          padding:
            "clamp(72px, 8vw, 100px) 20px clamp(72px, 8vw, 110px)",

          overflow: "hidden",
        }}
      >

        {/* BLOBS */}
        <div
          aria-hidden

          style={{
            position: "absolute",
            top: -100,
            right: -80,

            width: "clamp(260px, 50vw, 500px)",
            height: "clamp(260px, 50vw, 500px)",

            borderRadius: "50%",

            background:
              "radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)",

            pointerEvents: "none",
          }}
        />

        <div
          aria-hidden

          style={{
            position: "absolute",
            bottom: -60,
            left: -80,

            width: "clamp(220px, 40vw, 400px)",
            height: "clamp(220px, 40vw, 400px)",

            borderRadius: "50%",

            background:
              "radial-gradient(circle, rgba(11,22,40,0.05) 0%, transparent 70%)",

            pointerEvents: "none",
          }}
        />

        <div
          className="contact-grid relative"

          style={{
            maxWidth: 1280,
            margin: "0 auto",

            zIndex: 1,

            display: "grid",

            gridTemplateColumns: "1fr 1fr",

            gap: 64,

            alignItems: "start",
          }}
        >

          {/* LEFT */}
          <div>

            {/* LABEL */}
            <span
              style={{
                display: "inline-block",

                fontSize: "0.7rem",
                fontWeight: 500,

                letterSpacing: "0.26em",
                textTransform: "uppercase",

                color: "var(--gold)",

                border:
                  "1px solid rgba(201,168,76,0.4)",

                borderRadius: 100,

                padding: "6px 20px",

                marginBottom: 20,
              }}
            >
              Get in Touch
            </span>

            {/* TITLE */}
            <h2
              style={{
                fontFamily:
                  "'Cormorant Garamond', Georgia, serif",

                fontSize:
                  "clamp(2.1rem, 6vw, 3.6rem)",

                fontWeight: 700,

                color: "var(--navy)",

                letterSpacing: "-0.02em",

                lineHeight: 1.06,

                margin: "0 0 20px",
              }}
            >
              Request a{" "}
              <em
                style={{
                  fontStyle: "italic",
                  color: "var(--gold)",
                }}
              >
                Quotation
              </em>
            </h2>

            {/* RULE */}
            <div
              style={{
                height: 1,
                width: 60,

                background:
                  "linear-gradient(90deg, var(--gold), transparent)",

                marginBottom: 24,
              }}
            />

            {/* TEXT */}
            <p
              style={{
                color: "#475569",

                fontSize:
                  "clamp(0.96rem, 2vw, 1.02rem)",

                lineHeight: 1.8,

                maxWidth: 420,

                marginBottom: 40,
              }}
            >
              Tell us about your shipment or service requirements and our team
              will respond promptly with a tailored solution.
            </p>

            {/* DETAILS */}
            <div>

              {contactDetails.map(
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
                      href={href}
                      className="contact-info-row"

                      style={{
                        color: "inherit",
                      }}
                    >

                      <div className="contact-icon-box">
                        <Icon size={18} />
                      </div>

                      <div style={{ minWidth: 0 }}>

                        <p
                          style={{
                            fontSize: "0.68rem",

                            letterSpacing:
                              "0.16em",

                            textTransform:
                              "uppercase",

                            color: "#94a3b8",

                            margin: "0 0 3px",
                          }}
                        >
                          {label}
                        </p>

                        <p
                          className={
                            label === "Email"
                              ? "contact-email"
                              : ""
                          }

                          style={{
                            fontSize: "0.97rem",

                            fontWeight: 400,

                            color: "var(--navy)",

                            margin: 0,
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

            {/* WHATSAPP */}
            <a
              href="https://wa.me/211923339344?text=Hello%20I%20would%20like%20to%20request%20a%20quote"

              target="_blank"
              rel="noopener noreferrer"

              className="wa-btn"

              style={{
                marginTop: 36,
              }}
            >
              <MessageCircle size={18} />

              Chat on WhatsApp

              <ArrowUpRight
                size={14}
                style={{ opacity: 0.7 }}
              />
            </a>

          </div>

          {/* RIGHT */}
          <div
            style={{
              background: "#fff",

              borderRadius: 24,

              border:
                "1px solid rgba(11,22,40,0.07)",

              boxShadow:
                "0 32px 80px rgba(11,22,40,0.1)",

              overflow: "hidden",
            }}
          >

            {/* HEADER */}
            <div
              className="contact-card-header"

              style={{
                background:
                  "linear-gradient(135deg, var(--navy) 0%, var(--navy2) 100%)",

                padding: "28px 36px",

                position: "relative",

                overflow: "hidden",
              }}
            >

              {/* DIAGONAL LINES */}
              <div
                aria-hidden

                style={{
                  position: "absolute",
                  inset: 0,

                  opacity: 0.07,

                  backgroundImage:
                    "repeating-linear-gradient(135deg, #c9a84c 0px, #c9a84c 1px, transparent 1px, transparent 52px)",
                }}
              />

              <p
                style={{
                  fontFamily:
                    "'Cormorant Garamond', Georgia, serif",

                  fontSize:
                    "clamp(1.15rem, 4vw, 1.35rem)",

                  fontWeight: 700,

                  color: "#fff",

                  margin: 0,

                  position: "relative",
                }}
              >
                Send Us a Message
              </p>

              <p
                style={{
                  fontSize: "0.8rem",

                  color:
                    "rgba(255,255,255,0.5)",

                  margin: "4px 0 0",

                  position: "relative",
                }}
              >
                We'll get back to you within 24 hours.
              </p>

            </div>

            {/* FORM */}
            <div
              className="contact-card-body"

              style={{
                padding: "36px 36px 40px",
              }}
            >
              <ContactForm />
            </div>

          </div>

        </div>

      </section>
    </>
  );
}