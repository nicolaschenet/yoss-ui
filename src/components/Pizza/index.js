import { PropTypes as T } from 'prop-types'
import React, { Component } from 'react'
import styled from 'styled-components'

class PizzaComponent extends Component {
  static propTypes = {
    className: T.string,
    text: T.string,
  }

  render() {
    const { className, text } = this.props

    return <div className={`${className} pizza`}>Pizza Component: {text}</div>
  }
}

const Pizza = styled(PizzaComponent)`
  color: red;
`

/** @component */
export default Pizza
