import React, { Component } from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
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

    const writers = await (await fetch("http://localhost:3004/writers")).json();
    this.setState({ writers });
  }
  render() {
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
          <Route exact path="/" render={() => <div>Home</div>} />
          <Route path="/writers" render={() => <div>Writers</div>} />
        </>
      </BrowserRouter>
    );
  }
}
