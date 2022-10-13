const navItems = [
    "Home",
    "Explore",
    "Notification",
    "Messages",
    "Bookmarks",
    "Lists",
    "Profile",
    "More",
];

const icons = [
    '<i class="fas fa-solid fa-house"></i>',
    '<i class="fas fa-solid fa-hashtag"></i>',
    '<i class="fas fa-bell"></i>',
    '<i class="fas fa-envelope"></i>',
    '<i class="fas fa-bookmark"></i>',
    '<i class="fas fa-list"></i>',
    '<i class="fas fa-user"></i>',
    '<i class="fas fa-ellipsis"></i>',
];

const NavigationSidebar = () => {
    return `
      <div class="list-group">
        <a class="list-group-item" href="/">
          <i class="fab fa-twitter"></i></a>
        ${navItems
            .map((item, i) =>
                item === "Explore"
                    ? `<a href="#" class="list-group-item active">${icons[i]} ${item}</a>`
                    : `<a href="#" class="list-group-item">${icons[i]} ${item}</a>`
            )
            .join("")}
        
      </div>
      <div class="d-grid mt-2">
        <a href="tweet.html"
           class="btn btn-primary btn-block rounded-pill">
           Tuit</a>
      </div>
    `;
};
export default NavigationSidebar;
