import { Portal, Select, createListCollection } from "@chakra-ui/react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation();
  const languages = createListCollection({
    items: [
      { label: "English", value: "en" },
      { label: "Arabic", value: "ar" },
    ],
  });

  const handleChange = (value: string) => {
    i18n.changeLanguage(value);
  };

  useEffect(() => {
    //document.body.dir = i18n.dir();
  }, [i18n, i18n.language]);

  return (
    <Select.Root
      collection={languages}
      size="sm"
      width="100px"
      defaultValue={[i18n.language ?? "en"]}
    >
      <Select.HiddenSelect />
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder="Select language" />
        </Select.Trigger>
        <Select.IndicatorGroup>
          <Select.Indicator />
        </Select.IndicatorGroup>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content>
            {languages.items.map((language) => (
              <Select.Item
                item={language}
                key={language.value}
                onClick={() => {
                  handleChange(language.value);
                }}
              >
                {t(language.label)}
                <Select.ItemIndicator />
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  );
};

export default LanguageSwitcher;
