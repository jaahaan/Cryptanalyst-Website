import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import Mod from "../components/Mod";
function Modulus() {
  return (
    <VStack spacing="10px" className="container">
      <Container maxW="xl" centerContent>
        <Box bg="#242526" w="100%" p={5} borderRadius="lg" m={5}>
          <Text fontSize="3xl" mb={5} color="#27b3cc" className="text-center">
            Modulus
          </Text>
          <Tabs isFitted variant="soft-rounded">
            <TabList mb="1em" className="tab">
              <Tab
                _selected={{ color: "white", bg: "#27b3cc" }}
                color="#B0B3B8"
              >
                Positive Number
              </Tab>
              <Tab
                _selected={{ color: "white", bg: "#27b3cc" }}
                color="#B0B3B8"
              >
                Negative Number
              </Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <Mod checkAlgo="positive" />
              </TabPanel>

              <TabPanel>
                <Mod checkAlgo="negative" />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Container>
    </VStack>
  );
}

export default Modulus;
