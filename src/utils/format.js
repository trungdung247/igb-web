import parse, { domToReact, attributesToProps } from 'html-react-parser';
import pxToRem from "assets/theme/functions/pxToRem";
import MKTypography from 'components/MKTypography';
import MKBox from 'components/MKBox';
import { Grid } from '@mui/material';
import colors from 'assets/theme/base/colors';

const options = {
    replace: ({ attribs, children, name }) => {
        if (!attribs) {
            return;
        }
      
        if (['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(name)) {
            return (
                <MKTypography
                    variant={name}
                    sx={{color: colors.dark['main']}}
                >
                    {domToReact(children, options)}
                </MKTypography>
            );
        }
  
        if (name === 'p') {
            const props = attributesToProps(attribs);
            return (
                <MKTypography
                    sx={{color: colors.dark['main']}}
                    {...props}
                >
                    {domToReact(children, options)}
                </MKTypography>
            );
        }
  
        if (name === "figure") {
            const img = children?.[0]?.name == "img";
            const figcaption = children?.[1]?.name == "figcaption";
            const src =  children?.[0]?.attribs?.src;
            const alt =  children?.[0]?.attribs?.alt;
            const caption = children?.[1]?.children?.[0]?.children?.[0]?.data || "...";
            if(!src) return <></>;
            return (
                <Grid 
                    container md={12} xs={12} py={2}
                    sx={{alignItems: "center", justifyContent: "center"}}
                >
                    <MKBox
                        sx={children[0]?.parent?.attribs?.style || {width: '100%'}}
                        textAlign="center"
                    >
                        {img && (
                            <MKBox
                                component="img"
                                src={src}
                                alt={alt}
                                my="auto"
                                width="100%"
                                height="100%"
                                borderRadius='xl'
                            />
                        )}
                        {figcaption && (
                            <MKTypography
                                textAlign='center'
                                sx={{
                                    fontSize: pxToRem(14), color: colors.grey[600]
                                }}
                            >
                                {caption}
                            </MKTypography>
                        )}
                    </MKBox>
                </Grid>
            );
        }
    }
};

export function parseHtml(content) {
    const result = content ? parse(content, options) : "";
    return result;
}