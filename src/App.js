import React from 'react';
import './App.css';
import ContextPage from "./pages/context/contextPage"
import CountRedux from "./redux"

function App() {
  return (
    <div className="App">
      {/* context */}
      {/* <ContextPage/> */}
      {/* <br/> */}
      {/* rebdux */}
      <CountRedux/>
    </div>
  );
}

export default App;
