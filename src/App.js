import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import ApartmentDetails from "./components/ApartmentDetails";
import ApartmentList from "./components/ApartmentList";
import CreateApartment from "./components/CreateApartment";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";

function App() {
  const [apartments, setApartments] = useState(null);
  useEffect(() => {
    fetchApartments();
  }, []);
  const fetchApartments = () => {
    axios
      .get(process.env.REACT_APP_API_BASE_URL + "/apartments")
      .then((response) => setApartments(response.data))
      .catch((error) => error);
  };
  return (
    <div className="App">
      <NavBar></NavBar>
      {/* <ApartmentList apartments={apartments} /> */}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/apartments"
          element={<ApartmentList apartments={apartments} />}
        />
        <Route path="/apartments/:apartmentId" element={<ApartmentDetails />} />
        <Route path="/apartments/create" element={<CreateApartment />} />
      </Routes>
    </div>
  );
}

export default App;
