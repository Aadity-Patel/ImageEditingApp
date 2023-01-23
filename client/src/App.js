import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ListOfEditedImages from "./pages/ListOfEditedImages";

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<HomePage/>} />
      <Route path="/images" element={<ListOfEditedImages/>} />
    </Routes>
  );
}

export default App;
