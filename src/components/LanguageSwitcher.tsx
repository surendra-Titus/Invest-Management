import { Portal, Select, createListCollection } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation();
  const languages = createListCollection({
    items: [
      { label: "English", value: "en" },
      { label: "Arabic", value: "ar" },
      { label: "Spanish", value: "es" },
      { label: "French", value: "fr" },
      { label: "German", value: "de" },
    ],
  });
  const [selectedLanguage, setSelectedLanguage] = useState(
    languages.items.find((item) => item.value === i18n.language) ||
      languages.items[0]
  );
  const handleChange = (value: string) => {
    const selected = languages.items.find((item) => item.value === value);
    if (selected) {
      setSelectedLanguage(selected);
      i18n
        .changeLanguage(value)
        .catch((error) => console.error("Error changing language:", error));
    }
  };

  useEffect(() => {
    //document.body.dir = i18n.dir();
  }, [i18n, i18n.language]);

  return (
    <Select.Root
      collection={languages}
      size="sm"
      width="100px"
      defaultValue={[selectedLanguage.value]}
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
