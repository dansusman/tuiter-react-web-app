import React from "react";

const NavigationSidebarItem = ({
    tab = {
        name: "Home",
        icon: "house",
        destination: "home",
    },
    active = true,
}) => {
    return (
        <a
            href={`/tuiter/${tab.destination}`}
            className={`list-group-item
                    ${active ? "active" : ""}`}
        >
            <i className={`bi bi-${tab.icon} pe-2`}></i>
            <div className="d-none d-md-none d-lg-none d-xl-inline">
                {tab.name}
            </div>
        </a>
    );
};

export default NavigationSidebarItem;
