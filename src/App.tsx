import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/layout";
import { Inicial } from "./pages/home";
import { Integrantes } from "./pages/Integrantes";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>          
          <Route index element={<Inicial />} />
          {/* Footer */}
          <Route path="/integrantes" element={<Integrantes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;