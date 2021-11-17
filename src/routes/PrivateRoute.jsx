import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { selectAccount } from "../store/auth";

export const PrivateRoute = ({ path, component }) => {
  const account = useSelector(selectAccount);
  const authed = Object.keys(account).length !== 0;
  return authed === true ? (
    <Route path={path} component={component} />
  ) : (
    <Redirect to="/login" />
  );
};
