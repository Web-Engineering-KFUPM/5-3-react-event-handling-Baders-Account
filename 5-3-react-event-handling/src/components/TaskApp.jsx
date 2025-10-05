import React, { useState } from "react";
import TaskList from "./TaskList";

export default function TaskApp() {
  var text="";
  var setText="";
  
  [text, setText] = useState("");
  
  const handleSubmit = (props) => {
    setText = props.text;
   
  };

  
  const handleDelete = (id) => {
    // TODO: filter tasks by id to remove the clicked one
  };

  
  const handleClearAll = () => {
    // TODO: set tasks to empty array
  };

  return (
    <section className="card">
      {/*Controlled Input */}
      <div className="inputRow">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}

          // TODO: value={text}
          // TODO: onChange={(e) => setText(e.target.value)}
          
          
          placeholder="Type a task..."
          className="input"
          
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSubmit();
          }}
        />
        <p>{text}</p>
        <button className="btn btn--primary" onClick={handleSubmit}>
          Submit
        </button>
      </div>

      {/*Render Task List and Enable Delete */}
      {/*Pass tasks and onDelete */}
      <TaskList /* tasks={tasks} onDelete={handleDelete} */ />

      {/*Clear All */}
      <div className="footerRow">
        <button className="btn btn--ghost" onClick={handleClearAll}>
          Clear All
        </button>
      </div>
    </section>
  );
}
