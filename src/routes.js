import Icon from "@mui/material/Icon";
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import i18n from "locales/i18n";

export const useRoutesController = () => {

  const routes = [
    {
      name: i18n.t('gioi_thieu'),
      icon: <Icon>article</Icon>,
      collapse: [
        {
          name: i18n.t('gioi_thieu'),
          description: i18n.t('gioi_thieu_cong_ty'),
          route: "/about-us",
        },
        {
          name: i18n.t('doi_ngu_phat_trien'),
          description: i18n.t('doi_ngu_chuyen_gia_lam_viec'),
          route: "/development-team"
        },
        {
          name: i18n.t('tuyen_dung'),
          description: i18n.t('co_hoi_viec_lam'),
          route: "/about-us",
        }
      ],
    },
    {
      name: i18n.t('dich_vu'),
      icon: <MiscellaneousServicesIcon />,
      route: "/services"
    },
    {
      name: i18n.t('du_an'),
      icon: <AppRegistrationIcon />,
      route: "/projects"
    },
    {
      name: i18n.t('tin_tuc'),
      icon: <NewspaperIcon />,
      route: "/about-us"
    },
    {
      name: i18n.t('khac'),
      icon: <FormatListBulletedIcon />,
      columns: 1,
      rowsPerColumn: 2,
      collapse: [
        {
          name: i18n.t('thong_tin_khac'),
          collapse: [
            {
              name: i18n.t('tuyen_dung'),
              route: "/pages/landing-pages/author"
            },
            {
              name: i18n.t('lien_he'),
              route: "/contact-us",
            },
          ],
        },
        {
          name: i18n.t('tai_khoan'),
          collapse: [
            {
              name: i18n.t('quan_tri_vien'),
              route: "/admin"
            },
          ],
        },
      ],
    }
  ];

  return {
    routes
  };
}
