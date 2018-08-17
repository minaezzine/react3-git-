import React, {Component} from "react";
import "./bol.css";
class Bol extends Component{
	render() {
        
        return(
            <div className="bol">
            <img src={this.props.img} height="250px" width="250px"/>
            <h3>{this.props.code}</h3>
           
        </div>
        );
	}
}

export default Bol;