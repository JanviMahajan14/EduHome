import { makeStyles } from '@mui/styles'
import React, { useState, useEffect } from 'react';
import baseUrl from '../../utils/baseUrl';
import { useNavigate } from "react-router-dom";
import { Box, InputBase, FormControl, Button, TextareaAutosize } from '@mui/material/';
import '../../utils/css/PostView.css'
import logo from '../../utils/img/undraw.svg'
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const useStyle = makeStyles({
    image: {
        width: '100%',
        height: '50vh',
    },
    icon: {
        color: 'white'
    },
})

const CreateView = () => {
    const classes = useStyle();
    const user = JSON.parse(localStorage.getItem("user"));
    const navigate = useNavigate();
    const initialValues = {
        title: '',
        description: '',
        picture: '',
        userName: `${user.Username}`,
        categories: 'All',
        createdDate: new Date()
    }
    const [post, setPost] = useState(initialValues);
    const [img, setImg] = useState('');
    const [imageURL, setImageURL] = useState('');

    // Uploading image to cloudinary
    const postImage = async (file) => {
        try {
            if (file) {
                const formData = new FormData();
                formData.append('file', file);
                formData.append('upload_preset', "Instagram-Clone");
                formData.append('cloud_name', "smilingcloud");

                const response = await fetch("https://api.cloudinary.com/v1_1/smilingcloud/image/upload", {
                    method: "post",
                    body: formData
                })

                const data = await response.json();
                if (data.error) {
                    throw new Error(data.error.message);
                }
                setImageURL(data.url)
                post.picture = data.url
            }
        }
        catch (error) {
            console.log("error uploading image")
        }
    }
    
    const handleChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value })
    }
    

 const createPost = async (e) => {
      try {
          await postImage(img);
          const res = await fetch(`${baseUrl}/createPost`, {
              method: "post",
              headers: {
                  "Content-Type": "application/json",
              },
              body: JSON.stringify({
                  post
              })
          })
          const data = await res.json()
          if (data.error) {
              throw new Error(data.error);
          }
          toast.success("Your article is published!", {
          position: toast.POSITION.TOP_RIGHT,
          });
          navigate('/discuss');
      }
      catch (error) {
        toast.error(error.message, { position: toast.POSITION.TOP_RIGHT });
      }
}


    return ( 
        <div className="body">
            <div className='content'>
                <Box>
                    <img src={logo} alt="image" className={classes.image} />
                    <FormControl style={{ display: 'flex', flexDirection: 'row', margin: '10px'}}>
                        <label htmlFor="fileInput">
                            <AddCircleRoundedIcon fontSize="large" className={classes.icon} />
                        </label>
                        <input
                            type="file"
                            id="fileInput"
                            style={{ display: "none" }}
                            onChange={(e) => setImg(e.target.files[0])}
                        />
                        <InputBase onChange={(e)=>handleChange(e)} name="title" placeholder='Write heading here..' style={{ color: 'white', fontSize:'20px', margin: '10px', flex:'1', fontWeight:600 }}/>
                        <Button variant="contained" color="primary" onClick={(e)=>createPost(e)}>Publish</Button>
                    </FormControl>
                    <TextareaAutosize
                        rowsMin={10}
                        placeholder='Provide description here'
                        onChange={(e) => handleChange(e)}
                        name="description"
                        style={{ width: '100%', height:'25vh', marginTop: '10px', border: 'none', fontSize: '18px', padding: '10px', backgroundColor:"#082567", color:'white'}}
                    />
                </Box>
            </div>
        </div>
    );
}
 
export default CreateView;