import React from 'react';
import styled from 'styled-components';
import {getThemeAsPlainTextByKeys, innerMerge} from '../utils';
import defaultTheme from '../theme/defaultTheme';

const Elem = styled.div`
  display: inline-block;
  width: ${props => props.width};
`;


const TwoLineWrap = props => {
  const merged = innerMerge(
    {},
    defaultTheme.Label,
    props.theme && props.theme.Label ? props.theme.Label : {}
  );

  const theme = getThemeAsPlainTextByKeys(merged);

  const mergedTwoLineContent = innerMerge(
    {},
    (defaultTheme.Label && defaultTheme.Label.TwoLineWrap) || {},
    (props.theme && props.theme.Label && props.theme.Label.TwoLineWrap) || {}
  );

  Object.assign(
    theme,
    mergedTwoLineContent
  );

  return <Elem {...theme} {...props} />;
};

export default TwoLineWrap;
