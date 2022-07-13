import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContainerNav from '../ContainerNav'
import Result from "./Result";
import {
  faAngleLeft,
  faAngleRight,
  faHeart,
  faVolumeHigh,
} from "@fortawesome/free-solid-svg-icons";
import "./introstart.css";
import "./multiplechoice.css";
import { propTypes } from "react-bootstrap/esm/Image";
// var img = require("../img.png");
const MultipleChoice = (props) => {
  const [selected, setSelected] = useState(null);
  const [result, setResult] = useState(null);
  const handleChange = (event) => {
    setSelected(event.target.value);
    // setIsDisabled(false);
  };
  const handleClick = () => {
    const answer = props.mcq.answer;
    selected ===null ? alert("Select an option") : selected === answer ? setResult(true) : setResult(false);
  };
  // console.log(isDisabled)
  return (
    <div className="intro-start">
      <ContainerNav indexChangeNeg={props.indexChangeNeg} heading={props.heading} img={props.img} />
      <div className="content">
        {result !== null && <Result result={result} contentRight={props.mcq.resultRight} contentWrong={props.mcq.resultWrong} />}

        <h5>Let's Review!</h5>
        <h4>{props.mcq.question}</h4>
        <ul>
          
          {props.mcq.options.map((option, index) => (
            
            <li key={index}>
            {/* {console.log(option)} */}
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  value={option}
                  checked={selected === option}
                  onChange={handleChange}
                />
                <label className="form-check-label">{option}</label>
              </div>
            </li>
          ))}
        </ul>
        
      </div>
      {result === null ? <button onClick={handleClick} className="button review">
        Let's Review <FontAwesomeIcon icon={faAngleRight} />
      </button> : <button onClick={props.indexChange} className="button review">
        Next <FontAwesomeIcon icon={faAngleRight} />
      </button>  }
      
    </div>
  );
};

export default MultipleChoice;
