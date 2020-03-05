import React from "react";

//创建一个context
const ThemeContext=React.createContext()

//context的提供者
const ThemeProvider=ThemeContext.Provider

//context的消费者
const ThemeConsumer=ThemeContext.Consumer

export {ThemeConsumer ,ThemeProvider,ThemeContext}