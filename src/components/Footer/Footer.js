import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import "./App.css";
import {Link} from "react-router-dom";
import Icon from '../../images/call-answer.png'
const FooterPage = () => {
  return (
    <MDBFooter  id="main" className="font-small pt-4 mt-4" >
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol id="first" md="3" style={{borderRight : '1px solid White',alignItems:"center" }} >
            <h5 className="title">Stay In The Loop</h5>
            <input type='text' placeholder="Enter Your Email Address" className="input"/>
            <button className="button" >Submit</button>
            <p> 
          <input type="checkbox" /> 
Subscribe for latest Discounts & Updates<br />
<span> Become a Toyzone.PK Insider and get 10% off your order today.
     Plus we'll keep you up-to-date with the latest theme news. </span>
 

           </p>
          </MDBCol>
          <MDBCol id="second"  md="3" style={{borderRight : '1px solid White'}}>
            <ul style={{textAlign : 'center'}}>
              <li className="list-unstyled">
                <a href="#!">About us</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Privacy Policy</a>
              </li>
             
              <li className="list-unstyled">
                <a href="#!">Shop By Brands</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Contact Us</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Terms & Conditions</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Shop By Age</a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol id="third" md="3" style={{borderRight : '1px solid White'}}>
            <p style={{fontWeight : 600,fontSize : 28,textAlign : 'center'}}> Need Support ? </p>
            
            <p style={{fontWeight : 600,fontSize : 28,textAlign : 'center'}}><img src={Icon} width='30px'/> 03211222869  </p>
                 
          </MDBCol>
          <MDBCol id="fourth" md="3">
            <h4 className="last"> Secure Checkout </h4>
            <p id=" p1">  We use encrypted SSL security to ensure that your credit card information is 100% protected. </p>
            <img className="image" src="https://cdn.shopify.com/s/files/1/0272/0409/1949/t/3/assets/ff-checkout-single.png?3459" />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      
        <div className="footer-copyright text-center py-3" id="footer">
        <MDBContainer id='text' fluid style={{float:"left",fontSize:"15px"}}>
          © {new Date().getFullYear()} <a href="https://www.MDBootstrap.com"> ToyZone.pk. </a>All rights reserved.
        </MDBContainer>
        <div id="icons">
       <span style={{margin:"0.4%",float:"right"}}  >  <i id="youtube" className="fab fa-youtube" > </i> </span>
       <span style={{margin:"0.4%",float:"right"}}>  <i id="insta" className="fab fa-instagram" > </i> </span>
       <span style={{margin:"0.4%",float:"right"}}> <i id='fb' className="fab fa-facebook"> </i> </span>
       </div>
      </div>
    
    </MDBFooter>
  );
}

export default FooterPage;