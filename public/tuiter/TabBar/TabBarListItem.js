const TabBarListItem = (tab) => {
    return `
    <li class="nav-item">
        <a class="nav-link ${
            tab.name === "Entertainment" ? "d-none d-md-block" : null
        } ${tab.active ? "active" : null}" href="#">
            ${tab.name}
        </a>
    </li>`;
};
export default TabBarListItem;
