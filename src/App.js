import { useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "assets/theme";
import { useDispatch, useSelector } from "react-redux";
import LoadingIndicator from "components/LoadingIndicator";
import { startConnectAction, resizeScreenAction, mobileNavAction } from "stores/modules/main";
import breakpoints from "assets/theme/base/breakpoints";
import Lottie from "lottie-react";
import splashLoading from "assets/animations/splash-loading.json";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//-----
import Presentation from "layouts/pages/presentation";
import ContactUs from "pages/LandingPages/ContactUs";
import AboutUs from "pages/LandingPages/AboutUs";
import DevelopmentTeam from "pages/LandingPages/DevelopmentTeam";
import SignIn from "pages/LandingPages/SignIn";
import ProtectedAdminRoute from "pages/LandingPages/Admin/ProtectedAdminRoute";
//-----
import ADInformation from "pages/LandingPages/Admin/Information";
import EditInformation from "pages/LandingPages/Admin/Information/EditInformation";
//-----
import Services from "pages/LandingPages/Services";
import ADServices from "pages/LandingPages/Admin/Services";
import CreateService from "pages/LandingPages/Admin/Services/CreateService";
import EditService from "pages/LandingPages/Admin/Services/EditSevice";
import DetailService from "pages/LandingPages/Services/DetailService";
//-----
import Projects from "pages/LandingPages/Projects";
import DetailProject from "pages/LandingPages/Projects/DetailProject";
import ADProjects from "pages/LandingPages/Admin/Projects";
import CreateProject from "pages/LandingPages/Admin/Projects/CreateProject";
import EditProject from "pages/LandingPages/Admin/Projects/EditProject";
//-----
import ADActivity from "pages/LandingPages/Admin/Activity";
import CreateActivity from "pages/LandingPages/Admin/Activity/CreateActivity";
import EditActivity from "pages/LandingPages/Admin/Activity/EditActivity";
import DetailActivity from "pages/LandingPages/Activity/DetailActivity";
//-----
import Outstanding from "pages/LandingPages/Admin/Outstanding";
import CreateOutStanding from "pages/LandingPages/Admin/Outstanding/Create";
import EditOutstanding from "pages/LandingPages/Admin/Outstanding/Edit";
//-----
import ADPartner from "pages/LandingPages/Admin/Partner";
import CreatePartner from "pages/LandingPages/Admin/Partner/CreatePartner";
import EditPartner from "pages/LandingPages/Admin/Partner/EditPartner";
//-----
import ADProgram from "pages/LandingPages/Admin/Program";
import CreateProgram from "pages/LandingPages/Admin/Program/CreateProgram";
import EditProgram from "pages/LandingPages/Admin/Program/EditProgram";
//-----
import ADAchievement from "pages/LandingPages/Admin/Achievement";
import CreateAchievement from "pages/LandingPages/Admin/Achievement/CreateAchievement";
import EditAchievement from "pages/LandingPages/Admin/Achievement/EditAchievement";
//-----
import ADCapacity from "pages/LandingPages/Admin/Capacity";
import CreateCapacity from "pages/LandingPages/Admin/Capacity/CreateCapacity";
import EditCapacity from "pages/LandingPages/Admin/Capacity/EditCapacity";
//-----
import ADRating from "pages/LandingPages/Admin/Rating";
import CreateRating from "pages/LandingPages/Admin/Rating/CreateRating";
import EditRating from "pages/LandingPages/Admin/Rating/EditRating";
//-----
import ADTeam from "pages/LandingPages/Admin/Team";
import CreateTeam from "pages/LandingPages/Admin/Team/CreateTeam";
import EditTeam from "pages/LandingPages/Admin/Team/EditTeam";
//-----

const SplashLoading = () => {
  return (
    <div style={{display: 'flex', alignItems: "center", justifyContent: "center",  width: "100%", height: "100vh", backgroundColor: "white"}}>
      <Lottie 
        animationData={splashLoading}
        autoPlay
        loop
        duration={1000} 
        style={{width: '24rem'}}
      />
    </div>
  );
};

export default function App() {
  const dispatch = useDispatch();
  const {loadingGetConfig} = useSelector(state => state.main);
  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  useEffect(() => {
    function displayMobileNavbar() {
      if (window.innerWidth < breakpoints.values.lg) {
        dispatch(resizeScreenAction(true));
        dispatch(mobileNavAction(false));
      } else {
        dispatch(resizeScreenAction(false));
        dispatch(mobileNavAction(false));
      }
    }
    window.addEventListener("resize", displayMobileNavbar);
    displayMobileNavbar();
    return () => window.removeEventListener("resize", displayMobileNavbar);
  }, []);

  useEffect(() => {
    dispatch(startConnectAction());
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {!loadingGetConfig || loadingGetConfig == "loading" ? (
        <SplashLoading />
      )
      :
      (
      <>
      <Routes>
        <Route path="/presentation" element={<Presentation />} />
        <Route path="*" element={<Navigate to="/presentation" />} />
        <Route exact path={"/services"} element={<Services />} />
        <Route exact path={"/services/:id"} element={<DetailService />} />
        <Route exact path={"/projects"} element={<Projects />} />
        <Route exact path={"/projects/:id"} element={<DetailProject />} />
        <Route exact path={"/activity/:id"} element={<DetailActivity />} />
        <Route exact path={"/contact-us"} element={<ContactUs />} />
        <Route exact path={"/about-us"} element={<AboutUs />} />
        <Route exact path={"/development-team"} element={<DevelopmentTeam />} />
        <Route exact path={"/sign-in"} element={<SignIn />} />
        <Route element={<ProtectedAdminRoute />}>
          <Route path="/admin/information" element={<ADInformation />} />
          <Route path="/admin/information/:id" element={<EditInformation />} />
          <Route path="/admin/services" element={<ADServices />} />
          <Route path="/admin/services/new" element={<CreateService />} />
          <Route path="/admin/services/:id" element={<EditService />} />
          <Route path="/admin/projects" element={<ADProjects />} />
          <Route path="/admin/projects/new" element={<CreateProject />} />
          <Route path="/admin/projects/:id" element={<EditProject />} />
          <Route path="/admin/activity" element={<ADActivity />} />
          <Route path="/admin/activity/new" element={<CreateActivity />} />
          <Route path="/admin/activity/:id" element={<EditActivity />} />
          <Route path="/admin/outstanding-index" element={<Outstanding />} />
          <Route path="/admin/outstanding-index/new" element={<CreateOutStanding />} />
          <Route path="/admin/outstanding-index/:id" element={<EditOutstanding />} />
          <Route path="/admin/partner" element={<ADPartner />} />
          <Route path="/admin/partner/new" element={<CreatePartner />} />
          <Route path="/admin/partner/:id" element={<EditPartner />} />
          <Route path="/admin/program" element={<ADProgram />} />
          <Route path="/admin/program/new" element={<CreateProgram />} />
          <Route path="/admin/program/:id" element={<EditProgram />} />
          <Route path="/admin/achievement" element={<ADAchievement />} />
          <Route path="/admin/achievement/new" element={<CreateAchievement />} />
          <Route path="/admin/achievement/:id" element={<EditAchievement />} />
          <Route path="/admin/capacity" element={<ADCapacity />} />
          <Route path="/admin/capacity/new" element={<CreateCapacity />} />
          <Route path="/admin/capacity/:id" element={<EditCapacity />} />
          <Route path="/admin/rating" element={<ADRating />} />
          <Route path="/admin/rating/new" element={<CreateRating />} />
          <Route path="/admin/rating/:id" element={<EditRating />} />
          <Route path="/admin/team" element={<ADTeam />} />
          <Route path="/admin/team/new" element={<CreateTeam />} />
          <Route path="/admin/team/:id" element={<EditTeam />} />
          <Route path="/admin/*" element={<Navigate to="/admin/information" />} />
        </Route>
      </Routes>
      </>
      )}

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss={true}
        draggable={true}
        pauseOnHover={true}
        theme="light"
      />

      <LoadingIndicator />
    </ThemeProvider>
  );
}
