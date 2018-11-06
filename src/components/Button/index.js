import { PropTypes as T } from 'prop-types'
import React, { Component } from 'react'
import classnames from 'classnames'
import styled from 'styled-components'

class ButtonComponent extends Component {
  static propTypes = {
    className: T.string.isRequired,
    children: T.node.isRequired,
    cta: T.bool.isRequired,
    disabled: T.bool.isRequired,
    info: T.bool.isRequired,
    type: T.oneOf(['button', 'reset', 'submit']).isRequired,
  }

  static defaultProps = {
    cta: false,
    disabled: false,
    info: false,
    type: 'button',
  }

  render() {
    const { children, className, cta, disabled, info, type } = this.props
    const classNames = classnames(className, 'Button', {
      'Button--cta': cta,
      'Button--disabled': disabled,
      'Button--info': info,
    })

    return (
      <button type={type} className={classNames}>
        {children}
      </button>
    )
  }
}

const Button = styled(ButtonComponent)`
  background-color: #eee;
  border: 0;
  border-radius: 3px;
  color: #022144;
  cursor: pointer;
  font-family: 'Work Sans', sans-serif;
  outline: 0;
  padding: 15px 32px;
  font-size: 16px;
  font-weight: normal !important;
  transition: all 0.3s ease;

  @media (max-width: 1100px) {
    font-size: 20px !important;
  }

  &:hover,
  &:active {
    opacity: 0.8;
  }

  &.Button--cta {
    background-color: #ffed00;
  }

  &.Button--disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  &.Button--info {
    background-color: #237eb1;
    color: #fff;
  }
`

/** @component */
export default Button
