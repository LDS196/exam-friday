
 export type initialStateType={
    maxValue:number
    minValue:number
     counter:number
}
 const initialState:initialStateType={
     maxValue:0,
     minValue:0,
     counter:0
 }
type ActionType={
    type: string
    counter: number
    maxValue:number
    minValue:number
}

export const counterReducer=(state:initialStateType=initialState,action:ActionType ):initialStateType=>{
 switch (action.type){
     case 'SET_COUNTER':
         return{
             ...state,counter: action.counter
         }
     case 'SET_MAX_VALUE':
         return{
             ...state,maxValue: action.maxValue
         }
     case 'SET_MIN_VALUE':
         return{
             ...state,minValue: action.minValue
         }
     default:
         return state
 }
}

export const setCounterAC=(counter:number)=>{
    return {type:'SET_COUNTER', counter}
}
 export const setMaxValueAC=(maxValue:number)=>{
     return {type:'SET_MAX_VALUE', maxValue}
 }
 export const setMinValueAC=(minValue:number)=>{
     return {type:'SET_MIN_VALUE', minValue}
 }