import { combineReducers } from 'redux'
import {
  REQUEST_GAMES, RECEIVE_GAMES, RECEIVE_CURRENT_GAMES
} from '../actions'

const initialState = {
  games: Array
}

function games(state = initialState, action: any): any {
  switch (action.type) {
    case RECEIVE_GAMES:
      return Object.assign({}, state, {
        items: action.games
      })
    case RECEIVE_CURRENT_GAMES:
      return Object.assign({}, state, {
        current: action.currentGames
      })
    default:
      return state   
  }
}

export default games

