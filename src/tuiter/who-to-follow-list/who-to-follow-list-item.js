import React from "react";
const WhoToFollowListItem = ({
    who = { userName: "NASA", handle: "NASA", avatarIcon: "nasa.png" },
}) => {
    return (
        <li className="list-group-item">
            <div className="row align-items-center">
                <div className="col-lg-3 col-xl-2">
                    <img
                        className="rounded-circle"
                        height={48}
                        src={`/images/${who.avatarIcon}`}
                        alt="User Profile Avatar"
                    />
                </div>
                <div className="col-lg-4 col-xl-4">
                    <div className="fw-bold">{who.userName}</div>
                    <div>@{who.handle}</div>
                </div>
                <div className="col-lg-5 col-xl-6">
                    <button className="btn btn-primary rounded-pill float-end">
                        Follow
                    </button>
                </div>
            </div>
        </li>
    );
};
export default WhoToFollowListItem;
