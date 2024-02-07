import {createAction} from "@reduxjs/toolkit"
import {createSlice} from "@reduxjs/toolkit"

//
// function todoReducer() {
//     let a = createAction("ADD_TODO")
//     console.log(a(100))
//
//
// }
//
// export default todoReducer


const slice = createSlice({
    name:'todos',
    initialState:{
        todos:[
            {id:1, title:"qwerty",completed:false},
            {id:2, title:"qwerty2",completed:false}
        ]
    },
    reducers:{
        addTodo:(state,action)=>{
            let todo = {
                id:state.todos.length+1,
                title:action.payload,
                completed:false


            }
            state.todos.push(todo)

        },
        toggleCheck:(state,action)=>{
            state.todos.map(item=>{
                if(item.id === action.payload){
                    item.completed = !item.completed
                }
            })
        }
    }
})

export const {addTodo,toggleCheck} = slice.actions
console.log(addTodo(100))

export default slice.reducer
