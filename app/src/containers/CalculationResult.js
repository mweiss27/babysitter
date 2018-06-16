import React, { Component } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import "styles/calculationresult.scss"
class CalculationResult extends Component {
    render() {
        return (
            this.props.calculationResult.result != null && (
                <div id="calculation-result">
                    <div id="result-pretext">You are owed: </div>
                    <div id="result-value">${this.props.calculationResult.result}</div>
                </div>
            )
        )
    }
}

function mapStateToProps(state) {
    return {
        calculationResult: state.calculationResult
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({}, dispatch)
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CalculationResult)
