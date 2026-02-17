"use client";

import React from "react";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import styles from "./carousel.module.css";
import { motion } from "motion/react";

interface ImageProps {
  src: string;
  alt: string;
}

export default function Carousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [randomPositions, setRandomPositions] = useState<{ x: number; y: number }[]>([]);

  const data = [
    {
      src: "/images/sete-works-carousel.jpg",
      alt: "Website designed and developed for Carousel Selections",
    },
    {
      src: "/images/sete-works-paavli.jpeg",
      alt: "Website designed and developed for Paavli Kultuurivabrik",
    },
    {
      src: "/images/sete-works-dreamscape.jpeg",
      alt: "Visual identity designed for Dreamscape Festival 2025",
    },
  ];

  useEffect(() => {
    // Generate random positions for each image (10-80% range to keep them visible)
    const positions = data.map(() => ({
      x: Math.random() * 70 + 10, // 10-80vw
      y: Math.random() * 60 + 10, // 10-70vh
    }));
    setRandomPositions(positions);
  }, []);

  return (
    <div ref={containerRef} className={styles.container}>
      {randomPositions.length > 0 && data.map((item, index) => (
        <motion.div
          key={item.src}
          drag
          dragConstraints={containerRef}
          dragElastic={0.1}
          dragMomentum={true}
          dragTransition={{
            bounceStiffness: 300,
            bounceDamping: 20,
            power: 0.3,
            timeConstant: 200,
          }}
          whileDrag={{
            scale: 1.05,
            cursor: "grabbing",
            zIndex: 999,
          }}
          initial={{
            opacity: 0,
            scale: 0.8,
            x: `${randomPositions[index].x}vw`,
            y: `${randomPositions[index].y}vh`,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.6,
            delay: index * 0.1,
            ease: "easeOut",
          }}
          className={styles.imageWrapper}
          style={{
            cursor: "grab",
          }}
        >
          <Image
            className={styles.image}
            src={item.src}
            alt={item.alt}
            width={1080}
            height={1080}
            draggable={false}
          />
        </motion.div>
      ))}
    </div>
  );
}
