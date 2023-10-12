import { useState } from "react";
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import SimpleFooter from "examples/Footers/SimpleFooter";
import {useRoutesController} from "routes";
import bgImage from "assets/images/bg-sign-in.jpeg";
import i18n from "locales/i18n";
import { toast } from 'react-toastify';
import { useDispatch } from "react-redux";
import { onLoginAction } from "stores/modules/user";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [rememberMe, setRememberMe] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSetRememberMe = () => setRememberMe(rememberMe);

  const {
    routes
  } = useRoutesController(); 

  const handleOnSignin = () => {
    if(!email || !password){
      toast.warn(i18n.t('nhap_thong_tin_dang_nhap')); 
      return;
    }
    dispatch(onLoginAction({email, password}, onSuccess));
  }

  const onSuccess = () => {
    navigate("/admin", {replace: true});
  }

  return (
    <>
      <DefaultNavbar
        routes={routes}
        transparent
        light
      />
      <MKBox
        position="absolute"
        top={0}
        left={0}
        zIndex={1}
        width="100%"
        minHeight="100vh"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <MKBox px={1} width="100%" height="100vh" mx="auto" position="relative" zIndex={2}>
        <Grid container spacing={1} justifyContent="center" alignItems="center" height="100%">
          <Grid item xs={11} sm={9} md={5} lg={4} xl={3}>
            <Card>
              <MKBox
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
                mx={2}
                mt={-3}
                px={3}
                py={3}
                mb={1}
                textAlign="center"
              >
                <MKTypography variant="h5" fontWeight="medium" color="white">
                  {i18n.t('he_thong_quan_tri')}
                </MKTypography>
              </MKBox>
              <MKBox pt={4} pb={3} px={3}>
                <MKBox component="form" role="form">
                  <MKBox mb={2}>
                    <MKInput 
                      type="email" 
                      label={"Email"} 
                      fullWidth 
                      value={email} 
                      onChange={({ currentTarget }) => setEmail(currentTarget?.value || "")} 
                    />
                  </MKBox>
                  <MKBox mb={2}>
                    <MKInput 
                      type="password" 
                      label={i18n.t('mat_khau')} 
                      fullWidth 
                      value={password} 
                      onChange={({ currentTarget }) => setPassword(currentTarget?.value || "")} 
                    />
                  </MKBox>
                  <MKBox display="flex" alignItems="center" ml={-1}>
                    <Switch checked={rememberMe} onChange={handleSetRememberMe} />
                    <MKTypography
                      variant="button"
                      fontWeight="regular"
                      color="text"
                      onClick={handleSetRememberMe}
                      sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
                    >
                      &nbsp;&nbsp;{i18n.t('luu_thong_tin')}
                    </MKTypography>
                  </MKBox>
                  <MKBox mt={4} mb={1}>
                    <MKButton onClick={handleOnSignin} variant="gradient" color="info" fullWidth>
                      {i18n.t('dang_nhap')}
                    </MKButton>
                  </MKBox>
                </MKBox>
              </MKBox>
            </Card>
          </Grid>
        </Grid>
      </MKBox>
      <MKBox width="100%" position="absolute" zIndex={2} bottom="1.625rem">
        <SimpleFooter light />
      </MKBox>
    </>
  );
}

export default SignIn;
