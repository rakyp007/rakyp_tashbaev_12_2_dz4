import React from 'react'
import { connect } from 'react-redux';
import { handleTextAction } from '../../redux/actions/Action';

class TitlePage extends React.Component {
    constructor(props) {
        super(props)
    }

    chageText = () => {
        this.props.handleTextAction()
    }

    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <button onClick={this.chageText}>change text</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        title: state.titleReducer.title
    }
}

const mapDispatchToProps = {
    handleTextAction
}

export default connect(mapStateToProps, mapDispatchToProps) (TitlePage);