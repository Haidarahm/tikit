import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

// Lazy load the Home component to trigger Suspense
const Home = lazy(() => import("./pages/Home/Home"));

function App() {
  return (
    <Suspense
      fallback={
        <div >
          loading...
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Suspense>
  );
}

export default App;
