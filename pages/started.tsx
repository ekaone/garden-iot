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

const Started = () => {
  return (
    <>
      <SectionHeadline>IoT Dashboard</SectionHeadline>

      <Text mb={3} fontSize={"lg"}>
        Configuration steps.
      </Text>

      <Stack spacing={6}>
        <Alert status="success" rounded={"md"}>
          <AlertIcon />
          <Box flex="1">
            <AlertTitle>
              <span role="img" aria-label="one">
                1️⃣
              </span>{" "}
              Raspberry PI
            </AlertTitle>
            <AlertDescription display="block">
              Makesure you already have{" "}
              <Link
                href="https://www.raspberrypi.org/"
                color={"brandGreen.500"}
                target="_blank"
              >
                Raspberry PI{" "}
              </Link>
              module controller{" "}
              <span role="img" aria-label="ok">
                💻
              </span>
            </AlertDescription>
          </Box>
        </Alert>
        <Alert status="success" rounded={"md"}>
          <AlertIcon />
          <Box flex="1">
            <AlertTitle>
              {" "}
              <span role="img" aria-label="two">
                2️⃣
              </span>{" "}
              Raspberry PI Operating System
            </AlertTitle>
            <AlertDescription display="block">
              Download{" "}
              <Link
                href="https://www.raspberrypi.org/software/"
                color={"brandGreen.500"}
                target="_blank"
              >
                Raspberry PI Operating system{""}
              </Link>
              , you can choose any OS you like, I recommended use Rasbian OS,
              it's easy and the most used on Raspberry PI OS{" "}
              <span role="img" aria-label="pc">
                🏡
              </span>
            </AlertDescription>
          </Box>
        </Alert>
        <Alert status="success" rounded={"md"}>
          <AlertIcon />
          <Box flex="1">
            <AlertTitle>
              {" "}
              <span role="img" aria-label="three">
                3️⃣
              </span>{" "}
              Node JS Runtime
            </AlertTitle>
            <AlertDescription display="block">
              <Link
                href="https://nodejs.org/en/"
                color={"brandGreen.500"}
                target="_blank"
              >
                Node JS{" "}
              </Link>
              is Javascript runtime, so we can use this runtime as Programming
              language on Raspberry PI{" "}
              <span role="img" aria-label="home">
                🏡
              </span>
            </AlertDescription>
          </Box>
        </Alert>
        <Alert status="success" rounded={"md"}>
          <AlertIcon />
          <Box flex="1">
            <AlertTitle>
              {" "}
              <span role="img" aria-label="three">
                4️⃣
              </span>{" "}
              Library
            </AlertTitle>
            <AlertDescription display="block">
              There some library in the world for Node JS that run on Raspberry
              PI, such as{" "}
              <Link
                href="http://johnny-five.io/"
                color={"brandGreen.500"}
                target="_blank"
              >
                Johnny-Five
              </Link>
              {", "}
              <Link
                href="https://github.com/fivdi/pigpi"
                color={"brandGreen.500"}
                target="_blank"
              >
                Pigpio
              </Link>
              {", "}
              <Link
                href="https://github.com/fivdi/onoff"
                color={"brandGreen.500"}
                target="_blank"
              >
                Onoff
              </Link>
              {", "}
              and so many more, currently we will use Johny Five as controller{" "}
              <span role="img" aria-label="beach">
                ⛱
              </span>
            </AlertDescription>
          </Box>
        </Alert>
      </Stack>
    </>
  );
};

export default Started;
