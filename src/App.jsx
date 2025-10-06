import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import DarkBackground from "./components/DarkBackground";
import { Outlet } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import AOSRefresher from "./components/AOSRefresher";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Details from "./pages/details/Details"; // Add this import at the top

// Lazy load components
const Home = lazy(() => import("./pages/Home/Home"));
const Work = lazy(() => import("./pages/Work/Work"));
const AboutUs = lazy(() => import("./pages/about/AboutUs"));
const Services = lazy(() => import("./pages/services/Services"));
const Contact = lazy(() => import("./pages/contact/Contact"));
const LogoIntro = lazy(() => import("./components/LogoIntro"));

// Loading component
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-black">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
  </div>
);

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
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/" element={<LogoIntro />} />
        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/details/:id" element={<Details />} />{" "}
          {/* <-- Add this line */}
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
