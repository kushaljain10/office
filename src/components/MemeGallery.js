import React from 'react';
import { motion } from 'framer-motion';

const MemeGallery = () => {
  const memes = [
    {
      quote: "That's what she said",
      placeholder: "📄",
      height: 200,
      delay: 0.1
    },
    {
      quote: "I declare Bankruptcy!",
      placeholder: "💰",
      height: 250,
      delay: 0.2
    },
    {
      quote: "Did I stutter?",
      placeholder: "🗣️",
      height: 180,
      delay: 0.3
    },
    {
      quote: "Bears. Beets. Battlestar Galactica.",
      placeholder: "🐻",
      height: 220,
      delay: 0.4
    },
    {
      quote: "Identity theft is not a joke, Jim!",
      placeholder: "🕵️",
      height: 190,
      delay: 0.5
    },
    {
      quote: "I'm not superstitious, but I am a little stitious",
      placeholder: "🍀",
      height: 240,
      delay: 0.6
    },
    {
      quote: "You miss 100% of the shots you don't take",
      placeholder: "🏀",
      height: 210,
      delay: 0.7
    },
    {
      quote: "Would I rather be feared or loved? Easy. Both.",
      placeholder: "👔",
      height: 260,
      delay: 0.8
    },
    {
      quote: "That's what she said",
      placeholder: "😏",
      height: 170,
      delay: 0.9
    }
  ];

  return (
    <section id="branch" className="section" style={{
      backgroundColor: '#f3f4f6',
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
          Corporate Meme Archive
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

      <div className="masonry" style={{ marginTop: '4rem' }}>
        {memes.map((meme, index) => (
          <motion.div
            key={index}
            className="masonry-item card"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: meme.delay }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.02,
              boxShadow: '8px 8px 0 #334155'
            }}
            style={{
              minHeight: `${meme.height}px`,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Placeholder Image Area */}
            <div style={{
              width: '100%',
              height: `${meme.height - 80}px`,
              background: 'linear-gradient(135deg, #e2e8f0 0%, #cbd5e1 100%)',
              border: '2px dashed #94a3b8',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '4rem',
              marginBottom: '1rem',
              position: 'relative'
            }}>
              {meme.placeholder}
              
              {/* Corporate watermark */}
              <div style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                padding: '4px 8px',
                fontSize: '0.7rem',
                fontWeight: 'bold',
                color: '#334155',
                border: '1px solid #334155'
              }}>
                FILE #{index + 1}
              </div>
            </div>

            {/* Quote Caption */}
            <div style={{
              fontSize: '1.1rem',
              fontWeight: 'bold',
              color: '#334155',
              fontFamily: 'monospace',
              padding: '0.5rem',
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              border: '1px solid #334155',
              width: '100%'
            }}>
              "{meme.quote}"
            </div>

            {/* Corporate stamp overlay */}
            <div style={{
              position: 'absolute',
              top: '20px',
              left: '20px',
              transform: 'rotate(-15deg)',
              opacity: 0.4
            }}>
              <div style={{
                width: '50px',
                height: '50px',
                border: '3px solid #dc2626',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.6rem',
                fontWeight: 'bold',
                color: '#dc2626',
                textAlign: 'center'
              }}>
                TOP SECRET
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Archive Notice */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1 }}
        viewport={{ once: true }}
        style={{
          marginTop: '4rem',
          padding: '2rem',
          backgroundColor: 'white',
          border: '3px solid #334155',
          boxShadow: '6px 6px 0 #334155',
          textAlign: 'center'
        }}
      >
        <h3 style={{
          color: '#334155',
          marginBottom: '1rem',
          fontSize: '1.5rem',
          fontFamily: 'monospace'
        }}>
          📁 Scranton Branch Archive
        </h3>
        <p style={{
          color: '#64748b',
          fontStyle: 'italic',
          margin: 0
        }}>
          These memes have been carefully curated by the Assistant Regional Manager
          and approved by the Regional Manager for corporate distribution.
        </p>
        
        <div style={{
          marginTop: '1rem',
          padding: '1rem',
          backgroundColor: '#fef3c7',
          border: '2px solid #d97706',
          fontSize: '0.9rem',
          color: '#92400e'
        }}>
          ⚠️ HR Notice: Some memes may contain references to beets, bears, or Battlestar Galactica.
        </div>
      </motion.div>
    </section>
  );
};

export default MemeGallery;