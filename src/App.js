import "./App.css"

import React from "react"
import Todos from "./components/Todos"

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Todos />
        </header>
      </div>
    )
  }
}

export default App
