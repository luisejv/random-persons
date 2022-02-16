import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

const App = () => {
  const [query, setQuery] = useState("");

  return (
    <div className="container-fluid px-0">
      <Navbar setQuery={setQuery} />
      <Home query={query} />
      <Footer />
    </div>
  );
};

export default App;
