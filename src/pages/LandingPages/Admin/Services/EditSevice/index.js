import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminLayout from "examples/LayoutContainers/AdminLayout";
import AdminNavbar from "examples/Navbars/AdminNavbar";
import { Card, Grid, Switch } from "@mui/material";
import AdminFooter from "examples/Footers/AdminFooter";
import { getDetailServiceAdminAction, onEditServiceAdminAction } from "stores/modules/admin";
import AdminContainer from "../../AdminContainer";
import MKInput from "components/MKInput";
import i18n from "locales/i18n";
import EditorInput from "components/EditorInput";
import MKButton from "components/MKButton";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import { toast } from "react-toastify";
import LoadingData from "components/LoadingData";
import UploadImage from "components/UploadImage";
import { useParams } from 'react-router-dom';
import { deleteServiceAdminAction } from "stores/modules/admin";
import { useNavigate } from "react-router-dom";

function EditService() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {detailServiceAdmin, loadingDetailServiceAdmin} = useSelector(state => state.admin);
    const [avatar, setAvatar] = useState("");
    const [title_vi, setTitleVi] = useState("");
    const [title_en, setTitleEn] = useState("");
    const [sapo_vi, setSapoVi] = useState("");
    const [sapo_en, setSapoEn] = useState("");
    const [detail_vi, setDetailVi] = useState("");
    const [detail_en, setDetailEn] = useState("");
    const [presen, setPresen] = useState(false);

    const handleSetPresen = () => setPresen(!presen);

    const {id} = useParams();

    useEffect(() => {
        dispatch(getDetailServiceAdminAction({id}));
    }, []);

    useEffect(() => {
        if(!detailServiceAdmin) return;
        setAvatar(detailServiceAdmin?.image);
        setTitleVi(detailServiceAdmin?.title_vi);
        setTitleEn(detailServiceAdmin?.title_en);
        setSapoVi(detailServiceAdmin?.sapo_vi);
        setSapoEn(detailServiceAdmin?.sapo_en);
        setDetailVi(detailServiceAdmin?.detail_vi);
        setDetailEn(detailServiceAdmin?.detail_en);
        setPresen(detailServiceAdmin?.presen);
    }, [detailServiceAdmin]);

    const onEdit = () => {
        if(!title_vi || !title_en || !sapo_vi || !sapo_en || !detail_vi || !detail_en){
            toast.warn(i18n.t('cap_nhat_day_du_thong_tin'));
            return;
        }
        dispatch(onEditServiceAdminAction({
            id,
            title_vi, title_en, 
            sapo_vi, sapo_en, 
            detail_vi, 
            detail_en, 
            image: avatar,
            presen
        }, onSuccess));
    }

    const onDelete = () => {
        dispatch(deleteServiceAdminAction({id}, onSuccess));
    }
    
    const onSuccess = () => {
        navigate("/admin/services", {replace: true});
    }

    useEffect(() => {
        if(loadingDetailServiceAdmin === "error"){
            onSuccess();
        }
    }, [loadingDetailServiceAdmin]);

    return (
        <AdminContainer>
            <AdminLayout>
                <AdminNavbar absolute header={i18n.t('chinh_sua_du_an')} />
                {!loadingDetailServiceAdmin || loadingDetailServiceAdmin === "loading" ? (
                    <LoadingData bgColor={"transparent"} />
                ) : (
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
                                        <MKBox display="flex" mb={3} alignItems="center" ml={-1}>
                                            <Switch checked={presen} onChange={handleSetPresen} />
                                            <MKTypography
                                                variant="button"
                                                fontWeight="regular"
                                                color={presen ? "info" : "text"}
                                                onClick={handleSetPresen}
                                                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
                                            >
                                                &nbsp;&nbsp;{i18n.t('noi_bat')}
                                            </MKTypography>
                                        </MKBox>
                                        <MKInput
                                            label={i18n.t('ten_dich_vu') + " (VI)"}
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
                                            label={i18n.t('ten_dich_vu') + " (EN)"}
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
                            onClick={onEdit}
                            sx={{mr: 2}}
                        >
                            {i18n.t('cap_nhat')}
                        </MKButton>
                        <MKButton
                            variant="gradient"
                            color={"error"}
                            onClick={onDelete}
                        >
                            {i18n.t('xoa')}
                        </MKButton>
                    </MKBox>
                    </>
                )}
                <AdminFooter />
            </AdminLayout>
        </AdminContainer>
  );
}

export default EditService;
