import { BrowserRouter as Router } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import "./assets/styles/style.scss";
import { Provider } from "react-redux";
import { store } from "./store/rootStore";

export const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Layout />
      </Router>
    </Provider>
  );
};
