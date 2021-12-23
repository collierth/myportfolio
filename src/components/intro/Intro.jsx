import "./intro.scss"
import {KeyboardArrowDownSharp, Menu} from "@material-ui/icons"

export default function Intro() {
    return (
        <div className="intro" id="intro">
            <div className="wrapper">
                <center>
                {/*<img src="assets/chlogo.png" alt="" className="img"/>*/}
                <h2>Hi, I'm</h2>
                <h1>Collier Hawkins</h1>
                <br/>
                <h4 className="caption">Learn more about me</h4>
                <a href="#about" className="icon"><KeyboardArrowDownSharp style={{ fontSize: 50 }}/></a>
                </center>
            </div>
        </div>
    )
}
