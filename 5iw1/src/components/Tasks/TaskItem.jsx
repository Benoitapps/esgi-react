import React, { useState } from "react";
import TaskForm from "./TaskForm";

export default function TaskItem({ item, delete: deleteAction, edit }) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <li
      style={{
        textDecoration: item.completed ? "line-through" : "none",
      }}
    >
      {item.name}
      {deleteAction && (
        <button onClick={() => deleteAction(item)}>Delete</button>
      )}
      {edit && <button onClick={() => setIsEditing(!isEditing)}>Edit</button>}
      {isEditing && <TaskForm initialValues={item} onSubmit={edit} />}
    </li>
  );
}
