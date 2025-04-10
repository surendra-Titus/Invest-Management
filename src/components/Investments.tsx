import { useEffect, useRef } from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Table,
  Card,
  Spinner,
} from "@chakra-ui/react";
import { useGetInvestmentsQuery } from "../services/investments/investmentApi";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

type Investment = {
  id: number;
  name: string;
  amount: number;
  roi: number;
};

const Investments = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const { data: investments, isLoading, isError } = useGetInvestmentsQuery({});
  const componentRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (componentRef.current) {
      componentRef.current.dir = i18n.dir();
    }
  }, []);

  if (isLoading) return <Spinner size="xl" />;
  if (isError) return <div>{t("Errorloadinginvestments")}</div>;
  if (!investments) return <div>{t("Noinvestmentsfound")}</div>;
  return (
    <>
      <Flex>
        <Box flex={1} p={4} dir={i18n.dir()} ref={componentRef}>
          <Card.Root
            shadow="md"
            borderWidth="1px"
            borderRadius="lg"
            height="calc(100vh - 100px)"
            overflow="hidden"
          >
            <Card.Header>
              <Box
                flexDir={"row"}
                display="flex"
                justifyContent="space-between"
                alignItems={"center"}
              >
                <Heading>{t("Investments")}</Heading>
                <Button
                  colorScheme="teal"
                  size="sm"
                  onClick={() => {
                    navigate("/add-investment");
                  }}
                >
                  {t("Add")}
                </Button>
              </Box>
            </Card.Header>
            <Card.Body>
              <Table.ScrollArea
                borderWidth="1px"
                rounded="md"
                height="calc(100vh - 200px)"
              >
                <Table.Root
                  size="sm"
                  borderWidth="1px"
                  borderRadius="lg"
                  overflowY="auto"
                  colorScheme="teal"
                  striped
                  showColumnBorder
                  stickyHeader
                  interactive
                >
                  <Table.Header>
                    <Table.Row>
                      <Table.ColumnHeader>{t("Name")}</Table.ColumnHeader>
                      <Table.ColumnHeader textAlign="end">
                        {t("Amount")}
                      </Table.ColumnHeader>
                      <Table.ColumnHeader textAlign="end">
                        {t("ROI")}
                      </Table.ColumnHeader>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    {investments.map((inv: Investment) => (
                      <Table.Row key={inv.id}>
                        <Table.Cell>{inv.name}</Table.Cell>
                        <Table.Cell textAlign="end">{inv.amount}</Table.Cell>
                        <Table.Cell textAlign="end">{inv.roi}%</Table.Cell>
                      </Table.Row>
                    ))}
                  </Table.Body>
                </Table.Root>
              </Table.ScrollArea>
            </Card.Body>
            <Card.Footer />
          </Card.Root>
        </Box>
      </Flex>
    </>
  );
};

export default Investments;
