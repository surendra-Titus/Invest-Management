import { useTranslation } from "react-i18next";
import { useEffect, useRef } from "react";
import { Box, Heading, Spinner, Flex } from "@chakra-ui/react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend,
} from "recharts";
import { useGetInvestmentsQuery } from "@/services/investments/investmentApi";
import SummaryCard from "./SummaryCard";
type Investment = {
  id: number;
  name: string;
  amount: number;
  roi: number;
};

const Dashboard = () => {
  const { t, i18n } = useTranslation();
  const { data: investments, isLoading, isError } = useGetInvestmentsQuery({});
  const componentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (componentRef.current) {
      componentRef.current.dir = i18n.dir();
    }
  }, []);

  const totalAmount =
    investments?.reduce(
      (acc: number, inv: Investment) => acc + inv.amount,
      0
    ) || 0;

  const averageROI =
    investments?.reduce((acc: number, inv: Investment) => acc + inv.roi, 0) /
      investments?.length || 0;

  if (isLoading) return <Spinner size="xl" />;
  if (isError) return <div>{t("Errorloadinginvestments")}</div>;
  if (!investments) return <div>{t("Noinvestmentsfound")}</div>;
  console.log(investments);
  return (
    <Box p={4} dir={i18n.dir()} ref={componentRef}>
      <Heading mb={4}>{t("Investments")}</Heading>
      <Flex gap={4} mb={6} flexWrap="wrap">
        <SummaryCard label={t("TotalAmount")} value={totalAmount} />
        <SummaryCard label={t("AverageROI")} value={averageROI} />
      </Flex>

      <Box mb={6} mt={6} height="300px" p={2} borderWidth={2} borderRadius="lg">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={investments}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="roi" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </Box>
      <Box mb={6} mt={6} height="300px" p={2} borderWidth={2} borderRadius="lg">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart width={730} height={250} data={investments}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="amount" fill="#8884d8" />
            <Bar dataKey="roi" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
};

export default Dashboard;
