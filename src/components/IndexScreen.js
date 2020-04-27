import React from "react"
import Tasks from "./Tasks"
import User from './User'
import { useStaticQuery, graphql } from "gatsby"

const PureIndexScreen = ({ data }) => {
  
  const {allTasksJson}=data
  const {edges}= allTasksJson
  return <Tasks taskList={edges}/>
}

const IndexScreen = props => {
  const AllTasksDataResult = useStaticQuery(graphql`
    query fetchAllTasks {
      allTasksJson {
        edges {
          node {
            id
            title
            state
            updated_at
          }
        }
      }
    }
  `)

  return (
      <div>
          <h1>a minimal task list with gatsby and Storybook and Styled jsx</h1>
          <User userInfo={props.userData}/>
          <PureIndexScreen {...props} data={AllTasksDataResult} />
      </div>
  )
}
export default IndexScreen