import React from "react";

const NavigationSidebarItem = ({
    tab = {
        name: "explore",
        icon: "envelope",
        active: true,
    },
}) => {
    return (
        <a
            href="/"
            className={`list-group-item
                    ${tab.active ? "active" : ""}`}
        >
            <i className={`bi bi-${tab.icon} pe-2`}></i>
            <div className="d-none d-md-none d-lg-none d-xl-inline">
                {tab.name}
            </div>
        </a>
    );
};

export default NavigationSidebarItem;
