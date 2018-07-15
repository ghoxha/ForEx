import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentPortfolio } from "../../actions/portfolioActions";
import { Link } from "react-router-dom";
import PortfolioActions from "./PortfolioActions";
import Currency from "./Currency";
import CryptoCurrency from "./CryptoCurrency";
import Stock from "./Stock";
import CurrencyRates from "./CurrencyRates";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getCurrentPortfolio();
  }
  render() {
    const { user } = this.props.auth;
    const { portfolio, loading } = this.props.portfolio;

    let dashboardContent;
    if (portfolio === null || loading) {
      dashboardContent = <h4>Loading</h4>;
    } else {
      //Check if user has a profile
      if (Object.keys(portfolio).length > 0) {
        dashboardContent = (
          <div>
            <p className="lead-text-muted">Welcome {user.username}</p>
            <PortfolioActions />
            <CurrencyRates />
            <Currency currency={portfolio.currency} />
            <CryptoCurrency cryptoCurrency={portfolio.cryptoCurrency} />
            <Stock stock={portfolio.stock} />
          </div>
        );
      } else {
        dashboardContent = (
          <div>
            <p className="lead-text-muted">Welcome {user.username}</p>
            <p>We will now initialize your portfolio</p>
            <Link to="/create-portfolio" className="btn btn-lg btn-info">
              Create Portfolio
            </Link>
          </div>
        );
      }
    }
    return (
      <div className="dashboard">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4">Dashboard</h1>
              {dashboardContent}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  getCurrentPortfolio: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  portfolio: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  portfolio: state.portfolio,
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { getCurrentPortfolio }
)(Dashboard);
