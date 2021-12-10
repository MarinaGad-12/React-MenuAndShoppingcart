import React from "react";
import qs from "query-string";

const User = (props) => {
  const obj = qs.parse(props.location.search);
  console.log(obj);
  return <h1>USer {props.match.params.id}</h1>;
};

export default User;
