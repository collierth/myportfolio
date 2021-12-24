import "./about.scss"
import {KeyboardArrowDownSharp, School, Grading} from "@material-ui/icons"


export default function About() {
    return (
        <div className="about" id="about">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/image.png" alt=""/>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>I'm a</h2>
                    <h1>Computer Science Major</h1>
                    <h2>at Georgia State University<School/></h2>
                    <h3></h3>
                    <a href="#skills" className="icon"><KeyboardArrowDownSharp style={{ fontSize: 50 }}/></a>
                </div>
            </div>
        </div>
    )
}
