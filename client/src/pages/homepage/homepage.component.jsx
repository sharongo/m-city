import React from 'react'
import Featured from '../../components/featured/featured.component' 
import MatchesHome from '../../components/matches/matches-home.component'



const HomePage = () => {
    return (
        <div className="bck_blue">
            <Featured/>
            <MatchesHome/>
        </div>
    )
}



export default HomePage
