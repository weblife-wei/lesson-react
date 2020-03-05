import React from 'react'
import {ThemeConsumer} from "./context"

export default function contextConsumer() {
  return (
    <div>
      <ThemeConsumer>
        {
          context=>{
            return (
            <div>consumer形式获取的数据：{context}</div>
            )
          }
        }
      </ThemeConsumer>
    </div>
  )
}
