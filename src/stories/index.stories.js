import React from 'react';

import { storiesOf } from '@storybook/react';

import { withKnobs } from '@storybook/addon-knobs/react';

import { TwoLineLabel } from '../index';

const elements = storiesOf('TwoLineLabel', module);

elements.addDecorator(withKnobs);

elements.add('default', () => {
  return <TwoLineLabel heading="ФИО" content="Елизарова Светлана Сергеевна" />;
});
