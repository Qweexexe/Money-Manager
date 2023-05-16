import {useSelector} from 'react-redux'

function Center(){
    const selector = useSelector(state => state.money.money)
    const spend = useSelector(state => state.money.spend)
    return(
        <div>
            <h1 style={{'color' : 'white'}}>${selector}</h1>
            <h1 style={{'color' : 'white'}}>-${spend}</h1>
        </div>
    )
}

export default Center