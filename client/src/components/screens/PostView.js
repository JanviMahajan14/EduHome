import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@mui/styles'
import baseUrl from '../../utils/baseUrl';
import Interweave from 'interweave';
import '../../utils/css/PostView.css'
import { Box, Typography } from '@mui/material/';

const useStyle = makeStyles({
    image: {
        height: '40vh',
        objectFit: 'cover',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    icons: {
        padding: '25px',
        width: '100%'
    },
    icon: {
        marginRight : '20px',
        border: '1px solid #878787',
        borderRadius: '10px',
        float: 'right',
    },
    heading: {
        color: 'white',
        fontSize: '38',
        fontWeight: '600',
        textAlign: 'center',
        margin: '60 0 20 0'
    },
    subheading: {
        display: 'flex',
        color: 'white',
        fontWeight: 600,
        margin: '30',
    }

})

const PostView = () => {
    const [post, setPost] = useState({}) 
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`${baseUrl}/getpost/${id}`, {
            method: "get",
            headers: {
                "Content-Type": "application/json",
            }
            })
            const data = await res.json()
            console.log(data)
            setPost(data)
        }
        fetchData();
    },[])

    const classes = useStyle();
    const url = "https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
    return ( 
        <div className="body">
            <div className='content'>
                <h1 className={classes.heading}>{post.title}</h1>
                <img src={post.picture || url} alt="img" className={classes.image} />
                <Box className={classes.subheading}>
                    <Typography>Author: {post.userName}</Typography>
                    <Typography style={{ marginLeft: 'auto' }}>Date: {post.createdDate}</Typography>
                </Box>
                <h3 style={{ marginTop: '30px', color:'white', fontFamily: 'Roboto, sans-serif' }}><Interweave className={classes.description} content={post.description}/></h3>
            </div>
        </div>
    );
}
 
export default PostView;
