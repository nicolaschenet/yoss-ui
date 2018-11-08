import React, { Component, Fragment } from 'react'
import { Button, Design } from 'yoss-ui'

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
