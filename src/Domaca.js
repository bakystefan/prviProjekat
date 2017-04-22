import React, {Component} from 'react';

class Domaca extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ime: "Anonimus",
    }
  }
  componentWillReceiveProps(props) {
    if(props.ime) {
      this.setState({
        ime: props.ime,
      })
    }
  }
  render() {
    return(
      <div>
        <h1>{this.state.ime}</h1>
      </div>
    )
  }
}
export default Domaca;
