import Home from "./pages/Home";
import About from './pages/About'
import Category from './pages/Category'
import Contact from './pages/Contact'
import Default from './components/Default'
import DetailPage from "./pages/DetailPage";
import Cart from './components/Cart/Cart'
import Login from "./pages/Login";
import Register from "./pages/Register";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet
} from "react-router-dom";
export default () => {
  return (

    <div style={{
      height: '100%'
    }}>
      <Router>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/Card" element={<Cart />} />
          <Route path="/About-us" element={<About />} />
          <Route path="/Category" element={<Category />} />
          <Route path="/Contact-us" element={<Contact />} />
          <Route path="/detail-page" element={<DetailPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Default />} />

        </Routes>
      </Router>
    </div>

  )
}