import React from "react";
import Grid from "@material-ui/core/Grid";
import {
  Header,
  Navbar,
  SubHeader,
  Footer,
  Social
} from "../components/index.js";
import ProductCard from "./../components/ProductCard/ProductCard"
import { newArrivals } from "../Config/Router/Object";

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
 
    Home /  New Arrivals
{/* Cards are from here */}
<div className="container" style={{display: "flex"}}>
       {
       newArrivals.map((v, i) => (
         
         <ProductCard imageURL={v.url} productName={v.name} price={v.price} onSale={v.onSale} />
        ))
      }
</div>

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
