import React, { useState, useEffect } from 'react';
import download from 'downloadjs'; 
import axios from 'axios';
import baseUrl from '../../utils/baseUrl';
import { TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import '../../utils/css/savednotes.css'

const SavedNotes = () => {
  const [filesList, setFilesList] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');
  useEffect(() => {
    const getFilesList = async () => {
      try {
        const { data } = await axios.get(`${baseUrl}/getAllFiles`, {});
        setErrorMsg('');
        setFilesList(data);
      } catch (error) {
        if (error.response && error.response.status === 400) {
        setErrorMsg('No files found');
      }
      }
    };
    getFilesList();
  }, []);
  
  const downloadFile = async (id, path, mimetype) => {
    try {
      const result =  await axios.get(`${baseUrl}/download/${id}`, {
            responseType: 'blob'
      });
      
      const split = path.split('/');
      const filename = split[split.length - 1];
      setErrorMsg('');
      return download(result.data, filename, mimetype);
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setErrorMsg('Error while downloading file. Try again later');
      }
    }
  };

  return ( 
    <div className="saved-notes">
      <div>
        <div className="notes-container">
        {errorMsg && <p className="errorMsg">{errorMsg}</p>}
        <TableContainer className="notes-table">
          <TableHead>
            <TableRow> 
                <TableCell style={{ color: 'white', fontSize: 'large', fontWeight:'600'}}>Title</TableCell>
                <TableCell style={{ color: 'white', fontSize: 'large', fontWeight:'600'}}>Description</TableCell>
                <TableCell style={{ color: 'white', fontSize: 'large', fontWeight:'600'}}>Download</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filesList.length > 0 ? (
              filesList.map(
                ({ _id, title, description, file_path, file_mimetype }) => (
                  <TableRow key={_id}>
                    <TableCell style={{ color: 'white', fontSize: 'medium'}}>{title}</TableCell>
                    <TableCell style={{ color: 'white', fontSize: 'medium'}}>{description}</TableCell>
                    <TableCell>
                      <a
                        href="#/"
                        onClick={() =>
                          downloadFile(_id, file_path, file_mimetype)
                        }
                      >
                      <i class="fa fa-download" aria-hidden="true"></i> 
                      </a>
                    </TableCell>
                  </TableRow>
                )
              )
            ) : (
              <TableRow>
                <TableCell colSpan={3} style={{ color: 'white', fontSize: 'medium'}}>
                  No files found. Please add some.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </TableContainer>
      </div>
      </div>
    </div>
    );
}
 
export default SavedNotes;