export const states = {
    visible : false
}

export const ShowReducer = (state = states, action) =>{
    switch (action.type){
        case "VISION":
            return {...state,  visible: state.visible = !state.visible}
        default:
            return state

    }
}