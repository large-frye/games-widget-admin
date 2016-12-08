import * as React from 'react'
import thunkMiddleware from 'redux-thunk'
import * as createLogger from 'redux-logger'
import games from '../reducers/index'
import { createStore, StoreCreator, Store, applyMiddleware } from 'redux'
import { fetchGames, fetchCurrentGames } from '.././actions/index'
import { Game } from './game'

const loggerMiddleware = createLogger()

export class Admin extends React.Component<any, any> {
  store: any = createStore(games, applyMiddleware(thunkMiddleware, loggerMiddleware));
  games: Array<{ status: string, build: string }> = []

  constructor() {
    super();

    this.state = {
      games: [{
        name: 'loading',
        key: 'loading'
      }],
      currentGames: [{
        name: 'loading',
        key: 'loading'
      }]
    }
  }

  componentDidMount() {
    this.store.dispatch(fetchGames()).then(() =>
      this.setState((prevState, props) => prevState.games = this.store.getState().items)
    );
    this.store.dispatch(fetchCurrentGames()).then(() =>
      this.setState((prevState, props) => prevState.currentGames = this.store.getState().current)
    );

    console.log(this.store.getState());
  }

  renderCurrentGames() {

  }

  renderAvailableGames() {
    return (
      <ul>
        {this.state.games.map(function (value: { name: string, key: string, images: Array<number> }, index: number) {
          return <Game key={value.key} name={value.name} id={value.key} text={value.images} />
        })
        }
      </ul>
    )
  }

  render() {

    return (
      <div>
        <h3>Arcadium Games (WashingtonPost Partner)</h3>
        <h4>Current Games</h4>

        <h4>Available Games</h4>
        {this.renderAvailableGames()}
      </div>
    )

  }
}
