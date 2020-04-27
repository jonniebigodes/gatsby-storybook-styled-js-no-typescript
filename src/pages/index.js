import React from "react"
import GlobalStyle from "../components/GlobalStyle"
import IndexScreen from "../components/IndexScreen"
export default () => (
  <>
    <GlobalStyle>
      <IndexScreen
        userData={{
          username: "Jane Doe",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg",
          excerpt:
            "I'm Jane Doe. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        }}
      />
    </GlobalStyle>
  </>
)