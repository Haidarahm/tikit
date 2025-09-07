import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import Intro from "./components/Intro";

// Lazy load the Home component to trigger Suspense
const Home = lazy(() => import("./pages/Home/Home"));

function App() {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Suspense>
  );
}

export default App;
