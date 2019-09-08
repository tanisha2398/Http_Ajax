import React, { Component } from "react";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";
// import axios from "../../axios";
import Posts from "./Posts/Posts";
import "./Blog.css";
// import NewPost from "./NewPost/NewPost";
import asyncComponent from "../../higherordercomponent/asyncComponent";
const AsyncNewPost = asyncComponent(() => {
  return import("./NewPost/NewPost");
});

class Blog extends Component {
  state = {
    auth: true
  };
  render() {
    let shouldShow = null;
    if (this.state.auth) {
      shouldShow = <Route path="/new-post" component={AsyncNewPost} />;
    }
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink
                  to="/posts/"
                  exact
                  activeClassName="my-active"
                  activeStyle={{
                    color: "#fa923f",
                    textDecoration: "underline"
                  }}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: "/new-post",
                    hash: "#submit",
                    search: "?quick-submit=true"
                  }}
                >
                  New Post
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        {/* <Route path="/" exact render={() => <h1>Home</h1>} />
    <Route path="/" render={() => <h1>Home2</h1>} />*/}
        <Switch>
          {shouldShow}
          <Route path="/posts" component={Posts} />
          <Route render={() => <h1>Not Found</h1>} />
          {/*<Redirect from="/" to="/posts" />*/}
        </Switch>
      </div>
    );
  }
}

export default Blog;
