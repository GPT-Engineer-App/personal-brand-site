import { Container, Text, VStack, Box, Heading, Button, Image, Flex } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Box textAlign="center">
          <Image
            borderRadius="full"
            boxSize="150px"
            src="https://via.placeholder.com/150"
            alt="Profile Image"
            mb={4}
          />
          <Heading as="h1" size="2xl" mb={2}>John Doe</Heading>
          <Text fontSize="lg" color="gray.500">Full Stack Developer</Text>
        </Box>
        <Text fontSize="md" textAlign="center" maxW="600px">
          Welcome to my personal website. I am a passionate developer with experience in building web applications using modern technologies. Feel free to explore my work and get in touch!
        </Text>
        <Flex justifyContent="center" gap={4}>
          <Button as="a" href="https://github.com/johndoe" leftIcon={<FaGithub />} colorScheme="teal" variant="outline">
            GitHub
          </Button>
          <Button as="a" href="https://linkedin.com/in/johndoe" leftIcon={<FaLinkedin />} colorScheme="teal" variant="outline">
            LinkedIn
          </Button>
          <Button as="a" href="mailto:johndoe@example.com" leftIcon={<FaEnvelope />} colorScheme="teal" variant="outline">
            Email
          </Button>
        </Flex>
      </VStack>
    </Container>
  );
};

export default Index;