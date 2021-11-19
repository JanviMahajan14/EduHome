import React from 'react';
import { makeStyles } from '@mui/styles'
import { ModeEditOutline, Delete } from '@mui/icons-material/';
import '../../utils/css/PostView.css'
import { Box, Typography } from '@mui/material/';

const useStyle = makeStyles({
    image: {
        width: '100%',
        height: '50vh',
        objectFit: 'cover'
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
        margin: '60 0 10 0'
    },
    subheading: {
        display: 'flex',
        color: 'white',
        fontWeight: 600,
        margin: '30',
    }

})

const PostView = () => {
    const classes = useStyle();
    const url = "https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
    return ( 
        <div className="body">
            <div className='content'>
                <img src={url} alt="img" className={classes.image} />
                <h1 className={classes.heading}>Title of the blog</h1>
                <Box className={classes.icons}>
                    <ModeEditOutline color="primary" className={classes.icon} fontSize="large"/>
                    <Delete color="error" className={classes.icon} fontSize="large"/>
                </Box>
                <Box className={classes.subheading}>
                    <Typography>Author: Code for interview</Typography>
                    <Typography style={{marginLeft: 'auto'}}>Date: 22/11/2021</Typography>
                </Box>
            </div>
        </div>
    );
}
 
export default PostView;
