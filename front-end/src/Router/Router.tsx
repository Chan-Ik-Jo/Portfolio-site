import { BrowserRouter, Routes,Route } from "react-router-dom";

import Home from "../components/Home";
import Drive from "../components/Drive";
import Portfolio from "../components/Portfolio";
import Repository from "../components/Repository";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/drive" element={<Drive />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/repository" element={<Repository />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;