import {
  Text,
  Alert,
  AlertIcon,
  Box,
  AlertTitle,
  AlertDescription,
  Stack,
  SimpleGrid,
} from "@chakra-ui/react";

import { SectionHeadline } from "../components/section-headline";
import { Viewer } from "../components";

const devices = [
  { id: 1, name: "Temperature", data: "129" },
  { id: 2, name: "Switch", data: "53" },
];

const Dashboard = () => {
  return (
    <>
      <SectionHeadline>Dashboard</SectionHeadline>

      <Text mb={6} fontSize={"lg"}>
        Here are Dashboard Garden IoT.
      </Text>

      <Stack spacing={5}>
        <Alert status="success" rounded={"md"}>
          <AlertIcon />
          <Box flex="1">
            <AlertTitle>Monitoring!</AlertTitle>
            <AlertDescription display="block">
              Dashboard Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto rem minus eaque dicta incidunt aliquam soluta neque
              quod recusandae? Maxime aliquam error quo sapiente labore earum,
              excepturi voluptas expedita cum{" "}
              <span role="img" aria-label="pc">
                💻
              </span>
            </AlertDescription>
          </Box>
        </Alert>
        <SimpleGrid columns={2} spacing={10}>
          {devices.map((device) => (
            <Box>
              <Viewer name={device.name} data={device.data} />
            </Box>
          ))}
        </SimpleGrid>
      </Stack>
    </>
  );
};

export default Dashboard;
