import React, { useState } from 'react';
import { Box, Button, Image, Flex, Text,  } from '@chakra-ui/react';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      img: 'https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg',
      caption: 'First Slide Caption',
      description: 'This is a description of the first slide.',
    },
    {
      img: 'https://images.pexels.com/photos/45853/grey-crowned-crane-bird-crane-animal-45853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      caption: 'Second Slide Caption',
      description: 'This is a description of the second slide.',
    },
    {
      img: 'https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&w=600',
      caption: 'Third Slide Caption',
      description: 'This is a description of the third slide.',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <Box position="relative" maxWidth="100vw" height={'90vh'} margin="auto" overflow="hidden"
    display={'flex'} justifyContent={'center'} alignItems={'center'} gap>
      <Button
          onClick={prevSlide}
          variant="solid"
          colorScheme="teal"
          borderRadius="full"
          size="lg"
        >
        </Button>
      <Image
        src={slides[currentSlide].img}
        alt={`Slide ${currentSlide + 1}`}
        width="100%"
        height="100%"
        borderRadius="md"
        transition="transform 1s ease"
      />
      
      <Flex
        position="absolute"
        bottom="15%"
        left="35%"
        color="white"
        flexDirection="column"
        alignItems="center"
      >
        <Text fontSize="3xl" fontWeight="bold">
          {slides[currentSlide].caption}
        </Text>
        <Text fontSize="lg">{slides[currentSlide].description}</Text>
      </Flex>
      
        
        <Button
          onClick={nextSlide}
          variant="solid"
          colorScheme="teal"
          borderRadius="full"
          size="lg"
        >
        </Button>
    </Box>
  );
};

export default Carousel;
