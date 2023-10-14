import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";
import { CheckCircle2Icon, Edit2Icon, TrashIcon } from "lucide-react";
import SingleTodo from "./SingleTodo";

const Todo = () => {
  const dispatch = useDispatch();

  const {todos} = useSelector((state) => state.todos);
  // console.log(todos);

  useEffect(() => {}, [dispatch, todos]);
  const { small } = useSelector((state) => state.small);


  return (
    <div>
      <h1 className=" text-center text-2xl font-semibold mb-6">All Todos</h1>
      {todos && todos.length !== 0 ? (
        todos.map((todo) => <SingleTodo key={todo.id} todo={todo} />)
      ) : (
        <h1 className="text-sm font-serif text-center ">No todos</h1>
      )}
    </div>
  );
};

export default Todo;
