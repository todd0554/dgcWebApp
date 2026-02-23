// src/components/ProfileEvent.jsx
import React from "react";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import PostsEvent from "./PostsEvent";

function ProfileEvent() {
  return (
    <Box>
      <Box
        border="1px solid"
        borderColor="blackAlpha.200"
        borderRadius="16px"
        bg="white"
        p={{ base: 5, md: 7 }}
        boxShadow="sm"
      >
        <Heading size="lg" mb={2} color="gray.800">
          Upload Event Photos
        </Heading>
        <Text color="gray.600" mb={5}>
          Click the upload button and select a JPG/PNG image.
        </Text>

        <VStack
          spacing={2}
          align="stretch"
          bg="blackAlpha.50"
          border="1px solid"
          borderColor="blackAlpha.100"
          borderRadius="14px"
          p={4}
        >
          <Text fontSize="sm" color="gray.700">
            Tips:
          </Text>
          <Text fontSize="sm" color="gray.600">
            • Upload photos from meetings and outings
          </Text>
          <Text fontSize="sm" color="gray.600">
            • JPG and PNG formats only
          </Text>
        </VStack>

        <Box mt={6}>
          <PostsEvent />
        </Box>
      </Box>
    </Box>
  );
}

export default ProfileEvent;