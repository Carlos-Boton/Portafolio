import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Interfaz from "./components/layout/interfaz";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/proyectos" replace />} />
                <Route path="/proyectos" element={<Interfaz />} />
                <Route path="/sobremi" element={<Interfaz />} />
                <Route path="/contacto" element={<Interfaz />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
