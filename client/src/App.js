import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ListOfEditedImages from "./pages/ListOfEditedImages";
import {RandomImage} from './pages/RandomImage';
function App() {
  return (
    <Routes>
      <Route path="/" exact element={<HomePage />} />
      <Route path="/images" element={<ListOfEditedImages />} />
      <Route path="/random-image" element={<RandomImage label1="Blur" label2="High Contrast" label3="Hue Rotate"/>} />
    </Routes>
  );
}

export default App;
