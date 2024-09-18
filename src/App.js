import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Screens/Home/Home";
import Contact from "./Screens/Contact/Contact"
import AddDataForm from "./Screens/AddData/AddDataForm";
import Login from "./Screens/Pages/Login";
import Register from "./Screens/Pages/Register";
import { FirebaseProvider } from "./contexts/FirebaseContext";
import ProductList from "./Screens/Pages/ProductList";
import EditProduct from "./Screens/Pages/EditProduct";
import AddProductForm from "./Screens/Pages/AddProductForm";
import AllProduct from "./Screens/Products/AllProduct";


function App() {
  return (
    <FirebaseProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/add-data" element={<AddDataForm/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/add-product" element={<AddProductForm/>} />
        <Route path="/edit-product" element={<EditProduct/>} />
        <Route path="/productlist" element={<ProductList/>} />
        <Route path="/all-product" element={<AllProduct/>} />

      </Routes>
    </Router>
    </FirebaseProvider>

  );
}

export default App;
