
import { Component } from "react";
import Selection from "./Selection"

export default class Locationform extends Component {
    constructor(props) {
        super(props);
        this.state = { country: 'Country', city: 'City' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value })

    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.country + this.state.city);
        event.preventDefault();
    }

    render() {
        return (
            <div className="row p-2 bg-dark text-white">
                <div className="col">
                    <Selection
                        onChange={this.handleChange}
                        cName={"Country"}
                        elements={["Sweden", "Denmark"]}
                    ></Selection>
                </div>
                <div className="col">
                    <Selection
                        onChange={this.handleChange}
                        cName={"City"}
                        elements={["Stockholm", "Lund", "Köpenhamn", "Jylland"]}
                    ></Selection>
                </div>
            </div>
        );
    }
}
    // this.handleSubmit = this.handleSubmit.bind(this);
