import React from 'react';
/**
 * Edit the value
 */
export const EditValue = ({ onChange, value,id,className}) => {
  const changeHandler = event => onChange(event.target.value);
  return (
      <div className={className}>
      <label htmlFor={id}>Set Value</label>
        <input data-testid={id} id={id} onChange={changeHandler} value={value} />
    </div>
  );
};