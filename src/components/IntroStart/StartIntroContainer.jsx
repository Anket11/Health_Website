import React, { useState } from "react";
import IntroStart from "./IntroStart";
import MultipleChoice from "./MultipleChoice";
const StartIntroContainer = ({ intro }) => {
  const [show, setShow] = useState(false);
  const [index, setIndex] = useState(0);

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
        />
      )}
    </>
  );
};

export default StartIntroContainer;
