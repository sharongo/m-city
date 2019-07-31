import MatchActionTypes from './match.types'
import axios from 'axios'

export const getMatches = () => async dispatch => {
    
    try {   
        const res = await axios.get('https://m-city-52245.firebaseio.com/matches.json')
        console.log(res);
        dispatch({
            type: MatchActionTypes.GET_MATCHES_SUCCESS,
            payload: res.data
        })
    } catch (err) {
        console.log(err);
    }
}