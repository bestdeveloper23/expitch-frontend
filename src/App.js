import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./GlobalStyles";
import Home from "./pages/home";
// import Features from "./components/features";
// import Contact from "./components/contact";
// import Extension from "./components/extension";
import { theme } from "./theme/theme";
import Header from "./components/header";
import Footer from "./components/footer";
// import SucessoEmail from "./components/sucessoEmail";
// import Login from "./components/login";
import Test from "./pages/test"
import About from "./components/about";
import Workflow from "./components/workflow";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route path="/features" element={<Features />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/extension" element={<Extension />} />
        <Route path="/sucessoEmail" element={<SucessoEmail />} />
        <Route path="/login" element={<Login />} /> */}
        <Route path="/test" element={<Test />} />
        <Route path="/workflow" element={<Workflow />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer/>
    </ThemeProvider>
  );
}

export default App;
