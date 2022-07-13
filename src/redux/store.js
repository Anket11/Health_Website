import { configureStore } from '@reduxjs/toolkit'
import questionnaireReducer from './questionnaireSlice'
import lessonsReducer from './lessonsSlice'

const store = configureStore({
  reducer: {
    questionnaire: questionnaireReducer,
    lessons: lessonsReducer
  },
})

export default store;