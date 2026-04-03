import { Box, Grid, GridItem, Heading, HStack, Text } from "@chakra-ui/react";
import experience from "../data/experience.json";

const Experience = () => {
  return (
    <Box id="experience" display="flex" flexDirection="column">
      <Heading size="4xl" mb={6}>
        Experience
      </Heading>
      <Grid gap={8} py={8} width={"80%"}>
        {experience.map((exp, index) => (
          <GridItem key={index}>
            <HStack align="start" gap={4}>
              <Text fontWeight="bold" color={"gray.500"} width={"20%"}>
                {exp.date}
              </Text>

              <Box borderRadius="lg" width="80%" textAlign="justify">
                <Heading size="md">{exp.title}</Heading>
                <Text mt={2}>{exp.description}</Text>
              </Box>
            </HStack>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default Experience;
