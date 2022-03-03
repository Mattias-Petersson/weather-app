
import { Component } from "react";


export default class Locationform extends Component {
    constructor(props) {
        super(props);
        this.state = { value: 'Country' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    <input type="text" value={this.state.value} onFocus={() => this.setState({ value: '' })} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
    // this.handleSubmit = this.handleSubmit.bind(this);
}