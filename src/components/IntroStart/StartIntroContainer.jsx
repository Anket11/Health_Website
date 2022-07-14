import React, { useState } from "react";
import IntroStart from "./IntroStart";
import MultipleChoice from "./MultipleChoice";
import { useSelector, useDispatch } from "react-redux";
import { changeLike } from "../../redux/questionnaireSlice";
const StartIntroContainer = ({ intro, indexOfList }) => {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const [index, setIndex] = useState(0);
  const liked = useSelector((state) => state.questionnaire[indexOfList].liked);
  return (
    <>
      {!show && (
        <IntroStart
          showChange={() => setShow(true)}
          heading={intro.heading}
          subHeading={intro.subHeading}
          listenTime={intro.listenTime}
          content={intro.introContent}
          img={intro.img}
          buttonText="Let's Review"
          indexOfList={intro.indexOfList}
          liked = {liked}
          likeUpdate = {()=> 
            dispatch(changeLike(indexOfList))
          // console.log("Yes")
          }

        />
      )}
      {show && (index < intro.allMCQ.length && index>=0) && (
        <MultipleChoice
          indexChange={() => setIndex(index + 1)}
          indexChangeNeg={() => (index===0) ? setShow(false):setIndex(index - 1)}
          heading = {intro.heading}
          img={intro.img}
          key={index}
          mcq={intro.allMCQ[index]}
          index={index}
          length={intro.allMCQ.length}
          indexOfList={intro.indexOfList}
          liked = {liked}
          likeUpdate = {()=> 
            dispatch(changeLike(indexOfList))
          // console.log("Yes")
          }

          
        />
      )}
      {index === intro.allMCQ.length && (
        <IntroStart
          heading={intro.heading}
          subHeading={intro.heading}
          listenTime={intro.listenTime}
          content={intro.introContent}
          img={intro.img}
          completed={true}
          indexOfList={intro.indexOfList}
          liked = {liked}
          likeUpdate = {()=> 
            dispatch(changeLike(indexOfList))
          // console.log("Yes")
          }


        />
      )}
    </>
  );
};

export default StartIntroContainer;
