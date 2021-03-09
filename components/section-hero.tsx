import NextLink from "next/link";
import { Heading, Text, Link, Stack, Box, Button } from "@chakra-ui/react";
import { MdArrowForward } from "react-icons/md";

import { Section } from "./section";

export const HeroSection = () => {
  return (
    <Section>
      <Heading as="h1" size="2xl" mb={8}>
        Hi there{" "}
        <span role="img" aria-label="smile">
          😀
        </span>
      </Heading>
      <Stack spacing={3} maxW={"5xl"} mb={12}>
        <Text
          color={"white"}
          fontSize={{
            base: "lg",
            sm: "2xl",
            md: "3xl",
          }}
        >
          This is Garden IoT, that can monitor your Garden with Raspberry PI
          module.
        </Text>
        <Text
          color={"white"}
          fontSize={{
            base: "lg",
            sm: "2xl",
            md: "3xl",
          }}
        >
          You can find awesome stuff about{" "}
          <Link href="https://www.raspberrypi.org/" color={"brandGreen.500"}>
            Raspberry PI
          </Link>
          .
        </Text>
      </Stack>
      <NextLink href={"/about"} passHref={true}>
        <Button
          as={Link}
          data-splitbee-event="cta button clicked"
          variant={"outline"}
          rightIcon={<MdArrowForward />}
          _hover={{ textDecoration: "none", bg: "gray.700" }}
        >
          Learn more about Garden IoT
        </Button>
      </NextLink>
    </Section>
  );
};
