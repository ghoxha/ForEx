import React, { Component } from "react";
const alpha = require("alphavantage")({ key: "L4JLBZCFQ4OVF2W5" });

class CurrencyRates extends Component {
  constructor() {
    super();
    this.state = {
      xRate: 1,
      curr1: "USD",
      curr2: "USD"
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleConvert = this.handleConvert.bind(this);
  }
  handleConvert(e) {
    alpha.forex.rate(this.state.curr1, this.state.curr2).then(data => {
      this.setState({
        xRate: data["Realtime Currency Exchange Rate"]["5. Exchange Rate"]
      });
    });
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div>
        <h4>Find Currency Rates</h4>
        <table>
          <thead>
            <tr>
              <th>From</th>
              <th>To</th>
            </tr>
            <tr>
              <td>
                <select
                  name="curr1"
                  value={this.state.curr1}
                  onChange={this.handleChange}
                >
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="GBP">GBP</option>
                  <option value="CNY">CNY</option>
                </select>
              </td>
              <td>
                <select
                  name="curr2"
                  value={this.state.curr2}
                  onChange={this.handleChange}
                >
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
                  className="btn btn-light btn-default"
                >
                  Convert
                </button>
              </td>
              <td className="mt-20">
                <textarea
                  value={this.state.xRate}
                  style={{ height: "30px", resize: "none" }}
                />
              </td>
            </tr>
          </thead>
        </table>
      </div>
    );
  }
}

export default CurrencyRates;
