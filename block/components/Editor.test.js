//Import React
import React from "react";
//Import test renderer
import { render, fireEvent, cleanup } from "@testing-library/react";
//Import component to test
import { Editor } from "./Editor";

describe("Editor componet", () => {
  afterEach(cleanup);

  it("matches snapshot", () => {
    const attributes = { value: "Hi Roy" };
    const setAttributes = jest.fn();

    const props = {
      attributes,
      setAttributes,
      clientId: "random-id",
      className: "wp-blocks-whatever"
    };
    expect(render(<Editor {...props} />)).toMatchSnapshot();
  });
});
