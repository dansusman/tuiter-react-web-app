import { configureStore } from "@reduxjs/toolkit";
import React from "react";
import { Provider } from "react-redux";
import ExploreComponent from "./explore";
import NavigationSidebar from "./navigation-sidebar";
import tuitsReducer from "./tuits/tuits-reducer";
import whoReducer from "./reducers/who-reducer";
import WhoToFollowList from "./who-to-follow-list";

const store = configureStore({
    reducer: { who: whoReducer, tuits: tuitsReducer },
});

function Tuiter() {
    return (
        <Provider store={store}>
            <div className="row mt-4">
                <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                    <NavigationSidebar tab="explore" />
                </div>
                <div
                    className="col-10 col-md-10 col-lg-7 col-xl-6"
                    style={{ position: "relative" }}
                >
                    <ExploreComponent />
                </div>
                <div className="d-none d-lg-block col-lg-4 col-xl-4">
                    <WhoToFollowList />
                </div>
            </div>
        </Provider>
    );
}

export default Tuiter;
