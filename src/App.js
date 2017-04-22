import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Domaca from './Domaca';
import 'whatwg-fetch';
import Filmovi from './filmovi.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      kolorado: 0,
      ime: "Pera",
      naslovi : [],
    }
  }
  async componentWillMount() {
    const networkResponse = await fetch('http://swapi.co/api/people/1',{
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "same-origin"
    });
    console.log(networkResponse);
    const res = await networkResponse.json();
    this.setState({
      ime: res.name,
    })
    const linkoviStream = res.films;
    console.log(linkoviStream);
    var broj = linkoviStream.length;
    console.log(broj);
    const poruka = [];
    const body = [];
    const niz = [];
    for(var i=0; i<broj; i++)
    {
      console.log(linkoviStream[i]);
      poruka[i] = await fetch(linkoviStream[i],{
      method: "GET",
      headers: {
          "Content-Type": "application/json"
      },
          credentials: "same-origin"
        });

        body[i] = await poruka[i].json();
        niz.push(body[i].title);
    }
    this.setState({
      naslovi : niz,
    })
  }

  render() {
    console.log(this.state.naslovi);
    return (
        <div className="App">
          <div className="App-header">
            <p>CAO</p>
          </div>
          <Domaca ime={this.state.ime}  />
          {this.state.naslovi.map((fuk,j) => (<Filmovi key={j} titleMoj={fuk} />))}
        </div>
    );
  }
}
export default App;
