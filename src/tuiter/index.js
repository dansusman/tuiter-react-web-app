import { configureStore } from "@reduxjs/toolkit";
import React from "react";
import { Provider } from "react-redux";
import { Route, Routes } from "react-router";
import ExploreComponent from "./explore/index.js";
import HomeComponent from "./home/index.js";
import NavigationSidebar from "./navigation-sidebar/index.js";
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./tuits/tuits-reducer";
import WhoToFollowList from "./who-to-follow-list/index.js";

const store = configureStore({
    reducer: { who: whoReducer, tuits: tuitsReducer },
});

function Tuiter() {
    return (
        <Provider store={store}>
            <div className="row mt-4">
                <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                    <NavigationSidebar />
                </div>
                <div
                    className="col-10 col-md-10 col-lg-7 col-xl-6"
                    style={{ position: "relative" }}
                >
                    <Routes>
                        <Route index element={<HomeComponent />} />
                        <Route path="explore" element={<ExploreComponent />} />
                    </Routes>
                </div>
                <div className="d-none d-lg-block col-lg-4 col-xl-4">
                    <WhoToFollowList />
                </div>
            </div>
        </Provider>
    );
}

export default Tuiter;
