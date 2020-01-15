import React from 'react';
import Grid from '@material-ui/core/Grid';
import './Header.css'
import {FaShoppingCart} from "react-icons/fa";
import Popup from "reactjs-popup";
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import { MdAddShoppingCart } from "react-icons/md"
import Button from '@material-ui/core/Button';
export default class Header extends React.Component{
    constructor(){
        super();
        this.state={
            count:0,
          
        }
    }
    render(){
        let{count,myCart} = this.state;

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


   <Popup className="popup-content"
      trigger={
        <IconButton aria-label="show 4 new mails" color="green">
              <Badge badgeContent="2" color="secondary">
                <MdAddShoppingCart />
              </Badge>
            </IconButton>}
      position="bottom right"
      on="hover"
    >
     

          {
          count ? 
            <div>
            {count.map((val,i)=>{
              return(
                <div>

<table className="table">
 
  <tr>
    <td>
 <img width="40px" src="https://firebasestorage.googleapis.com/v0/b/saylanionlineshop.appspot.com/o/images%2Fc05975360_1750x1285.jpg?alt=media&token=3e335001-2af7-4cd2-8d56-1549c3800c3a" />

    </td>
    <td>
    <span  style={{color:"black"}}>fsf fd fd f</span>

    </td>
    <td>
    <span style={{color:"#3f51b5"}}>34434343</span> 

    </td>

    <td>
    <span style={{color:"#3f51b5"}}>43</span> 

    </td>
    <td>
    ❌
    </td>
  </tr>
</table>
                </div>
              )
              })}
              <hr />
                <Button size="large" style={{ color: "#fff", backgroundColor: "#3f50b5",float: 'right' }}>
                    View Card
                    </Button>
              </div>
            :
            <div>
              <span style={{color:"black",fontWeight:"bold"}}>Your card is empty .</span>
            </div>
          }  
            


            </Popup>

   </div>
    </Grid>
</Grid>
</div>
        )
    }   
}