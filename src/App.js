import './App.css';
import Center from "./Components/Center/Center";
import RightSide from "./Components/RightSide/RightSide";
import Leftside from "./Components/LeftSide/Leftside";
import InputWindow from "./Components/InputWindow/InputWindow";
import Buttons from "./Components/Buttons/Buttons";
import {useSelector} from "react-redux";

function App() {
    const visible = useSelector(state => state.show.visible)

  return (
      <div className="App">
            <div className="right">
                <RightSide/>
            </div>
          <div className="center">
              <Center/>
          </div>
          <div className="left">
              <Leftside/>
          </div>
          <div className="buttons">
              <Buttons/>
          </div>
          { visible && (<InputWindow/>)}

          <div className="info">
              <p>First of all you need to put some value into "I get ......" and click "+" <br/>Then you have to click on random icon (not on the div) <br/>
              then you will see next input ("Hmm... I spend...") put some value and choose some icon under this input  and you will see the result :) <br/>
                  I've done this application for this night :( Because I havent had any programs to show you :(
                   <br/>
                  Anyway thank you for your time :)
              </p>
          </div>
      </div>
  );
}

export default App;
