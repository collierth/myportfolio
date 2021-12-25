import "./projects.scss"
import {VideogameAsset, ArrowBackIos, ArrowForwardIos} from "@material-ui/icons"


export default function Projects() {
    return (
        <div className="projects" id="projects">
            <h1>Projects</h1>
            <div className="slider">
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgcontainer">
                                    <VideogameAsset className="icon" style={{ fontSize: 30 }}/>
                                </div>
                                <h2>2D Side-scrolling Platformer</h2>
                                <h4>Project - Javascript</h4>
                                <p>This is a side scrolling platformer game made entirely with vanilla javascript. 
                                    I was apart of a 4 person team in which I was responsible for level implementation and programming functionality of several game objects. 
                                    These include interactable buttons and doors, as well as, moving platforms for the player to jump on.</p>
                                <a href="https://tntpc.csb.app/"><button>Go!</button></a>
                            </div>
                        </div>
                        <div className="right">
                            <img src="assets/game2.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <ArrowBackIos className="arrow left" style={{fontSize: 50}}/>
            <ArrowForwardIos className="arrow right" style={{fontSize: 50}}/>
        </div>
    );
}
