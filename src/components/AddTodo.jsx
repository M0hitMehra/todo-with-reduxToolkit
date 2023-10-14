import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    if (input.length === 0) return;
    dispatch(addTodo(input));
    setInput("");
  };
  return (
    <div>
      <h1 className=" text-center text-2xl font-semibold mb-6">Add todos</h1>
      <form
        onSubmit={submitHandler}
        className="flex items-center justify-center"
      >
        <input
          type="text"
          name=""
          id=""
          value={input}
          className="w-2/4 h-10 bg-[#fafafa] border-2 border-gray-300 rounded-lg mx-5 px-2"
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="text-xl bg-blue-600 text-white hover:bg-blue-400 hover:text-black px-6 py-2 rounded-lg  "
        >
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
