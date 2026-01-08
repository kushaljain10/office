import React from 'react';
import { motion } from 'framer-motion';

const Tokenomics = () => {
  // Pie chart data
  const pieData = [
    { percentage: 99, label: "For the People (Liquidity)", color: "#00ff00" },
    { percentage: 1, label: "Kevin's Chili Fund (Dev Wallet)", color: "#d97706" }
  ];

  // Create SVG pie chart
  const createPieSlice = (percentage, startAngle, color) => {
    const radius = 80;
    const centerX = 100;
    const centerY = 100;
    const angle = (percentage / 100) * 360;
    const endAngle = startAngle + angle;
    
    const x1 = centerX + radius * Math.cos((startAngle * Math.PI) / 180);
    const y1 = centerY + radius * Math.sin((startAngle * Math.PI) / 180);
    const x2 = centerX + radius * Math.cos((endAngle * Math.PI) / 180);
    const y2 = centerY + radius * Math.sin((endAngle * Math.PI) / 180);
    
    const largeArcFlag = angle > 180 ? 1 : 0;
    
    return `M ${centerX} ${centerY} L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2} Z`;
  };

  let currentAngle = -90; // Start from top

  return (
    <section id="team" className="section" style={{
      backgroundColor: '#f9fafb',
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
          Financial Report
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

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '4rem',
        marginTop: '4rem',
        alignItems: 'center'
      }}>
        {/* Pie Chart */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center' }}
        >
          <div style={{
            backgroundColor: 'white',
            border: '3px solid #334155',
            boxShadow: '6px 6px 0 #334155',
            padding: '2rem',
            display: 'inline-block'
          }}>
            <svg width="200" height="200" viewBox="0 0 200 200">
              {pieData.map((slice, index) => {
                const startAngle = currentAngle;
                const path = createPieSlice(slice.percentage, startAngle, slice.color);
                currentAngle += (slice.percentage / 100) * 360;
                
                return (
                  <motion.path
                    key={index}
                    d={path}
                    fill={slice.color}
                    stroke="#334155"
                    strokeWidth="2"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3 + index * 0.2, duration: 0.5 }}
                  />
                );
              })}
              
              {/* Center text */}
              <motion.text
                x="100"
                y="100"
                textAnchor="middle"
                dominantBaseline="middle"
                style={{
                  fontSize: '14px',
                  fontWeight: 'bold',
                  fill: '#334155',
                  fontFamily: 'monospace'
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                TOKEN SPLIT
              </motion.text>
            </svg>
          </div>
        </motion.div>

        {/* Legend and Details */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div style={{ marginBottom: '2rem' }}>
            {pieData.map((item, index) => (
              <motion.div
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '1rem',
                  padding: '1rem',
                  backgroundColor: 'white',
                  border: '2px solid #334155',
                  boxShadow: '3px 3px 0 #334155'
                }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <div style={{
                  width: '20px',
                  height: '20px',
                  backgroundColor: item.color,
                  border: '2px solid #334155',
                  marginRight: '1rem'
                }}></div>
                <div>
                  <div style={{
                    fontWeight: 'bold',
                    color: '#334155',
                    fontSize: '1.1rem'
                  }}>
                    {item.percentage}%
                  </div>
                  <div style={{
                    color: '#64748b',
                    fontSize: '0.9rem'
                  }}>
                    {item.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Total Supply */}
          <motion.div
            style={{
              backgroundColor: '#00ff00',
              border: '3px solid #334155',
              boxShadow: '4px 4px 0 #334155',
              padding: '1.5rem',
              textAlign: 'center'
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
          >
            <div style={{
              fontSize: '1.2rem',
              fontWeight: 'bold',
              color: '#334155',
              marginBottom: '0.5rem'
            }}>
              Total Supply
            </div>
            <div style={{
              fontSize: '2rem',
              fontWeight: '900',
              color: '#000',
              fontFamily: 'monospace'
            }}>
              1 Keleven Billion
            </div>
            <div style={{
              fontSize: '0.8rem',
              color: '#334155',
              marginTop: '0.5rem',
              fontStyle: 'italic'
            }}>
              A mistake plus keleven gets you home by seven
            </div>
          </motion.div>

          {/* Corporate Warning */}
          <motion.div
            style={{
              marginTop: '2rem',
              padding: '1rem',
              backgroundColor: '#fef3c7',
              border: '2px solid #d97706',
              borderLeftWidth: '6px',
              boxShadow: '3px 3px 0 #d97706'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <p style={{
              color: '#92400e',
              fontSize: '0.9rem',
              margin: 0,
              fontWeight: '600'
            }}>
              ⚠️ Corporate Policy: No financial advice. Kevin's chili fund is strictly for office parties.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Tokenomics;