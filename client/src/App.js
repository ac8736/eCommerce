import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home/Home";
import ProductPage from "./components/ProductPage/ProductPage";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
