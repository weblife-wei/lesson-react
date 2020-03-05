import React, { Component } from 'react'
import {ThemeContext} from "./context"

export default class contextTypePage extends Component {
  static contextType=ThemeContext
  render() {
    return (
      <div>
        contextType形式获取的主题颜色：{this.context}
      </div>
    )
  }
}

