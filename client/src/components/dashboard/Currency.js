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
    this.handleConvert = this.handleConvert.bind(this);
  }

  handleIntoChange(e) {
    this.setState({ turnInto: e.target.value });
  }
  handleAmountChange(e) {
    this.setState({ turnAmount: e.target.value });
    console.log(this.state.turnAmount);
  }
  handleConvert(e) {
    alpha.forex.rate(this.state.turnFrom, this.state.turnInto).then(data => {
      let xRate = data["Realtime Currency Exchange Rate"]["5. Exchange Rate"];
      let changeAmount = this.state.turnAmount * xRate;
      /*Will need to implement an API call to subtract this amount from the current currency, and add it into the new currency based on current conversion rates. These would need to be changed via calls to mongodb through mongoose, and changing the appropriate fields based on ID. Need to take into account negative balances, add crypto capabilities, and stock options. Due to alphavantage's extensibility, these can be completed very quickly. */
    });
  }
  render() {
    const currency = this.props.currency.map(curr => (
      <tr key={curr._id}>
        <td>{curr.amount}</td>
        <td>{curr.currencyType}</td>
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
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="CNY">CNY</option>
          </select>
        </td>
        <td>
          <button
            onClick={this.handleConvert}
            type="button"
            className="btn btn-default"
          >
            Convert
          </button>
        </td>
      </tr>
    ));
    return (
      <div>
        <h4 className="mb-4 mt-4">Currency list</h4>
        <table className="table">
          <thead>
            <tr>
              <th>Amount</th>
              <th>Currency Type</th>
              <th>Amount to Convert</th>
              <th>Convert To </th>
              <th>Convert </th>
              <th />
            </tr>
            {currency}
          </thead>
        </table>
      </div>
    );
  }
}

export default connect(null)(withRouter(Currency));
