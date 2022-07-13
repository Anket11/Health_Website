import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
      heading: "Getting Started with Activity",
      subHeading: "How to Start?",
      img: require("../assests/workout.jpeg"),
    listenTime: "4 min",
    introContent: "Starting a fitness program may be one of the best things you can do for your health. Physical activity can reduce your risk of chronic disease, improve your balance and coordination, help you lose weight — and even improve your sleep habits and self-esteem.",
      content: [
        {
          question: "Is it safe for me to exercise ?",
          answer: "Most older adults can exercise safely.Talk with vour doctor first if you are not sure if exercise is safe for you or if you have a medical condition that is not well controlled",
        },
        {
          question: "Where do I start?",
          answer: "Start slowly with activities that you feel comfortable doing. This can help you avoid getting hurt. Do activities that you enjov and that fit into your daily life. Consider joining a gym or working with a certified personal fitness trainer",
        },
        {
          question: "When should I call my Doctor?",
          answer: "If vou have pain for more than one or two davs after exercise, you should talk to your doctor. Stop exercising rignt away and talk to your doctor if you have any of these symptoms:",
        },
      ],
    },
    {
      heading: "Getting Started with Yoga",
      subHeading: "Why Yoga",
      img: require("../assests/yoga.png"),
    listenTime: "5 min",
    introContent: "Yoga is an ancient and complex practice, rooted in Indian philosophy. It began as a spiritual practice but has become popular as a way of promoting physical and mental well-being.",
      content: [
        {
          question: "What is Yoga?",
          answer: "The word 'yoga' originates from the Sanskrit word Yuj, meaning join, yoke, or unite. Yoga is a method of getting a balanced body and a relaxed mind. It includes the breathing activities called pranayama and the physical act of yoga stances called asanas (yoga poses). Yoga likewise incorporates contemplation, self-examination, and knowledge of yoga philosophy.",
        },
        {
          question: "Why should I start?",
          answer: " Yoga is so much more than a physical practice. It is a coming home to your body, mind, and spirit. It will stretch you to your limits and teach you so much about yourself. I recommend yoga for anyone who is looking for an outlet for stress, a complementary balance to their workout routine, a way to relieve stiffness in their body, or simply a way to connect with a new community.",
        },
        {
          question: "I have a health condition. Can I do yoga?",
          answer: "Numerous individuals practice yoga as an approach to dealing with their health concerns. There are a variety of yoga classes and poses to fit exactly what you need. If you have an ailment or pain and haven't tried yoga in the recent past, I suggest you talk to your physician first. You may want to consult a physiotherapist or yoga trainer to explain your health concerns and see how to best move forward. There may be poses that are helpful for your condition, as well as some bad ones that may not be recommended.",
        },
      ],
    },
    {
      heading: "Getting Started with Activity",
      subHeading: "How to Start?",
      img: require("../assests/workout.jpeg"),
    listenTime: "4 min",
    introContent: "Starting a fitness program may be one of the best things you can do for your health. Physical activity can reduce your risk of chronic disease, improve your balance and coordination, help you lose weight — and even improve your sleep habits and self-esteem.",
      content: [
        {
          question: "Is it safe for me to exercise ?",
          answer: "Most older adults can exercise safely.Talk with vour doctor first if you are not sure if exercise is safe for you or if you have a medical condition that is not well controlled",
        },
        {
          question: "Where do I start?",
          answer: "Start slowly with activities that you feel comfortable doing. This can help you avoid getting hurt. Do activities that you enjov and that fit into your daily life. Consider joining a gym or working with a certified personal fitness trainer",
        },
        {
          question: "When should I call my Doctor?",
          answer: "If vou have pain for more than one or two davs after exercise, you should talk to your doctor. Stop exercising rignt away and talk to your doctor if you have any of these symptoms:",
        },
      ],
    },
    {
      heading: "Getting Started with Yoga",
      subHeading: "Why Yoga",
      img: require("../assests/yoga.png"),
    listenTime: "5 min",
    introContent: "Yoga is an ancient and complex practice, rooted in Indian philosophy. It began as a spiritual practice but has become popular as a way of promoting physical and mental well-being.",
      content: [
        {
          question: "What is Yoga?",
          answer: "The word 'yoga' originates from the Sanskrit word Yuj, meaning join, yoke, or unite. Yoga is a method of getting a balanced body and a relaxed mind. It includes the breathing activities called pranayama and the physical act of yoga stances called asanas (yoga poses). Yoga likewise incorporates contemplation, self-examination, and knowledge of yoga philosophy.",
        },
        {
          question: "Why should I start?",
          answer: " Yoga is so much more than a physical practice. It is a coming home to your body, mind, and spirit. It will stretch you to your limits and teach you so much about yourself. I recommend yoga for anyone who is looking for an outlet for stress, a complementary balance to their workout routine, a way to relieve stiffness in their body, or simply a way to connect with a new community.",
        },
        {
          question: "I have a health condition. Can I do yoga?",
          answer: "Numerous individuals practice yoga as an approach to dealing with their health concerns. There are a variety of yoga classes and poses to fit exactly what you need. If you have an ailment or pain and haven't tried yoga in the recent past, I suggest you talk to your physician first. You may want to consult a physiotherapist or yoga trainer to explain your health concerns and see how to best move forward. There may be poses that are helpful for your condition, as well as some bad ones that may not be recommended.",
        },
      ],
    },
    {
      heading: "Getting Started with Activity",
      subHeading: "How to Start?",
      img: require("../assests/workout.jpeg"),
    listenTime: "4 min",
    introContent: "Starting a fitness program may be one of the best things you can do for your health. Physical activity can reduce your risk of chronic disease, improve your balance and coordination, help you lose weight — and even improve your sleep habits and self-esteem.",
      content: [
        {
          question: "Is it safe for me to exercise ?",
          answer: "Most older adults can exercise safely.Talk with vour doctor first if you are not sure if exercise is safe for you or if you have a medical condition that is not well controlled",
        },
        {
          question: "Where do I start?",
          answer: "Start slowly with activities that you feel comfortable doing. This can help you avoid getting hurt. Do activities that you enjov and that fit into your daily life. Consider joining a gym or working with a certified personal fitness trainer",
        },
        {
          question: "When should I call my Doctor?",
          answer: "If vou have pain for more than one or two davs after exercise, you should talk to your doctor. Stop exercising rignt away and talk to your doctor if you have any of these symptoms:",
        },
      ],
    },
    {
      heading: "Getting Started with Yoga",
      subHeading: "Why Yoga",
      img: require("../assests/yoga.png"),
    listenTime: "5 min",
    introContent: "Yoga is an ancient and complex practice, rooted in Indian philosophy. It began as a spiritual practice but has become popular as a way of promoting physical and mental well-being.",
      content: [
        {
          question: "What is Yoga?",
          answer: "The word 'yoga' originates from the Sanskrit word Yuj, meaning join, yoke, or unite. Yoga is a method of getting a balanced body and a relaxed mind. It includes the breathing activities called pranayama and the physical act of yoga stances called asanas (yoga poses). Yoga likewise incorporates contemplation, self-examination, and knowledge of yoga philosophy.",
        },
        {
          question: "Why should I start?",
          answer: " Yoga is so much more than a physical practice. It is a coming home to your body, mind, and spirit. It will stretch you to your limits and teach you so much about yourself. I recommend yoga for anyone who is looking for an outlet for stress, a complementary balance to their workout routine, a way to relieve stiffness in their body, or simply a way to connect with a new community.",
        },
        {
          question: "I have a health condition. Can I do yoga?",
          answer: "Numerous individuals practice yoga as an approach to dealing with their health concerns. There are a variety of yoga classes and poses to fit exactly what you need. If you have an ailment or pain and haven't tried yoga in the recent past, I suggest you talk to your physician first. You may want to consult a physiotherapist or yoga trainer to explain your health concerns and see how to best move forward. There may be poses that are helpful for your condition, as well as some bad ones that may not be recommended.",
        },
      ],
    },
    
  ];

export const lessonsSlice = createSlice({
  name: "lessons",
  initialState,
  reducers: {
    
  },
});


export default lessonsSlice.reducer;
