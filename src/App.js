import Labs from "./labs";
import HelloWorld from "./labs/a6/hello-world";
import Tuiter from "./tuiter";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route index element={<Labs />}></Route>
                    <Route path="/hello" element={<HelloWorld />}></Route>
                    <Route path="/tuiter" element={<Tuiter />}></Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}
export default App;
