import React, { Component } from "react";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import Writers from "./Writers";

export default class App extends Component {
  state = {
    writers: []
  };
  async componentDidMount() {
    /* 
    fetch("http://localhost:3004/writers")
      .then(res => res.json())
      .then(writers => this.setState({ writers })); 
    */
    // adding ?_embed=texts make available to see what authorId in texts corresponds to id in writers --- its json-server hook
    const writers = await (await fetch(
      "http://localhost:3004/writers?_embed=texts"
    )).json();
    this.setState({ writers });
  }
  render() {
    const { writers } = this.state;
    return (
      <BrowserRouter>
        {/* so it is fragment also  <React.Fragment> or  <Fragment>  it is replacing need of <div> </div> for placing inside several elements*/}
        <>
          <ul>
            <li>
              <Link to="/"> Home </Link>
            </li>
            <li>
              <Link to="writers"> Writers </Link>
            </li>
          </ul>
          {/* exact --- need so render occurs only if the same  path applied in other case will render even if current url /writers*/}
          {/* Switch will much every router from top to bottom and render only those who first mutches and will ignore  others*/}
          <Switch>
            <Route exact path="/" render={() => <div>Home</div>} />
            <Route
              path="/writers"
              render={props => <Writers {...props} writers={writers} />}
            />
            <Route render={() => <h3> Not Found! </h3>} />
          </Switch>
        </>
      </BrowserRouter>
    );
  }
}
