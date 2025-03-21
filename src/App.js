import "./App.css";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter, Routes, Route, Outlet } from "react-router";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Navbar from "./components/navbar/NavBar";
import RightBar from "./components/rightbar/RightBar";
import LeftBar from "./components/leftbar/LeftBar";

function App() {
  const Layout = () => {
    return (
      <>
        <Navbar />
        {/* <RightBar />
        <Outlet />
        <LeftBar /> */}
      </>
    );
  };
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Layout />}>
            {/* Now these routes are children that will be rendered in place of outlet based on path */}
            <Route exact path="" element={<Home />} />
            <Route exact path="profile/:d" element={<Profile />} />
          </Route>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
