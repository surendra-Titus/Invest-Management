import { Outlet } from "react-router-dom";
import { Flex, Box } from "@chakra-ui/react";
import Header from "./Header";
import Sidemenu from "./Sidemenu";
import { useTranslation } from "react-i18next";

const Body = () => {
  const { i18n } = useTranslation();

  return (
    <Box height="100vh" width="100vw" overflow={"hidden"}>
      <Header />
      <Flex direction="row" height="100%">
        <Sidemenu />
        <Box flex="1" p={4}>
          <Outlet />
        </Box>
      </Flex>
    </Box>
  );
};

export default Body;
