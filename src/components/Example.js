import React, { Component } from 'react'
import { PropTypes as T } from 'prop-types'
import styled from 'styled-components'

class ExampleComponent extends Component {
  static propTypes = {
    className: T.string,
    text: T.string
  }

  render() {
    const { className, text } = this.props

    return (
      <div className={`${className} example`}>Example Component: {text}</div>
    )
  }
}

const Example = styled(ExampleComponent)`
  border: solid 1px #dedede;
  color: red;
  margin: 1rem;
  padding: 1rem;
`

export default Example
