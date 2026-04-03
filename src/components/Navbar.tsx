import { Heading, HStack, Link } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <>
      <HStack justifyContent="space-between" padding={5}>
        <Link href="/">
          <Heading> Portfolio </Heading>
        </Link>

        <HStack gap={7}>
          <Link href="#about">
            <Heading>About</Heading>
          </Link>
          <Link href="#experience">
            <Heading>Experience</Heading>
          </Link>
          <Link href="#projects">
            <Heading>Projects</Heading>
          </Link>
          <Link href="#contact">
            <Heading>Contact</Heading>
          </Link>
        </HStack>
      </HStack>
    </>
  );
};

export default Navbar;
