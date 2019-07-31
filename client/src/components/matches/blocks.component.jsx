import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getMatches } from '../../redux/match/match.actions'

class Blocks extends Component {

    componentDidMount(){
        const {getMatches} = this.props;
        getMatches();
    }

    showMatches = () => {
        return (
            <div>
                match
            </div>
        )
    }

    render() {

        const {matches} = this.props;

        return (
            <div className="home_matches">
                {this.showMatches(matches)}
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    getMatches: () => dispatch(getMatches())
})

const mapStateToProps = state => ({
    matches: state.match.matches
})



export default connect(mapStateToProps, mapDispatchToProps)(Blocks)
