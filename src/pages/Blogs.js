import React from "react";
import Post from "./../components/SinglePost/Post";
import Grid from "@material-ui/core/Grid";
import {
  Header,
  Navbar,
  SubHeader,
  Footer,
  Social
} from "../components/index.js";
export default class Blog extends React.Component {
  render() {
    return (
      <>
        <div>
          {/*Top Header, Header, and Navbar  */}
          <div className="Navbar">
            <Header />
            <SubHeader />
            <Navbar history={this.props.history}/>
          </div>
          <div className="container">
            <Grid container spacing={3}>
              {/* *******************post section********************* */}
              <Grid item xl={9} lg={9} md={9} sm={12} xs={12}>
                <h1 className="blog_title">Toy Zone Care</h1>
                <Grid container spacing={2} justifycontent="center">
                  {/* post 1 */}
                  <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                    <div className="blog_section">
                      <Post />
                    </div>
                  </Grid>
                  {/* post 2 */}
                  <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                    <div className="blog_section">
                      <Post />
                    </div>
                  </Grid>
                  {/* post 3 */}
                  <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                    <div className="blog_section">
                      <Post />
                    </div>
                  </Grid>

                  {/* post 4 */}
                  <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                    <div className="blog_section">
                      <Post />
                    </div>
                  </Grid>
                </Grid>
              </Grid>

              {/* *******************widget section********************* */}
              <Grid item xl={3} lg={3} md={4} sm={12} xs={12}>
                <h1 className="blog_title">Recent Post</h1>
                <div className="widget_section">
                  {/* recent posts 1 */}
                  <div>
                    <img
                      src="https://cdn.shopify.com/s/files/1/0272/0409/1949/articles/3_Ways_to_Make_Holidays_Productive_for_Your_Children_1024x1024.png?v=1578474222"
                      alt="Unique Stuff You Must Buy if You Love Traveling"
                      height="130px"
                      width="100%"
                    />
                    <h4 style={{ color: "grey", margin: 0 }}>
                      Unique Stuff You Must Buy If You Love Traveling
                    </h4>
                    <span> January 08, 2020</span>
                    <hr />
                  </div>

                  {/* recent posts 2 */}
                  <div>
                    <img
                      src="https://cdn.shopify.com/s/files/1/0272/0409/1949/articles/Unique_Stuff_You_Must_Buy_if_You_Love_Traveling_1024x1024.png?v=1578565356"
                      alt="Unique Stuff You Must Buy if You Love Traveling"
                      height="130px"
                      width="100%"
                    />
                    <h4 style={{ color: "grey", margin: 0 }}>
                      Unique Stuff You Must Buy If You Love Traveling
                    </h4>
                    <span> January 08, 2020</span>
                    <hr />
                  </div>

                  {/* recent posts 3 */}
                  <div>
                    <img
                      src="https://cdn.shopify.com/s/files/1/0272/0409/1949/articles/Unique_Stuff_You_Must_Buy_if_You_Love_Traveling_1024x1024.png?v=1578565356"
                      alt="Unique Stuff You Must Buy if You Love Traveling"
                      height="130px"
                      width="100%"
                    />
                    <h4 style={{ color: "grey", margin: 0 }}>
                      Unique Stuff You Must Buy If You Love Traveling
                    </h4>
                    <span> January 08, 2020</span>
                    <hr />
                  </div>
                  {/* recent posts 4 */}
                  <div>
                    <img
                      src="https://cdn.shopify.com/s/files/1/0272/0409/1949/articles/Unique_Stuff_You_Must_Buy_if_You_Love_Traveling_1024x1024.png?v=1578565356"
                      alt="Unique Stuff You Must Buy if You Love Traveling"
                      height="130px"
                      width="100%"
                    />
                    <h4 style={{ color: "grey", margin: 0 }}>
                      Unique Stuff You Must Buy If You Love Traveling
                    </h4>
                    <span> January 08, 2020</span>
                    <hr />
                  </div>
                  {/* *****************Category******************** */}
                  <h3 className="blog_title">Category</h3>
                  <span
                    className="category_list"
                    onClick={() => this.props.history.push("/boystoys")}
                  >
                    Toys for Boys
                  </span>
                  <span
                    className="category_list"
                    onClick={() => this.props.history.push("/girsltoys")}
                  >
                    Toys for Girls
                  </span>
                  <span
                    className="category_list"
                    onClick={() => this.props.history.push("/babytoys")}
                  >
                    Baby toys
                  </span>
                  <span
                    className="category_list"
                    onClick={() => this.props.history.push("/newarrival")}
                  >
                    New arrivals
                  </span>
                  <span
                    className="category_list"
                    onClick={() => this.props.history.push("/flashsale")}
                  >
                    Flash sale
                  </span>
                  <span
                    className="category_list"
                    onClick={() => this.props.history.push("/wintersale")}
                  >
                    Winter big sale
                  </span>
                  {/* *****************end category******************** */}
                </div>
                <hr />
              </Grid>
            </Grid>

          </div>
            {/* Footer Section Starts From Here */}
            <Social />
            <Footer />
        </div>
      </>
    );
  }
}
