import {Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import ServicePage from "./pages/servicePage";

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service/:serviceId" element={<ServicePage />} />
      </Routes>
    
  );
}

export default App;
