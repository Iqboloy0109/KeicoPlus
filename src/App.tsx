import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout";
import {
  Home,
  Technology,
  News,
  Contact,
  Login,
  KeicoPlus,
  Values,
  ExecutiveIntro,
  History,
  EMS,
  ZEB,
  RE100,
  GreenEnergy,
} from "./pages";

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

          {/* Services routes */}
          <Route path="services/ems" element={<EMS />} />
          <Route path="services/zeb" element={<ZEB />} />
          <Route path="services/re100" element={<RE100 />} />
          <Route path="services/green-energy" element={<GreenEnergy />} />
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
