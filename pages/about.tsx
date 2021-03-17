import {
  Text,
  Alert,
  AlertIcon,
  Box,
  AlertTitle,
  AlertDescription,
  Stack,
  Link,
} from "@chakra-ui/react";

import { SectionHeadline } from "../components/section-headline";

export const WhoIAm = () => {
  return (
    <>
      <SectionHeadline>Garden IoT</SectionHeadline>

      <Text mb={6} fontSize={"lg"}>
        Here are some of short description about Garden IoT.
      </Text>

      <Stack spacing={5}>
        <Alert status="success" rounded={"md"}>
          <AlertIcon />
          <Box flex="1">
            <AlertTitle>Monitoring!</AlertTitle>
            <AlertDescription display="block">
              Garden IoT use{" "}
              <Link
                href="https://www.raspberrypi.org/"
                color={"brandGreen.500"}
                target="_blank"
              >
                Raspberry PI{" "}
              </Link>
              as controller interface{" "}
              <span role="img" aria-label="pc">
                💻
              </span>
            </AlertDescription>
          </Box>
        </Alert>
        <Alert status="success" rounded={"md"}>
          <AlertIcon />
          <Box flex="1">
            <AlertTitle>Devices!</AlertTitle>
            <AlertDescription display="block">
              You can use detect Button trigger from raspberry PI, Temperature,
              Stepper motor and so on{" "}
              <span role="img" aria-label="custom">
                🛠
              </span>
            </AlertDescription>
          </Box>
        </Alert>
      </Stack>
    </>
  );
};

export default WhoIAm;
