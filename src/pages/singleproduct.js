import React, { useState }from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol ,MDBRow} from 'mdbreact';
import Paper from '@material-ui/core/Paper';
import {
    Header,
    Navbar,
    SubHeader,
    Footer,
    Social,
    Dropdown,
    Stortby
  } from "../components/index.js";

import Button from '@material-ui/core/Button';
import { MdShoppingCart } from 'react-icons/md';


class CardExample extends React.Component {
    constructor(){
        super();
        this.state={
            count:0,
            myCart:[]
        }
    }
    addToCart=()=>{
     let{count,myCart} = this.state;
      let cart = {
                  count:count
      }
    

    }

   
    render(){
     let{count} = this.state;
    return (
        <div>
      
      <div className="Navbar">
            <Header />
            <SubHeader />
            <Navbar history={this.props.history} />
          </div>
          <br />
        <br />
        <br />
        <div style={{ margin: "20px" }}>
      
            <Paper style={{ padding: 20, display: "flex" }}>
            <MDBRow style={{width:"98%",margin:"0 auto"}}>
    <MDBCol xl="5">
                <div style={{ marginRight: "10px" }}>
                    <img src="https://firebasestorage.googleapis.com/v0/b/saylanionlineshop.appspot.com/o/images%2Fc05975360_1750x1285.jpg?alt=media&token=3e335001-2af7-4cd2-8d56-1549c3800c3a" width="500" />
                </div>
                </MDBCol>
                <MDBCol xl="7">
                <div style={{ marginTop: '10px' }}>
                    <h2>HP 17-ca0003na HD Laptop</h2>
                                    <p>Designed for long-lasting performance, this stylishly HP 9 cm (17.3) laptop.</p>
                    <h3 style={{ color: "#9C27B0" }}>Rs: Rs: 32999</h3>
                    <h3>Quantity:</h3>
                    <div style={{ display: 'flex', border: '1px solid', justifyContent: "space-between", width: "30%" }}>
                        <button onClick={() =>this.setState({count:count>0?count - 1:0})} style={{ height: "35px", width: "40px",color:'white', backgroundColor: "green" }}>-</button>
                        <h5 style={{ color: "#9C27B0", margin: "2px 10px 2px 10px" ,width:"10% ",textAlign:"center"}}>{count}</h5>
                        <button onClick={() =>this.setState({count:count + 1})} style={{ height: "35px", width: "40px",color:'white', backgroundColor: "green" }}>+</button>
                    </div>
                    <Button onClick={()=>this.addToCart()}size="large" style={{ color: "#fff", backgroundColor: "green", marginTop: "30px" }}>
                        <MdShoppingCart />Add to Cart
                    </Button>
                </div>
                </MDBCol>
  </MDBRow>
            </Paper>
        </div>
        <br />
        <br />
        <br />
<div>

  {/* Footer Section Starts From Here */}
  <Social />
  <Footer />
</div>

  

        </div>
    )
}
}

export default CardExample;