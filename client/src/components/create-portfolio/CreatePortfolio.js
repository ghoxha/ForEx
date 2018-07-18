import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import TextFieldGroup from "../common/TextFieldGroup";
//import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
import { createPortfolio } from "../../actions/portfolioActions";

class CreatePortfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      handle: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.error) {
      this.setState({ errors: nextProps.errors });
    }
  }
  onSubmit(e) {
    e.preventDefault();

    const portfolioData = {
      handle: this.state.handle
    };
    this.props.createPortfolio(portfolioData, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    const { errors } = this.state;
    return (
      <div className="create-portfolio">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Initalize Portfolio</h1>
              <p className="lead text-center">
                Create your handle for identification purposes
              </p>
              <small className="d-block pb-3">*=required field</small>
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder="* Portfolio Handle"
                  name="handle"
                  value={this.state.handle}
                  onChange={this.onChange}
                  error={errors.handle}
                  info="A unique handle for your portfolio"
                />
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-info btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
CreatePortfolio.propTypes = {
  portfolio: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  portfolio: state.portfolio,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { createPortfolio }
)(withRouter(CreatePortfolio));
