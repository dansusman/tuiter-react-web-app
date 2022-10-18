import React from "react";
import NavigationSidebarItem from "./navigation-sidebar-item";
import tabsArray from "./tabs.json";

const NavigationSidebar = ({ tab = "explore" }) => {
    return (
        <div className="list-group">
            {tabsArray.map((tab) => (
                <NavigationSidebarItem key={tab._id} tab={tab} />
            ))}
        </div>
    );
};
export default NavigationSidebar;
