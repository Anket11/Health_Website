import React, { useState} from "react";
import IntroStart from "../IntroStart/IntroStart";
import Lesson from './Lesson'
const LessonContainer = (props) => {
  const [show, setShow] = useState(false);
  const [index, setIndex] = useState(0);
  // const messagesEndRef = useRef(null);
  // const scrollToBottom = () => {
  //   // console.log("I got called")
  //   messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  // };
  // useEffect(scrollToBottom, [index]);

  
  return (
    <>
      {!show && <IntroStart
        showChange={() => setShow(true)}
        heading={props.lesson.heading}
        subHeading={props.lesson.subHeading}
        listenTime={props.lesson.listenTime}
        content={props.lesson.introContent}
        img={props.lesson.img}
        buttonText = "Next"
      />}
      {show && (index < props.lesson.content.length && index>=0) && (
        <Lesson
        indexChangePos={() => setIndex(index + 1)}
        indexChangeNeg={() => (index===0) ? setShow(false):setIndex(index - 1)}
        heading={props.lesson.heading}
        img={props.lesson.img}
        question = {props.lesson.content[index].question}
        answer = {props.lesson.content[index].answer}
        index={index}
        length={props.lesson.content.length}
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
        completed = {true}
      />
      )}
      {/* <div ref={messagesEndRef} /> */}

     
    </>
  );
  
};

export default LessonContainer;
