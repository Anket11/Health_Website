import React,{useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faHeart } from "@fortawesome/free-solid-svg-icons";
const ContainerNav = (props) => {
  const [liked,setLiked] = useState(true);
  return (
    <div className="top-nav">
      <div className="buttons">
        <button
          onClick={props.indexChangeNeg}
          onMouseOver={(event) => (event.currentTarget.style.color = "rgb(255, 2, 221)")}
          onMouseOut={(event) => (event.currentTarget.style.color = "black")}
        >
          <FontAwesomeIcon size="lg" icon={faAngleLeft} />
        </button>
        <button className="heart">
          <FontAwesomeIcon
            className="heart"
            onClick={(event) =>
            setLiked(!liked)
              (liked ? event.currentTarget.style.color = "rgb(255, 2, 221)":event.currentTarget.style.color = "black" )
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
