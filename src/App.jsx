import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

// Lazy load the Home component to trigger Suspense
const Home = lazy(() => import("./pages/Home/Home"));
const Layout = () => (
  <div className="relative">
    <Navbar />
    <div>
      <Outlet />
    </div>
  </div>
);
function App() {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
