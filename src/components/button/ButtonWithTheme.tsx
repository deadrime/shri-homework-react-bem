import React from 'react';
import { withBemMod, ModBody } from '@bem-react/core';
import { IButtonProps } from './index';
import { cn } from '@bem-react/classname'

const cnButton = cn('Button')

const ButtonWithTheme: ModBody<IButtonProps> = (Base, props) => (
  <Base {...props} className={cnButton({theme: props.theme})}></Base>
);

export default withBemMod<IButtonProps>('Button', { type: 'link' }, ButtonWithTheme);