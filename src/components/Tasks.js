import React, { Fragment } from "react"
import Task from "./Task"

const Tasks = ({ taskList }) => {
  return (
    <div className="tasklist">
      <style jsx>
        {`
          .tasklist {
            font-size: 14px;
            line-height: 20px;
            height: 3rem;
            width: 100%;
          }
        `}
      </style>
      {taskList.length === 0 ? (
        <h1>Good news, you have no tasks! All good</h1>
      ) : (
        <Fragment>
          {taskList.map(task => (
            <Task taskInfo={task} key={task.node.id} />
          ))}
        </Fragment>
      )}
    </div>
  )
}

export default Tasks
