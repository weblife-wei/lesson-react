import React from 'react';
import './App.css';
import ReactReduxPage from './pages/ReactReduxPage';
import MyRoute from "./myrouter/route"


function App() {
  return (
    <div className="App">
      app组件
      <ReactReduxPage name="wei"/>
      <hr/>
      <MyRoute/>
    </div>
  );
}

export default App;
