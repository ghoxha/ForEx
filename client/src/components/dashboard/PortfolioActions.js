import React from "react";
import { Link } from "react-router-dom";

const PortfolioActions = () => {
  return (
    <div className="btn-group mb-4" role="group">
      <Link to="/add-currency" className="btn btn-light">
        <i className="far fa-money-bill-alt text-info mr-1" />
        Add Currency
      </Link>
      <Link to="/add-crypto-currency" className="btn btn-light">
        <i className="fab fa-btc text-info mr-1" />
        Add Crypto Currency
      </Link>
      <Link to="/add-stock" className="btn btn-light">
        <i className="fas fa-chart-line text-info mr-1" />
        Add Stock
      </Link>
    </div>
  );
};

export default PortfolioActions;
