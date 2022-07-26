import React from 'react';
import { motion } from 'framer-motion';

const Albums = () => {
  return (
    <div>
      <motion.h2 animate={{ fontSize: 50, color: '#ff2994', x: 100 }}>
        albums
      </motion.h2>
    </div>
  );
};

export default Albums;
