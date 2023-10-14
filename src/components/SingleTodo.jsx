import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlice";
import { Check, Edit2Icon, TrashIcon } from "lucide-react";

const SingleTodo = ({ todo }) => {
  const [edit, setEdit] = useState(false);
  const [input, setInput] = useState(todo.text);
   //   console.log(todos);
  const dispatch = useDispatch();
  const ref = useRef(null);
  const inputRef = useRef(null);

  const editHandler = (e) => {
    e.preventDefault();
    ref.current.click();
    setEdit(false);
    console.log("click to edit");
    dispatch(updateTodo({ id: todo.id, text: input }));
  };

  useEffect(() => {}, [dispatch]);

  const { small } = useSelector((state) => state.small);


  return (
    <div key={todo.id} className="flex justify-evenly items-center">
      {edit ? (
        <form className="w-3/4 mb-6" onSubmit={editHandler} >
          <textarea
            type="text"
            className="w-full border-2 border-gray-600 shadow-2xl rounded-lg p-2"
            value={input}
            ref={inputRef}
            rows={todo.text.length/10000}
            onChange={(e) => setInput(e.target.value)}
          />
          <button ref={ref} type="submit" className="hidden"></button>
        </form>
      ) : (
        <p className="lg:w-3/4 border-2 border-gray-300 mb-6 rounded-lg p-2 overflow-y-auto max-h-24 w-full">
          {" "}
          {todo.text}
        </p>
      )}
      <div className="flex  gap-3">
        {edit ? (
          <button
            onClick={editHandler}
            className=" border-2 border-gray-300 mb-6 rounded-lg py-2 px-3 text-white flex items-center justify-center bg-green-700 hover:bg-green-400"
          >
            <Check />
          </button>
        ) : (
          <button
            onClick={() => {
              setEdit(true);
              setTimeout(() => {
                inputRef.current.focus();
              }, 0);
            }}
            className=" border-2 border-gray-300 mb-6 rounded-lg py-2 px-3 text-white flex items-center justify-center bg-green-700 hover:bg-green-400"
          >
            <Edit2Icon />
          </button>
        )}
        <button
          onClick={() => dispatch(removeTodo(todo.id))}
          className=" border-2 border-gray-300 mb-6 rounded-lg py-2 px-3 text-white flex items-center justify-center bg-red-500 hover:bg-red-400"
        >
          <TrashIcon />
        </button>
      </div>
    </div>
  );
};

export default SingleTodo;
