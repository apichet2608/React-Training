import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Loading from "./components/Loading";
import { ThemeProvider } from "next-themes";
// import Snowfall from "react-snowfall";

// Lazy load components
const Home = React.lazy(() => import("@/pages/Homepage/Homepage"));

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/template-typescript" element={<Layout />}>
              {/* Public Routes */}
              <Route
                index
                element={
                  <Navigate to="/template-typescript/homepage" replace />
                }
              />
              <Route path="/template-typescript/homepage" element={<Home />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
      {/* <Snowfall snowflakeCount={20} /> */}
    </ThemeProvider>
  );
}

export default App;
