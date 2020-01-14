import React, { Component } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBFormInline,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";

class Navbar extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <Router>
        <MDBNavbar color="green" dark expand="md">
          <MDBContainer>
            {/* <MDBNavbarBrand>
                        <strong className="white-text">Navbar</strong>
                    </MDBNavbarBrand> */}
            <MDBNavbarToggler onClick={this.toggleCollapse} />
            <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
              <MDBNavbarNav left>
                <MDBNavItem active>
                  <MDBNavLink
                    to="/"
                    onClick={() => this.props.history.push("/")}
                  >
                    Home
                  </MDBNavLink>
                </MDBNavItem>

                <MDBNavItem>
                  <MDBNavLink to="#!">Vehicles</MDBNavLink>
                </MDBNavItem>

                <MDBNavItem>
                  <MDBNavLink to="#!">Toys For Boys</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="#!">Toys For Girls</MDBNavLink>
                </MDBNavItem>

                <MDBNavItem>
                  <MDBNavLink to="#!">Baby Toys</MDBNavLink>
                </MDBNavItem>

                <MDBNavItem>
                  <MDBNavLink
                    to="/new-arrival"
                    onClick={() => this.props.history.push("/new-arrival")}
                  >
                    New Arrival
                  </MDBNavLink>
                </MDBNavItem>

                <MDBNavItem>
                  <MDBNavLink
                    to="/flash-sale"
                    onClick={() => this.props.history.push("/flash-sale")}
                  >
                    Flash Sale
                  </MDBNavLink>
                </MDBNavItem>

                <MDBNavItem>
                  <MDBNavLink
                    to="/winter-big-sale"
                    onClick={() => this.props.history.push("/winter-big-sale")}
                  >
                    Winter Big Sale
                  </MDBNavLink>
                </MDBNavItem>

                <MDBNavItem>
                  <MDBNavLink
                    to="/blogs"
                    onClick={() => this.props.history.push("/blogs")}
                  >
                    Blog
                  </MDBNavLink>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBContainer>
        </MDBNavbar>
      </Router>
    );
  }
}

export default Navbar;
