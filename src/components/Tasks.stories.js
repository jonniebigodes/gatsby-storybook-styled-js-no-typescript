import React from "react"
import Tasks from "./Tasks"
import { taskData } from "./Task.stories"
/**
 * standard Storybook CSF configuration
 * component will relate to which component to be used
 * excludeStories is used tell Storybook that everything that ends with Data is to be ignored or otherwise would be turned into a Story and generate some errors
 * title is self explanatory
 */
export default {
  component: Tasks,
  excludeStories: /.*Data$/,
  title: "Composite Component|Tasks",
}
// creates a dummy array of data to be used by the component
// Notice that the array will "spread" the task information inside the other story
export const defaultTasksData = [
  {
    
    node: {
      ...taskData.node,
      id: "1",
      title: "Task 1",
    },
  },
  {
    node: {
      ...taskData.node,
      id: "2",
      title: "Task 2",
    },
  },
  {
   
    node: {
      ...taskData.node,
      id: "3",
      title: "Task 3",
    },
  },
  {
    node: {
      ...taskData.node,
      id: "4",
      title: "Task 4",
    },
  },
  {
  
    node: {
      ...taskData.node,
      id: "5",
      title: "Task 5",
    },
  },
  {
    
    node: {
      ...taskData.node,
      id: "6",
      title: "Task 6",
    },
  },
]
// The default story of the component (note the usage of Default), this is a trick to bypass some es6 syntax
// as default is a reserved word
export const Default = () => <Tasks taskList={defaultTasksData} />

// A simple story for the component mocking a empty set of tasks
export const EmptyTasks = () => <Tasks taskList={[]} />