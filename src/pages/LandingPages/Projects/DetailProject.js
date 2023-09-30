import { useEffect, useMemo } from "react";
import Card from "@mui/material/Card";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import {useRoutesController} from "routes";
import {useFooterRoutesController} from "footer.routes";
import Contact from "pages/Presentation/sections/Contact";
import Header from "pages/LandingPages/Projects/sections/Header";
import { useParams } from 'react-router-dom';
import bgHeader from "assets/images/bg-project-1.jpeg";
import { useDispatch, useSelector } from "react-redux";
import { getDetailProjectAction } from "stores/modules/project";
import LoadingData from "components/LoadingData";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import { parseHtml } from "utils/format";

function DetailProject() {
  const dispatch = useDispatch();
  const {loadingDetailProject, detailProject} = useSelector(state => state.project);
  const {currentLang} = useSelector(state => state.languages);

  const {id} = useParams();
  const {
    routes
  } = useRoutesController();  
  const {
    footerRoutes
  } = useFooterRoutesController();

  const itemSelected = useMemo(() => {
    let data = null;
    if(detailProject){
      const dataCheck = detailProject?.translation.find(i => i?.lang == currentLang);
      data = {
        id: detailProject?.id,
        image: detailProject?.image,
        name: dataCheck?.title,
        description: dataCheck?.sapo,
        detail: dataCheck?.detail
      };
    }
    return data;
  }, [detailProject, currentLang]);

  useEffect(() => {
    dispatch(getDetailProjectAction({id}));
  }, [id]);
  
  return (
    <>
      <DefaultNavbar
        routes={routes}
        transparent
        light
      />
      <Header data={itemSelected} image={itemSelected?.image || bgHeader} showButton={false} />
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
          <MKBox sx={{px: 3}}>
            {!loadingDetailProject || loadingDetailProject == "loading" ? (
              <LoadingData />
            ) : (
              <MKTypography
                variant="body1"
              >
                {parseHtml(itemSelected?.detail)}
              </MKTypography>
            )}
          </MKBox>
        <Contact />
      </Card>
      <DefaultFooter content={footerRoutes} />
    </>
  );
}

export default DetailProject;
