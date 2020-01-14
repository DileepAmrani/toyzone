import React from "react";
import Grid from "@material-ui/core/Grid";
import "./SubHeader.css";
import Logo from "../../images/logo.jpg";
import { FaSearch, FaPhone } from "react-icons/fa";

export default class SubHeader extends React.Component {
  render() {
    return (
      <div style={{margin: '10px'}}>
        <Grid container justify="center">
          <Grid item lg={1} xs={12}></Grid>
          <Grid item lg={2} xs={12}>
            <img src={Logo} width="100%" height="50px" />
          </Grid>
          <Grid item lg={4} xs={10}>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="search here..."
                aria-label="Username"
                aria-describedby="basic-addon"
              />
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon">
                  <FaSearch />
                </span>
              </div>
            </div>
          </Grid>
          <Grid item lg={5} xs={10}>
            <div className="contactSec">
              <p>Need Suppot?</p>
              <p>
                <FaPhone />
                03211222869
              </p>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}
