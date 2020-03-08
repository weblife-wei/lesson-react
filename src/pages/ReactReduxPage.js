import React, { Component } from 'react'
import {connect} from "react-redux"
import {add} from "./../actions/count"

class ReactReduxPage extends Component {
  constructor(props){
    super()
  }
  render() {
    console.log('props',this.props)
    const {count,dispatch,add}=this.props
    return (
      <div>
         状态值：{count}
         <br/>
         <button onClick={()=>{dispatch({type:'add'})}}>dispatch请求加1</button>
         <button onClick={add}>actionsFunction请求加1</button>

      </div>
    )
  }
}


//mapStateToProps  Function   把state映射到props上
const mapStateToProps=(state,ownProps)=>{
  console.log('state',state)
  console.log('owmProps',ownProps)
  return {count:state}
}

//mapDispatchToProps  Functon/Object  默认注入dispatch

//mergeProps
const mergeProps=(stateProps,dispatchProps,ownProps)=>{
   return {aaa:'111',...stateProps,...dispatchProps,...ownProps}
}

//connect 帮助组件获得store，HOC，返回了一个新的组件
export default connect(mapStateToProps,{add},mergeProps)(ReactReduxPage)