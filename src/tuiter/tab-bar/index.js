import React from "react";
import TabBarListItem from "./tab-bar-list-item.js";

const tabs = [
    { name: "For You", active: true },
    { name: "Trending" },
    { name: "News" },
    { name: "Sports" },
    { name: "Entertainment" },
];
const TabBar = () => {
    return (
        <ul className="nav nav-pills mt-1 mb-1">
            {tabs.map((t, i) => (
                <TabBarListItem key={i} tab={t} />
            ))}
        </ul>
    );
};
export default TabBar;
