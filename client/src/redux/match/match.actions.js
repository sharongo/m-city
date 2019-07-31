import MatchActionTypes from './match.types'
import axios from 'axios'
import {matchesLooper} from '../../components/ui/misc/misc'

export const getMatches = () => async dispatch => {
    
    try {   
        const res = await axios.get('https://m-city-52245.firebaseio.com/matches.json')
        console.log(res);
        const matches = matchesLooper(res.data)
        dispatch({
            type: MatchActionTypes.GET_MATCHES_SUCCESS,
            payload: matches
        })
    } catch (err) {
        console.log(err);
    }
}