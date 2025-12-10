import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import ArtisansList from './pages/ArtisansList';
import ArtisanDetail from './pages/ArtisanDetail';
import Legal from './pages/Legal';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100">
        <Header />
        <main className="flex-fill">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/artisans" element={<ArtisansList />} />
            <Route path="/artisans/:id" element={<ArtisanDetail />} />
            <Route path="/mentions-legales" element={<Legal />} />
            <Route path="/cgu" element={<Legal />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
