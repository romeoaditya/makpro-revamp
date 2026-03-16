import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ServicesPage from "../pages/ServicesPage";
import PortfolioPage from "../pages/PortfolioPage";
import PortfolioDetailPage from "../pages/PortfolioDetailPage";
import ClientsPage from "../pages/ClientPage";
import ContactPage from "../pages/ContactPage";
import TestimonialsPage from "../pages/Testimonials";
import FAQPage from "../pages/FAQ";

// Placeholder for future pages
const ComingSoon = ({ page }: { page: string }) => (
  <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
    <h2 className="text-3xl font-bold text-red-700">{page}</h2>
    <p className="text-neutral-500">Coming soon...</p>
  </div>
);

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/portofolio" element={<PortfolioPage />} />
          <Route path="/portofolio/:id" element={<PortfolioDetailPage />} />
          <Route path="/clients" element={<ClientsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route
            path="/terms"
            element={<ComingSoon page="Terms & Condition" />}
          />
          <Route
            path="*"
            element={<ComingSoon page="404 - Page Not Found" />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
