import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import AboutAccount from "./pages/AboutAccount";
import Dashboard from "./pages/Dashboard";
import ELearning from "./pages/ELearning";
import HalamanDaftar from "./pages/HalamanDaftar";
import HalamanLogin from "./pages/HalamanLogin";
import Intro from "./pages/Intro";
import TampilanAwal from "./pages/TampilanAwal";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard":
        title = "";
        metaDescription = "";
        break;
      case "/elearning":
        title = "";
        metaDescription = "";
        break;
      case "/halaman-daftar":
        title = "";
        metaDescription = "";
        break;
      case "/halaman-login":
        title = "";
        metaDescription = "";
        break;
      case "/intro":
        title = "";
        metaDescription = "";
        break;
      case "/tampilan-awal":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]',
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<AboutAccount />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/elearning" element={<ELearning />} />
      <Route path="/halaman-daftar" element={<HalamanDaftar />} />
      <Route path="/halaman-login" element={<HalamanLogin />} />
      <Route path="/intro" element={<Intro />} />
      <Route path="/tampilan-awal" element={<TampilanAwal />} />
    </Routes>
  );
}
export default App;
