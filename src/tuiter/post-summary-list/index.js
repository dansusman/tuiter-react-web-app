// import React, { useEffect } from "react";
import React from "react";
import PostSummaryItem from "./post-summary-item";
// import { useDispatch, useSelector } from "react-redux";
// import { findTuitsThunk } from "../../services/tuits-thunks";
import posts from "./posts.json";

const PostSummaryList = () => {
    // const { tuits, loading } = useSelector((state) => state.tuitsData);
    // const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(findTuitsThunk());
    // }, []);
    return (
        <ul className="list-group">
            {/* {loading && <li className="list-group-item">Loading...</li>} */}
            {posts.map((post) => (
                <PostSummaryItem key={post._id} post={post} />
            ))}
        </ul>
    );
};
export default PostSummaryList;
