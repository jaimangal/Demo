import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from "App/Sagas";
import { todoReducer } from "./AddItems/Reducers";

export default () => {
  const rootReducer = combineReducers({
    todoStates: todoReducer
  })

  return configureStore(rootReducer, rootSaga)
}
