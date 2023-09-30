import { useState } from 'react';
import PropTypes from "prop-types";
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import MKBox from 'components/MKBox';
import colors from 'assets/theme/base/colors';
import MKTypography from 'components/MKTypography';
// import apis from 'networking/apis';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import Editor from 'ckeditor5-custom-build/build/ckeditor';
import apis from 'networking/apis';

const editorConfiguration = {
    fontSize: {
        options: [
            'default',
            10,
            11,
            12,
            13,
            14,
            15,
            16,
            17,
            18,
            20,
            22,
            24
        ]
    },
    heading: {
        options: [
            { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
            { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
            { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' },
            { model: 'heading3', view: 'h3', title: 'Heading 3', class: 'ck-heading_heading3' },
            { model: 'heading4', view: 'h4', title: 'Heading 4', class: 'ck-heading_heading4' },
            { model: 'heading5', view: 'h5', title: 'Heading 5', class: 'ck-heading_heading5' },
            { model: 'heading6', view: 'h6', title: 'Heading 6', class: 'ck-heading_heading6' }
        ]
    },
    image: {
        toolbar: [
            'imageStyle:full',
            'imageStyle:side',
            '|',
            'imageResize:original',
            'imageResize:25',
            'imageResize:50',
            'imageResize:75',
            '|',
            'imageTextAlternative'
        ],
        upload: {
            types: ['jpeg', 'png', 'gif']
        },
        resizeUnit: '%',
        resizeOptions: [
            {
                name: 'imageResize:original',
                value: null,
                icon: 'original'
            },
            {
                name: 'imageResize:25',
                value: '25',
                icon: 'small'
            },
            {
                name: 'imageResize:50',
                value: '50',
                icon: 'medium'
            },
            {
                name: 'imageResize:75',
                value: '75',
                icon: 'large'
            }
        ]
    },
    link: {
        decorators: {
            openInNewTab: {
                mode: 'manual',
                label: 'Open in a new tab',
                defaultValue: true,
                attributes: {
                    target: '_blank',
                    rel: 'noopener noreferrer'
                }
            }
        }
    },
    extraPlugins: [MyCustomUploadAdapterPlugin]
};

function MyCustomUploadAdapterPlugin(editor) {
    // register upload adapter into file repository plugin
    editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
        return new MyUploadAdapter(loader);
    };
}
  
class MyUploadAdapter {
    constructor(props) {
        // CKEditor 5's FileLoader instance.
        this.loader = props;
        this.url = apis.PATH.API_UPLOAD_IMAGE;
    }
  
    // Starts the upload process.
    upload() {
        return new Promise((resolve, reject) => {
            this.loader.file.then((image) => {
                apis.postForm(this.url, {image, module: 'post'})
                .then(response => {
                    const url = response?.results?.data?.url;
                    if(!url) reject();
                    resolve({
                        default: url
                    });
                })
                .catch((err) => {
                    reject(err);
                });
            });
        });
    }
}

const EditorInput = ({title, editorState, setEditorState}) => {
    const [focus, setFocus] = useState(false);

    const onEditorStateChange = (text) => {
        setEditorState(text);
    };

    return (
        <MKBox sx={{mt: 2}}>
            <MKTypography 
                variant="button" mb={3} 
                sx={{
                    color: focus ? colors.main['main1'] : colors.grey[700],
                    fontWeight: focus ? 'regular' : 'normal'
                }}
            >
              {title}
            </MKTypography>
            <MKBox sx={{
                px: 2, pt: 2, pb: 2, border: focus ? 2 : 1, borderRadius: 1.5,
                borderColor: focus ? colors.main['main1'] : colors.grey[400]
            }}>
                <CKEditor
                    editor={Editor}
                    data={editorState}
                    config={editorConfiguration}
                    onFocus={() => {
                        setFocus(true);
                    }}
                    onBlur={() => {
                        setFocus(false);
                    }}
                    onChange={( event, editor ) => {
                        const data = editor.getData();
                        onEditorStateChange(data);
                    }}
                />
            </MKBox>
        </MKBox>
    );
}

EditorInput.defaultProps = {
    title: "",
    editorState: ""
};
  
EditorInput.propTypes = {
    title: PropTypes.string,
    editorState: PropTypes.string,
    setEditorState: PropTypes.func
};

export default EditorInput;