import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import RoomDetail from "./pages/RoomDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Install from "./pages/Install";
import NotFound from "./pages/NotFound";
import WhatsAppWidget from "./components/WhatsAppWidget";
import BottomNavDock from "./components/BottomNavDock";
import InstallPromptBanner from "./components/InstallPromptBanner";
import PWASplashScreen from "./components/PWASplashScreen";
import SplashScreen from "./components/SplashScreen";
import FloatingParticles from "./components/FloatingParticles";
import RouteLoader from "./components/RouteLoader";

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <>
      <RouteLoader />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/rooms/:id" element={<RoomDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/install" element={<Install />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <SplashScreen />
      <PWASplashScreen />
      <FloatingParticles />
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AnimatedRoutes />
        <BottomNavDock />
        <WhatsAppWidget />
        <InstallPromptBanner />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
