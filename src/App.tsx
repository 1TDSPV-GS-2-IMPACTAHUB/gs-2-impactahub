import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/layout";
import { Inicial } from "./pages/home";
import { Integrantes } from "./pages/Integrantes";
import { AddCadastro } from "./pages/add-cadastro";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>          
          <Route index element={<Inicial />} />
          {/* Footer */}
          <Route path="/integrantes" element={<Integrantes />} />
          <Route path="/Cadastro" element={<AddCadastro />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;