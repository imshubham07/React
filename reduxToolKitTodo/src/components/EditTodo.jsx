import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateTodo } from "../features/todo/todoSlice";

export function EditTodo() {
  const dispatch = useDispatch();
  const editingTodoId = useSelector((state) => state.editingTodoId);
  const todo = useSelector((state) =>
    state.todos.find((todo) => todo.id === editingTodoId)
  );
  const [editedText, setEditedText] = useState(todo ? todo.text : "");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo) {
      dispatch(updateTodo({ id: todo.id, text: editedText }));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={editedText}
        onChange={(e) => setEditedText(e.target.value)}
      />
      <button type="submit">Update</button>
    </form>
  );
}