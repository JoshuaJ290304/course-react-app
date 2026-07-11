import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import InsertCourse from "./components/InsertCourse";
import ViewCourse from "./components/ViewCourse";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<InsertCourse />} />
        <Route path="/view" element={<ViewCourse />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;