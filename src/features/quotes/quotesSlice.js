// Action Creators
// TODO: Create action creators as defined in tests
export function addQuote(quote) {
  return { type: "quotes/add", payload: quote }
}

export function upvoteQuote(id) {
  // console.log(quote)
  return { type: "quotes/upvote", payload: id }
}

export function downvoteQuote(id) {
  return { type: "quotes/downvote", payload: id }
}

export function removeQuote(id) {
  return { type: "quotes/remove", payload: id }
}

// Reducer
const initialState = [];

export default function quotesReducer(state = initialState, action) {
  switch (action.type) {
    case "quotes/add":
      return [...state, action.payload]
    case "quotes/remove":
      return state.filter(e => e.id !== action.payload)
    case "quotes/upvote":
      const upvoteQuote = state.find(q => q.id === action.payload)
      const newUpvotePayload = 'votes' in upvoteQuote ? { ...upvoteQuote, votes: upvoteQuote.votes + 1 } : { ...upvoteQuote, votes: 1 }
      return [ ...state.filter(e => e.id !== action.payload), newUpvotePayload ]
    case "quotes/downvote":
      const downvoteQuote = state.find(q => q.id === action.payload)
      const newDownvotePayload = 'votes' in downvoteQuote ? { ...downvoteQuote, votes: downvoteQuote.votes > 0 ? downvoteQuote.votes - 1 : 0} : { ...downvoteQuote, votes: 0 }
      return [ ...state.filter(e => e.id !== action.payload), newDownvotePayload ]
    default:
      return state;
  }
}