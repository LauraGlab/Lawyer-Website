import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home.jsx";
import CivilLaw from "./routes/CivilLaw.jsx";
import DataLaw from "./routes/DataLaw.jsx";
import EconLaw from "./routes/EconLaw.jsx";
import EmployLaw from "./routes/EmployLaw.jsx";
import EstateLaw from "./routes/EstateLaw.jsx";
import FamilyLaw from "./routes/FamilyLaw.jsx";
import LoadingPage from "./sections/LoadingPage.jsx"
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true); 

   useEffect(() => {
     setTimeout(() => setLoading(false), 3300);
     console.log.apply(console, [
       "%c Designed and Coded by Laura Głąb",
       "color: white" +
         "; background: padding:5px 0; border-radius: 5px; font-weight: bold; background-color: #897455;",
     ]);
   }, []);

    if (loading) {
      return <LoadingPage />;
    }

  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/prawo-cywilne" element={<CivilLaw />} />
          <Route path="/prawo-danych" element={<DataLaw />} />
          <Route path="/prawo-gospodarcze" element={<EconLaw />} />
          <Route path="/prawo-pracy" element={<EmployLaw />} />
          <Route path="/prawo-nieruchomosci" element={<EstateLaw />} />
          <Route path="/prawo-rodzinne" element={<FamilyLaw />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
