import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Form extends Component {
  constructor(){
    super()
    this.state ={
      name:'',
      donation:''
    }
  }

  handleChange = (e) => {
    this.setState({[e.target.name]:e.target.value})
  }

  handleSubmit = (e) => {
    e.epreventDefault()
    
  } 

  render() {
    return (
      <form>
        <input
          name="name"
          type="text"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <input
          name="donation"
          type="number"
          value={this.state.donation}
          onChange={this.handleChange}
        />
        <button onClick={(e) => this.handleSubmit(e)}>
          Donate!
        </button>
      </form>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = (dispatch) => ({
  
})

export default connect(mapStateToProps, mapDispatchToProps)(Form)
