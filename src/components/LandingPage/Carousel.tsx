import React, { useEffect, useState } from "react";
import { Box, Image, Fade } from "@chakra-ui/react";

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
        setIsAnimating(false);
      }, 500); // Transition duration + delay
    }, 3000); // Slide duration

    return () => {
      clearInterval(interval);
    };
  }, [images.length]);

  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      <Box position="relative" width="100%" height="70vh" overflow="hidden">
        <Fade in={true} className="h-100">
          <Image
            src={images[currentIndex]}
            alt={`carousel-image-${currentIndex}`}
            width="100%"
            height="100%"
            objectFit="cover"
            objectPosition="center"
            opacity={isAnimating ? 0 : 1}
            transition="opacity 0.5s ease-in-out"
          />
        </Fade>
      </Box>
    </Box>
  );
};

export default Carousel;
