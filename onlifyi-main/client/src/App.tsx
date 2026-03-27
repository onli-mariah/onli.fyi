import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { AnimatePresence } from "framer-motion";
import PageTransition from "./components/PageTransition";
import Home from "./pages/Home";
import HomeMobile from "./pages/HomeMobile";
import { useMobileDetect } from "./hooks/useMobileDetect";
import { ViewToggleProvider, useViewToggle } from "./contexts/ViewToggleContext";
import GlobalTechWhitepaper from "./pages/GlobalTechWhitepaper";
import GlobalTechCalculatorPage from "./pages/GlobalTechCalculatorPage";
import HeritageCapitalWhitepaper from "./pages/HeritageCapitalWhitepaper";
import HeritageCapitalCalculatorPage from "./pages/HeritageCapitalCalculatorPage";
import AcmeFoodsWhitepaper from "./pages/AcmeFoodsWhitepaper";
import AcmeFoodsCalculatorPage from "./pages/AcmeFoodsCalculatorPage";
import NicheWhitepaperPage from "./pages/NicheWhitepaperPage";
import NicheCalculatorPage from "./pages/NicheCalculatorPage";
import CrossOrgDataWhitepaperPage from "./pages/CrossOrgDataWhitepaperPage";
import MarketplaceComparison from "./pages/MarketplaceComparison";
import MarketplaceCalculator from "./pages/MarketplaceCalculator";
import About from "./pages/About";

function Router() {
  const [location] = useLocation();
  const isMobileDevice = useMobileDetect();
  const { forceDesktop, forceMobile } = useViewToggle();
  
  // Determine which version to show
  const isMobile = forceMobile || (isMobileDevice && !forceDesktop);
  
  return (
    <AnimatePresence mode="wait">
      <Switch location={location} key={location}>
        <Route path={"/"}>
          <PageTransition>{isMobile ? <HomeMobile /> : <Home />}</PageTransition>
        </Route>
        <Route path={"/globaltech"}>
          <PageTransition><GlobalTechWhitepaper /></PageTransition>
        </Route>
        <Route path={"/globaltech/calculator"}>
          <PageTransition><GlobalTechCalculatorPage /></PageTransition>
        </Route>
        <Route path={"/heritage-capital"}>
          <PageTransition><HeritageCapitalWhitepaper /></PageTransition>
        </Route>
        <Route path={"/heritage-capital/calculator"}>
          <PageTransition><HeritageCapitalCalculatorPage /></PageTransition>
        </Route>
        <Route path={"/acme-foods"}>
          <PageTransition><AcmeFoodsWhitepaper /></PageTransition>
        </Route>
        <Route path={"/acme-foods/calculator"}>
          <PageTransition><AcmeFoodsCalculatorPage /></PageTransition>
        </Route>
        <Route path={"/niche"}>
          <PageTransition><NicheWhitepaperPage /></PageTransition>
        </Route>
        <Route path={"/niche/calculator"}>
          <PageTransition><NicheCalculatorPage /></PageTransition>
        </Route>
        <Route path={"/cross-org-data"}>
          <PageTransition><CrossOrgDataWhitepaperPage /></PageTransition>
        </Route>
        <Route path={"/marketplace-comparison"}>
          <PageTransition><MarketplaceComparison /></PageTransition>
        </Route>
        <Route path={"/marketplace-comparison/calculator"}>
          <PageTransition><MarketplaceCalculator /></PageTransition>
        </Route>
        <Route path={"/about"}>
          <PageTransition><About /></PageTransition>
        </Route>
        <Route path={"/404"}>
          <PageTransition><NotFound /></PageTransition>
        </Route>
        {/* Final fallback route */}
        <Route>
          <PageTransition><NotFound /></PageTransition>
        </Route>
      </Switch>
    </AnimatePresence>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
      >
        <ViewToggleProvider>
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </ViewToggleProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
