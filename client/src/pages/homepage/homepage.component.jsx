import React from 'react'
import Featured from '../../components/featured/featured.component' 
import MatchesHome from '../../components/matches/matches-home.component'
import MeetPlayers from '../../components/meet-players/meet-players.component'
import Promotion from '../../components/promotion/promotion.component'



const HomePage = () => {
    return (
        <div className="bck_blue">
            <Featured/>
            <MatchesHome/>
            <MeetPlayers/>
            <Promotion/>
        </div>
    )
}



export default HomePage
