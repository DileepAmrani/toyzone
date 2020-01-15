import React from "react";
import { MDBRow, MDBCol, MDBBtn, MDBContainer } from "mdbreact";

class FormsPage extends React.Component {
    state = {
        fname: "",
        lname: "",
        email: "",
        city: "",
        state: "",
        zip: ""
    };

    submitHandler = event => {
        event.preventDefault();
        event.target.className += " was-validated";
    };

    changeHandler = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        return (
            <div>
                <form
                    className="needs-validation"
                    onSubmit={this.submitHandler}
                    noValidate
                >
                    <MDBContainer>
                        <MDBRow>
                            <MDBCol size="4">
                                <img src="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/olo.jpg?v=1578057758" alt="df" width="50%" />
                            </MDBCol>
                            <MDBCol size="4">LOL Super Bigse</MDBCol>
                            <MDBCol size="4">Rs.4,995.00</MDBCol>
                        </MDBRow>
                        <br />
                        <MDBRow>
                            <MDBCol size="4">
                                <img src="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/olo.jpg?v=1578057758" alt="df" width="50%" />
                            </MDBCol>
                            <MDBCol size="4">LOL Super Bigse</MDBCol>
                            <MDBCol size="4">Rs.4,995.00</MDBCol>
                        </MDBRow> <br />
                        <hr />
                        <MDBRow >


                            <MDBCol md="9" className="mb-3">

                                <input
                                    value={this.state.fname}
                                    name="fname"
                                    onChange={this.changeHandler}
                                    type="number"
                                    id="defaultFormRegisterNameEx"
                                    className="form-control"
                                    placeholder="Discount Code"
                                    required
                                />
                                <div className="valid-feedback">Looks good!</div>
                            </MDBCol>

                            <MDBCol md="3" className="mb-3" >

                                <input
                                    value={this.state.fname}
                                    name="fname"
                                    onChange={this.changeHandler}
                                    type="button"
                                    id="defaultFormRegisterNameEx"
                                    className="form-control"
                                    value="Apply"
                                    required
                                    style={{ backgroundColor: "#c8c8c8", color: "white" }}
                                />
                                <div className="valid-feedback">Looks good!</div>
                            </MDBCol>


                        </MDBRow>
                        <hr />
                        <MDBRow>
                            <MDBCol size="6">Subtotal</MDBCol>
                            <MDBCol size="6">Rs.18,045.00</MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol size="6">Shipping</MDBCol>
                            <MDBCol size="6">Calculated at next step</MDBCol>
                        </MDBRow>
                        <hr />
                        <MDBRow>
                            <MDBCol size="6">Total</MDBCol>
                            <MDBCol size="6">PKR <b>Rs.18,045.00</b></MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </form>
            </div>
        );
    }
}

export default FormsPage;