import * as fetch from 'isomorphic-fetch'

export const RECEIVE_GAMES = 'RECEIVE_GAMES'
export const REQUEST_GAMES = 'REQUEST_GAMES'
export const REQUEST_CURRENT_GAMES = 'REQUEST_CURRENT_GAMES'
export const RECEIVE_CURRENT_GAMES = 'RECEIVE_CURRENT_GAMES'

function requestGames() {
  return {
    type: REQUEST_GAMES
  }
}

function requestCurrentGames() {
  return {
    type: REQUEST_CURRENT_GAMES
  }
}

function recieveGames(data: any) {
  return {
    type: RECEIVE_GAMES,
    games: data,
    receievedAt: Date.now()
  }
}

function recieveCurrentGames(data: any) {
  return {
    type: RECEIVE_CURRENT_GAMES,
    currentGames: data,
    receievedAt: Date.now()
  }
}

export function fetchGames() {
  return function (dispatch: any) {
    dispatch(requestGames())
    return fetch(`http://localhost:3000/api/v0/listGames`)
      .then(response => response.json())
      .then(json => dispatch(recieveGames(json))) 
  }
}

export function fetchCurrentGames() {
  return function (dispatch: any) {
    dispatch(requestCurrentGames()) 
    return fetch(`http://localhost:3000/api/v0/listGames?filter=current`)
      .then(response => response.json())
      .then(json => dispatch(recieveCurrentGames(json)))
  } 
}

// fetch(`https://washingtonpost.as.arkadiumhosted.com/API/game`)

