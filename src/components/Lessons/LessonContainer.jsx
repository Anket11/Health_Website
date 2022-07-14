import React, { useState } from "react";
import { increIndex, decreIndex, changeLike } from "../../redux/lessonsSlice";
import IntroStart from "../IntroStart/IntroStart";
import Lesson from "./Lesson";
import { useSelector, useDispatch } from "react-redux";
const LessonContainer = (props) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const index = useSelector((state) => state.lessons[props.indexOfList].index);
  const liked = useSelector((state) => state.lessons[props.indexOfList].liked);
  // console.log("Liked from state" + liked);
  return (
    <>
      {!show && (
        <IntroStart
          showChange={() => setShow(true)}
          heading={props.lesson.heading}
          subHeading={props.lesson.subHeading}
          listenTime={props.lesson.listenTime}
          content={props.lesson.introContent}
          img={props.lesson.img}
          indexOfList={props.indexOfList}
          buttonText="Next"
          liked={liked}
          likeUpdate = {()=> 
          dispatch(changeLike(props.indexOfList))
          // console.log("Yes")
          }
        />
      )}
      {show && index < props.lesson.content.length && index >= 0 && (
        <Lesson
          indexChangePos={() => {
            dispatch(increIndex(props.indexOfList));
          }}
          indexChangeNeg={() =>
            index === 0
              ? setShow(false)
              : dispatch(decreIndex(props.indexOfList))
          }
          // liked={liked}
          // likeUpdate = {()=> changeLike(props.indexOfList)}
          heading={props.lesson.heading}
          img={props.lesson.img}
          youtube={props.lesson.content[index].youtube}
          video={props.lesson.content[index].video}
          question={props.lesson.content[index].question}
          answer={props.lesson.content[index].answer}
          index={index}
          indexOfList={props.indexOfList}
          length={props.lesson.content.length}
          liked = {liked}
          likeUpdate = {()=> 
            dispatch(changeLike(props.indexOfList))

          // console.log("Yes")
          }

        />
      )}
      {index === props.lesson.content.length && (
        <IntroStart
          showChange={() => setShow(true)}
          heading={props.lesson.heading}
          subHeading={props.lesson.subHeading}
          listenTime={props.lesson.listenTime}
          content={props.lesson.introContent}
          img={props.lesson.img}
          indexOfList={props.indexOfList}
          completed={true}
          liked={liked}
          likeUpdate = {()=> 
            dispatch(changeLike(props.indexOfList))
          // console.log("Yes")
          }


        />
      )}
      {/* <div ref={messagesEndRef} /> */}
    </>
  );
};

export default LessonContainer;
