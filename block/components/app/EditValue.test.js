//Import React
import React from "react";
//Import test renderer
import { render, fireEvent, cleanup } from "@testing-library/react";
//Import component to test
import { EditValue } from "./EditValue";

describe("EditValue componet", () => {
  afterEach(cleanup);

  it("matches snapshot", () => {
    const { container } = render(
      <EditValue
        onChange={jest.fn()}
        value={"Hi Roy"}
        id={"some-id"}
        className={"some-class"}
      />
    );
    expect(container).toMatchSnapshot();
  });

  it("Calls the onChange function", () => {
    const onChange = jest.fn();
    const { getByTestId } = render(
      <EditValue
        onChange={onChange}
        value={""}
        id={"input-test"}
        className={"some-class"}
      />
    );
    fireEvent.change(getByTestId("input-test"), {
      target: { value: "New Value" }
    });
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it("Passes updated value, not event to onChange callback", () => {
    const onChange = jest.fn();
    const { getByTestId } = render(
      <EditValue
        onChange={onChange}
        value={""}
        id="input-test"
        className={"some-class"}
      />
    );
    fireEvent.change(getByTestId("input-test"), {
      target: { value: "New Value" }
    });
    expect(onChange).toHaveBeenCalledWith("New Value");
  });
});
