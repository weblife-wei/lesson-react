import {createStore,applyMiddleware} from "redux"
// import {createStore} from "../Kredux"
import logger from "redux-logger"
import thunk from "redux-thunk"

import React, {Component} from "react"; 
import countReducer from "./../reducers/index"
import {ADD,SUB} from "./../containers/count"

const store=createStore(countReducer,applyMiddleware(logger,thunk))
export default class ReduxPage extends Component {  
  componentDidMount() {    
    store.subscribe(() => { 
      this.forceUpdate();    
    });  
  }  
  add = () => {    store.dispatch({type: ADD});  };  
  minus = () => {    store.dispatch({type: SUB});  }; 
  middle=()=>{store.dispatch(dispatch=>{
    setTimeout(()=>{
      dispatch({type:ADD})
    },1000)
  })}
  render() {    console.log("store", store); //{dispatch: ƒ, subscribe: ƒ, getState: ƒ, replaceReducer: ƒ, Symbol(observable): ƒ}  
    return (      
      <div>        
        <h3>ReduxPage</h3>        
        <p>{store.getState().count}</p>        
        <button onClick={this.add}>add</button>        
        <button onClick= {this.minus}>minus</button> 
        <button onClick= {this.middle}>中间件</button>   
      </div>     
    );  
  } 
}
