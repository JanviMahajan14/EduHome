import React from "react";
import '../../utils/css/discuss.css';
import Categories from "../Categories";
import Posts from "../Posts";
import { Grid } from "@mui/material";

const Discuss = () => {
    return ( 
        <div className="body">
            <div className="content">
                <Grid container>
                    <Grid item lg={2} xs={12} sm={12}><Categories className="categories" /></Grid>
                    <Grid item container lg={10} xs={10} sm={10} style={{ justifyContent: 'center'}}className="posts"><Posts/></Grid>
                </Grid>
            </div>
        </div>
    );
}
 
export default Discuss;