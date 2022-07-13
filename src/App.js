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
  // console.log(questionnaire);

  // console.log(show);
  return (
    <div className="everything">
      <SideNav />
      <div className="boardworkspace">
        <Header />
        <div className="lessons">
        <StartIntroContainer intro={questionnaire} />
        {lessons.map((lesson,index) => (
          <LessonContainer key={index} lesson={lesson} />
        ))}
        
        </div>
      </div>
    </div>
  );
}

export default App;
