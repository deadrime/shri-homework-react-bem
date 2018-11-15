import React from 'react';
import { withBemMod, ModBody } from '@bem-react/core';
import { IButtonProps } from '../index';

const ButtonLink: ModBody<IButtonProps> = (Base, { text, className, url }) => (
  <a className={className} href={url}>{text}</a>
);

export default withBemMod<IButtonProps>('Button', { type: 'link' }, ButtonLink);