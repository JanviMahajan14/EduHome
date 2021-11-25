import React, { useState, useRef } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import baseUrl from '../../utils/baseUrl';
import Dropzone from 'react-dropzone';
import axios from 'axios';
import '../../utils/css/addnotes.css';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const AddNotes = () => {
    const [file, setFile] = useState(null); // state for storing actual image
    const [previewSrc, setPreviewSrc] = useState(''); // state for storing previewImage
    const [state, setState] = useState({
      title: '',
      description: ''
    });
    const [errorMsg, setErrorMsg] = useState('');
    const [isPreviewAvailable, setIsPreviewAvailable] = useState(false); // state to show preview only for images
    const dropRef = useRef(); // React ref for managing the hover state of droppable area
    const handleInputChange = (event) => {
      setState({
        ...state,
        [event.target.name]: event.target.value
      });
    };

    const handleOnSubmit = async (event) => {
    event.preventDefault();
    try {
        const { title, description } = state;
        if (title.trim() !== '' && description.trim() !== '') {
          if (file) {
            const formData = new FormData();
            formData.append('file', file);
            formData.append('title', title);
            formData.append('description', description);
            setErrorMsg(''); 
            await axios.post(`${baseUrl}/notes/upload`, formData, {
              headers: {
                'Content-Type': 'multipart/form-data',
              }
            });
            toast.success("File uploaded Successfully!", { position: toast.POSITION.TOP_RIGHT });
            setState({})
            setFile(null)
            setPreviewSrc('')
            setIsPreviewAvailable(null)
          } else {
            setErrorMsg('Please select a file to add.');
          }
        } else {
          setErrorMsg('Please enter all the field values.');
        }
  } catch (error) {
        error.response && setErrorMsg(error.response.data);
  }
  };

  const onDrop = (files) => {
  const [uploadedFile] = files;
  setFile(uploadedFile);
  const fileReader = new FileReader();
  fileReader.onload = () => {
    setPreviewSrc(fileReader.result);
  };
  fileReader.readAsDataURL(uploadedFile);
  setIsPreviewAvailable(uploadedFile.name.match(/\.(jpeg|jpg|png)$/));
};

const updateBorder = (dragState) => {
  if (dragState === 'over') {
    dropRef.current.style.border = '2px solid #000';
  } else if (dragState === 'leave') {
    dropRef.current.style.border = '2px dashed #e9ebeb';
  }
};
  return ( 
      <div className='content-notes'>
        <div className="header-content">
            <div style={{margin:"20px"}}>
                <React.Fragment>
      <Form className="search-form" onSubmit={handleOnSubmit}>
        {errorMsg && <p className="errorMsg">{errorMsg}</p>}
        <Row className="row">
          <Col>
            <Form.Group controlId="title">
              <Form.Control
                type="text"
                name="title"
                value={state.title || ''}
                placeholder="Enter title"
                onChange={handleInputChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="row">
          <Col>
            <Form.Group controlId="description">
              <Form.Control
                type="text"
                name="description"
                value={state.description || ''}
                placeholder="Enter description"
                onChange={handleInputChange}
              />
            </Form.Group>
          </Col>
        </Row>
            <div className="upload-section">
  <Dropzone onDrop={onDrop}
    onDragEnter={() => updateBorder('over')}
    onDragLeave={() => updateBorder('leave')}
  >
    {({ getRootProps, getInputProps }) => (
      <div {...getRootProps({ className: 'drop-zone' })} ref={dropRef}>
        <input {...getInputProps()} />
        <p>Drag and drop a file OR click here to select a file</p>
        {file && (
          <div>
            <strong>Selected file:</strong> {file.name}
          </div>
        )}
      </div>
    )}
  </Dropzone>
  {previewSrc ? (
    isPreviewAvailable ? (
      <div className="image-preview">
        <img className="preview-image" src={previewSrc} alt="Preview" />
      </div>
    ) : (
      <div className="preview-message">
        <p>No preview available for this file</p>
      </div>
    )
  ) : (
    <div className="preview-message">
      <p>Image preview will be shown here after selection</p>
    </div>
  )}
</div>
        <Button variant="primary" type="submit" style={{ backgroundColor: '#082567' }} >
          Submit
        </Button>
      </Form>
    </React.Fragment>
            </div>
        </div>
      </div>
    );
}
 
export default AddNotes;