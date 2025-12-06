import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout';
import { Home, About, Services, Solutions, Contact } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="solutions" element={<Solutions />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
