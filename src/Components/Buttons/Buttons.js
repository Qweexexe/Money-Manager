import {useSelector, useDispatch} from "react-redux";
import {useState} from "react";
import './Buttons.css'
function Buttons(){
    const selector = useSelector(state => state.money.money)
    const dispatch = useDispatch()
    const [value, setValue] = useState(0)

    const add = () =>{
       if(Number.isInteger(value) && value >=0){
            dispatch({type:"ADD_MONEY", payload : value})
           setValue(0)
       }
    }

    return(
        <div>
            <button className="ButtonPlus" onClick={()=> add()}>+</button>
            <input placeholder='I Get ... :' onChange={e => {setValue(parseInt(e.target.value))}}  onMouseUp={e=> e.target.value = null} type="number"/>
        </div>
    )
}

export default Buttons
