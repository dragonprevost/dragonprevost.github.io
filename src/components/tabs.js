import React from "react"

const Tabs = ({ children }) => (
  <div
    style={{
      maxWidth: 960,
//      padding: `1rem 1.0875rem`,
      margin: 0,
      display: `flex`,
    }}
  >
    { children }
  </div>
)

export default Tabs
