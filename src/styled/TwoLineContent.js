import React from 'react';
import styled from 'styled-components';

import { getThemeAsPlainTextByKeys } from '../utils';
import defaultTheme from '../theme/defaultTheme';

const Elem = styled.div`
  js-display: flex;
  display: flex;
  color: ${props => props.color};
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.fontWeight};
  line-height: ${props => props.lineHeight};
  align-items: center;
  font-family: ${props => props.fontFamily};
`;

const TwoLineContent = props => {
  const theme = getThemeAsPlainTextByKeys(props.theme || defaultTheme);

  Object.assign(
    theme,
    getThemeAsPlainTextByKeys(
      (props.theme && props.theme.TwoLineContent) ||
        defaultTheme.TwoLineContent,
      props.size
    )
  );

  return <Elem {...theme} {...props} />;
};

export default TwoLineContent;
