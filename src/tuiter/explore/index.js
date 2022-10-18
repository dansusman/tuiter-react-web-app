import React from "react";
import PostSummaryList from "../post-summary-list";
import TabBar from "../tab-bar";
import "./index.css";
const ExploreComponent = () => {
    return (
        <>
            <div className="row align-items-center">
                <div className="col-11 position-relative">
                    <input
                        placeholder="Search Tuiter"
                        className="form-control rounded-pill ps-5"
                    />
                    <i className="bi bi-search wd-search-tuiter position-absolute"></i>
                </div>
                <div className="col-1">
                    <i
                        className="text-primary float-end bi 
                       bi-gear-fill fs-2 position-relative"
                    ></i>
                </div>
            </div>
            <TabBar />
            <div className="position-relative mb-2">
                <img
                    src="../images/starship.webp"
                    className="w-100"
                    alt="Tesla Starship"
                />
                <h1 className="position-absolute wd-nudge-up text-white">
                    SpaceX Starship
                </h1>
            </div>
            <PostSummaryList />
        </>
    );
};
export default ExploreComponent;
