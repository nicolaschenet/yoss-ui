import { Button, Design } from 'yoss-ui'
import React, { Component, Fragment } from 'react'

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Design.Reset />
        <Button cta>Allez clique !</Button>
      </Fragment>
    )
  }
}
