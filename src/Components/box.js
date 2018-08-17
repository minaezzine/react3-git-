import React, {Component} from "react";
import "./box.css";
class Box extends Component{
	render() {
        return(
        <div className="box">
			
				<center>{this.props.chiff}</center>
				<p>{this.props.des}</p>
				<p>{this.props.des2}</p>
				
			</div>
			);
	}
}

export default Box;