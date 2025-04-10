import { Box, Flex } from "@chakra-ui/react";
import SidemenuContent from "./SidemenuContent";
import LanguageSwitcher from "./LanguageSwitcher";

const Sidemenu = () => {
  return (
    <Box
      w="250px"
      minH="100vh"
      p={4}
      display={{ base: "none", md: "block" }}
      borderRight="1px solid #e2e8f0"
      bg="gray.100"
      // color="white"
    >
      <Flex direction={"column"} height="100%" justify="space-between" pb={10}>
        <SidemenuContent />
        <LanguageSwitcher />
      </Flex>
    </Box>
  );
};

export default Sidemenu;
