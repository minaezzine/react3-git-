import React, {Component} from "react";
import "./boc2.css";
class Boc extends Component{
	render() {
        
        return(
   
        <div className={`boc ${this.props.color}`}>
            <center className="border">{this.props.name}</center>
            <center>________</center>
				<p>{this.props.des1}</p>
                <p>{this.props.des2}</p>
                <p>{this.props.des3}</p>
                <p>{this.props.des4}</p>
                <p>{this.props.des5}</p>
                <p>{this.props.des6}</p>
                <p>{this.props.des7}</p>
				<button className="button"><spam className={`boc ${this.props.color2}`}>En savoir plus</spam>
                </button>
			</div>
            
			);
	}
}

export default Boc;