import React, { Component } from 'react'
import classnames from 'classnames'
import styled from 'styled-components'
import { PropTypes as T } from 'prop-types'

class ButtonComponent extends Component {
  static propTypes = {
    children: T.node.isRequired,
    className: T.string.isRequired,
    cta: T.bool.isRequired,
    disabled: T.bool.isRequired,
    info: T.bool.isRequired,
    large: T.bool.isRequired,
    medium: T.bool.isRequired,
    onClick: T.func.isRequired,
    small: T.bool.isRequired,
    type: T.oneOf(['button', 'reset', 'submit']).isRequired,
  }

  static defaultProps = {
    cta: false,
    disabled: false,
    info: false,
    large: false,
    medium: false,
    onClick: console.log, // eslint-disable-line no-console
    small: false,
    type: 'button',
  }

  render() {
    const { children, className, onClick, type } = this.props
    const { cta, disabled, info } = this.props
    const { large, medium, small } = this.props
    const size = classnames({ large, medium, small }) || 'medium'
    const classNames = classnames(className, 'Button', `Button--${size}`, {
      'Button--cta': cta,
      'Button--disabled': disabled,
      'Button--info': info,
    })
    const buttonProps = {
      className: classNames,
      disabled,
      onClick,
      type,
    }

    return <button {...buttonProps}>{children}</button>
  }
}

const Button = styled(ButtonComponent)`
  padding: 15px 32px;
  border: 0;
  border-radius: 3px;
  outline: 0;
  margin-right: 8px;

  background-color: #eee;
  color: #022144;

  font-family: 'Work Sans', sans-serif;
  font-weight: 400;

  cursor: pointer;
  transition: all 0.3s ease;

  &.Button--small {
    font-size: 12px;
  }

  &.Button--medium {
    font-size: 16px;
  }

  &.Button--large {
    font-size: 20px;
  }

  @media (min-width: 1100px) {
    &.Button--small {
      font-size: 16px;
    }

    &.Button--medium {
      font-size: 20px;
    }

    &.Button--large {
      font-size: 24px;
    }
  }

  &:hover,
  &:active {
    opacity: 0.8;
  }

  &.Button--cta {
    background-color: #ffed00;
  }

  &.Button--info {
    background-color: #237eb1;
    color: #fff;
  }

  &.Button--disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`

/* @component */
export default Button
