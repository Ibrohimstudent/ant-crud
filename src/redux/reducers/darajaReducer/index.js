function DarajaReducer(state={
    daraja:[
        {id:1,level:"Senior",bonus:"$300"},
        {id:2,level:"Junior",bonus:"$100"}
    ],
    editData:""
},action) {
    switch (action.type) {
        case "ADD_USER3" :
            let levels = [...state.daraja]

            levels.push({
                id:state.daraja.length+1,
                level: action.payload.level,
                bonus: action.payload.bonus
            })

            state = {...state,daraja: levels}
            break
        case "DELETE_USER3" :
            let e = [...state.daraja]

            e.map((item,index)=>{
                e.splice(index,1)
            })
            state = {...state,daraja: e}
            break
        case "EDIT_DATA3" :
            state={...state,editData: action.payload}
            break
        case "EDIT_SAVE3" :
            let f = state.daraja.map(item=>{
                let data = state.editData

                if (item.id === data.id){
                    item={
                        ...item,
                        position: action.payload.level,
                        salary: action.payload.bonus

                    }
                }
                return item

            })
            state={...state,daraja: f}



    }


    return state

}
export default DarajaReducer