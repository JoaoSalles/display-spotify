import React from "react";
import { Client as Styletron } from "styletron-engine-atomic";
import { Provider as StyletronProvider } from "styletron-react";
import { LightTheme, BaseProvider, styled } from "baseui";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Home from "pages/home";
import Login from "pages/login";
import { ToastContainer } from "react-toastify";
import configureStore from "./store/configureStore";
import "react-toastify/dist/ReactToastify.css";

const { store, persistor } = configureStore();

const engine = new Styletron();

const Centered = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "end",
  height: "100%",
  minHeight: "100vh",
});

function App() {
  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <Centered>
          <BrowserRouter>
            <Provider store={store}>
              <PersistGate loading={null} persistor={persistor}>
                <ToastContainer
                  position="bottom-center"
                  autoClose={5000}
                  hideProgressBar={false}
                  draggable
                />
                <Switch>
                  <Route exact path="/login" component={Login} />
                  <Route path="*" component={Home} />
                </Switch>
              </PersistGate>
            </Provider>
          </BrowserRouter>
        </Centered>
      </BaseProvider>
    </StyletronProvider>
  );
}

export default App;
