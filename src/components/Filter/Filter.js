import React from "react";

export default function Filter({ onSetFilter, filterValue }) {
  return (
    <label>
      Find contact by name
      <input
        type="text"
        value={filterValue}
        onChange={(e) => onSetFilter(e.target.value)}
      />
    </label>
  );
}
