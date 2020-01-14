import React from "react";
import "./../styles/home.css";
import Grid from "@material-ui/core/Grid";
import {
  Header,
  Navbar,
  SubHeader,
  PopularCategories,
  Slider,
  FlashDeals,
  NewArrivals,
  BestSellers,
  Brands,
  Footer,
  Social,
} from "../components/index.js";
export default class Home extends React.Component {
  render() {
    return (
      <div>
        {/*Top Header, Header, and Navbar  */}
        <div className="Navbar">
          <Header />
          <SubHeader />
          <Navbar history={this.props.history}/>
        </div>

        {/* Main Slider Starts from Here  */}
        <Slider />
        {/* Popular Categories Cards */}
        <div className="popularCategories">
          <span className="heading">Popular Categories</span>
          <PopularCategories />
        </div>

        {/* Flash Deals Section Starts From Here  */}
        <div className="flashDeals">
          <span className="heading">Flash Deals</span>
          <FlashDeals />
        </div>

        {/* New Arrivals Section Starts From Here */}
        <div className="flashDeals">
          <span className="heading">New Arrivals</span>
          <NewArrivals />
        </div>

        {/* Best Sellers Section Starts From Here */}

        <div className="flashDeals">
          <span className="heading">Best Sellers</span>
          <BestSellers />
        </div>

        {/* Brands Section Starts From Here  */}

        <div className="flashDeals">
          <span className="heading">Shop By Brands</span>
          <Brands />
        </div>

        {/* Footer Section Starts From Here */}
        <Social />
        <Footer />
      </div>
    );
  }
}
