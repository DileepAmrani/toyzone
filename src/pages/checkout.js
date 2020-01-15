import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import CheckoutCard from './../components/checkout/checkout'
import CheckoutCard2 from './../components/checkout/checkout2'
const gridExamplesPage = () => {
return (
<MDBContainer>
<br />
           <br />
           <br />

 

  <MDBRow>
    <MDBCol xl="7" style={{borderRight:"1px solid #a79d9d"}}>

        <CheckoutCard />
    </MDBCol>
    <MDBCol xl="5">
        <CheckoutCard2/>
    </MDBCol>
  </MDBRow>
</MDBContainer>
);
}

export default gridExamplesPage;