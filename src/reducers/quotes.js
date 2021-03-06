import { combineReducers } from "redux";
import uuid from "uuid";

export default (state = [], action) => {
  console.log(action)
  switch(action.type) {
    case "ADD_QUOTE":
      return [...state, action.quote]
    case "REMOVE_QUOTE":
      return state.filter(quote => quote.id !== action.quoteId)
    case "UPVOTE_QUOTE":
      return state.map(quote => {
        if (quote.id === action.quoteId) {
          quote.votes++
        }
        return quote
      })
    case "DOWNVOTE_QUOTE":
      return state.map(quote => {
        if (quote.id === action.quoteId) {
          if (quote.votes>0) {
            quote.votes--
          }
        }
        return quote
      })
    default:
      return state;
  }
  
}
