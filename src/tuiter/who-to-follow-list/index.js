import React from "react";
import WhoToFollowListItem from "./who-to-follow-list-item";
import whoArray from "./who.json";

const WhoToFollowList = () => {
    return (
        <ul className="list-group pt-1">
            <li className="list-group-item">
                <h3>Who to follow</h3>
            </li>
            {whoArray.map((who) => (
                <WhoToFollowListItem key={who._id} who={who} />
            ))}
        </ul>
    );
};

export default WhoToFollowList;
