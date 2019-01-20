import React from "react";
import { Link, Route } from "react-router-dom";
import { NotFound } from "../../Errors";
import Text from "./Text";

export default ({ match: { url }, about, name, email, texts }) => (
  <>
    <h1> {name} </h1>
    <p> {about} </p>
    <h6> {email} </h6>

    <ul>
      {texts.map(({ id, title }) => (
        <li key={id}>
          <Link to={`${url}/texts/${id}`}> {title} </Link>
        </li>
      ))}
    </ul>
    <Route
      path={`${url}/texts/:textId`}
      render={props => {
        const text = texts.find(({ id }) => id === props.match.params.textId);

        if (!text) {
          return <NotFound />;
        } else return <Text {...text} />;
      }}
    />
  </>
);
