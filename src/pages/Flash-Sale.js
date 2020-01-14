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
import { flashDeals } from "../Config/Router/Object";

export default class FlashSale extends React.Component {
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
          Home /  Flash Sale
           {/* Cards are from here */}
          <div className="container" style={{ display: "flex" }}>
            {
              flashDeals.map((v, i) => (

                <ProductCard imageURL={v.url} productName={v.name} price={v.price} onSale={v.onSale} />
              ))
            }
          </div>

            {/* Footer Section Starts From Here */}
          <div>
            <Social />
            <Footer />
          </div>
        </div>
      </>
    );
  }
}
