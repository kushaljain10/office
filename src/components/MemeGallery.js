import React from "react";
import { motion } from "framer-motion";

const MemeGallery = () => {
  // Add varying aspect ratios for more natural masonry feel
  const getImageHeight = (index) => {
    const heights = [
      1.2, 0.8, 1.0, 1.3, 0.9, 1.1, 1.4, 0.7, 1.2, 1.0, 0.85, 1.15,
    ];
    return heights[index % heights.length];
  };
  const memes = [
    {
      title: "That's What She Said",
      quote: "Michael Scott's most iconic line",
      image: "/memes/1.png",
    },
    {
      title: "Dwight's Perfectenschlag",
      quote: "When everything in your life is perfect",
      image: "/memes/2.png",
    },
    {
      title: "Jim's Prank Face",
      quote: "The look that launched a thousand pranks",
      image: "/memes/3.png",
    },
    {
      title: "Bears, Beets, Battlestar",
      quote: "The three B's of Schrute",
      image: "/memes/4.png",
    },
    {
      title: "Assistant Regional Manager",
      quote: "I am Assistant Regional Manager",
      image: "/memes/5.png",
    },
    {
      title: "Dundie Award Winner",
      quote: "The highest honor in Scranton",
      image: "/memes/6.png",
    },
    {
      title: "Michael's Bankruptcy",
      quote: "I declare bankruptcy!",
      image: "/memes/7.png",
    },
    {
      title: "Stanley's Crossword",
      quote: "Did I stutter?",
      image: "/memes/8.png",
    },
    {
      title: "Kelly's Drama",
      quote: "I am Beyoncé, always",
      image: "/memes/9.png",
    },
    {
      title: "Toby's HR Violations",
      quote: "Why are you the way that you are?",
      image: "/memes/10.png",
    },
    {
      title: "Creed's Wisdom",
      quote: "If I can't scuba, then what's this all been about?",
      image: "/memes/11.png",
    },
    {
      title: "Kevin's Chili",
      quote: "The trick is to undercook the onions",
      image: "/memes/12.png",
    },
  ];

  return (
    <section
      id="memes"
      style={{
        padding: "4rem 2rem",
        backgroundColor: "#f9fafb",
        minHeight: "100vh",
      }}
    >
      <style>{`
        .masonry-container {
          column-count: 3;
          column-gap: 1.5rem;
          margin-top: 4rem;
          padding: 0 1rem;
        }
        
        @media (max-width: 768px) {
          .masonry-container {
            column-count: 2;
          }
        }
        
        @media (max-width: 480px) {
          .masonry-container {
            column-count: 1;
          }
        }
        
        .masonry-item {
          break-inside: avoid;
          margin-bottom: 1.5rem;
          display: inline-block;
          width: 100%;
        }
        
        .masonry-item img {
          width: 100%;
          height: auto;
          display: block;
          transition: transform 0.3s ease;
        }
        
        .masonry-item:hover img {
          transform: scale(1.01);
        }
      `}</style>
      padding: '4rem 2rem', backgroundColor: '#f9fafb', minHeight: '100vh' }}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "3rem",
            fontWeight: "bold",
            color: "#334155",
            marginBottom: "1rem",
            fontFamily: "monospace",
            position: "relative",
            display: "inline-block",
          }}
        >
          Corporate Meme Archive
          <div
            style={{
              position: "absolute",
              bottom: "-10px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "100px",
              height: "4px",
              backgroundColor: "#00ff00",
              boxShadow: "2px 2px 0 #000",
            }}
          ></div>
        </h2>
      </motion.div>
      <div className="masonry-container">
        {memes.map((meme, index) => (
          <motion.div
            key={index}
            className="masonry-item card"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.02,
              boxShadow: "8px 8px 0 #334155",
            }}
            style={{
              backgroundColor: "white",
              border: "3px solid #334155",
              boxShadow: "4px 4px 0 #334155",
              overflow: "hidden",
              cursor: "pointer",
            }}
          >
            {/* Meme Image */}
            <div
              style={{
                width: "100%",
                position: "relative",
              }}
            >
              <img
                src={meme.image}
                alt={meme.title}
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  transition: "transform 0.3s ease",
                }}
                onError={(e) => {
                  e.target.src =
                    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZDJkNWRmIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzMzNDE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPk1lbWU8L3RleHQ+PC9zdmc+";
                }}
              />
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
          marginTop: "4rem",
          padding: "2rem",
          backgroundColor: "white",
          border: "3px solid #334155",
          boxShadow: "6px 6px 0 #334155",
          textAlign: "center",
        }}
      >
        <h3
          style={{
            color: "#334155",
            marginBottom: "1rem",
            fontSize: "1.5rem",
            fontFamily: "monospace",
          }}
        >
          📁 Scranton Branch Archive
        </h3>
        <p
          style={{
            color: "#64748b",
            fontStyle: "italic",
            margin: 0,
          }}
        >
          These memes have been carefully curated by the Assistant Regional
          Manager and approved by the Regional Manager for corporate
          distribution.
        </p>

        <div
          style={{
            marginTop: "1rem",
            padding: "1rem",
            backgroundColor: "#fef3c7",
            border: "2px solid #d97706",
            fontSize: "0.9rem",
            color: "#92400e",
          }}
        >
          ⚠️ HR Notice: Some memes may contain references to beets, bears, or
          Battlestar Galactica.
        </div>
      </motion.div>
      {/* Corporate Archive Styling */}
      <style>{`
        @media (max-width: 768px) {
          .card {
            margin-bottom: 1rem;
          }
        }
        
        @media (max-width: 480px) {
          .card {
            margin-bottom: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default MemeGallery;
