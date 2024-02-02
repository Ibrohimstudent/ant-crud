function XodimlarReducer(state={
    xodimlar:[
        {id:1, name:"Mark", lastName:"Otto", phone:"+99894 989 06 46",position:"Frontend Developer",level:"Senior"},
        {id:2, name:"Steve", lastName:"Jobs", phone:"+99894 989 66 33",position:"Backend Developer",level:"Junior"},

    ],
    editData:""
},action) {
    switch (action.type) {
        case "ADD_USER" :
            let users = [...state.xodimlar]

            users.push({
                id: state.xodimlar.length+1,
                name:action.payload.name,
                lastName:action.payload.lastName,
                phone:action.payload.phone,
                position:action.payload.position,
                level:action.payload.level,
            })

            state = {...state,xodimlar: users}
            break
        case "DELETE_USER" :
            let a = [...state.xodimlar]

            a.map((item,index)=>{
                a.splice(index,1)
            })
            state = {...state,xodimlar: a}
            break
        case "EDIT_DATA" :
            state={...state,editData: action.payload}
            break
        case "EDIT_SAVE" :
            let b = state.xodimlar.map(item=>{
                let data = state.editData

                if (item.id === data.id){
                    item={
                        ...item,
                        name:action.payload.name,
                        lastName:action.payload.lastName,
                        phone:action.payload.phone,
                        position: action.payload.position,
                        level: action.payload.level

                    }
                }
                return item

            })
            state={...state,xodimlar: b}



    }
    return state

}
export default XodimlarReducer