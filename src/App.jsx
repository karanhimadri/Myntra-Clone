import Footer from "./components/Footer";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function App() {
  const [a, setA] = useState([]);
  return (
    <>
      <Header setA={setA} />
      <Outlet context={{ a }} />
      <Footer />
    </>
  );
}

export default App;
