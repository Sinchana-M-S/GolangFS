import CarsView from "./Cars/CarsView";
import CarsList from "./Cars/CarsList";
import CarsCreate from "./Cars/CarsCreate";
import Navbar from "./Header/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CarsList/>} />
          <Route path="/cars/list" element={<CarsList />} />
          <Route path="/cars/create" element={<CarsCreate />} />
          <Route path="/cars/view" element={<CarsView />} />
        </Routes>

      </BrowserRouter>
    </>
  );
}

