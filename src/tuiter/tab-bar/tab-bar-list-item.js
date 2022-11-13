import React from "react";

const TabBarListItem = ({ tab = { name: "For You", active: "True" } }) => {
    return (
        <li className="nav-item">
            <a
                className={`nav-link ${
                    tab.name === "Entertainment" ? "d-none d-md-block" : null
                } ${tab.active ? "active" : null}`}
                href="/"
            >
                {tab.name}
            </a>
        </li>
    );
};
export default TabBarListItem;
