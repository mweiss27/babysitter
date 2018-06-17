import React, { Component } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import "styles/errormessages.scss"
class ErrorMessages extends Component {
    render() {
        console.log(`Rendering ErrorMessages with errors:`, this.props.errors)
        return (
            <div id="error-messages">
                <ul>
                    {this.props.errors.errors.map(error => {
                        return <li>{error}</li>
                    })}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        errors: state.errors
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({}, dispatch)
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ErrorMessages)
