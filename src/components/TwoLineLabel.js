import React from "react";
import { withTheme } from "styled-components";
import PropTypes from "prop-types";
import defaultTheme from "../theme/defaultTheme";
import { SIZES } from "../constants";

const ComponentName = "DoubleInfo";

import TwoLineWrap from "../styled/TwoLineWrap";
import Heading from "../styled/Heading";
import TwoLineContent from "../styled/TwoLineContent";

class TwoLineLabel extends React.Component {
  render() {
    return (
      <TwoLineWrap theme={this.props.theme}>
        <Heading size={this.props.size} theme={this.props.theme}>
          {this.props.heading}
        </Heading>
        <TwoLineContent size={this.props.size} theme={this.props.theme}>
          {this.props.children}
        </TwoLineContent>
      </TwoLineWrap>
    );
  }
}

TwoLineLabel.propTypes = {
  theme: PropTypes.object,
  size: PropTypes.oneOf(Object.keys(SIZES)),
  heading: PropTypes.any
};

TwoLineLabel.defaultProps = {
  theme: defaultTheme,
  size: SIZES.small
};

TwoLineLabel.displayName = ComponentName;

export default withTheme(TwoLineLabel);
