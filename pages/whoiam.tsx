import {
  Text,
  Box,
  Link,
  Stack,
  Flex,
  SimpleGrid,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/react";
import { MdDone } from "react-icons/md";
// components
import { SectionHeadline } from "../components/section-headline";
import { Avatar } from "../components/avatar";

const skills = [
  {
    title: "Languages",
    knowledge: ["CSS & HTML", "JavaScript", "Typescript"],
  },
  {
    title: "Frontend",
    knowledge: ["React", "Next.js", "Gatsby.js", "Hugo"],
  },
  ,
  {
    title: "Design",
    knowledge: ["CSS", "Chakra UI", "Tailwind CSS", "CSS in JS"],
  },
  {
    title: "Testing",
    knowledge: [
      "Unit Testing",
      "E2E Testing",
      "React Testing Library",
      "Cypress",
    ],
  },
];

export const AboutPage = () => {
  return (
    <>
      <SectionHeadline>
        Hallo, I am Eka{" "}
        <span role="img" aria-label="waving hand">
          👋
        </span>
      </SectionHeadline>
      <Flex direction={["column", "column", "row"]} mb={{ base: 12, md: 0 }}>
        <Stack spacing={6} maxW={"2xl"} order={[2, 2, 1]}>
          <Text fontSize={"xl"} as={"em"}>
            I design and build Web Development from Indonesia.
          </Text>

          <Text fontSize={"lg"}>
            Outside of the regular work I spend my time{" "}
            <Link href={"https://github.com/ekaone/"}>
              contribute to open source projects
            </Link>
            , also read widely and try new things
          </Text>
        </Stack>
        <Box minW={300} mx={"auto"} mb={{ base: 12, md: 0 }} order={[1, 1, 2]}>
          <Avatar />
        </Box>
      </Flex>

      <Box bg={"gray.900"} p={8} rounded={"md"}>
        <SectionHeadline size={"lg"} as={"h3"}>
          My Knowledge
        </SectionHeadline>
        <Text fontSize={"lg"} mb={6}>
          These are the things I know about or use.
        </Text>
        <SimpleGrid columns={[1, 2, 4]} spacing={10}>
          {skills.map((skill) => (
            <Box key={skill.title}>
              <Text fontWeight={"bold"} mb={2}>
                {skill.title}
              </Text>
              <List>
                {skill.knowledge.map((k) => (
                  <ListItem key={k}>
                    <ListIcon as={MdDone} color={"brandGreen.500"} />
                    {k}
                  </ListItem>
                ))}
              </List>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
};

export default AboutPage;
