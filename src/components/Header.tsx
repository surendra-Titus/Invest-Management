import { Flex, IconButton, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
//import { ColorModeToggle } from "./ColorModeToggle";

const Header = () => {
  const { t } = useTranslation();
  return (
    <>
      <Flex
        as="header"
        justify="space-between"
        align="center"
        px={4}
        py={2}
        boxShadow="md"
        position="sticky"
        top="0"
        bg="white"
        zIndex="10"
      >
        <IconButton
          aria-label="Open menu"
          variant="ghost"
          display={{ base: "inline-flex", md: "none" }}
        />
        <Text fontSize="lg" fontWeight="bold">
          {t("Invest")}
        </Text>
        {/* <ColorModeToggle></ColorModeToggle> */}
        <LanguageSwitcher />
      </Flex>
    </>
  );
};

export default Header;
