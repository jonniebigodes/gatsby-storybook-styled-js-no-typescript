import React from "react"
import Task from "./Task"
import { withKnobs, object } from "@storybook/addon-knobs"
/**
 * standard Storybook CSF configuration
 * component will relate to which component to be used
 * excludeStories is used tell Storybook that everything that ends with Data is to be ignored or otherwise would be turned into a Story and generate some errors
 * decorators is where all the decorators that belong to the component's story should be placed.
 * title is self explanatory
 */

export default {
  component:Task,
  excludeStories: /.*Data$/,
  decorators: [withKnobs],
  title: "Simple Component|Task",
}
// dummy data to be used by the component
// notice the usage of export, which means that this data can be used in other stories/tests 
//(do not use it inside a component or Gatsby will break the build)
export const taskData = {
  node: {
    id: "1",
    title: "Dummy Task",
    state: "Task_INBOX",
    updated_at: "2020-01-01",
  },
}
// The default story of the component (note the usage of Default), this is a trick to bypass some es6 syntax
// as default is a reserved word
// This story will use the knobs addon that will allow you to modify the data while Storybook is running
export const Default = () => (
  <Task taskInfo={object("taskInfo", { ...taskData })} />
)