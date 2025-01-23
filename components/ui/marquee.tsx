/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useRef } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CurvedMarquee = ({ images, radius = 300, rotationSpeed = 0.01 }: any) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const marqueeRef = useRef<any>(null);
  const angleRef = useRef(0); // Keeps track of the current angle

  useEffect(() => {
    const animate = () => {
      if (!marqueeRef.current) return;

      const items = marqueeRef.current.children;
      const totalItems = items.length;
      const angleIncrement = 360 / totalItems; // Spread images evenly

      // Update the position of each image along the curved path
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      Array.from(items).forEach((item: any, index) => {
        const currentAngle = angleRef.current + angleIncrement * index;
        const radian = (currentAngle * Math.PI) / 180;

        const x = radius * Math.sin(radian); // Horizontal movement
        const y = (radius * Math.cos(radian)) / 4; // Vertical curve (elliptical effect)
        const z = radius * Math.cos(radian); // Depth for 3D

        item.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
        item.style.zIndex = Math.floor(z); // Optional: Make nearer images appear above
      });

      // Update the angle for rotation
      angleRef.current += rotationSpeed * 10; // Speed adjustment
      requestAnimationFrame(animate);
    };

    animate(); // Start animation
  }, [radius, rotationSpeed]);

  return (
    <div className="curved-marquee-container">
      <div className="curved-marquee" ref={marqueeRef}>
        {images.map((item: any, index: number) => (
          <a key={index} className="curved-marquee-item" href={item.href}>
            <img
              src={item.src}
              alt={`Image ${index}`}
              className=" w-[100px] h-auto"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default CurvedMarquee;
