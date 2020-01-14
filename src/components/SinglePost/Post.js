import React from "react";
import "./Post.css";
import Paper from "@material-ui/core/Paper";

export default class Post extends React.Component {
    render() {
        return (
            <>
                <Paper style={{ backgroundColor: "rgb(247, 249, 251)" }}>
                    <div className="blog_section">
                        <div>
                            <img
                                src="https://cdn.shopify.com/s/files/1/0272/0409/1949/articles/3_Ways_to_Make_Holidays_Productive_for_Your_Children_1024x1024.png?v=1578474222"
                                alt="Unique Stuff You Must Buy if You Love Traveling"
                            />
                            <div style={{ padding: "10px" }}>
                                <h2 className="h3">
                                    <span>
                                        Unique Stuff You Must Buy if You Love Traveling
                  </span>
                                </h2>
                                <p className="blog_meta">
                                    <span> January 08, 2020 | </span>
                                    <span>
                                        |{" "}
                                        <span
                                            data-disqus-identifier="383977783341"
                                            className="disqus-comment-count"
                                        >
                                            0 comments
                    </span>
                                    </span>
                                </p>
                                <p className="blog-excerpt">
                                    For traveling abroad, you need to get your hands on some
                                    highly cool items that would serve as not only a good memory
                                    of your trip but also serve as good gift to give to your loved
                                    ones. Not sure what to get when you are out there to
                                    travel?...
                </p>
                                <p>
                                    <span
                                        className="btn blog-read-more-btn"
                                    >
                                        Read more ...
                  </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </Paper>
            </>
        );
    }
}
