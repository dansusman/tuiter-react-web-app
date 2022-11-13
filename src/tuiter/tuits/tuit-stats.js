import React from "react";
import { useDispatch } from "react-redux";
import { updateTuitThunk } from "../../services/tuits-thunks";

const TuitStats = ({ tuit }) => {
    const green = { color: "green" };
    const dispatch = useDispatch();
    return (
        <div className="row mt-3">
            <div className="col">
                <i className="bi bi-chat me-2"></i>
                {tuit.replies}
            </div>
            <div className="col" style={tuit.retuited ? green : null}>
                <i className="bi bi-arrow-repeat me-2"></i>
                {tuit.retuits}
            </div>
            <div className="col">
                {tuit.liked && (
                    <i
                        onClick={() =>
                            dispatch(
                                updateTuitThunk({
                                    ...tuit,
                                    liked: !tuit.liked,
                                    likes: tuit.likes - 1,
                                })
                            )
                        }
                        className="bi bi-heart-fill me-2 text-danger"
                    ></i>
                )}
                {!tuit.liked && (
                    <i
                        onClick={() =>
                            dispatch(
                                updateTuitThunk({
                                    ...tuit,
                                    liked: !tuit.liked,
                                    likes: tuit.likes + 1,
                                })
                            )
                        }
                        className="bi bi-heart me-2"
                    ></i>
                )}
                {tuit.likes}
            </div>
            <div className="col">
                {tuit.disliked && (
                    <i
                        onClick={() =>
                            dispatch(
                                updateTuitThunk({
                                    ...tuit,
                                    disliked: !tuit.disliked,
                                    dislikes: tuit.dislikes - 1,
                                })
                            )
                        }
                        className="bi bi-hand-thumbs-down-fill me-2 text-primary"
                    ></i>
                )}
                {!tuit.disliked && (
                    <i
                        onClick={() =>
                            dispatch(
                                updateTuitThunk({
                                    ...tuit,
                                    disliked: !tuit.disliked,
                                    dislikes: tuit.dislikes + 1,
                                })
                            )
                        }
                        className="bi bi-hand-thumbs-down me-2"
                    ></i>
                )}
                {tuit.dislikes}
            </div>
            <div className="col">
                <i className="bi bi-share"></i>
            </div>
        </div>
    );
};
export default TuitStats;
