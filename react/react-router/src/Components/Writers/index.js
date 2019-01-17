import React from "react";
import { Link, Route, Redirect } from "react-router-dom";
import Writer from "../Writer";

export default ({ match: { url }, writers }) => (
  <>
    <Route exact path={url} render={() => <h5> Select a writer below </h5>} />

    <ul>
      {writers.map(({ id, name }) => (
        <li key={id}>
          <Link to={`${url}/${id}`}> {name} </Link>
        </li>
      ))}
    </ul>

    <Route
      path={`${url}/:writerId`}
      render={({ match }) => {
        const writer = writers.find(
          writer => writer.id === match.params.writerId
        );
        if (!writer) {
          return <Redirect to="/404" />;
        }
        return <Writer {...writer} />;
      }}
    />
  </>
);
