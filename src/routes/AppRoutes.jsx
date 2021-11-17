import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";

const Home = React.lazy(() => import("../containers/Home/Home"));
const SignIn = React.lazy(() => import("../containers/SignIn/SignIn"));
const SignUp = React.lazy(() => import("../containers/SignUp/SignUp"));
const Post = React.lazy(() => import("../containers/Post/Post"));
const ErrorPage = React.lazy(() => import("../containers/ErrorPage/ErrorPage"));
const CreatePost = React.lazy(() =>
  import("../containers/CreatePost/CreatePost")
);

export const AppRoutes = (
  <Suspense fallback="">
    <Switch>
      <Route component={Home} path="/" exact />
      <Route component={SignIn} path="/login" exact />
      <Route component={SignUp} path="/sign-up" exact />
      <PrivateRoute component={CreatePost} path="/post/create" />
      <Route component={Post} path="/post/:slug" />
      <Route component={ErrorPage} path="*" />
    </Switch>
  </Suspense>
);
