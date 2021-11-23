import React from "react";
import Categories from "../Categories";
import Posts from "../Posts";
import { Grid } from "@mui/material";
import '../../utils/css/discuss.css'

const Discuss = () => {
    return ( 
        <div className="body">
            <div className="content">
                <Grid container>
                    <Grid item lg={2} xs={12} sm={2}><Categories className="categories" /></Grid>
                    <Grid container item xs={12} sm={10} lg={10} style={{ justifyContent: 'center'}}><Posts /></Grid>
                </Grid>
            </div>
        </div>
    );
}
 
export default Discuss;