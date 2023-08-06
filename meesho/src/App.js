import { Route, Routes } from "react-router-dom";
import Login from "./component/login/Login";
import Register from "./component/register/Register";
import Singleproduct from "./component/singleproduct/Singleproduct";
import Navbar from "./component/navbar/Navbar";
import Footer from "./component/footer/Footer"
import Home from "./component/home/Home";
import Cart from "./component/cart/Cart";
import WomenEthinic from "./component/multipleproduct/WomenEthinic";
import WomenWestern from "./component/multipleproduct/WomenWestern";
import Men from "./component/multipleproduct/Men";
import Kids from "./component/multipleproduct/Kids";
import Homenkitchen from "./component/multipleproduct/Homenkitchen";
import Beautynhealth from "./component/multipleproduct/Beautynhealth";
import Jewellerynaccessories from "./component/multipleproduct/Jewellerynaccessories";
import Electronics from "./component/multipleproduct/Electronics";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/singleproduct" element={<Singleproduct />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/womenethenic" element={<WomenEthinic />} />
        <Route exact path="/womenwestern" element={<WomenWestern />} />
        <Route exact path="/men" element={<Men />} />
        <Route exact path="/kids" element={<Kids />} />
        <Route exact path="/homenkitchen" element={<Homenkitchen />} />
        <Route exact path="/beautynhealth" element={<Beautynhealth />} />
        <Route exact path="/jewellerynaccessories" element={<Jewellerynaccessories />} />
        <Route exact path="/electronics" element={<Electronics />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
