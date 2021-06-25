import React, { Fragment } from "react";
import { EditValue } from "./app/EditValue";
import { DisplayValue } from "./app/DisplayValue";
import { InspectorControls } from "@wordpress/block-editor";
export const Editor = ({ attributes, setAttributes, className, clientId }) => {
  //Change handler
  const onChange = value => setAttributes({ value });
  //current value
  const { value } = attributes;
  return (
    <Fragment>
      <InspectorControls>
        <EditValue
          className={`${className}-editor`}
          id={clientId}
          value={value}
          onChange={onChange}
        />
      </InspectorControls>
      <DisplayValue value={value} className={className} />
    </Fragment>
  );
};
