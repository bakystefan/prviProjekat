import React, {Component} from 'react';


class Filmovi extends Component {
  constructor(props){
    super(props);
    this.state = {
      title : "asdadad",
    }
  }
  componentWillReceiveProps(props) {
    if(props.titleMoj){
      this.setState({
        title : props.titleMoj,
      })
    }
  }

  render(){
    return (
      <h1>{this.state.title}</h1>
    )
  }

}
export default Filmovi;
