const states = {
    money : 0,
    spend : 0,
    cloud : 0,
    burger : 0,
    bus : 0,
    shirt : 0,
    wifi : 0,
    smile : 0
}

export const reducer = (state = states, action) =>{
    switch (action.type){
        case "ADD_MONEY":
            return {...state, money : state.money + action.payload}
        case "REMOVE_MONEY":
            return { ...state, money: state.money - action.payload, spend: state.spend + action.payload }
        case "REMOVE_CLOUD":
            return {...state, cloud: state.cloud + action.payload}
        case "REMOVE_BURGER":
            return {...state, burger: state.burger + action.payload}
        case "REMOVE_BUS":
            return {...state, bus: state.bus + action.payload}
        case "REMOVE_SHIRT":
            return {...state, shirt: state.shirt + action.payload}
        case "REMOVE_WIFI":
            return {...state, wifi: state.wifi + action.payload}
        case "REMOVE_SMILE":
            return {...state, smile: state.smile + action.payload}
        default:
            return state

    }
}