import { Text, Box } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <Box as={"footer"} py={8} textAlign={"center"}>
      <Text fontSize={"small"}>
        Build with{" "}
        <span role="img" aria-label="beutiful">
          ❤️
        </span>{" "}
        Beautiful mind{" "}
        <span role="img" aria-label="mind">
          💭
        </span>
      </Text>
    </Box>
  );
};
