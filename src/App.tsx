import { Routes, Route } from "react-router";
import "./App.css";
import { Home } from "@/pages/home/Home";
import { Order } from "@/pages/order/Order";
import { Checkout } from "@/pages/checkout/Checkout";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/order" element={<Order />} />
    </Routes>
  );
}

export default App;
