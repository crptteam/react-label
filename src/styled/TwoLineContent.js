import React from "react";
import styled from "styled-components";

import { getThemeAsPlainTextByKeys } from "../utils";
import defaultTheme from "../theme/defaultTheme";
import { innerMerge } from "../utils";

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
  const merged = innerMerge(
    {},
    defaultTheme.Input,
    props.theme && props.theme.Label ? props.theme.Label : {}
  );

  const theme = getThemeAsPlainTextByKeys(merged);

  const mergedTwoLineContent = innerMerge(
    {},
    (defaultTheme.Label && defaultTheme.Label.TwoLineContent) || {},
    (props.theme && props.theme.Label && props.theme.Label.TwoLineContent) || {}
  );

  Object.assign(
    theme,
    getThemeAsPlainTextByKeys(mergedTwoLineContent, props.size)
  );

  return <Elem {...theme} {...props} />;
};

export default TwoLineContent;
