export function add(data){
  return dispatch(()=>{
    setTimeout(()=>{
      dispatch({type:'add'})
    },1000)
  })
}