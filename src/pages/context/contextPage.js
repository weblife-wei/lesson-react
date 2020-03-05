import React,{createContext} from 'react'
import {ThemeProvider,ThemeContext} from "./context"
import ContextTypePage from './contextTypePage'
import ContextConsumer from "./contextConsumer"

export default function contextPage() {
  return (
    <div>
      <ThemeProvider value="red">
        <ContextTypePage/>
        <ContextConsumer/>
      </ThemeProvider>
    </div>
  )
}
