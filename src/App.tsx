import React from 'react'

const title = <h1>Hello React.js</h1>

const List = () => {
  return (
    <React.Fragment>
      <ul>
        <li>list item 1</li>
        <li>list item 2</li>
        <li>list item 3</li>
      </ul>
        <p>Some text</p>
        <p>Sone text 2</p>
    </React.Fragment>
  )
}
//React Component
const Title = () => <h1>Hello React component</h1>


function App() {
    return <div className="App">
      <Title />
      <List />
       {10+5}
      </div>
}

export default App