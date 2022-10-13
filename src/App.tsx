import React from 'react'

const title = <h1>Hello React.js</h1>

const list = (
  <ul>
    <li>list item 1</li>
    <li>list item 2</li>
    <li>list item 3</li>
  </ul>
)


function App() {
    return <div className="App">
      {title} {list} {10+5}
      </div>
}

export default App