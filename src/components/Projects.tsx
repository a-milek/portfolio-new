import {
  Card,
  Button,
  Heading,
  Image,
  Tag,
  Wrap,
  WrapItem,
  Text,
  SimpleGrid,
  Link,
  Box,
} from "@chakra-ui/react";
import projects from "../data/projects.json";
const Projects = () => {
  return (
    <Box id="projects" display="flex" flexDirection="column">
      <Heading size="4xl" mb={6}>
        Projects
      </Heading>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} gap={6}>
        {projects.map((project, id) => (
          <Card.Root key={id} maxW="100%" overflow="hidden">
            <Image
              src={project.imageSrc}
              alt={project.title}
              aspectRatio="16 / 9"
            />
            <Card.Header>
              <Heading size="md">{project.title}</Heading>
            </Card.Header>
            <Card.Body>
              <Text mb={3}>{project.description}</Text>
              <Wrap>
                {project.skills.map((skill, index) => (
                  <WrapItem key={index}>
                    <Tag.Root>
                      <Tag.Label colorScheme="blue">{skill}</Tag.Label>
                    </Tag.Root>
                  </WrapItem>
                ))}
              </Wrap>
            </Card.Body>
            <Card.Footer gap={4}>
              <Link href={project.demo}>
                <Button colorPalette="teal" variant="solid">
                  More
                </Button>
              </Link>
              {project.source && (
                <Link href={project.source}>
                  <Button variant="outline">Source</Button>
                </Link>
              )}
            </Card.Footer>
          </Card.Root>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Projects;
