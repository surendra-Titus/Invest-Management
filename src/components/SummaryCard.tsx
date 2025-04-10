import { Card, CardBody, Text } from "@chakra-ui/react";
import React from "react";

interface SummaryCardProps {
  label: string;
  value: number;
}

const SummaryCard: React.FC<SummaryCardProps> = ({ label, value }) => {
  return (
    <Card.Root size="sm" flex="1">
      <CardBody>
        <Text fontWeight="bold" mb={2}>
          {label}
        </Text>
        <Text color="fg.muted">${value.toFixed(2)}</Text>
      </CardBody>
    </Card.Root>
  );
};

export default SummaryCard;
