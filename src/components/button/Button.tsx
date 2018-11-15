import React from 'react';
import { IButtonProps } from './index';

import './button.styl'

const Button: React.SFC<IButtonProps> = ({ text, className='Button' }) => (
  <button className={className}>{text}</button>
);

export default Button