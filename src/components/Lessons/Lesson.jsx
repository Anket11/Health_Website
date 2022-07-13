import React from "react";
import ContainerNav from "../ContainerNav";
import Pagination from "../Pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import "./Lesson.css";

const Lesson = (props) => {
  return (
    <div className="intro-start">
      <ContainerNav
        indexChangeNeg={props.indexChangeNeg}
        heading={props.heading}
        img={props.img}
      />

      <div className="intro-content">
        <h5>{props.question}</h5>
        <p>{props.answer}</p>
      </div>
      <Pagination length={props.length} index={props.index} />
      {props.completed ? (
        <button className="button completed">
          Completed <FontAwesomeIcon icon={faCircleCheck} />{" "}
        </button>
      ) : (
        <button onClick={props.indexChangePos} className="button review">
          Next <FontAwesomeIcon icon={faAngleRight} />{" "}
        </button>
      )}
    </div>
  );
};

export default Lesson;
