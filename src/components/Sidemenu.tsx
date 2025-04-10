import {
  Box,
  Flex,
  Button,
  Drawer,
  CloseButton,
  Portal,
} from "@chakra-ui/react";
import SidemenuContent from "./SidemenuContent";
import { GiHamburgerMenu } from "react-icons/gi";

const Sidemenu = () => {
  return (
    <>
      <Drawer.Root placement={"start"} size={"sm"}>
        <Drawer.Trigger asChild>
          <Button
            aria-label="Open menu"
            variant="outline"
            position="fixed"
            top={4}
            left={4}
            zIndex={20}
            size="sm"
            display={{ base: "block", md: "none" }}
          >
            <GiHamburgerMenu />
          </Button>
        </Drawer.Trigger>
        <Portal>
          <Drawer.Backdrop />
          <Drawer.Positioner>
            <Drawer.Content>
              <Drawer.Header>
                <Drawer.CloseTrigger asChild>
                  <CloseButton size="sm" />
                </Drawer.CloseTrigger>
              </Drawer.Header>
              <Drawer.Context>
                {(store) => (
                  <Drawer.Body>
                    <Flex
                      direction="column"
                      height="100%"
                      justify="space-between"
                      pb={10}
                    >
                      <SidemenuContent
                        onItemClick={() => store.setOpen(false)}
                      />
                    </Flex>
                  </Drawer.Body>
                )}
              </Drawer.Context>
              <Drawer.Footer />
            </Drawer.Content>
          </Drawer.Positioner>
        </Portal>
      </Drawer.Root>

      <Box
        w="250px"
        minH="100vh"
        p={4}
        display={{ base: "none", md: "block", lg: "block" }}
        borderRight="1px solid #e2e8f0"
        bg="gray.100"
      >
        <Flex
          direction={"column"}
          height="100%"
          justify="space-between"
          pb={10}
        >
          <SidemenuContent />
        </Flex>
      </Box>
    </>
  );
};

export default Sidemenu;
