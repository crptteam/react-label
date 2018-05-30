import React from "react";
import { TwoLineLabel } from "../src/";
import { mount } from "enzyme";

describe("Input", () => {
  it("Should renders without problems", () => {
    const wrapper = mount(
      <TwoLineLabel heading="ФИО">Лорен Дитрих Арчибальдовна</TwoLineLabel>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
