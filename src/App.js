import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Inicio from './Paginas/Inicio/inicio.js';
import SobreNos from './Paginas/SobreNos/Index.js';
import PaginaPadrao from './Componentes/PaginaPadrao/PaginaPadrao.js';
import Parceiros from './Paginas/Parceiros/Parceiros.js';
import Servicos from './Paginas/Servicos/Servicos.js';
import Contato from './Paginas/Contato/Contato.js';
import CanalEtica from './Paginas/CanalEtica/CanalEtica.js';
import FormularioOuvidoria from './Paginas/CanalEtica/FormularioOuvidoria.js';
import PortalAgregados from './Paginas/PortalAgregados/PortalAgregados.js';

function App() {

  const location = useLocation();
  return (
    <>
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>

          <Route path='/' element={<PaginaPadrao />}>
            <Route path="/" element={<Inicio />} />
            <Route path="/sobrenos" element={<SobreNos />} />
            <Route path="/parceiros" element={<Parceiros />} />
            <Route path="/servicos" element={<Servicos />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/etica" element={<CanalEtica/>} />
            <Route path="/formularioOuvidoria" element={<FormularioOuvidoria/>} />
            <Route path="/portalAgregados" element={<PortalAgregados/>} />

          </Route>

          <Route path="/" element={<Inicio />} />
          <Route path="/sobrenos" element={<SobreNos />} />
          <Route path="/parceiros" element={<Parceiros />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/etica" element={<CanalEtica/>} />
          <Route path="/formularioOuvidoria" element={<FormularioOuvidoria/>} />
          <Route path="/portalAgregados" element={<PortalAgregados/>} />


          <Route path="*" element={<h1>404 - Página não encontrada</h1>} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
