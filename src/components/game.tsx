import * as React from 'react'
import * as uuid from 'uuid4'

export interface GameProps { name: string, id: string, text: Array<number> }

export class Game extends React.Component<GameProps, any> {
  constructor() {
    super();
  }

  render() {
    var uuid4: string = uuid();

    if (this.props.id !== 'loading') {
      return (
        <li>{this.props.name}</li>
      )
    } else {
      return <li style={noBullet}><img src="/assets/balls.gif" /></li>
    }
  }
}

const noBullet = {
  listStyleType: 'none'
};