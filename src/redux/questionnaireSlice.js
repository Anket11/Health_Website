import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  heading: "Intro to Activity",
  img: require("../assests/img.jpeg"),
  subHeading: "Why Move?",
  listenTime: "3 min",
  introContent:
    "Pushing against physical limitations with pain can make it worse, but learning to respect limits, pace and rest adequately can lead to reduced pain in some conditions, and ultimately increase mobility and function.",
  allMCQ: [
    {
      question: "Regular activity can:",
      options: [
        "Decrease Pain",
        "Improve Function",
        "Prevent joint stiffness and muscle tightness",
        "Increase your quality of life",
        "All of the above",
      ],
      answer: "All of the above",
      resultRight:
        "Participating in activity daily can decrease pain, improve function and quality of life, and prevent joint stiffness and muscle tightness.",
      resultWrong:
        "No, Participating in activity daily can decrease pain, improve function and quality of life, and prevent joint stiffness and muscle tightness.",
    },
    {
      question:
        "It's important to start small and progress slowly as there is a risk that exercise might increase pain and soreness",
      options: ["True", "False"],
      answer: "True",
      resultRight:
        "Yes, When adding activity to your routine, the best way to avoid an increase in pain or soreness is to tak it slow! Add duration and difficult in small increments. #BabySteps",
      resultWrong:
        "When adding activity to your routine, the best way to avoid an increase in pain or soreness is to tak it slow! Add duration and difficult in small increments. #BabySteps",
    },
  ],
};;

export const questionnaireSlice = createSlice({
  name: "Questionnaire",
  initialState,
  reducers: {
    
  },
});



export default questionnaireSlice.reducer;
