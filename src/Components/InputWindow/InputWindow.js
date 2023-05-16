import {FontAwesomeIcon}  from '@fortawesome/react-fontawesome'
import {faCloud, faBurger, faBus, faTShirt, faWifi, faFaceSmile} from '@fortawesome/free-solid-svg-icons'
import {IconStyle} from "../RightSide/RightSide";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import './InputWindow.css'


function InputWindow(){
    const selector = useSelector(state => state.show.visible)
    const spend = useSelector(state => state.money.spend)
    const dispatch = useDispatch()
    const [stateSpend, setStateSpend] = useState(0)
    console.log(stateSpend)
    return (
        <div className="InputWindow">
            <input onChange={e => setStateSpend(parseInt(e.target.value))} type="number" placeholder="Hmmm... I spend :"/>
            <button className="Apply_button" onClick={() => {
                dispatch({type:"VISION"})
            }}>Close</button>
            <div className="icons">
                 <FontAwesomeIcon className="Ico" onClick={()=>{
                      dispatch({type:"REMOVE_CLOUD", payload : stateSpend})
                     dispatch({type:"REMOVE_MONEY", payload : stateSpend})
                     dispatch({type:"VISION"})
                 }} style={IconStyle} icon={faCloud}/>
                 <FontAwesomeIcon className="Ico" onClick={()=>{
                      dispatch({type:"REMOVE_BURGER", payload : stateSpend})
                     dispatch({type:"REMOVE_MONEY", payload : stateSpend})
                     dispatch({type:"VISION"})
                 }} style={IconStyle} icon={faBurger}/>
                 <FontAwesomeIcon className="Ico" onClick={()=>{
                      dispatch({type:"REMOVE_BUS", payload : stateSpend})
                     dispatch({type:"REMOVE_MONEY", payload : stateSpend})
                     dispatch({type:"VISION"})
                 }} style={IconStyle} icon={faBus}/>
                 <FontAwesomeIcon className="Ico" onClick={()=>{
                      dispatch({type:"REMOVE_SHIRT", payload : stateSpend})
                     dispatch({type:"REMOVE_MONEY", payload : stateSpend})
                     dispatch({type:"VISION"})
                 }} style={IconStyle} icon={faTShirt}/>
                 <FontAwesomeIcon className="Ico" onClick={()=>{
                      dispatch({type:"REMOVE_WIFI", payload : stateSpend})
                     dispatch({type:"REMOVE_MONEY", payload : stateSpend})
                     dispatch({type:"VISION"})
                 }} style={IconStyle} icon={faWifi}/>
                 <FontAwesomeIcon className="Ico" onClick={()=>{
                      dispatch({type:"REMOVE_SMILE", payload : stateSpend})
                     dispatch({type:"REMOVE_MONEY", payload : stateSpend})
                     dispatch({type:"VISION"})
                 }} style={IconStyle} icon={faFaceSmile}/>
            </div>
          </div>
    )
}

export default InputWindow