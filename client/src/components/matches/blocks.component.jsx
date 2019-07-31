import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getMatches } from '../../redux/match/match.actions';
import MatchesBlock from './matches-block.component'
import Slide from 'react-reveal/Slide'


class Blocks extends Component {

    componentDidMount() {
        const { getMatches } = this.props;
        getMatches();

    }

    showMatches = (matches) => {
        return (

            matches && matches.length > 0 && matches.map(match => (
                <Slide bottom key={match.id}>
                    <div className="item">
                        <div className="wrapper">
                            <MatchesBlock match={match} />
                        </div>
                    </div>
                </Slide>
            ))



        )
    }

    render() {

        const { matches } = this.props;

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
