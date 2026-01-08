import React from "react";
import { motion } from "framer-motion";
import { Send, Twitter } from "lucide-react";

const Footer = () => {
  const socialLinks = [];

  return (
    <footer
      style={{
        backgroundColor: "#334155",
        color: "#f9fafb",
        padding: "4rem 2rem 2rem",
        borderTop: "6px solid #00ff00",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{
            textAlign: "center",
            marginBottom: "3rem",
          }}
        >
          {/* <h3
            style={{
              fontSize: "1.5rem",
              marginBottom: "2rem",
              fontFamily: "monospace",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
          >
            Connect with the Branch
          </h3> */}

          {/* <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "2rem",
              flexWrap: "wrap",
            }}
          >
            {socialLinks.map((link, index) => {
              const IconComponent = link.icon;
              return (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    padding: "1rem 2rem",
                    backgroundColor: link.color,
                    color: "white",
                    textDecoration: "none",
                    fontWeight: "bold",
                    border: "3px solid #f9fafb",
                    boxShadow: "4px 4px 0 #f9fafb",
                    transition: "all 0.2s ease",
                  }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "6px 6px 0 #f9fafb",
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <IconComponent size={20} />
                  {link.name}
                </motion.a>
              );
            })}
          </div> */}
        </motion.div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          style={{
            backgroundColor: "#1e293b",
            border: "3px solid #00ff00",
            boxShadow: "6px 6px 0 #00ff00",
            padding: "2rem",
            marginBottom: "2rem",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "1rem",
              marginBottom: "1rem",
            }}
          >
            <div
              style={{
                backgroundColor: "#dc2626",
                color: "white",
                padding: "0.5rem 1rem",
                fontWeight: "bold",
                fontSize: "0.8rem",
                transform: "rotate(-5deg)",
                boxShadow: "2px 2px 0 #000",
              }}
            >
              ⚠️ DISCLAIMER
            </div>
          </div>

          <p
            style={{
              color: "#e2e8f0",
              lineHeight: 1.6,
              margin: 0,
              fontSize: "0.95rem",
            }}
          >
            $OFFICE is a meme coin with no intrinsic value or expectation of
            financial return. This is a parody project paying homage to The
            Office. We are NOT affiliated with NBC Universal. Identity theft is
            not a joke, Jim. Please do your own research and remember that
            cryptocurrency investments are highly volatile and risky. Only
            invest what you can afford to lose.
          </p>

          <div
            style={{
              marginTop: "1rem",
              padding: "1rem",
              backgroundColor: "#0f172a",
              border: "1px solid #334155",
              fontSize: "0.8rem",
              color: "#94a3b8",
              fontStyle: "italic",
            }}
          >
            "Sometimes I'll start a sentence and I don't even know where it's
            going. I just hope I find it along the way." - Michael Scott, on
            Crypto Investing
          </div>
        </motion.div>

        {/* Corporate Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          style={{
            textAlign: "center",
            paddingTop: "2rem",
            borderTop: "1px solid #475569",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "1rem",
              marginBottom: "1rem",
              flexWrap: "wrap",
            }}
          >
            <span
              style={{
                fontSize: "1.2rem",
                fontWeight: "bold",
                color: "#00ff00",
              }}
            >
              Dunder Mifflin Infinity Solana Branch
            </span>
            <span
              style={{
                fontSize: "0.8rem",
                color: "#94a3b8",
              }}
            >
              Est. 2024
            </span>
          </div>

          <p
            style={{
              color: "#94a3b8",
              fontSize: "0.9rem",
              margin: 0,
              fontFamily: "monospace",
            }}
          >
            Scranton, PA • Solana Blockchain • Paperless Office Initiative
          </p>

          <div
            style={{
              marginTop: "1rem",
              fontSize: "0.7rem",
              color: "#64748b",
              fontStyle: "italic",
            }}
          >
            World's Most Okayest Memecoin • Assistant to the Regional Blockchain
          </div>
        </motion.div>

        {/* Corporate Seal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7 }}
          viewport={{ once: true }}
          style={{
            position: "absolute",
            bottom: "2rem",
            right: "2rem",
            width: "80px",
            height: "80px",
            border: "3px solid #00ff00",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "0.6rem",
            fontWeight: "bold",
            color: "#00ff00",
            textAlign: "center",
            opacity: 0.3,
          }}
        >
          CORP
          <br />
          ORATE
          <br />
          SEAL
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
