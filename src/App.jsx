import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import LogoIntro from "./components/LogoIntro";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
const Layout = () => (
  <div className="relative w-full ">
    <Navbar />
    <div>
      <Outlet />
    </div>
  </div>
);
function App() {
  return (
    <Routes>
      <Route path="/" element={<LogoIntro />} />
      <Route element={<Layout />}>
        <Route path="/home" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
