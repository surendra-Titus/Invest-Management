import { VStack, Text, Box } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
const MotionBox = motion.create(Box);

const links = [
  { label: "Dashboard", path: "/" },
  { label: "Investments", path: "/investments" },
  { label: "AddNewInvestment", path: "/add-investment" },
];

const SidemenuContent = ({ onItemClick }: { onItemClick?: () => void }) => {
  const { t, i18n } = useTranslation();
  return (
    <VStack align="start" dir={i18n.dir()}>
      {links.map((link) => (
        <NavLink
          key={link.path}
          to={link.path}
          end
          onClick={onItemClick}
          style={({ isActive }) => ({
            width: "100%",
            fontWeight: isActive ? "bold" : "normal",
          })}
        >
          {({ isActive }) => (
            <MotionBox
              px={2}
              py={1}
              borderRadius="md"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
              bg={isActive ? "blue.100" : "transparent"}
              _hover={{ bg: "gray.100" }}
            >
              <Text>{t(link.label)}</Text>
            </MotionBox>
          )}
        </NavLink>
      ))}
    </VStack>
  );
};

export default SidemenuContent;
