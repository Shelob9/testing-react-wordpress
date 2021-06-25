//Import React
import React from "react";
//Import test renderer
import { render, cleanup } from "@testing-library/react";
//Import component to test
import { Save } from "./Save";

describe("Save componet", () => {
  afterEach(cleanup);

  it("matches snapshot", () => {
    const attributes = { value: "Hi Roy" };

    const props = {
      attributes,
      clientId: "random-id",
      className: "wp-blocks-whatever"
    };
    expect(render(<Save {...props} />)).toMatchSnapshot();
  });
});
