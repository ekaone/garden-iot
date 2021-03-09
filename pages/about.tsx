import {
  Text,
  Alert,
  AlertIcon,
  Box,
  AlertTitle,
  AlertDescription,
  Stack,
} from "@chakra-ui/react";

import { SectionHeadline } from "../components/section-headline";

export const WhoIAm = () => {
  return (
    <>
      <SectionHeadline>Garden IoT</SectionHeadline>

      <Text mb={6} fontSize={"lg"}>
        Here are some of short description about Garden IoT.
      </Text>

      <Stack spacing={12}>
        <Alert status="success" rounded={"md"}>
          <AlertIcon />
          <Box flex="1">
            <AlertTitle>Next.js Tip!</AlertTitle>
            <AlertDescription display="block">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              sint, dolor laboriosam hic saepe facilis ✌️
            </AlertDescription>
          </Box>
        </Alert>
      </Stack>
    </>
  );
};

export default WhoIAm;
