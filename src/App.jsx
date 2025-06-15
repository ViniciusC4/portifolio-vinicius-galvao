import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import MateriaDetail from './pages/MateriaDetail';
import About from './pages/About';
import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/materia/:slug" element={<MateriaDetail />} />
          <Route path="/sobre" element={<About />} />
          {/* Outras rotas serão adicionadas aqui */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
