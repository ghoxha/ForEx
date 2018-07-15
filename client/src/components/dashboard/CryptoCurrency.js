import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
const alpha = require("alphavantage")({ key: "L4JLBZCFQ4OVF2W5" });
//created a constructor to keep track of changes
class Currency extends Component {
  constructor() {
    super();
    this.state = {
      currId: "",
      turnInto: "USD",
      turnFrom: "",
      turnAmount: 0
    };
    this.handleIntoChange = this.handleIntoChange.bind(this);
    this.handleAmountChange = this.handleAmountChange.bind(this);
  }

  handleIntoChange(e) {
    this.setState({ turnInto: e.target.value });
  }
  handleAmountChange(e) {
    this.setState({ turnAmount: e.target.value });
    console.log(this.state.turnAmount);
  }

  render() {
    const cryptoCurrency = this.props.cryptoCurrency.map(curr => (
      <tr key={curr._id}>
        <td>{curr.amount}</td>
        <td>{curr.cryptoType}</td>
        <td>
          <textarea
            style={{ height: "30px", resize: "none" }}
            type="text"
            value={this.state.turnAmount}
            onChange={this.handleAmountChange}
          />
        </td>
        <td>
          <select value={this.state.turnInto} onChange={this.handleIntoChange}>
            <option value="LTC">LTC</option>
            <option value="ETH">ETH</option>
            <option value="XRP">XRP</option>
            <option value="BCH">BCH</option>
          </select>
        </td>
        <td>
          <button type="button" className="btn btn-default">
            Convert
          </button>
        </td>
      </tr>
    ));
    return (
      <div className="mt-7">
        <h4 className="mb-4 mt-4">CryptoCurrency list</h4>
        <table className="table">
          <thead>
            <tr>
              <th>Amount</th>
              <th>Crypto Type</th>
              <th>Amount to Convert</th>
              <th>Convert To </th>
              <th>Convert </th>
              <th />
            </tr>
            {cryptoCurrency}
          </thead>
        </table>
      </div>
    );
  }
}

export default connect(null)(withRouter(Currency));
