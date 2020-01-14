import React from "react";
import Grid from "@material-ui/core/Grid";
import {
  Header,
  Navbar,
  SubHeader,
  Footer,
  Social
} from "../components/index.js";
export default class NewArrivals extends React.Component {
  render() {
    return (
      <>
        <div>

          {/*Top Header, Header, and Navbar  */}
          <div className="Navbar">
            <Header />
            <SubHeader />
            <Navbar history={this.props.history} />
          </div>
          <br />
        <br />
        <br />
          <br />
      New Arrivals
           <br />
          <br />
          <br />
          <br />
          <div>
            {/* Footer Section Starts From Here */}
            <Social />
            <Footer />
          </div>
        </div>
      </>
    );
  }
}
