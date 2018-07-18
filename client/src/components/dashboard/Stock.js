import React, { Component } from "react";
import { connect } from "react-redux";
//import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
//const alpha = require("alphavantage")({ key: "L4JLBZCFQ4OVF2W5" });
//created a constructor to keep track of changes
class Stock extends Component {
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
    const stock = this.props.stock.map(stock => (
      <tr key={stock._id}>
        <td>{stock.amount}</td>
        <td>{stock.stockName}</td>
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
            <option value="AMD">AMD</option>
            <option value="WFC">WFC</option>
            <option value="BAC">BAC</option>
            <option value="SBUX">SBUX</option>
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
      <div>
        <h4 className="mb-4 mt-4">Stock list</h4>
        <table className="table">
          <thead>
            <tr>
              <th>Amount of Stock</th>
              <th>Stock Type</th>
              <th>Amount to Convert</th>
              <th>Convert To </th>
              <th>Convert </th>
              <th />
            </tr>
            {stock}
          </thead>
        </table>
      </div>
    );
  }
}

export default connect(null)(withRouter(Stock));
