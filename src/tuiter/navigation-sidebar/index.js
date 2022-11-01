import React from "react";
import { useLocation } from "react-router-dom";
import NavigationSidebarItem from "./navigation-sidebar-item";
import tabsArray from "./tabs.json";

const NavigationSidebar = () => {
    const { pathname } = useLocation();
    const paths = pathname ? pathname.split("/") : [];
    var active = paths[paths.length - 1] || "";
    if (active === "" || active === "tuiter") {
        active = "home";
    }
    return (
        <div className="list-group pt-1">
            {tabsArray.map((tab) => (
                <NavigationSidebarItem
                    key={tab._id}
                    tab={tab}
                    active={tab.name.toLowerCase() === active}
                />
            ))}
        </div>
    );
};
export default NavigationSidebar;
