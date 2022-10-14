import TabBarListItem from "./TabBarListItem.js";

const tabs = [
    { name: "For You", active: true },
    { name: "Trending" },
    { name: "News" },
    { name: "Sports" },
    { name: "Entertainment" },
];
const TabBar = () => {
    return `
    <ul class="nav nav-tabs mt-1 mb-1">
        ${tabs.map((t) => TabBarListItem(t)).join("")}
    </ul>`;
};
export default TabBar;
