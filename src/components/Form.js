import React, { useState } from "react";
function Form(props) {
  const [enterdList, setEnteredList] = useState("");

  function InputChangeHandler(event) {
    setEnteredList(event.target.value);
  }
  function SubmitHandler(event) {
    event.preventDefault();
    props.formItem(enterdList);
    console.log(enterdList);
    setEnteredList("");
  }
  return (
    <div className="form">
      <form onSubmit={SubmitHandler}>
        <input value={enterdList} onChange={InputChangeHandler} />
        <button type="submit">
          <span>Add</span>
        </button>
      </form>
    </div>
  );
}
export default Form;
