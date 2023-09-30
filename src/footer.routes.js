import logoCompany from "assets/images/logo_default.png";
import { global } from "utils/global";
import i18n from "locales/i18n";
import { useServicePresen, useProjectPresen, useInfoSocial, useInfoSetting } from "pages/Presentation/sections/hook";

const date = new Date().getFullYear();

export const useFooterRoutesController = () => {
  const { resultServices } = useServicePresen();
  const { resultProjects } = useProjectPresen();
  const { listSocials } = useInfoSocial();
  const { resultInfos } = useInfoSetting();
  const address = resultInfos.find(item => item?.key == "address")?.content || "";
  const email = resultInfos.find(item => item?.key == "email")?.content || "";
  const hotline = resultInfos.find(item => item?.key == "hotline")?.content || "";
  
  const footerRoutes = {
    brand: {
      name: i18n.t('cong_ty_co_phan_igb'),
      image: logoCompany,
      route: "/",
    },
    information: [
      {
        title: i18n.t('dia_chi'),
        detail: address
      },
      {
        title: "Email",
        detail: email
      },
      {
        title: "Hotline",
        detail: hotline
      }
    ],
    socials: listSocials,
    menus: [
      {
        title: i18n.t('cong_ty'),
        md: 2,
        items: [
          { title: i18n.t('gioi_thieu'), route: "/about-us" },
          { title: i18n.t('doi_ngu_phat_trien'), route: "/about-us" },
          { title: i18n.t('tuyen_dung'), route: "/about-us" },
          { title: i18n.t('lien_he'), route: "/about-us" },
        ],
      },
      {
        title: i18n.t('dich_vu'),
        items: resultServices,
      },
      {
        title: i18n.t('du_an'),
        items: resultProjects,
      }
    ],
    copyright:  `All rights reserved. Copyright © ${date} ${global?.brandName}`,
  }

  return {
    footerRoutes
  };
}
