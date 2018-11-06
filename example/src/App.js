import React, { Component } from 'react'

import { Button, Pizza } from 'yoss-ui'

export default class App extends Component {
  render() {
    return (
      <div>
        <Pizza text='Modern React component module' />
        <Button cta>Allez clique !</Button>
      </div>
    )
  }
}
