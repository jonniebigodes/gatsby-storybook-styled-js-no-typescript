import React from "react"

export default ({ children }) => (
  <div>
    <style jsx global>{`
    * {
      box-sizing: border-box;
      -webkit-font-smoothing: antialiased;
    }
    @font-face {
      font-family: "SPS-Icons";
      font-style: normal;
      font-weight: normal;
      src: url("https://cdn.prod.spsc.io/web/framework/assets/17.10.01/fonts/icomoon-sps-icons.woff2")
          format("woff2"),
        url("https://cdn.prod.spsc.io/web/framework/assets/17.10.01/fonts/icomoon-sps-icons.ttf")
          format("truetype"),
        url("https://cdn.prod.spsc.io/web/framework/assets/17.10.01/fonts/icomoon-sps-icons.woff")
          format("woff"),
        url("https://cdn.prod.spsc.io/web/framework/assets/17.10.01/fonts/icomoon-sps-icons.svg")
          format("svg");
    }
    body {
      font-size: 16px;
      font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont,
        "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue",
        sans-serif;
    }
    `}</style>
    {children}
  </div>
)
