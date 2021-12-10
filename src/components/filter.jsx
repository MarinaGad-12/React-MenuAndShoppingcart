import React from "react";

const Filter = (props) => {
  return (
    <ul className="list-group">
      {props.types.map((typ) => (
        <li
          style={{ cursor: "pointer" }}
          onClick={() => props.onActiveFilterChange(typ)}
          className={
            props.activeFilter === typ.id
              ? "list-group-item active"
              : "list-group-item"
          }
          key={typ.id}
        >
          {typ.name}
        </li>
      ))}
    </ul>
  );
};

export default Filter;
