import React from "react";
import styled from "styled-components";

import { getThemeAsPlainTextByKeys } from "../utils";
import defaultTheme from "../theme/defaultTheme";
import { innerMerge } from "../../../react-input/src/utils";

const Elem = styled.div`
  js-display: flex;
  display: flex;
  color: ${props => props.color};
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.fontWeight};
  line-height: ${props => props.lineHeight};
  margin-bottom: ${props => props.marginBottom};
  align-items: center;
  font-family: ${props => props.fontFamily};
`;

const Heading = props => {
  const merged = innerMerge(
    {},
    defaultTheme.Input,
    props.theme && props.theme.Label ? props.theme.Label : {}
  );

  const theme = getThemeAsPlainTextByKeys(merged);

  const mergedHeading = innerMerge(
    {},
    (defaultTheme.Label && defaultTheme.Label.Heading) || {},
    (props.theme && props.theme.Label && props.theme.Label.Heading) || {}
  );

  Object.assign(theme, getThemeAsPlainTextByKeys(mergedHeading, props.size));

  return <Elem {...theme} {...props} />;
};

export default Heading;
