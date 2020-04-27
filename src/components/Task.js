import React from "react"

const Task = ({ taskInfo }) => (
  <div className="task">
    <style jsx>
      {`
        .task {
          font-size: 14px;
          line-height: 20px;
          display: flex;
          flex-wrap: wrap;
          height: 3rem;
          width: 100%;
          transition: all ease-out 150ms;
          border:1px solid #663399;
          margin:0.85rem 0;
        }
        .taskinput {
          width: 100%;
          text-overflow: ellipsis;
          background:${taskInfo.node.state==='TASK_ARCHIVED'?'#aaa':'#2cc5d2'};
          color:${taskInfo.node.state==='TASK_ARCHIVED'?'#fff':'#000'};
        }
      `}
    </style>
    <input value={taskInfo.node.title} readOnly placeholder="Input title" className="taskinput">
    </input>
  </div>
)

export default Task
