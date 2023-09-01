import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./GlobalStyles";
import Home from "./pages/home";
import { theme } from "./theme/theme";
import Header from "./components/header";
import Footer from "./components/footer";
import About from "./components/about";
import Workflow from "./components/workflow";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducers/pitch";
import Test from "./pages/test";

const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/workflow" element={<Workflow />} />
          <Route path="/about" element={<About />} />
          <Route path="/test" element={<Test />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
