import React from "react";
import NavigationSidebarItem from "./navigation-sidebar-item";
import tabsArray from "./tabs.json";

const NavigationSidebar = () => {
    return (
        <div className="list-group pt-1">
            {tabsArray.map((tab) => (
                <NavigationSidebarItem key={tab._id} tab={tab} />
            ))}
        </div>
    );
};
export default NavigationSidebar;
