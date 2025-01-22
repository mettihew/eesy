import Home from "./components/Home"
import "./App.css"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Products from "./pages/Products"
import { BrowserRouter, Route, Routes } from "react-router"
import SingleProduct from "./pages/SingleProduct"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Cart from "./pages/Cart"
import Contact from "./pages/Contact"
import Order from "./pages/Order"
import Search from "./pages/Search"
import NotFound from "./components/NotFound"
import Categories from "./pages/Categories"
import Favorite from "./pages/Favorite"
import CompareProduct from "./pages/CompareProduct"
import Music from "./pages/Music"
import Test from "./components/Test"
import Account from "./components/Account"
import { useState } from "react";

function App() {
    const [modal, setModal] = useState(false);

  return (
    <BrowserRouter basename="/eesy" >
      <div className={modal ? "blackModal" : ""} />
      <Header onBlur={ev => setModal(ev)} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/account" element={<Account />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/products" element={<Products />} />
        <Route path="/category" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/order" element={<Order />} />
        <Route path="/s" element={<Search />} />
        <Route path="/test" element={<Test />} />
        <Route path="/music" element={<Music />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/compare-product" element={<CompareProduct />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
