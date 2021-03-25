import React from "react";
import { Flex, Box, chakra } from "@chakra-ui/react";

interface ViewerProps {
  name: string;
  data: string;
}

function Viewer({ name, data }: ViewerProps) {
  return (
    <Flex p={50} w="full" alignItems="center" justifyContent="center">
      <Flex
        direction="column"
        justifyContent="center"
        alignItems="center"
        w="sm"
        mx="auto"
      >
        <Box
          bg="gray.300"
          h={64}
          w="full"
          rounded="lg"
          shadow="md"
          bgSize="cover"
          bgPos="center"
          style={{
            backgroundImage:
              "url(https://res.cloudinary.com/ddjsyskef/image/upload/v1616661700/iot/txqtlo5ttotfmfr7lmsz.jpg)",
          }}
        ></Box>

        <Box
          w={{ base: 56, md: 64 }}
          bg={"white"}
          mt={-10}
          shadow="lg"
          rounded="lg"
          overflow="hidden"
        >
          <chakra.h3
            py={2}
            textAlign="center"
            fontWeight="bold"
            textTransform="uppercase"
            color={"gray.800"}
            letterSpacing={1}
          >
            {name}
          </chakra.h3>

          <Flex
            alignItems="center"
            justifyContent="space-between"
            py={2}
            px={3}
            bg={"gray.200"}
          >
            <chakra.span fontWeight="bold" color={"gray.800"}>
              {data}
            </chakra.span>
            <chakra.button
              bg="gray.800"
              fontSize="xs"
              fontWeight="bold"
              color="white"
              px={2}
              py={1}
              rounded="lg"
              textTransform="uppercase"
              _hover={{
                bgGradient: "linear(to-l, #7928CA, #FF0080)",
              }}
              _focus={{
                bgGradient: "linear(to-l, #7928CA, #FF0080)",
                outline: "none",
              }}
            >
              Trigger
            </chakra.button>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
}

export default Viewer;
