import { applyMiddleware, configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import productreducer from './redux/slice'

export const store = configureStore({
  reducer : {productreducer: productreducer},
}, applyMiddleware(thunk))