import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./pages";
import ContactPage from "./pages/contact";

function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/contact" element={<ContactPage />} exact />
    </Routes>
  );
}


export default App;
