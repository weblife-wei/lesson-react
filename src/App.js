import React from 'react';
// import './App.css';
import HocPage from "./pages/HOCPage"
import FormPageAntd from "./pages/FormPage-antd"
import { Button } from 'antd';

function App() {
  return (
    <div className="App">
     <Button type="primary">Button</Button>
     {/*高阶组件*/}
     <HocPage/>

     <FormPageAntd/>
    </div>
  );
}

export default App;
