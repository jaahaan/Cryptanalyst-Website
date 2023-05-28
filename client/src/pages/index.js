import { Flex, HStack, IconButton } from "@chakra-ui/react";
import React from "react";
import { MdMenu } from "react-icons/md";
import { Sidebar } from "../components/Sidebar";

const IndexPage = () => {
  const [collapse, setCollapse] = React.useState(false);

  return (
    <HStack h="100vh" padding={5}>
      <Flex
        as="aside"
        h="full"
        maxW={collapse ? 250 : 60}
        bg="#242526"
        alignItems="start"
        flexDirection="column"
        justifyContent="space-between"
        transition="ease-in-out .2s"
        borderRadius="2xl"
      >
        <Sidebar collapse={collapse} />
      </Flex>
      <Flex
        as="main"
        h="full"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        position="relative"
        borderRadius="2xl"
      >
        <IconButton
          aria-label="Menu Colapse"
          icon={<MdMenu />}
          className="iconButton"
          onClick={() => setCollapse(!collapse)}
        />
      </Flex>
    </HStack>
  );
};

export default IndexPage;
