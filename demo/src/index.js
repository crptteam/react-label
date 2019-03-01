import React from "react";
import { render } from "react-dom";
import { hasOnlyDigits } from "../../src/utils";
import _ from "lodash";
import Label from "../../src";


const App = props => {
  return <div><Label heading={'Test'}>Teeest</Label></div>
}

render(<App />, document.querySelector("#demo"));
