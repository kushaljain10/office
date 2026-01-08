import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const cards = [
    {
      title: "Bears, Beets, Battlestar Galactica.",
      description: "We are not superstitious, but we are a little stitious. This token is protected by Assistant to the Regional Manager.",
      icon: "🐻",
      delay: 0.2
    },
    {
      title: "Pretzel Day.",
      description: "364 days a year are for holding. 1 day is for mooning.",
      icon: "🥨",
      delay: 0.4
    }
  ];

  return (
    <section id="paper" className="section" style={{
      backgroundColor: '#f3f4f6',
      borderTop: '3px solid #334155',
      borderBottom: '3px solid #334155'
    }}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title" style={{
          fontSize: 'clamp(2rem, 5vw, 3rem)',
          position: 'relative',
          display: 'inline-block'
        }}>
          Why $OFFICE?
          <div style={{
            position: 'absolute',
            bottom: '-10px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '100px',
            height: '4px',
            backgroundColor: '#00ff00',
            boxShadow: '2px 2px 0 #000'
          }}></div>
        </h2>
      </motion.div>

      <div className="grid grid-2" style={{ marginTop: '4rem' }}>
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: card.delay }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.02,
              boxShadow: '8px 8px 0 #334155'
            }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: '1.5rem'
            }}>
              <span style={{
                fontSize: '3rem',
                filter: 'drop-shadow(3px 3px 0 #000)'
              }}>
                {card.icon}
              </span>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: '#334155',
                margin: 0,
                fontFamily: 'monospace'
              }}>
                {card.title}
              </h3>
            </div>
            
            <p style={{
              color: '#64748b',
              lineHeight: 1.6,
              fontSize: '1.1rem',
              margin: 0
            }}>
              {card.description}
            </p>

            {/* Corporate stamp */}
            <div style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              transform: 'rotate(15deg)',
              opacity: 0.3
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                border: '3px solid #dc2626',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.7rem',
                fontWeight: 'bold',
                color: '#dc2626',
                textAlign: 'center'
              }}>
                CONFIDENTIAL
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Corporate note at bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        viewport={{ once: true }}
        style={{
          textAlign: 'center',
          marginTop: '3rem',
          padding: '2rem',
          backgroundColor: 'white',
          border: '2px solid #d97706',
          borderLeftWidth: '8px',
          boxShadow: '4px 4px 0 #d97706'
        }}
        className="handwritten"
      >
        <p style={{
          color: '#d97706',
          fontSize: '1.2rem',
          fontWeight: 'bold',
          margin: 0
        }}>
          "I am Beyoncé, always." - Michael Scott, Regional Manager
        </p>
      </motion.div>
    </section>
  );
};

export default About;