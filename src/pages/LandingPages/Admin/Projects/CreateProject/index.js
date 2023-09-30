import { useState } from "react";
import { useDispatch } from "react-redux";
import AdminLayout from "examples/LayoutContainers/AdminLayout";
import AdminNavbar from "examples/Navbars/AdminNavbar";
import { Card, Grid, Menu, MenuItem, Icon } from "@mui/material";
import AdminFooter from "examples/Footers/AdminFooter";
import { onCreateProjectAdminAction } from "stores/modules/admin";
import AdminContainer from "../../AdminContainer";
import MKInput from "components/MKInput";
import i18n from "locales/i18n";
import EditorInput from "components/EditorInput";
import MKButton from "components/MKButton";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import { toast } from "react-toastify";
import UploadImage from "components/UploadImage";
import dataTypeProjects from "pages/LandingPages/Projects/dataTypeProjects";
import { useNavigate } from "react-router-dom";

function CreateProject() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { listTypeProjects } = dataTypeProjects();
    const [avatar, setAvatar] = useState(null);
    const [title_vi, setTitleVi] = useState("");
    const [title_en, setTitleEn] = useState("");
    const [sapo_vi, setSapoVi] = useState("");
    const [sapo_en, setSapoEn] = useState("");
    const [detail_vi, setDetailVi] = useState("");
    const [detail_en, setDetailEn] = useState("");
    const [dropdownCate, setDropdownCate] = useState(null);
    const [cateSelected, setCateSelected] = useState(listTypeProjects[0]);

    const onCreate = () => {
        if(!avatar || !cateSelected?.value || !title_vi || !title_en || !sapo_vi || !sapo_en || !detail_vi || !detail_en){
            toast.warn(i18n.t('cap_nhat_day_du_thong_tin'));
            return;
        }
        dispatch(onCreateProjectAdminAction({
            title_vi, title_en, 
            sapo_vi, sapo_en, 
            detail_vi, 
            detail_en, 
            image: avatar,
            type: cateSelected?.value
        }, onSuccess));
    }

    const onSuccess = () => {
        navigate("/admin/projects", {replace: true});
    }

    const openDropdownCate = ({ currentTarget }) => setDropdownCate(currentTarget);
    const closeDropdownCate = () => setDropdownCate(null);

    const onSelectCate = (item) => {
        setCateSelected(item);
        closeDropdownCate();
    }

    // Styles
    const iconStyles = {
        ml: 1,
        fontWeight: "bold",
        transition: "transform 200ms ease-in-out",
    };

    const dropdownIconStyles = {
        transform: dropdownCate ? "rotate(180deg)" : "rotate(0)",
        ...iconStyles,
    };

    return (
        <AdminContainer>
            <AdminLayout>
                <AdminNavbar absolute header={i18n.t('them_du_an_moi')} />
                <>
                    <Grid item xs={12} mt={10}>
                        <Grid container mb={6} justifyContent={'space-between'}>
                            <Grid item xs={12} md={4}>
                                <Card sx={{px: 2}}>
                                    <MKBox
                                        mt={-3}
                                        py={2}
                                        px={2}
                                        variant="gradient"
                                        bgColor="secondary"
                                        borderRadius="lg"
                                        coloredShadow="secondary"
                                    >
                                        <MKTypography variant="h6" color="white">
                                            {i18n.t('anh_dai_dien')}
                                        </MKTypography>
                                    </MKBox>
                                    <UploadImage image={avatar} setImage={setAvatar} />
                                </Card>
                            </Grid>
                            <Grid item xs={12} md={7.5}>
                                <Card sx={{px: 2, pb: 3}}>
                                    <MKBox
                                        mt={-3}
                                        py={2}
                                        px={2}
                                        variant="gradient"
                                        bgColor="secondary"
                                        borderRadius="lg"
                                        coloredShadow="secondary"
                                        mb={3}
                                    >
                                        <MKTypography variant="h6" color="white">
                                            {i18n.t('thong_tin_co_ban')}
                                        </MKTypography>
                                    </MKBox>
                                    <MKBox px={1}>
                                        <MKBox display="flex" mb={3} sx={{alignItems: "center", justifyContent: "space-between"}}>
                                            <MKTypography variant="body2" color="dark">
                                                {i18n.t('danh_muc')}
                                            </MKTypography>
                                            <MKButton variant="gradient" size="small" color="light" onClick={openDropdownCate}>
                                                {cateSelected?.label || i18n.t('lua_chon_danh_muc')} <Icon sx={dropdownIconStyles}>expand_more</Icon>
                                            </MKButton>
                                        </MKBox>
                                        <Menu anchorEl={dropdownCate} open={Boolean(dropdownCate)} onClose={closeDropdownCate}>
                                            {listTypeProjects.map((item, index) => (
                                                <MenuItem 
                                                    key={index} 
                                                    onClick={() => {onSelectCate(item)}}
                                                >
                                                    {item?.label}
                                                </MenuItem>
                                            ))}
                                        </Menu>
                                        <MKInput
                                            label={i18n.t('ten_du_an') + " (VI)"}
                                            placeholder={i18n.t('nhap_tai_day') + "..."}
                                            InputLabelProps={{ shrink: true }}
                                            fullWidth
                                            sx={{mb: 4}}
                                            multiline
                                            rows={2}
                                            value={title_vi}
                                            onChange={({ target: { value } }) => {
                                                setTitleVi(value);
                                            }}
                                        />
                                        <MKInput
                                            label={i18n.t('ten_du_an') + " (EN)"}
                                            placeholder={i18n.t('nhap_tai_day') + "..."}
                                            InputLabelProps={{ shrink: true }}
                                            fullWidth
                                            multiline
                                            rows={2}
                                            value={title_en}
                                            onChange={({ target: { value } }) => {
                                                setTitleEn(value);
                                            }}
                                        />
                                    </MKBox>
                                </Card>
                            </Grid>
                        </Grid>
                        <Card sx={{px: 2, my: 8}}>
                            <MKBox
                                mt={-3}
                                py={2}
                                px={2}
                                variant="gradient"
                                bgColor="secondary"
                                borderRadius="lg"
                                coloredShadow="secondary"
                                mb={5}
                            >
                                <MKTypography variant="h6" color="white">
                                    {i18n.t('mo_ta_ngan')}
                                </MKTypography>
                            </MKBox>
                            <MKInput
                                label={"Tiếng Việt (VI)"}
                                placeholder={i18n.t('nhap_tai_day') + "..."}
                                InputLabelProps={{ shrink: true }}
                                fullWidth
                                sx={{mb: 4}}
                                multiline
                                rows={6}
                                value={sapo_vi}
                                onChange={({ target: { value } }) => {
                                    setSapoVi(value);
                                }}
                            />
                            <MKInput
                                label={"Tiếng Anh (EN)"}
                                placeholder={i18n.t('nhap_tai_day') + "..."}
                                InputLabelProps={{ shrink: true }}
                                fullWidth
                                sx={{mb: 4}}
                                multiline
                                rows={6}
                                value={sapo_en}
                                onChange={({ target: { value } }) => {
                                    setSapoEn(value);
                                }}
                            />
                        </Card>
                        <Card sx={{px: 2, pb: 3}}>
                            <MKBox
                                mt={-3}
                                py={2}
                                px={2}
                                variant="gradient"
                                bgColor="secondary"
                                borderRadius="lg"
                                coloredShadow="secondary"
                                mb={2}
                            >
                                <MKTypography variant="h6" color="white">
                                    {i18n.t('noi_dung_chi_tiet')}
                                </MKTypography>
                            </MKBox>
                            <EditorInput title={"Tiếng Việt (VI)"} editorState={detail_vi} setEditorState={setDetailVi} />
                            <EditorInput title={"Tiếng Anh (EN)"} editorState={detail_en} setEditorState={setDetailEn} />
                        </Card>
                    </Grid>
                    <MKBox sx={{my: 4}} display="flex" justifyContent="center" alignItems="center">
                        <MKButton
                            variant="gradient"
                            color={"success"}
                            onClick={onCreate}
                            sx={{mr: 2}}
                        >
                            {i18n.t('cap_nhat')}
                        </MKButton>
                        <MKButton
                            variant="gradient"
                            color={"error"}
                            onClick={onCreate}
                        >
                            {i18n.t('huy_bo')}
                        </MKButton>
                    </MKBox>
                </>
                <AdminFooter />
            </AdminLayout>
        </AdminContainer>
  );
}

export default CreateProject;
