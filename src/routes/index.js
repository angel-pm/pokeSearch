import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../components/Home";
import PokeDetail from "../components/PokeDetail";
import NotFound from "../components/NotFound";

export default function RoutesComponent() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home /> }></Route>
                <Route path="/pokemon/:id" element={ <PokeDetail /> }></Route>
                <Route path="*" element={ <NotFound /> }></Route>
            </Routes>
        </BrowserRouter>
    );
}