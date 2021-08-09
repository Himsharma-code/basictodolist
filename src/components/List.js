import React from "react";
function List(props) {
  return props.data.map((d) => {
    return (
      <li
        onClick={function () {
          props.onDelete(d.id);
        }}
        key={d.id}
      >
        {" "}
        {d.item}{" "}
      </li>
    );
  });
}
export default List;
