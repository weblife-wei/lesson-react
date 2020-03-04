import React from 'react'

function Child(){
  return(
    <div>
      child
    </div>
  )
}

//hoc是一个函数，接受一个组件返回一个新的组件
const HocFun=Cmp=>props=>{
  return(
    <div style={{border:'1px solid red'}}>
      <Cmp {...props}/>
    </div>
  )
}

const NewChild =HocFun(Child)

export default function Index() {
  return (
    <div>
       <NewChild/>
    </div>
  )
}
