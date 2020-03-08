import {ADD,SUB} from "../containers/count"
const countReducer =(state={count:0},action)=>{
  switch(action.type){
    case ADD:
      return {count:state.count+1};
    case SUB:
      return {count:state.count-1};
    default:
      return {count:state.count}
  }
}

export default countReducer