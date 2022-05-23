import React, { Component } from 'react'

export default class State extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0,
      }
    }

    add=()=>{
        this.setState({
            count:this.state.count+1
        })
    }
    sub=()=>{
        this.setState({
            count:this.state.count-1
        })
    }
  render() {
    return (
      <div>
        <h1>count={this.state.count}</h1>
        <button style={{backgroundColor: "lightblue",margin:10 }}  onClick={this.add}>+</button>
        <button style={{backgroundColor: "lightblue",margin:10}} disabled={this.state.count===0?true:false} onClick={this.sub}>-</button>
      </div>
    )
  }
}
