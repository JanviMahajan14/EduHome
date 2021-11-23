import { makeStyles } from '@mui/styles';
import Interweave from 'interweave';
import { Box, Typography } from '@mui/material/';

const useStyle = makeStyles({
    container: {
        margin: 20,
        height: 350,
        borderRadius:10,
        boxShadow: '0px 6px 30px rgba(0, 0, 0, 0.4)',
        backgroundColor: '#082567',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        width: '20%',
        alignItems: 'center',
        '& > *': {
            padding: '5'
        }
    },
    image: {
        height: '150px',
        objectFit: 'cover',
        borderRadius: '10px 10px 0 0',
        width: '100%'
    },
    text: {
        color: '#878787',
        fontSize: '12px',
    },
    heading: {
        fontSize: '18px',
        fontWeight: '600',
        fontFamily: 'Roboto, sans-serif',
        textAlign: 'center'
    },
    details: {
        fontSize: '14px',
        wordBreak: 'break-word',
        margin: '10px'
    }
})

const Post = ({ post }) => {
    const classes = useStyle();

    const url = post.picture ? post.picture : "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1031&q=80"
    return (

        <Box className={classes.container} style={{width:'inherit', overflow:'hidden'}}>
            <img src={url} alt="wrapper" className={classes.image}/>
            <Typography className={classes.heading}>{post.title}</Typography>
            <Typography className={classes.text}>Author : {post.userName}</Typography>
            <Interweave className={classes.details} content={post.description}/>
        </Box>
    );
}
 
export default Post;