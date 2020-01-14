import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Grid from "@material-ui/core/Grid";
import { flashDeals } from "../../Config/Router/Object";
import {
ProductCard
} from "../index.js";

export default class FlashDeals extends React.Component {
  state = {
    currentIndex: 0,
    responsive: {
      1322: { items: 5 },
      1320: { items: 4 },
      958: { items: 3 },
      650: { items: 2 },
      645: { items: 1 }
    },
    galleryItems: this.galleryItems()
  };

  slideTo = i => this.setState({ currentIndex: i });
  onSlideChanged = e => this.setState({ currentIndex: e.item });
  slideNext = () =>
    this.setState({ currentIndex: this.state.currentIndex + 1 });
  slidePrev = () =>
    this.setState({ currentIndex: this.state.currentIndex - 1 });
  galleryItems() {
    return flashDeals.map((v, i) => (
      <ProductCard imageURL={v.url} productName={v.name} price={v.price} onSale={v.onSale}/>
    ));
  }
  render() {
    const { galleryItems, responsive, currentIndex } = this.state;
    return (
      <Grid container justify="center">
        <div style={{ width: "80%" }}>
          <AliceCarousel
            style={{ position: "absolute" }}
            dotsDisabled={true}
            buttonsDisabled={true}
            items={galleryItems}
            responsive={responsive}
            slideToIndex={currentIndex}
            onSlideChanged={this.onSlideChanged}
          />
          <div
            style={{
              justifyContent: "center",
              marginBottom: "2%",
              marginTop: "-0.5vh",
              position: "relative"
            }}
          >
            <img
              alt=""
              height="30"
              style={{
                borderRadius: "100%",
                padding: "4px",
                marginRight: "2%",
                backgroundColor: "white",
                boxShadow: "0px 2px 20px 0px rgba(0,0,0,0.75)"
              }}
              src="https://image.flaticon.com/icons/svg/126/126492.svg"
              onClick={() => this.slidePrev()}
            />
            <img
              alt=""
              height="30"
              style={{
                borderRadius: "100%",
                padding: "4px",
                marginRight: "2%",
                backgroundColor: "white",
                boxShadow: "0px 2px 20px 0px rgba(0,0,0,0.75)"
              }}
              src="https://image.flaticon.com/icons/svg/126/126490.svg"
              onClick={() => this.slideNext()}
            />
          </div>
        </div>
      </Grid>
    );
  }
}
