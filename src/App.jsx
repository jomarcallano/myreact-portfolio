import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";
import Home from "./pages/Home";
import NotFound from "./components/NotFound.jsx";
import ContactCard from "./components/Layout/ContactCard.jsx";

function ScrollToHash() {
    const { hash } = useLocation();

    useEffect(() => {
        if (!hash) return;
        const id = hash.slice(1);
        const timer = setTimeout(() => {
            const el = document.getElementById(id);
            if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 50);
        return () => clearTimeout(timer);
    }, [hash]);

    return null;
}

function App() {
    return (
        <BrowserRouter>
            <ScrollToHash />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<ContactCard />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Analytics />
        </BrowserRouter>
    );
}

export default App;
