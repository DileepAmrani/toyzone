
import React from 'react'
import { BrowserRouter as Router, Route} from "react-router-dom";
import { Home, Blog, FlashSale, NewArrival, WinterbigSale, BabyToys,SingleProduct,Checkout } from './../../pages'


export default  class BasicRouter extends React.Component{
    render(){
  return(
      <Router>
          <Route exact path="/" component={Home} />
          <Route path="/blogs" component={Blog} />
          <Route path="/flash-sale" component={FlashSale} />
          <Route path="/new-arrival" component={NewArrival} />
          <Route path="/winter-big-sale" component={WinterbigSale} />
          <Route path="/singleproduct" component={SingleProduct} />
          <Route path="/checkout" component={Checkout} />
          {/* <Route path="/baby-toys" component={BabyToys} /> */}
          {/* <Route path="/vehicles" component={Vehicles} /> */}
          {/* <Route path="/toys-for-boys" component={ToysForBoys} />
          <Route path="/toys-for-girls" component={ToysForGirls} /> */}
      </Router>
  )
    }
}