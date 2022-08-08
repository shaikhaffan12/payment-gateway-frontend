import { applyMiddleware, configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import productreducer from '../modules/Reducer/slice';

export const store = configureStore({
  reducer : {productreducer: productreducer},
}, applyMiddleware(thunk))