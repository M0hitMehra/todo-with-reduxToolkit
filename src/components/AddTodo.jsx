import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
  const { small } = useSelector((state) => state.small);

  return (
    <div>
      <h1 className=" text-center text-2xl font-semibold mb-6">Add todos</h1>
      <form
        onSubmit={submitHandler}
        className="flex items-center justify-center gap-4"
      >
        <input
          type="text"
          name=""
          id=""
          value={input}
          className="lg:w-2/4 w-full h-10 bg-[#fafafa] border-2 border-gray-300 rounded-lg lg:mx-5 lg: px-2"
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="lg:text-xl text-sm bg-blue-600 text-white hover:bg-blue-400 hover:text-black lg:px-6 px-2  py-1 lg:py-2 rounded-lg  "
        >
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
