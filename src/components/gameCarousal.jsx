import React, { useState } from 'react';
import { Box, Button, Image, Flex, Text, Center, } from '@chakra-ui/react';
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      img: 'https://cdn.wccftech.com/wp-content/uploads/2021/06/ER_KEY-ART-scaled-e1623411764381.jpg',
      caption: 'The Lands Between Awaits',
      description: 'Venture into the mysterious and perilous world of Elden Ring, where dark secrets, ancient gods, and brutal enemies lie in wait. Forge your path as a Tarnished and battle your way through vast landscapes and daunting dungeons in search of the Elden Ring, the key to restoring the world.',
    },
    {
      img: 'https://assets2.ignimgs.com/2014/11/17/gta-v-bigjpg-e94b8d1280wjpg-e14d62_160w.jpg?width=1280',
      caption: 'Welcome to Los Santos',
      description: 'A sprawling, sun-drenched city filled with high-speed chases, adrenaline-pumping heists, and a world of endless possibilities. Explore the streets of Los Santos, where danger lurks at every corner, and fortune awaits the daring.',
    },
    {
      img: 'https://platform.polygon.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/19874924/VALORANT_Jett_Red_crop.jpg?quality=90&strip=all&crop=13.957157090668,0,72.085685818665,100',
      caption: 'The Battle for the Future Begins',
      description: 'Enter the world of Valorant, where precision meets strategy in a high-stakes tactical shooter. Join a team of unique agents, each with powerful abilities, and fight to control critical sites. Every move counts in this fast-paced game of skill, teamwork, and deception.',
    },
    {
      img: 'https://image.api.playstation.com/vulcan/ap/rnd/202207/1210/aqZdSwWyy9JcQ66BxHDKrky6.jpg',
      caption: 'A Journey of Gods and Titans',
      description: 'Embark on an epic adventure with Kratos and his son Atreus as they navigate the realms of Norse mythology. Face fierce gods, legendary monsters, and explore breathtaking landscapes while uncovering the secrets of their past.',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <Box position="relative" maxWidth="100vw" h={'89vh'} margin="auto" overflow="hidden"
    display={'flex'} justifyContent={'center'} alignItems={'center'}  >
      <Button
        onClick={prevSlide}
        
        width={'30px'}
          variant="solid"
          color="black"
          borderRadius="full"
        size="lg"
        position="absolute"
        left="0"
      >
        <FaChevronLeft />
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
        bottom="5%"
        maxW={'50%'}
        color="white"
        flexDirection="column"
        alignItems="center"
        backdropFilter="blur(10px)" 
        backgroundColor="rgba(0, 0, 0, 0.5)" 
        borderRadius="md"  
  padding="3"
      >
        <Text fontSize="4xl" fontWeight="bold">
          {slides[currentSlide].caption}
        </Text>
        <Text fontSize="lg" justifyContent={"center"}>{slides[currentSlide].description}</Text>
      </Flex>
      
        
        <Button
        onClick={nextSlide}
        width={'20px'}
          variant="solid"
          color="black"
          borderRadius="full"
        size="lg"
        position="absolute"
        right="0"
      >
        <FaChevronRight />
        </Button>
    </Box>
  );
};

export default Carousel;
