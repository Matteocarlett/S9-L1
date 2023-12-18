
import { Component } from "react";

class ButtonExtend extends Component {
    render() {
        const {label} = this.props
        return <button type='button' onClick={() => alert(`${label}`)}>Sono il bottone 2</button>
    }
}
 
export default ButtonExtend