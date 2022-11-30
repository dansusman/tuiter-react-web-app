import React from "react";

const TuitStats = ({ tuit }) => {
    const green = { color: "green" };
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
                    <i className="bi bi-heart-fill me-2 text-danger"></i>
                )}
                {!tuit.liked && <i className="bi bi-heart me-2"></i>}
                {tuit.likes}
            </div>
            <div className="col">
                <i className="bi bi-share"></i>
            </div>
        </div>
    );
};
export default TuitStats;
