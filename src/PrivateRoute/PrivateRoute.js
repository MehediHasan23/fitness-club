import React from "react";
import { Redirect, Route } from "react-router-dom";

import useProvContext from "../hooks/useProvContext.js";

const PrivateRoute = ({ children, ...rest }) => {
  const {firebase} = useProvContext()
  return (
    <Route
      {...rest}
      render={({ location }) =>
        firebase?.user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
