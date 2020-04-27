import React from "react"
import IndexScreen from "./IndexScreen"
import { defaultTasksData } from './Tasks.stories'
import { UserInformationData } from './User.stories'

// dummy data to be used by the component
// notice the usage of export, which means that this data can be used in other stories/tests 
//(do not use it inside a component or Gatsby will break the build)
export default {
  component: IndexScreen,
  excludeStories: /.*Data$/,
  title: "Screen Component|index",
}
// the default story for the screen
// it will use the information that is present in the other stories (user.stories.js and tasks.stories.js)
export const Default=()=><IndexScreen userData={UserInformationData} {...defaultTasksData}/>