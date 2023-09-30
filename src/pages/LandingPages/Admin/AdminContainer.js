import { useState } from "react";
import MKBox from "components/MKBox";
import Sidenav from "examples/Sidenav";
import logoCompany from "assets/images/logo_light.png";
import { useDispatch, useSelector } from "react-redux";
import { updateAdminStoreAction } from "stores/modules/admin";
import i18n from "locales/i18n";
import FeedIcon from '@mui/icons-material/Feed';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import HandshakeIcon from '@mui/icons-material/Handshake';
import PublicIcon from '@mui/icons-material/Public';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import CodeOffIcon from '@mui/icons-material/CodeOff';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import Groups3Icon from '@mui/icons-material/Groups3';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import PropTypes from "prop-types";

function AdminContainer({children}) {
    const menus = [
        {
            type: "collapse",
            name: i18n.t('thong_tin_chung'),
            key: "admin/information",
            icon: <FeedIcon />,
            route: "/admin/information"
        },
        {
            type: "collapse",
            name: i18n.t('dich_vu'),
            key: "admin/services",
            icon: <MiscellaneousServicesIcon />,
            route: "/admin/services"
        },
        {
            type: "collapse",
            name: i18n.t('du_an'),
            key: "admin/projects",
            icon: <AppRegistrationIcon />,
            route: "/admin/projects"
        },
        {
            type: "collapse",
            name: i18n.t('chi_so_noi_bat'),
            key: "admin/outstanding-index",
            icon: <AutoGraphIcon />,
            route: "/admin/outstanding-index"
        },
        {
            type: "collapse",
            name: i18n.t('linh_vuc_hoat_dong'),
            key: "admin/activity",
            icon: <PublicIcon />,
            route: "/admin/activity"
        },
        {
            type: "collapse",
            name: i18n.t('doi_ngu_phat_trien'),
            key: "admin/team",
            icon: <Groups3Icon />,
            route: "/admin/team"
        },
        {
            type: "collapse",
            name: i18n.t('doi_tac_chien_luoc'),
            key: "admin/partner",
            icon: <HandshakeIcon />,
            route: "/admin/partner"
        },
        {
            type: "collapse",
            name: i18n.t('ngon_ngu_lap_trinh'),
            key: "admin/program",
            icon: <CodeOffIcon />,
            route: "/admin/program"
        },
        {
            type: "collapse",
            name: i18n.t('thanh_tuu'),
            key: "admin/achievement",
            icon: <VolunteerActivismIcon />,
            route: "/admin/achievement"
        },
        {
            type: "collapse",
            name: i18n.t('nang_luc_hoat_dong'),
            key: "admin/capacity",
            icon: <AutoAwesomeIcon />,
            route: "/admin/capacity"
        },
        {
            type: "collapse",
            name: i18n.t('y_kien_danh_gia'),
            key: "admin/rating",
            icon: <StarHalfIcon />,
            route: "/admin/rating"
        },
        {
            type: "collapse",
            name: i18n.t('tin_tuc'),
            key: "news",
            icon: <NewspaperIcon />,
            route: "/admin/news"
        },
        {
            type: "collapse",
            name: i18n.t('tuyen_dung'),
            key: "jobs",
            icon: <Diversity3Icon />,
            route: "/admin/jobs"
        }
    ];

    const dispatch = useDispatch();
    // const {userInfo} = useSelector(state => state.user);
    const {miniSidenav} = useSelector(state => state.admin);
    const [onMouseEnter, setOnMouseEnter] = useState(false);

    const handleOnMouseEnter = () => {
        if (miniSidenav && !onMouseEnter) {
            dispatch(updateAdminStoreAction({miniSidenav: false}));
            setOnMouseEnter(true);
        }
    };
    
    const handleOnMouseLeave = () => {
        if (onMouseEnter) {
            dispatch(updateAdminStoreAction({miniSidenav: true}));
            setOnMouseEnter(false);
        }
    };

    return (
        <MKBox>
            <Sidenav
                logo={logoCompany}
                routes={menus}
                onMouseEnter={handleOnMouseEnter}
                onMouseLeave={handleOnMouseLeave}
            />
            {children}
        </MKBox>
    );
}

AdminContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AdminContainer;
