import React from 'react'

type TitleProps = {
  title: string
  text?: string //необовязковий параметр
  number: number
}

const Title = (props: TitleProps) => {
  console.log(props)
  return (
    <>
    <h1>
      {props.title} {props.title}
    </h1>
    {props.number}
    </>
  )
}

const title = <h1>Hello React.js</h1>


const List = () => {
  return (
    <>
      <ul>
        <li>list item 1</li>
        <li>list item 2</li>
        <li>list item 3</li>
      </ul>
      <div>
        <p>Some text 1</p>
        <p>Sone text 2</p>
      </div>
    </>
  )
}
//React Component


function App() {
    return <div className="App">
      <Title title ="App.js" text = "hi" number = {15} />
      <Title title ="Test.js" text = "hello" number = {10} />
      <List />
       {10+5}
      </div>
}

export default App