const WhoToFollowListItem = (who) => {
    return `
    <li class="list-group-item">
    <div class="row align-items-center">
        <div class="col-2">
            <img class="rounded-circle" src=../../images/${who.avatarIcon} height="40px"/>
        </div>
        <div class="col-2">
            <div class="row fw-bolder">${who.userName}</div>
            <div class="row">@${who.handle}</div>
        </div>
        <div class="col-8">
            <button class="btn btn-primary rounded-pill float-end">
                Follow
            </button>
        </div>
    </div>
    </li>
       `;
};

export default WhoToFollowListItem;
