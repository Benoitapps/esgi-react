import React from "react";

export default function TaskList({ children }) {
  return (
    <>
      <div>TaskList</div>
      <ul>{children}</ul>
    </>
  );
}
