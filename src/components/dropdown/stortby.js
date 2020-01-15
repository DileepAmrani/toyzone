import React, { Fragment } from "react";
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";

const DropdownPage = () => {
  return (
    <Fragment>
      <MDBDropdown size="lg">
        <MDBDropdownToggle caret color="danger">
          Large button
        </MDBDropdownToggle>
        <MDBDropdownMenu color="danger" basic>
          <MDBDropdownItem>Action</MDBDropdownItem>
          <MDBDropdownItem>Another Action</MDBDropdownItem>
          <MDBDropdownItem>Something else here</MDBDropdownItem>
          <MDBDropdownItem>Something else here</MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown>
      <MDBDropdown size="sm">
        <MDBDropdownToggle caret color="danger">
          Small button
        </MDBDropdownToggle>
        <MDBDropdownMenu color="danger" basic>
          <MDBDropdownItem>Action</MDBDropdownItem>
          <MDBDropdownItem>Another Action</MDBDropdownItem>
          <MDBDropdownItem>Something else here</MDBDropdownItem>
          <MDBDropdownItem>Something else here</MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown>
    </Fragment>

  );
}

export default DropdownPage;