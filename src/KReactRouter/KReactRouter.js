import React,{Component} from "react";
import {createBrowserHistory} from "history"

const history=createBrowserHistory()
history.listen((location)=>{
  console.log(location)
})
export class BrowserRouter extends Component{
  render(){
    return this.props.children
  }
}

export class Route extends Component{
  render(){
    //component的渲染组件的方式
    const {path,component} =this.props   
    // const match=path===window.location.pathname
    const match=path===history.location.pathname
    return match?React.createElement(component):null
  }
}

export class Link extends Component{
  handleClick=(e)=>{
    e.preventDefault()
    // window.location.href=this.props.to    //页面依旧会闪一下
    history.push(this.props.to)
  }
  render(){
    console.log(history)
    return <a href={this.props.to} onClick={this.handleClick}>{this.props.children}</a>
  }
}