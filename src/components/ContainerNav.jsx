import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faHeart } from "@fortawesome/free-solid-svg-icons";
const ContainerNav = (props) => {

  return (
    <div className="top-nav">
      <div className="buttons">
        <button
          onClick={props.indexChangeNeg}
          onMouseOver={(event) =>
            (event.currentTarget.style.color = "rgb(255, 2, 221)")
          }
          onMouseOut={(event) => (event.currentTarget.style.color = "black")}
        >
          <FontAwesomeIcon size="lg" icon={faAngleLeft} />
        </button>
        <button
          style={{ color: props.liked ? "rgb(255, 2, 221)" : "black" }}
          className="heart"
        >
          <FontAwesomeIcon
            className="heart"
            onClick={() => 
              props.likeUpdate()
              // console.log("i got called")
            }
            size="lg"
            icon={faHeart}
          />
        </button>
      </div>
      <h5>{props.heading}</h5>
      <img src={props.img} alt="Container-Img"></img>
    </div>
  );
};

export default ContainerNav;
