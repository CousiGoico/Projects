import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

const Button =({text}) => {
  return (<button>{text}</button>)
}


root.render(
  <React.StrictMode>
    <App />

    {Button({text:'Button 1'})}
    {Button({text:'Button 2'})}
    {Button({text:'Button 3'})}

    <Button text="Button 4"></Button>
    <Button text="Button 5"></Button>
    <Button text="Button 6"></Button>
  </React.StrictMode>,
)
