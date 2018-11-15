import React, { PureComponent } from 'react'
import { withBemMod, IClassNameProps, compose } from '@bem-react/core'
import Base from './Button';
import ButtonTypeLink from './_type/Button_type_link';
import ButtonWithTheme from './ButtonWithTheme'

export interface IButtonProps extends IClassNameProps {
  text: string
  url?: string
  type?: 'link'
  theme?: 'action'|'danger'|'primary'
}

const Button = compose(
  // ButtonThemeAction,
  // ButtonThemeDanger,
  ButtonWithTheme,
  ButtonTypeLink,
)(Base);

export default Button