function LavozimReducer(state={
    lavozim:[
        {id:1, position:"Frontend",salary:"$1000"},
        {id:2, position:"Backend",salary:"$3000"}
    ],
    editData:""
},action) {
    switch (action.type) {
        case "ADD_USER2" :
            let positions = [...state.lavozim]

            positions.push({
                id:state.lavozim.length+1,
                position:action.payload.position,
                salary: action.payload.salary
            })

            state = {...state,lavozim: positions}
            break
        case "DELETE_USER2" :
            let c = [...state.lavozim]

            c.map((item,index)=>{
                c.splice(index,1)
            })
            state = {...state,lavozim: c}
            break
        case "EDIT_DATA2" :
            state={...state,editData: action.payload}
            break
        case "EDIT_SAVE2" :
            let d = state.lavozim.map(item=>{
                let data = state.editData

                if (item.id === data.id){
                    item={
                        ...item,
                        position: action.payload.position,
                        salary: action.payload.salary

                    }
                }
                return item

            })
            state={...state,lavozim: d}



    }

    return state

}

export default LavozimReducer