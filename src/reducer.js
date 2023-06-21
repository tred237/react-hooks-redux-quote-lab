import { combineReducers } from "redux";
import quotesReducer from "./features/quotes/quotesSlice";

// export default combineReducers({
//   quotes: quotesReducer,
// });

const rootReducer = combineReducers({
  quotes: quotesReducer,
});

export default rootReducer;
