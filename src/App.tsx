import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Takmicenja from './pages/Takmicenja';
import UnosRezultata from './pages/UnosRezultata';
import Klubovi from './pages/Klubovi';
import Tabela from './pages/Tabela';

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="takmicenja" element={<Takmicenja />} />
            <Route path="unos" element={<UnosRezultata />} />
            <Route path="klubovi" element={<Klubovi />} />
            <Route path="tabela" element={<Tabela />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}