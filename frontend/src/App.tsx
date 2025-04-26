import { Route, Routes } from "react-router-dom";
import "./App.css";
import Clients from "@/pages/clients";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Clients />} />
        </Routes>
    );
}

export default App;
