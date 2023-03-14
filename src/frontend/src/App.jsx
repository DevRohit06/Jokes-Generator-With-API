import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import "./index.css";
import "./assets/font/watermelon.woff"
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Output from "./components/output";
import Futer from "./components/footer";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
