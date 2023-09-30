import Lottie from "lottie-react";
import noData from "assets/animations/no-data.json";
import MKTypography from "components/MKTypography";
import PropTypes from "prop-types";
import i18n from "locales/i18n";

function EmptyData({text}) {
    return(
        <div 
            style={{
                display: 'flex', alignItems: "center", justifyContent: "center",  
                width: "100%", backgroundColor: "white", paddingTop: "4rem", paddingBottom: "4rem",
                flexDirection: "column"
            }}
        >
            <Lottie 
                animationData={noData}
                autoPlay
                loop
                duration={1000} 
                style={{width: '20rem'}}
            />
            <MKTypography variant="body2">
              {"~ "}{text}{" ~"}
            </MKTypography>
        </div>
    )
}

EmptyData.defaultProps = {
    text: i18n.t("khong_co_du_lieu_hien_thi")
};
  
EmptyData.propTypes = {
    text: PropTypes.string
};

export default EmptyData;
