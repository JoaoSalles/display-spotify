import React from "react";
import {Client as Styletron} from 'styletron-engine-atomic';
import {Provider as StyletronProvider} from 'styletron-react';
import {LightTheme, BaseProvider, styled} from 'baseui';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Home from 'pages/home';
import Login from 'pages/login';
import configureStore from './store/configureStore';

const { store, persistor } = configureStore();

const engine = new Styletron();

const Centered = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  minHeight: '100vh'
});

function App() {
  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <Centered className="test">
        <BrowserRouter>
            <Provider store={store}>
              <PersistGate loading={null} persistor={persistor}>
                <Switch>
                    <Route exact path="/login"
                      component={Login}
                    />
                    <Route path="*"
                    component={Home}
                    />
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
