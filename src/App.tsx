import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout';
import {
  Home,
  Services,
  Technology,
  News,
  Contact,
  Login,
  KeicoPlus,
  Values,
  ExecutiveIntro,
  History
} from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          {/* About Company routes */}
          <Route path="about/keico-plus" element={<KeicoPlus />} />
          <Route path="about/values" element={<Values />} />
          <Route path="about/executive-intro" element={<ExecutiveIntro />} />
          <Route path="about/history" element={<History />} />

          {/* Other routes */}
          <Route path="services" element={<Services />} />
          <Route path="technology" element={<Technology />} />
          <Route path="news" element={<News />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
