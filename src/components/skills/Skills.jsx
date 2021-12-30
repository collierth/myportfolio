import "./skills.scss"
import {KeyboardArrowDownSharp, KeyboardArrowUpSharp} from "@material-ui/icons"


export default function Skills() {
    return (
        <div className="skills" id="skills">
            <h1>Skills</h1>
            <h4>Get to know more about what I do</h4> 
            <div className="container">
                <div className="item">
                    <h3>Javascript</h3>
                </div>
                <div className="item">
                    <h3>React</h3>
                </div>
                <div className="item">
                    <h3>CSS</h3>
                </div>
                <div className="item">
                    <h3>HTML</h3>
                </div>
                <div className="item2">
                    <h3>Bootstrap</h3>
                </div>
                <div className="item2">
                    <h3>Java</h3>
                </div>
                <div className="item2">
                    <h3>MySQL</h3>
                </div>
                <div className="item3">
                    <h3>Photoshop</h3>
                </div>
                <div className="item3">
                    <h3>Premiere Pro</h3>
                </div>
                <div className="item3">
                    <h3>Krita</h3>
                </div>
            </div>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <a href="#hobbies" className="icon"><KeyboardArrowDownSharp style={{ fontSize: 50 }}/></a>
        </div>
    )
}
