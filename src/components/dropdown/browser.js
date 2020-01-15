


import React, { Fragment } from "react";
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';



import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";




export default class DropdownPage extends React.Component {
  render() {


  return (
  
       
 
<div>
      


 <div > 
  
    
      <Fragment style={{width:"100%"}}>

<MDBDropdown size="sm"  style={{overflow:"hidden",width:"500",height:"450"}}>
  <MDBDropdownToggle caret color="green">
   All
  </MDBDropdownToggle>
  <MDBDropdownMenu color="danger" basic>
    <MDBDropdownItem>Baby friction toys</MDBDropdownItem>
    <MDBDropdownItem>Baby learning</MDBDropdownItem>
    <MDBDropdownItem>Baby toys</MDBDropdownItem>
    <MDBDropdownItem>Bubble makers</MDBDropdownItem>
    <MDBDropdownItem>Creativity </MDBDropdownItem>
    <MDBDropdownItem>Die-cast bikes </MDBDropdownItem>
    <MDBDropdownItem>Die-cast cars </MDBDropdownItem>
    <MDBDropdownItem>Die-cast cars </MDBDropdownItem>
    <MDBDropdownItem>Dinosaur toys </MDBDropdownItem>
    <MDBDropdownItem>Electronic toys </MDBDropdownItem>
    <MDBDropdownItem>Fashion & makeup </MDBDropdownItem>
    <MDBDropdownItem>Flash sale </MDBDropdownItem>
    <MDBDropdownItem>items </MDBDropdownItem>
    <MDBDropdownItem>Kitchen sets </MDBDropdownItem>
    <MDBDropdownItem>Learning toys </MDBDropdownItem>
    <MDBDropdownItem>Light and sound </MDBDropdownItem>
    <MDBDropdownItem>Lights & sound toys </MDBDropdownItem>
    <MDBDropdownItem>Magic items </MDBDropdownItem>
    <MDBDropdownItem>Magic sand </MDBDropdownItem>
    <MDBDropdownItem>Plastic friction toys </MDBDropdownItem>
    <MDBDropdownItem>Bubble </MDBDropdownItem>
  </MDBDropdownMenu>
</MDBDropdown>
</Fragment>
      
    
       </div>

    </div>
  )
}
}
