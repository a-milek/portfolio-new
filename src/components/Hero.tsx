import {
  Heading,
  HStack,
  VStack,
  Text,
  Button,
  Link,
  Image,
} from "@chakra-ui/react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { RiMailLine } from "react-icons/ri";

const Hero = () => {
  return (
    <HStack width={"80%"} paddingTop="5%" paddingBottom="5%">
      <Image
        src="src\assets\portraitt.png"
        boxSize="20%"
        borderRadius="10%"
        objectFit="cover"
        alt="Portrait"
      />
      <VStack px={5} width={"75%"}>
        <Heading size="4xl">Hi, I'm Anna!</Heading>
        <Text fontSize="md" textAlign="justify">
          I’m a Computer Engineering graduate based in Poland with over a year
          of experience in Full Stack Development, working with technologies
          such as Python, C++, C, and React.
          <br />
          <br />
          From a young age, I’ve been deeply fascinated by technology and what
          started as curiosity quickly grew into a passion that led me to pursue
          a career in Software Engineering. I’m driven by the possibilities that
          technology offers and feel excited to contribute to a field that
          continues to shape the future.
          <br />
          <br />
          Outside of work, I enjoy expressing creativity through tabletop RPGs,
          art, and crochet. I’m always eager to explore new hobbies and ideas,
          constantly feeding my curiosity and expanding my skill set.
        </Text>
        <HStack gap={4} mt={5}>
          <Link href="https://www.linkedin.com/in/anna-mi%C5%82ek/">
            <Button>
              <FaLinkedin />
            </Button>
          </Link>
          <Link href="https://github.com/a-milek/">
            <Button>
              <FaGithub />
            </Button>
          </Link>

          <Link href="mailto:anna@milek.eu.org">
            <Button>
              <RiMailLine />
            </Button>
          </Link>
        </HStack>
      </VStack>
    </HStack>
  );
};

export default Hero;
