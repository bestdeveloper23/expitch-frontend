import React, {useEffect, useState} from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./GlobalStyles";
import Home from "./pages/home";
import { theme } from "./theme/theme";
import Header from "./components/header";
import Footer from "./components/footer";
import Research from "./components/research";
import Workflow from "./components/workflow";
import PitchesList from "./pages/pitches-list";
import Login from "./components/login";
import VerifyUser from "./components/verifyUser";
import { Provider, connect } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import reducers from "./reducers";
import Test from "./pages/test";
import Email from "./pages/email";
import Upload from "./pages/upload";
import Result from "./pages/result";
import Processing from "./pages/processing";
import Results from "./pages/results";
import Waiting from "./pages/waiting";
import Privacy from "./pages/privacy";
import TermsAndConditions from "./pages/terms";
import { htmlScripts } from "./core/services/htmlScripts";
import { logoutUser, setCurrentUser } from "./actions/auth";
import { setEmail, setPitchesList } from "./actions/pitch";
import PrivateRoute from "./components/privateRoute/privateroute";

// import PrivateRoute from "./components/privateRoute/privateroute";

const store = createStore(reducers);

if (localStorage.userInfo) {
  // Set auth token header auth
  const token = localStorage.userInfo;

  store.dispatch(setCurrentUser(JSON.parse(localStorage.userInfo)));
  store.dispatch(setEmail(JSON.parse(localStorage.userInfo).email));
  // Check for expired token
}
if(localStorage.pitches){
  store.dispatch(setPitchesList(JSON.parse(localStorage.pitches)));
}

function App() {

  useEffect(() => {
    htmlScripts.init();

    setInterval(() => {
      // Check for token to keep user logged in
      if (localStorage.userInfo) {
        // Set auth token header auth
        const token = localStorage.userInfo;
        // Decode token and get user info and exp
        
        store.dispatch(setCurrentUser(JSON.parse(localStorage.userInfo)));

      }
    }, 360000);

  }, []);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/workflow" element={<Workflow />} />
          <Route path="/login" element={<Login />} />
          <Route path="/verifyuser" element={<VerifyUser />} />
          <Route path="/about" element={<Research />} />

          <Route path="/test" element={<PrivateRoute><Test /></PrivateRoute>} />
          <Route path="/terms" element={<PrivateRoute><TermsAndConditions /></PrivateRoute>} />
          <Route path="/privacy" element={<PrivateRoute><Privacy /></PrivateRoute>} />
          <Route path="/email" element={<PrivateRoute><Email /></PrivateRoute>} />
          <Route path="/upload" element={<PrivateRoute><Upload /></PrivateRoute>} />
          <Route path="/processing" element={<PrivateRoute><Processing /></PrivateRoute>} />
          <Route path="/waiting" element={<PrivateRoute><Waiting /></PrivateRoute>} />
          <Route path="/result" element={<PrivateRoute><Result /></PrivateRoute>} />

          <Route path="/results" element={<Results />} />
          <Route path="/pitches-list" element={<PitchesList />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
