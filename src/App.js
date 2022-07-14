import React from "react";
import { useSelector } from "react-redux";

import "./App.css";
import SideNav from "./components/SideNav";

import Header from "./components/Header";
import StartIntroContainer from "./components/IntroStart/StartIntroContainer";
import LessonContainer from "./components/Lessons/LessonContainer"
function App() {
  const questionnaire = useSelector((state) => state.questionnaire);
  const lessons = useSelector((state) => state.lessons);
  // console.log(lessons);

  // console.log(show);
  return (
    <div className="everything">
      <SideNav />
      <div className="boardworkspace">
        <Header />
        <div className="lessons">
        {questionnaire.map((quest,index) => (
          <StartIntroContainer key={index} indexOfList={index} intro={quest} />
        ))}
        
        {lessons.map((lesson,index) => (
          <LessonContainer key={index} indexOfList={index} lesson={lesson} />
        ))}
        
        </div>
      </div>
    </div>
  );
}

export default App;
