import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faHeart,

} from "@fortawesome/free-solid-svg-icons";
const ContainerNav = (props) => {
  return (
    <div className="top-nav">
        <div className="buttons">
          <button onClick={props.indexChangeNeg}>
            <FontAwesomeIcon size="lg" icon={faAngleLeft} />
          </button>
          <button className="heart">
            <FontAwesomeIcon size="lg" icon={faHeart} />
          </button>
        </div>
        <h5>{props.heading}</h5>
        <img src={props.img}></img>
      </div>
  )
}

export default ContainerNav