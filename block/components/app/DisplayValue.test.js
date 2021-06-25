//Import React
import React from "react";
//Import test renderer
import TestRenderer from "react-test-renderer";
//Import component to test
import { DisplayValue } from "./DisplayValue";

/**
 * Test all props are in the right place.
 */
test("Component renders correctly", () => {
  expect(
    TestRenderer.create(
      <DisplayValue value={"The Value"} className={"the-class-name"} />
    ).toJSON()
  ).toMatchSnapshot();
});
