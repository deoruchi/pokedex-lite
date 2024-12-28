import { Route, Routes } from "react-router";
import { Home } from "./pages/Home";
import { View } from "./pages/View";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="pokemon/:name" element={<View />} />
      </Routes>
    </>
  );
};

export default App;
