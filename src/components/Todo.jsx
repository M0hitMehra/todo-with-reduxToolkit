import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";
import { CheckCircle2Icon, Edit2Icon, TrashIcon } from "lucide-react";
import SingleTodo from "./SingleTodo";

const Todo = () => {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todos);
  useEffect(() => {}, [dispatch, todos]);

  return (
    <div>
      <h1 className=" text-center text-2xl font-semibold mb-6">All Todos</h1>
      {todos && todos.map((todo) => <SingleTodo key={todo.id} todo={todo} />)}
    </div>
  );
};

export default Todo;
