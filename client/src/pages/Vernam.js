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
import Decryption from "../components/Decryption";
import Encryption from "../components/Encryption";
function Vernam() {
  return (
    <VStack spacing="10px" className="container">
      <Container maxW="xl" centerContent>
        <Box bg="#242526" w="100%" p={5} borderRadius="lg" m={5}>
          <Text fontSize="3xl" mb={5} color="#27b3cc" className="text-center">
            Vernam Cipher
          </Text>
          <Tabs isFitted variant="soft-rounded">
            <TabList mb="1em" className="tab">
              <Tab
                _selected={{ color: "white", bg: "#27b3cc" }}
                color="#B0B3B8"
              >
                Encryption
              </Tab>
              <Tab
                _selected={{ color: "white", bg: "#27b3cc" }}
                color="#B0B3B8"
              >
                Decryption
              </Tab>
            </TabList>

            <TabPanels>
              {/* Encryption Tab */}
              <TabPanel>
                <Encryption checkAlgo="vernam" />
              </TabPanel>

              {/* Decryption Tab */}
              <TabPanel>
                <Decryption checkAlgo="vernam" />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Container>
    </VStack>
  );
}

export default Vernam;
