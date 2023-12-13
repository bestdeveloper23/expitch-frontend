import React, {useEffect, useState} from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./GlobalStyles";
import Home from "./pages/home";
import { theme } from "./theme/theme";
import Header from "./components/header";
import Footer from "./components/footer";
import Research from "./components/research";
import Workflow from "./components/workflow";
import Login from "./components/login";
import VerifyUser from "./components/verifyUser";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducers/pitch";
import Test from "./pages/test";
import Email from "./pages/email";
import Upload from "./pages/upload";
import Result from "./pages/result";
import Processing from "./pages/processing";
import Waiting from "./pages/waiting";
import Privacy from "./pages/privacy";
import TermsAndConditions from "./pages/terms";
import { htmlScripts } from "./core/services/htmlScripts";
// import PrivateRoute from "./components/privateRoute/privateroute";

const store = createStore(reducer);

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    htmlScripts.init();
    const userInfo = localStorage.getItem('user_info');
    userInfo ? setUser(userInfo) : setUser(null);
  }, []);

  const PrivateRoute = ({ children, ...rest }) => {
    const userInfo = localStorage.getItem('user_info');
  
    return (
      userInfo ? (
        React.cloneElement(children, { ...rest })
      ) : (
        <Navigate replace to="/login" />
      )
    );
  };

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

        </Routes>
        <Footer />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
