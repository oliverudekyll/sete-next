"use client";

import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./carousel.module.css";
import {
  motion,
  AnimatePresence,
  easeInOut,
  easeOut,
  easeIn,
} from "motion/react";

interface ImageProps {
  src: string;
  alt: string;
}

const MotionImage = motion.create(Image);

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
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

  function getNextIndex() {
    setCurrentIndex((prev) => (prev < data.length - 1 ? prev + 1 : 0));
  }

  useEffect(() => {
    const interval = setInterval(() => {
      getNextIndex();
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const motionVariants = {
    initial: {
      opacity: 0,
      y: "25%",
      scale: 0.99,
    },
    animate: {
      opacity: 1,
      y: "0%",
      scale: 1,
    },
    exit: {
      opacity: 0,
      y: "-25%",
      scale: 0.99,
    },
    transition: {
      duration: 0.5,
      easeInOut,
    },
  };
  return (
    <div className={styles.container}>
      <AnimatePresence mode="wait">
        <MotionImage
          className={styles.image}
          src={data[currentIndex].src}
          alt={data[currentIndex].alt}
          width={1080}
          height={1080}
          key={data[currentIndex].src}
          {...motionVariants}
        />
      </AnimatePresence>
    </div>
  );
}
