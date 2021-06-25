import React from "react";
import { DisplayValue } from "./app/DisplayValue";
export const Save = ({ attributes, className }) => {
  return <DisplayValue value={attributes.value} className={className} />;
};
