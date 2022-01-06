import { configureStore, combineReducers } from '@reduxjs/toolkit';

export interface IStore {}

export const rootReducer = combineReducers({});

export default configureStore({
  reducer: rootReducer,
});
