import "./App.css";
import Main from "./Components/Main";
import "./Components/style.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Navbar /> */}
        <Route
          exact
          path="/"
          element={
            <>
              <Navbar />
              <Main />
            </>
          }
        />
        <Route
          exact
          path="/about"
          element={
            <>
              <Navbar />
              <About />
            </>
          }
        />
        <Route
          exact
          path="/contact"
          element={
            <>
              <Navbar />
              <Contact />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
