import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import LogoIntro from "./components/LogoIntro";
import Navbar from "./components/Navbar";
import DarkBackground from "./components/DarkBackground";
import { Outlet } from "react-router-dom";
import Work from "./pages/Work/Work";
import ScrollToTop from "./components/ScrollToTop";

const Layout = () => (
  <DarkBackground>
    <ScrollToTop />
    <div className="relative w-full">
      <Navbar />
      <div>
        <Outlet />
      </div>
    </div>
  </DarkBackground>
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<LogoIntro />} />
      <Route element={<Layout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/work" element={<Work />} />
      </Route>
    </Routes>
  );
}

export default App;
