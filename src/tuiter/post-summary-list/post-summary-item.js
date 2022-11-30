import React from "react";
const PostSummaryItem = ({
    post = {
        topic: "Space",
        username: "SpaceX",
        time: "2h",
        title:
            "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
        image: "tesla.png",
    },
}) => {
    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col-10">
                    <div>
                        <span className="fw-bold">
                            {post.username || "Anon"}{" "}
                        </span>{" "}
                        • {post.time || "Now"}
                    </div>
                    <div className="fw-bolder">
                        {post.topic || "Web Development"}
                    </div>
                    <div>{post.title || "Lorem ipsum"}</div>
                </div>
                <div className="col-2">
                    <img
                        width={70}
                        className="float-end rounded-3"
                        src={
                            post.image
                                ? `/images/${post.image}`
                                : "/images/blank.jpg"
                        }
                        alt="Tuit"
                    />
                </div>
            </div>
        </li>
    );
};
export default PostSummaryItem;
