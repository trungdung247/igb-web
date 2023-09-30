import Lottie from "lottie-react";
import loadingData from "assets/animations/loading-data.json";
import PropTypes from "prop-types";

function LoadingData({bgColor}) {
    return(
        <div 
            style={{
                display: 'flex', alignItems: "center", justifyContent: "center",  width: "100%", 
                backgroundColor: bgColor, paddingTop: 50, paddingBottom: 200
            }}
        >
            <Lottie 
                animationData={loadingData}
                autoPlay
                loop
                duration={1000} 
                style={{width: '8rem'}}
            />
        </div>
    )
}

LoadingData.defaultProps = {
    bgColor: ""
};
  
LoadingData.propTypes = {
    bgColor: PropTypes.string,
};

export default LoadingData;
