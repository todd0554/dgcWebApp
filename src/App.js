// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { router } from "./router/index";

function App() {
  return (
    <Router>
      <div className="app-shell">
        <NavBar />

        <main className="app-main">
          <Container className="app-container">
            <div className="main-body">
              <div className="mask">
                <img
                  src="/image/Screenshot 2023-02-24 at 13.43.37.png"
                  alt="Decorative divider"
                  style={{ width: "100%" }}
                />
              </div>

              <React.Suspense fallback={<div style={{ padding: "40px 0" }}>Loading…</div>}>
                <Routes>
                  {router.map((e, i) => (
                    <Route path={e.path} element={<e.element />} key={i} />
                  ))}
                </Routes>
              </React.Suspense>

              <div className="mask1">
                <img
                  src="/image/Screenshot 2023-02-24 at 13.43.37.png"
                  alt="Decorative divider"
                  style={{ width: "100%" }}
                />
              </div>
            </div>
          </Container>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;