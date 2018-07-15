import axios from "axios";
import { GET_PORTFOLIO, PORTFOLIO_LOADING, GET_ERRORS } from "./types";

//Get current portfolio
export const getCurrentPortfolio = () => dispatch => {
  dispatch(setPortfolioLoading());
  axios
    .get("/api/portfolio")
    .then(res =>
      dispatch({
        type: GET_PORTFOLIO,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_PORTFOLIO,
        payload: {}
      })
    );
};

//Create portfolio
export const createPortfolio = (portfolioData, history) => disptach => {
  axios
    .post("/api/portfolio", portfolioData)
    .then(res => history.push("/dashboard"))
    .catch(err =>
      disptach({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const addCurrency = (currData, history) => dispatch => {
  axios
    .post("/api/portfolio/currency", currData)
    .then(res => history.push("/dashboard"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const addCryptoCurrency = (crypData, history) => dispatch => {
  axios
    .post("/api/portfolio/cryptoCurrency", crypData)
    .then(res => history.push("/dashboard"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const addStock = (stockData, history) => dispatch => {
  axios
    .post("/api/portfolio/stock", stockData)
    .then(res => history.push("/dashboard"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
//portfolio loading

export const setPortfolioLoading = () => {
  return {
    type: PORTFOLIO_LOADING
  };
};
