import React, { Component } from 'react'
import { Scrollbars } from 'react-custom-scrollbars';


class Lat_izq_2 extends Component {
    componentDidMount = async () => {
    }

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        const altoScroller = window.innerHeight - 120;
        const ele = document.getElementById("left_side");
        const eleStyle = window.getComputedStyle(ele);
        const eleWidth = eleStyle.width;

        return (
            <div >
                <Scrollbars style={{ width: eleWidth + 1, height: altoScroller - 110 }}>
                    <div className="justificat5">{this.props.elText}</div>
                </Scrollbars>
                <p></p>

            </div>
        );


    }

}
export default Lat_izq_2;