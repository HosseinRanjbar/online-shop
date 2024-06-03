import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import ProductDetails from "./Pages/ProductDetails";
import Header from "./Components/Header";
import SideBar from "./Components/SideBar";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
        <SideBar />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
