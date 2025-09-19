import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import LogoIntro from "./components/LogoIntro";
import Navbar from "./components/Navbar";
import DarkBackground from "./components/DarkBackground";
import { Outlet } from "react-router-dom";
import Work from "./pages/Work/Work";
import ScrollToTop from "./components/ScrollToTop";
import AOSRefresher from "./components/AOSRefresher";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Layout = () => (
  <DarkBackground>
    <ScrollToTop />
    <AOSRefresher />
    <div className="relative w-full">
      <Navbar />
      <div>
        <Outlet />
      </div>
    </div>
  </DarkBackground>
);

function App() {
  useEffect(() => {
    AOS.init({ once: false, duration: 700 });
  }, []);
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
