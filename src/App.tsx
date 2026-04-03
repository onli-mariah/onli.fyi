
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ScrollToTop } from './components/ScrollToTop';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Manufacturing } from './pages/Manufacturing';
import { FamilyOffices } from './pages/FamilyOffices';
import { GlobalTrade } from './pages/GlobalTrade';
import { DataPrivacy } from './pages/DataPrivacy';
import { Finance } from './pages/Finance';
import { Marketplaces } from './pages/Marketplaces';
import { UseCasesDirectory } from './pages/UseCasesDirectory';
import { TheOnliWayLanding } from './pages/TheOnliWayLanding';
import { TheMarket } from './pages/TheMarket';
import { TheValue } from './pages/TheValue';
import { TheProof } from './pages/TheProof';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/manufacturing" element={<Manufacturing />} />
          <Route path="/family-offices" element={<FamilyOffices />} />
          <Route path="/global-trade" element={<GlobalTrade />} />
          <Route path="/data-privacy" element={<DataPrivacy />} />
          <Route path="/finance" element={<Finance />} />
          <Route path="/marketplaces" element={<Marketplaces />} />
          <Route path="/use-cases" element={<UseCasesDirectory />} />
          <Route path="/the-onli-way" element={<TheOnliWayLanding />} />
          <Route path="/the-market" element={<TheMarket />} />
          <Route path="/the-value" element={<TheValue />} />
          <Route path="/the-proof" element={<TheProof />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
