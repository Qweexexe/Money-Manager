import {FontAwesomeIcon}  from '@fortawesome/react-fontawesome'
import {faCloud, faBurger, faBus} from '@fortawesome/free-solid-svg-icons'
import './Leftside.css'
import {useSelector, useDispatch} from "react-redux";
import {states} from "../../store/ShowReducer";
const IconStyle = {
    'width' : '80px',
    'height' : '80px',
    'color': 'white'
}

const windowStyle = {
    'padding': '30px',
    'border': '2px solid white',
    'border-radius': '20px',
    'position': 'relative'
}

function Leftside(){
    const selector = useSelector(state => state.show.visible)
    const spend = useSelector(state => state.money.spend)
    const cloud = useSelector(state => state.money.cloud)
    const burger = useSelector(state => state.money.burger)
    const bus = useSelector(state => state.money.bus)
    const dispatch = useDispatch()
    return(
        <div>
            <div  className="RightDiv">
                <FontAwesomeIcon onClick ={()=> {
                    dispatch({type:'VISION'})
                }} style={IconStyle} icon={faCloud}/>
                <h3>{cloud}</h3>
            </div>
            <div className="RightDiv">
                <FontAwesomeIcon onClick ={()=> {
                    dispatch({type:'VISION'})
                }} style={IconStyle} icon={faBurger}/>
                <h3>{burger}</h3>
            </div>
            <div className="RightDiv">
                <FontAwesomeIcon onClick ={()=> {
                    dispatch({type:'VISION'})
                }} style={IconStyle} icon={faBus}/>
                <h3>{bus}</h3>
            </div>
        </div>
    )
}

export default Leftside