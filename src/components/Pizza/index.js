import React, { Component } from 'react'
import styled from 'styled-components'
import { PropTypes as T } from 'prop-types'

class PizzaComponent extends Component {
  static propTypes = {
    className: T.string.isRequired,
    text: T.string.isRequired,
  }

  render() {
    const { className, text } = this.props

    return <div className={`${className} Pizza`}>Pizza Component: {text}</div>
  }
}

const Pizza = styled(PizzaComponent)``

/* @component */
export default Pizza
