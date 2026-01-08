import React, { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check } from "lucide-react";

const Hero = () => {
  const [copied, setCopied] = useState(false);
  const contractAddress = "8xOFFICExxxxxxxxxxxxxxxxxxxxxsol";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(contractAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <section
      id="buy"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          textAlign: "center",
          zIndex: 2,
        }}
      >
        {/* Floating Dundie Award */}
        <motion.div
          className="floating"
          style={{
            position: "absolute",
            top: "20%",
            right: "10%",
            fontSize: "4rem",
            opacity: 0.1,
            zIndex: 1,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          🏆
        </motion.div>

        {/* Floating Stapler */}
        <motion.div
          className="floating"
          style={{
            position: "absolute",
            bottom: "20%",
            left: "10%",
            fontSize: "3rem",
            opacity: 0.1,
            zIndex: 1,
          }}
          animate={{
            y: [0, -15, 0],
            rotate: [-10, 10, -10],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          📎
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1
            style={{
              fontSize: "clamp(2.5rem, 8vw, 5rem)",
              fontWeight: "900",
              color: "#334155",
              marginBottom: "1rem",
              lineHeight: 1.1,
              textTransform: "uppercase",
              letterSpacing: "0.02em",
            }}
          >
            The People's Person's
            <br />
            <span style={{ color: "#00ff00", textShadow: "3px 3px 0 #000" }}>
              Paper Token.
            </span>
          </h1>

          <p
            style={{
              fontSize: "clamp(1.2rem, 3vw, 1.8rem)",
              color: "#64748b",
              marginBottom: "3rem",
              fontStyle: "italic",
            }}
          >
            Limitless paper in a paperless world. Now on Solana.
          </p>

          {/* Contract Address */}
          <motion.div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "1rem",
              marginBottom: "3rem",
              flexWrap: "wrap",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div
              style={{
                backgroundColor: "white",
                border: "3px solid #334155",
                boxShadow: "4px 4px 0 #334155",
                padding: "1rem 1.5rem",
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                fontFamily: "monospace",
                fontSize: "clamp(0.8rem, 2vw, 1rem)",
              }}
            >
              <span style={{ color: "#334155", fontWeight: "bold" }}>
                {contractAddress}
              </span>
              <button
                onClick={copyToClipboard}
                style={{
                  background: copied ? "#00ff00" : "#334155",
                  color: copied ? "#000" : "#fff",
                  border: "none",
                  padding: "0.5rem",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.2s ease",
                  borderRadius: "0",
                }}
                className={copied ? "copy-success" : ""}
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
              </button>
            </div>
            {copied && (
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                style={{
                  color: "#00ff00",
                  fontWeight: "bold",
                  fontSize: "0.9rem",
                }}
              >
                Copied!
              </motion.span>
            )}
          </motion.div>

          {/* CTA Button */}
          <motion.a
            href="https://pump.fun"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
            style={{
              fontSize: "clamp(1.2rem, 3vw, 1.8rem)",
              padding: "1.5rem 3rem",
              display: "inline-block",
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            Join The Office 𝕏
          </motion.a>

          {/* Subtle corporate note */}
          <motion.p
            style={{
              marginTop: "2rem",
              fontSize: "0.9rem",
              color: "#64748b",
              fontStyle: "italic",
            }}
            className="handwritten"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            *That's what she said*
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
