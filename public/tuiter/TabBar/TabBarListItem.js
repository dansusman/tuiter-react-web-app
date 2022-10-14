const TabBarListItem = (tab) => {
    return `
    <li class="nav-item">
        <a class="nav-link ${tab.active ? "active" : null}" href="#">
            ${tab.name}
        </a>
    </li>`;
};
export default TabBarListItem;
