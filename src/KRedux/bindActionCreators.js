//bindActionCreators的实现原理
const bindActionCreator=(creator,dispatch)=>{
  return (...args)=>dispatch(creator(...args))
}
export const bindActionCreators=(creators,dispatch)=>{
  const obj={}
  for(const key in creators){
    obj[key]=bindActionCreator(creators[key],dispatch)
  }
  return obj
}