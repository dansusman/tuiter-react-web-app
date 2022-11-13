const WhoToFollowListItem = (who) => {
    return `
        <li class="list-group-item">
        <div class="row align-items-center">
            <div class="col-lg-3 col-xl-2">
                <img class="rounded-circle" src=../../images/${who.avatarIcon} height="40px"/>
            </div>
            <div class="col-lg-4 col-xl-4">
                <div class="row fw-bolder">${who.userName}</div>
                <div class="row">@${who.handle}</div>
            </div>
            <div class="col-lg-5 col-xl-6">
                <button class="btn btn-primary rounded-pill float-end">
                    Follow
                </button>
            </div>
        </div>
        </li>`;
};

export default WhoToFollowListItem;
