import React from 'react'
import Tag from '../ui/misc/tag.component'
import Blocks from './blocks.component'

const MatchesHome = () => {
    return (
        <div className="home_matches_wrapper">
            <div className="container">
                <Tag
                    bck="#0e1731"
                    size="50px"
                    color="#ffffff"
                >
                    Mathes
                </Tag>

                <Blocks/>

                <Tag
                    bck="#ffffff"
                    size="22px"
                    color="#0e1731"
                    link={true}
                    linkto="/the_team"
                >
                    see more matches
                </Tag>
             </div>
        </div>
    )
}

export default MatchesHome
