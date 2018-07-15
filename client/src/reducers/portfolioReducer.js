import { GET_PORTFOLIO, PORTFOLIO_LOADING } from "../actions/types";

const initialState = {
  portfolio: null,
  portfolios: null,
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case PORTFOLIO_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_PORTFOLIO:
      return {
        ...state,
        portfolio: action.payload,
        loading: false
      };
    default:
      return state;
  }
}
