import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import WhatsAppButton from "./components/WhatsAppButton";
import AboutPage from "./pages/AboutPage";
import BookPage from "./pages/BookPage";
import ContactPage from "./pages/ContactPage";
import GalleryPage from "./pages/GalleryPage";
import HomePage from "./pages/HomePage";
import TestimonialsPage from "./pages/TestimonialsPage";
import TreatmentsPage from "./pages/TreatmentsPage";

type Route =
  | "/"
  | "/about"
  | "/treatments"
  | "/gallery"
  | "/testimonials"
  | "/book"
  | "/contact";
const ROUTES: Route[] = [
  "/",
  "/about",
  "/treatments",
  "/gallery",
  "/testimonials",
  "/book",
  "/contact",
];

function getRoute(): Route {
  const h = window.location.hash.replace("#", "") || "/";
  return ROUTES.includes(h as Route) ? (h as Route) : "/";
}

export default function App() {
  const [path, setPath] = useState<Route>(getRoute);

  useEffect(() => {
    const h = () => setPath(getRoute());
    window.addEventListener("hashchange", h);
    return () => window.removeEventListener("hashchange", h);
  }, []);

  const navigate = (p: string) => {
    window.location.hash = p;
    setPath(p as Route);
  };

  const page = {
    "/": <HomePage onNavigate={navigate} />,
    "/about": <AboutPage />,
    "/treatments": <TreatmentsPage />,
    "/gallery": <GalleryPage />,
    "/testimonials": <TestimonialsPage />,
    "/book": <BookPage />,
    "/contact": <ContactPage />,
  }[path] ?? <HomePage onNavigate={navigate} />;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar currentPath={path} onNavigate={navigate} />
      <div className="flex-1">{page}</div>
      <Footer onNavigate={navigate} />
      <WhatsAppButton />
    </div>
  );
}
