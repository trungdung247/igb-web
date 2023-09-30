import { useState, useEffect } from "react";
import Lottie from "lottie-react";
import loadingData from "assets/animations/loading-data.json";
import Backdrop from '@mui/material/Backdrop';
import emitter from "emitter";

function LoadingIndicator() {
    const [isVisible, setVisible] = useState(false);

    useEffect(() => {
        var token = emitter.addListener('changeLoadingEffect', (...args) => {
            setVisible(...args);
        });

        return () => {
            token.remove();
        }
    }, []);

    if(!isVisible) return;

    return(
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={isVisible}
        >
            <Lottie 
                animationData={loadingData}
                autoPlay
                loop
                duration={1000} 
                style={{width: '8rem'}}
            />
        </Backdrop>
    )
}

export default LoadingIndicator;
