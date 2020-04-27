import React from "react"
import User from "./User"
import { withKnobs, object } from "@storybook/addon-knobs"

/**
 * standard Storybook CSF configuration
 * component will relate to which component to be used
 * excludeStories is used tell Storybook that everything that ends with Data is to be ignored or otherwise would be turned into a Story and generate some errors
 * decorators is where all the decorators that belong to the component's story should be placed.
 * title is self explanatory
 */
export default {
  component: User,
  excludeStories: /.*Data$/,
  decorators: [withKnobs],
  title: "Simple Component|User",
}
// dummy data to be used by the component
// notice the usage of export, which means that this data can be used in other stories/tests 
//(do not use it inside a component or Gatsby will break the build)
export const UserInformationData = {
  username: "Jane Doe",
  avatar:
    "https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg",
  excerpt:
    "I'm Jane Doe. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
}

// The default story of the component (note the usage of Default), this is a trick to bypass some es6 syntax
// as default is a reserved word
// This story will use the knobs addon that will allow you to modify the data while Storybook is running
export const Default = () => (
  <User
    userInfo={object("userInfo", {
      ...UserInformationData,
    })}
  />
)
// Another simple story to check the behaviour of the component
export const AnotherUser = () => (
  <User
    userInfo={{
      ...UserInformationData,
      username: "Another random user",
      excerpt: "Random description",
    }}
  />
)