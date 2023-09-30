import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminLayout from "examples/LayoutContainers/AdminLayout";
import AdminNavbar from "examples/Navbars/AdminNavbar";
import { Card, Grid } from "@mui/material";
import AdminFooter from "examples/Footers/AdminFooter";
import { getDetailTeamAdminAction, onEditTeamAdminAction } from "stores/modules/admin";
import AdminContainer from "../../AdminContainer";
import MKInput from "components/MKInput";
import i18n from "locales/i18n";
import MKButton from "components/MKButton";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import { toast } from "react-toastify";
import LoadingData from "components/LoadingData";
import UploadImage from "components/UploadImage";
import { useParams } from 'react-router-dom';
import { deleteTeamAdminAction } from "stores/modules/admin";
import { useNavigate } from "react-router-dom";
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

function EditTeam() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {detailTeamAdmin, loadingDetailTeamAdmin} = useSelector(state => state.admin);
    const [avatar, setAvatar] = useState("");
    const [name, setName] = useState("");
    const [position, setPosition] = useState("");
    const [manager, setManager] = useState(false);
    const [link_linkedin, setLinkedin] = useState("");
    const [link_facebook, setFacebook] = useState("");
    const [link_github, setGithub] = useState("");
    const [link_twitter, setTwitter] = useState("");

    const {id} = useParams();

    useEffect(() => {
        dispatch(getDetailTeamAdminAction({id}));
    }, []);

    useEffect(() => {
        if(!detailTeamAdmin) return;
        setAvatar(detailTeamAdmin?.image);
        setName(detailTeamAdmin?.name);
        setPosition(detailTeamAdmin?.position);
        setManager(detailTeamAdmin?.manager);
        setFacebook(detailTeamAdmin?.link_facebook);
        setGithub(detailTeamAdmin?.link_github);
        setTwitter(detailTeamAdmin?.link_twitter);
    }, [detailTeamAdmin]);

    const onEdit = () => {
        if(!name){
            toast.warn(i18n.t('cap_nhat_day_du_thong_tin'));
            return;
        }
        dispatch(onEditTeamAdminAction({
            id,
            name, 
            position,
            manager,
            image: avatar,
            link_linkedin,
            link_facebook,
            link_github,
            link_twitter
        }, onSuccess));
    }

    const onDelete = () => {
        dispatch(deleteTeamAdminAction({id}, onSuccess));
    }
    
    const onSuccess = () => {
        navigate("/admin/team", {replace: true});
    }

    useEffect(() => {
        if(loadingDetailTeamAdmin === "error"){
            onSuccess();
        }
    }, [loadingDetailTeamAdmin]);

    return (
        <AdminContainer>
            <AdminLayout>
                <AdminNavbar header={i18n.t('chinh_sua_doi_tac')} />
                {!loadingDetailTeamAdmin || loadingDetailTeamAdmin === "loading" ? (
                    <LoadingData bgColor={"transparent"} />
                ) : (
                    <>
                    <Grid item xs={12} mt={6}>
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
                                        <MKBox
                                            onClick={() => {setManager(prv => !prv)}}
                                            display="flex"
                                            justifyContent="space-between"
                                            sx={{mb: 4, cursor: "pointer"}}
                                        >
                                            <MKTypography variant="h6" color="dark">
                                                {i18n.t('ban_lanh_dao')}
                                            </MKTypography>
                                            {manager ? 
                                                <CheckBoxIcon color="info" />
                                            :
                                                <CheckBoxOutlineBlankIcon />
                                            }
                                        </MKBox>
                                        <MKInput
                                            label={i18n.t('ten_nhan_su')}
                                            placeholder={i18n.t('nhap_tai_day') + "..."}
                                            InputLabelProps={{ shrink: true }}
                                            fullWidth
                                            sx={{mb: 4}}
                                            multiline
                                            rows={2}
                                            value={name}
                                            onChange={({ target: { value } }) => {
                                                setName(value);
                                            }}
                                        />
                                        <MKInput
                                            label={i18n.t('chuc_vu')}
                                            placeholder={i18n.t('nhap_tai_day') + "..."}
                                            InputLabelProps={{ shrink: true }}
                                            fullWidth
                                            multiline
                                            rows={2}
                                            value={position}
                                            onChange={({ target: { value } }) => {
                                                setPosition(value);
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
                                    {i18n.t('mang_xa_hoi')}
                                </MKTypography>
                            </MKBox>
                            <MKInput
                                label={"Linkedin"}
                                placeholder={i18n.t('nhap_tai_day') + "..."}
                                InputLabelProps={{ shrink: true }}
                                fullWidth
                                multiline
                                rows={1}
                                sx={{mb: 4}}
                                value={link_linkedin}
                                onChange={({ target: { value } }) => {
                                    setLinkedin(value);
                                }}
                            />
                            <MKInput
                                label={"Facebook"}
                                placeholder={i18n.t('nhap_tai_day') + "..."}
                                InputLabelProps={{ shrink: true }}
                                fullWidth
                                multiline
                                rows={1}
                                sx={{mb: 4}}
                                value={link_facebook}
                                onChange={({ target: { value } }) => {
                                    setFacebook(value);
                                }}
                            />
                            <MKInput
                                label={"Github"}
                                placeholder={i18n.t('nhap_tai_day') + "..."}
                                InputLabelProps={{ shrink: true }}
                                fullWidth
                                multiline
                                rows={1}
                                sx={{mb: 4}}
                                value={link_github}
                                onChange={({ target: { value } }) => {
                                    setGithub(value);
                                }}
                            />
                            <MKInput
                                label={"Twitter"}
                                placeholder={i18n.t('nhap_tai_day') + "..."}
                                InputLabelProps={{ shrink: true }}
                                fullWidth
                                multiline
                                rows={1}
                                sx={{mb: 4}}
                                value={link_twitter}
                                onChange={({ target: { value } }) => {
                                    setTwitter(value);
                                }}
                            />
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

export default EditTeam;
