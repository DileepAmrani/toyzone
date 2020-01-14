
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Social.css'

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
    };
    // const settings = {
    //     dots: false,
    //     infinite: false,
    //     speed: 1125,
    //     slidesToShow: 3,
    //     slidesToScroll: 1
    //   };
    //   const settings = {
    //     dots: false,
    //     infinite: false,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1
    //   };
    return (
      <div>
        
        <Slider {...settings}>
          <div>
          <div className="testimonial-author clearfix">
             <div className="testimonial-author-thumbnail img-thumbnail">
               <img
                  src="https://cdn.shopify.com/s/files/1/0272/0409/1949/files/Review-2.png?v=1575301924"
                  data-sizes="auto"
                  data-parent-fit="contain"
                  height="89"
                  width="89"
                  alt=""
                  className="img-rounded lazyautosizes lazyloaded"
                  sizes="89px"
                />
              </div>
              <div class="testimonial_right">
						 	<p class="blockquote"><span>"</span>Toyzone is one of the finest &nbsp; &nbsp; &nbsp; toy shop in Pakistan<span>"</span></p>
						     <p class="autor_name">Shaheena</p>
						 </div></div>

          </div>
          <div>
          <div className="testimonial-author clearfix">
             <div className="testimonial-author-thumbnail img-thumbnail">
               <img
                  src="https://cdn.shopify.com/s/files/1/0272/0409/1949/files/reveiw-3.png?v=1575301944"
                  data-sizes="auto"
                  data-parent-fit="contain"
                  height="89"
                  width="89"
                  alt=""
                  className="img-rounded lazyautosizes lazyloaded"
                  sizes="89px"
                />
              </div>
              <div class="testimonial_right">
						 	<p class="blockquote"><span>"</span>They deliver what they<br />&nbsp; &nbsp; &nbsp; commit. Nice people<span>"</span></p>
						     <p class="autor_name">Mirza Aslam</p>
						 </div></div>
          </div>
          <div>
          <div className="testimonial-author clearfix">
             <div className="testimonial-author-thumbnail img-thumbnail">
               <img
                  src="https://cdn.shopify.com/s/files/1/0272/0409/1949/files/review-1.png?v=1575301961"
                  data-sizes="auto"
                  data-parent-fit="contain"
                  height="89"
                  width="89"
                  alt=""
                  className="img-rounded lazyautosizes lazyloaded"
                  sizes="89px"
                />
              </div>
              <div class="testimonial_right">
						 	<p class="blockquote"><span>"</span>Low prices, fast shipping.<br />&nbsp; &nbsp; &nbsp; Very co operative team.<span>"</span></p>
						     <p class="autor_name">Shahroz Ahmed</p>
						 </div></div>
          </div>
         
        </Slider>
      </div>
    );
  }
}
