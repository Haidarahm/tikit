import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";

// Lazy load the Home component to trigger Suspense
const Home = lazy(() => import("./pages/Home/Home"));

function App() {
  return (
    <div className="relative">
      
      <Suspense fallback={<div>loading...</div>}>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
