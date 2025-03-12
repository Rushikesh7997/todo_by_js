import React from "react";

export const FormField = ({ fieldName, fieldValue, fieldChange }) => {
  
    // const { fieldName, fieldValue, fieldChange } = props

    return (
    <div>
      <div className="formField">
        <label htmlFor={fieldName}>{fieldName}</label>
        <input
          name={fieldName}
          type="text"
          value={fieldValue}
          onChange={(e) => fieldChange(e.target.value)}
        />
      </div>
    </div>
  );
};
