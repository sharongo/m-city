import React from 'react'
import Featured from '../../components/featured/featured.component' 
import MatchesHome from '../../components/matches/matches-home.component'
import MeetPlayers from '../../components/meet-players/meet-players.component'



const HomePage = () => {
    return (
        <div className="bck_blue">
            <Featured/>
            <MatchesHome/>
            <MeetPlayers/>
        </div>
    )
}



export default HomePage
