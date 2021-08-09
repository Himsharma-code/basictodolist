import React from "react";
import Form from "./Form";
import List from "./List";
import { useState } from "react";
function UserInterface(props) {
  const [list, setList] = useState([]);

  function FormItem(item) {
    setList((prevValue) => {
      return [{ id: Math.random(), item: item }, ...prevValue];
    });
    console.log(list);
  }
  function OnDelete(id) {
    setList((prevValue) => {
      return prevValue.filter((pre) => {
        return pre.id !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <Form formItem={FormItem} />
      <List onDelete={OnDelete} data={list} />
    </div>
  );
}
export default UserInterface;
