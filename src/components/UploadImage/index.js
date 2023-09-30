import { useEffect, useRef } from 'react';
import PropTypes from "prop-types";
import MKBox from 'components/MKBox';

function UploadImage({image, setImage}) {
    const el = useRef();

    function PreviewImage(image) {
        if(!image) return;
        var oFReader = new FileReader();
        oFReader.readAsDataURL(image);

        oFReader.onload = function (oFREvent) {
            document.getElementById("uploadPreview").src = oFREvent.target.result;
        };
    };

    const handleChange = (e) => {
        const image = e.target.files[0];
        setImage({path: image});
    }

    useEffect(() => {
        if(!image?.path) return;
        PreviewImage(image.path);
    }, [image]);

    return (
        <MKBox width={"100%"} textAlign="center" py={image ? 4 : 10}>
            <input type="file" ref={el} onChange={handleChange} />
            {image && 
                <MKBox
                    id="uploadPreview"
                    component="img"
                    src={image}
                    alt={"upload preview"}
                    borderRadius="xl"
                    width="80%"
                    sx={{
                        mt: 2
                    }}
                />
            }
        </MKBox>
    );
}

UploadImage.defaultProps = {
    image: ""
};
  
UploadImage.propTypes = {
    image: PropTypes.string,
    setImage: PropTypes.func
};

export default UploadImage;