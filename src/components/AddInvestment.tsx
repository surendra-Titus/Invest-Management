import { Box, Button, Input, Field, Text } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useTranslation } from "react-i18next";
import { SubmitHandler } from "react-hook-form";
import { TFunction } from "i18next";

type IFormInput = {
  name: string;
  amount: number;
  document?: FileList;
};

const createSchema = (t: TFunction) =>
  yup.object({
    name: yup.string().required(t("Name is required")),
    amount: yup
      .number()
      .typeError(t("Amount must be a number"))
      .positive(t("Amount must be greater than 0"))
      .required(t("Amount is required")),
  });

const AddInvestment: React.FC = () => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormInput>({
    resolver: yupResolver(createSchema(t)),
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log("Form submitted:", {
      ...data,
      document: data.document?.[0],
    });
    reset();
  };

  return (
    <>
      <Box maxW="md" mx="auto" mt={4} p={4} borderWidth={1} borderRadius="lg">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Field.Root invalid={!!errors.name}>
            <Field.Label>
              {t("Name")}
              <Field.RequiredIndicator />
            </Field.Label>
            <Input {...register("name")} />
            <Field.HelperText />
            <Field.ErrorText color="red.500">
              {errors.name?.message}
            </Field.ErrorText>
          </Field.Root>

          <Field.Root invalid={!!errors.amount} mt={4}>
            <Field.Label>{t("Amount")}</Field.Label>
            <Input type="number" {...register("amount")} />
            <Field.ErrorText>{errors.amount?.message}</Field.ErrorText>
          </Field.Root>

          <Box mt={4}>
            <Text as="label" fontWeight="medium" mb={1} display="block">
              {t("Document(optional)")}
            </Text>
            <Input
              type="file"
              {...register("document")}
              accept=".pdf,.jpg,.jpeg,.png"
              p={1}
              border="1px solid"
              borderColor="gray.200"
              borderRadius="md"
              _hover={{ borderColor: "gray.300" }}
            />
            {errors.document && (
              <Text color="red.500" fontSize="sm" mt={1}>
                {errors.document.message}
              </Text>
            )}
            <Text fontSize="sm" color="gray.500" mt={1}>
              {t("Max 5MB, PDF or images only")}
            </Text>
          </Box>

          <Button type="submit" colorScheme="teal" mt={4}>
            {t("Submit")}
          </Button>
        </form>
      </Box>
    </>
  );
};

export default AddInvestment;
