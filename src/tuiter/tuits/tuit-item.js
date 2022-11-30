import React from "react";
import TuitStats from "./tuit-stats";
import { useDispatch } from "react-redux";
import { deleteTuitThunk } from "../../services/tuits-thunks";
const TuitItem = ({
    tuit = {
        topic: "Space",
        username: "SpaceX",
        time: "2h",
        title:
            "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
        image: "tesla.png",
    },
}) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    };
    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col-auto">
                    <img
                        width={50}
                        className="float-end rounded-circle"
                        src={
                            tuit.image
                                ? `/images/${tuit.image}`
                                : "/images/blank.jpg"
                        }
                        alt="twitter thing"
                    />
                </div>
                <div className="col-10">
                    <div>
                        <i
                            className="bi bi-x-lg float-end"
                            onClick={() => deleteTuitHandler(tuit._id)}
                        ></i>
                        <span className="fw-bold">
                            {tuit.username || "Anon"}{" "}
                        </span>
                        {tuit.handle || "@anonymousUser"}
                        {tuit.verified && (
                            <i className="bi bi-patch-check-fill ms-2 me-2 text-primary"></i>
                        )}
                        {tuit.time && <i className="bi bi-dot"></i>}
                        {tuit.time}
                    </div>
                    <div>{tuit.tuit}</div>
                    <TuitStats tuit={tuit} />
                </div>
            </div>
        </li>
    );
};
export default TuitItem;
