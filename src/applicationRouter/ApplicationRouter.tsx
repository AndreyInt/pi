import {memo} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import {Pi} from "../pages/pi/Pi.tsx";
import {AppRoutes} from "./appRoutes.ts";
import {Gematria} from "../pages/gematria/Gematria.tsx";
import {Navigation} from "./navigation/Navigation.tsx";

export const ApplicationRouter = memo(() => {
    //
    return (
        <BrowserRouter>
           <Navigation />
            //
            <Routes>
                <Route path={AppRoutes.Pi} element={<Pi/>} />
                <Route path={AppRoutes.Gematria} element={<Gematria/>} />
            </Routes>
        </BrowserRouter>
    );
});