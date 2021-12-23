import "./skills.scss"
import {KeyboardArrowDownSharp, KeyboardArrowUpSharp} from "@material-ui/icons"


export default function Skills() {
    return (
        <div className="skills" id="skills">
            <h1>Skills</h1>
            <ul>
                <li className="active">Front-End</li>
                <li>Back-End</li>
                <li>Design</li>
            </ul>
            <div className="container">
                <div className="item">
                    <h3>Javascript</h3>
                </div>
                <div className="item">
                    <h3>CSS</h3>
                </div>
                <div className="item">
                    <h3>HTML</h3>
                </div>
                <div className="item">
                    <h3>React</h3>
                </div>
                <div className="item">
                    <h3>Bootstrap</h3>
                </div>
            </div>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <a href="#works" className="icon"><KeyboardArrowDownSharp style={{ fontSize: 100 }}/></a>
        </div>
    )
}
