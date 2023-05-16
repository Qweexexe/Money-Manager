import {FontAwesomeIcon}  from '@fortawesome/react-fontawesome'
import {faTShirt, faWifi, faFaceSmile} from '@fortawesome/free-solid-svg-icons'
import './RightSide.css'
import {useDispatch, useSelector} from "react-redux";

export const IconStyle = {
    'width' : '80px',
    'height' : '80px',
    'color': 'white',
    'padding': '5px'
}

function RightSide(){
    const selector = useSelector(state => state.show.visible)
    const shirt = useSelector(state => state.money.shirt)
    const wifi = useSelector(state => state.money.wifi)
    const smile = useSelector(state => state.money.smile)
    const dispatch = useDispatch()

    return(
        <div>
            <div className="RightDiv">
                <FontAwesomeIcon onClick ={()=>{
                     dispatch({type:'VISION'})
                }} style={IconStyle} icon={faTShirt}/>
                <h3>{shirt}</h3>
            </div>
            <div className="RightDiv">
                <FontAwesomeIcon onClick ={()=> {
                    dispatch({type:'VISION'})
                }} style={IconStyle} icon={faWifi}/>
                <h3>{wifi}</h3>
            </div>
            <div className="RightDiv">
                <FontAwesomeIcon onClick ={()=> {
                    dispatch({type:'VISION'})
                }} style={IconStyle} icon={faFaceSmile}/>
                <h3>{smile}</h3>
            </div>
        </div>
    )
}

export default RightSide