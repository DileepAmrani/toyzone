import React from 'react';
import Grid from '@material-ui/core/Grid';
import './Header.css'
import {FaShoppingCart} from "react-icons/fa";

export default class Header extends React.Component{
    render(){
        return(
            <div className="header">
<Grid container justify="center">
    <Grid item lg={10}>

    </Grid>
    <Grid item lg={1} md={4} sm={6} xs={8}>
   <div>
       My Account
   </div>
    </Grid>
    <Grid item lg={1} md={4} sm={6} xs={4}>
   <div>
       <FaShoppingCart style={{color:"green",width:"30%"}}/>
   </div>
    </Grid>
</Grid>
</div>
        )
    }   
}