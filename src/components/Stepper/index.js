import React, { Component } from 'react'
import styled from 'styled-components'
import { PropTypes as T } from 'prop-types'

class StepperComponent extends Component {
  static propTypes = {
    className: T.string.isRequired,
  }

  render() {
    const { className } = this.props

    return <div className={`${className} Stepper`} />
  }
}

const Stepper = styled(StepperComponent)``

/* @component */
export default Stepper
