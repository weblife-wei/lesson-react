//开课吧源码实现redux
export function createStore(reducer){
  let currentState=undefined
  let currentListeners=[]
  function getState(){   //获取redux中state数据
    return currentState
  }
  function dispatch(action){   //提交更新
    currentState=reducer(currentState,action)  //dispatch就是执行一下reducer函数，然后将返回值给currentState

    currentListeners.map((listener)=>listener())
  }
  function subscribe(listener){  //变更订阅,可以多次订阅
    //每次订阅，都要把回调函数放到数组中
    currentListeners.push(listener)
  }

  dispatch({type:'init-redux'})   //手动触发redux，初始化state值

  return {
    getState,
    dispatch,
    subscribe
  }
}