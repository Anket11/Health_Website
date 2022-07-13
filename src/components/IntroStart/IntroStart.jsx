import React from "react";
import ContainerNav from '../ContainerNav'
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faHeart,
  faVolumeHigh,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import "./introstart.css";
// var img = require("../../img.png");

const IntroStart = (props) => {
  return (
    <div className="intro-start">
      <ContainerNav heading={props.heading} img={props.img} />
      <div className="intro-head">
      <div className="volume">
      <FontAwesomeIcon size="lg"icon={faVolumeHigh} />
      </div>
      <div className="intro-head-content">
        <h5>{props.subHeading}</h5>
        <p>{props.listenTime}</p>
        </div>
      </div>
      <div className="intro-content">
        <p>
          {props.content}
        </p>
      </div>
    {props.completed ? 
      <button className="button completed">Completed <FontAwesomeIcon icon={faCircleCheck} /> </button>:<button onClick={props.showChange} className="button review">{props.buttonText}  <FontAwesomeIcon icon={faAngleRight} /> </button>
    }

    </div>
  );
};

export default IntroStart;
