import { useEffect, useState } from 'react';
import baseUrl from '../utils/baseUrl'
import { Grid } from '@mui/material/';
import { Link } from 'react-router-dom'
import Post from './Post';

const Posts = () => {
    const [posts, setPosts] = useState([])

     useEffect(() => {
        async function fetchData() {
            const res = await fetch(`${baseUrl}/getAllPosts`, {
                method: "get",
                headers: {
                    "Content-Type": "application/json",
                },
            })
            const data = await res.json();
            setPosts(data);
        }
        fetchData()
    }, [])
    
    return (
        posts.map(post => (
            <Grid item lg={3} sm={4} xs={12}>
                <Link style={{textDecoration: 'none', color: 'inherit'}} to={`/details/${post._id}`}>
                    <Post post={post} />
                </Link>
            </Grid>
        ))
        
    );
}
 
export default Posts;