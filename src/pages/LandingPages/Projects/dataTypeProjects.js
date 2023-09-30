import i18n from "locales/i18n";

export default function data() {
  const listTypeProjects = [
    {
      label: i18n.t('noi_bat'),
      value: "highlight"
    },
    {
      label: i18n.t('ung_dung_di_dong'),
      value: "app"
    },
    {
      label: "Website",
      value: "web"
    },
    {
      label: i18n.t('thuong_hieu'),
      value: "brand"
    },
    {
      label: "UI/UX",
      value: "design"
    }
  ]

  return {
    listTypeProjects
  };
}
