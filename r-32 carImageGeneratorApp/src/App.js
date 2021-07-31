import React from "react";
import "./App.css";
import CatApp from "./components/cat/CatApp";
import { store } from "./redux/store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={store}>
      <React.Fragment>
        <CatApp />
      </React.Fragment>
    </Provider>
  );
};

export default App;
