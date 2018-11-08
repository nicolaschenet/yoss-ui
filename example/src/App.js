import { Button, Design } from 'yoss-ui'
import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>
        <Button cta>Allez clique !</Button>
        <Design.Reset />
      </div>
    )
  }
}
