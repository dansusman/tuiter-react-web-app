import React from "react";
import ExploreComponent from "./explore";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";

function Tuiter() {
    return (
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
    );
}

export default Tuiter;
