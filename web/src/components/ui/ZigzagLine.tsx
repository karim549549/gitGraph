'use client';

import React, { useState, useEffect } from 'react';

const ZigzagLine = ({ className }: { className?: string }) => {
  const [pathD, setPathD] = useState('M5,0');

  useEffect(() => {
    let d = 'M5,0';
    let y = 0;
    let currentX = 5;

    while (y < 100) {
      // Move down by a random amount
      y += Math.random() * 15 + 5;
      if (y > 100) y = 100;
      d += ` V${y}`;

      // Abruptly shift to the left or right edge
      const nextX = currentX < 5 ? 10 : 0;
      d += ` H${nextX}`;
      currentX = nextX;
    }
    setPathD(d);
  }, []);

  return (
    <svg
      width="10"
      height="100%"
      viewBox="0 0 10 100"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d={pathD}
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
      />
    </svg>
  );
};

export default ZigzagLine;
